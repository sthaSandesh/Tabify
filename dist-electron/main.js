import { app, BrowserWindow, ipcMain, Menu, session } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { ElectronBlocker } from "@ghostery/adblocker-electron";
import fetch from "cross-fetch";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDev = process.env.NODE_ENV === "development";
const startHidden = process.argv.includes("--hidden");
function createWindow() {
    Menu.setApplicationMenu(null);
    const preloadPath = path.join(__dirname, "preload.cjs");
    console.log("Preload path:", preloadPath);
    console.log("Exists:", fs.existsSync(preloadPath));
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        frame: false,
        titleBarStyle: "hidden",
        show: !startHidden,
        icon: path.join(__dirname, "..", "public", "Tabify.png"),
        webPreferences: {
            preload: preloadPath,
            contextIsolation: true,
            webviewTag: true,
            sandbox: false,
        },
    });
    if (isDev) {
        win.loadURL("http://localhost:3000");
    }
    else {
        win.loadFile(path.join(__dirname, "..", "out", "index.html"));
    }
    if (!startHidden) {
        win.maximize();
    }
    ipcMain.on("toggle-devtools", () => {
        win.webContents.toggleDevTools();
    });
    ipcMain.on("close", () => {
        win.close();
    });
    ipcMain.on("minimize", () => {
        win.minimize();
    });
    ipcMain.on("maximize", () => {
        if (win.isMaximized())
            win.unmaximize();
        else
            win.maximize();
    });
}
let blocker = null;
async function initAdBlocker() {
    const cachePath = path.join(app.getPath("userData"), "adblocker-engine.bin");
    blocker = await ElectronBlocker.fromPrebuiltAdsAndTracking(fetch, {
        path: cachePath,
        read: fs.promises.readFile,
        write: fs.promises.writeFile,
    });
    blocker.enableBlockingInSession(session.defaultSession);
}
app.on("web-contents-created", (_event, contents) => {
    if (contents.getType() === "webview" && blocker) {
        blocker.enableBlockingInSession(contents.session);
    }
});
app.whenReady().then(async () => {
    try {
        await initAdBlocker();
    }
    catch (err) {
        console.error("Failed to initialize ad blocker:", err);
    }
    createWindow();
});
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
