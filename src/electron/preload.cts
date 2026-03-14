/* eslint-disable @typescript-eslint/no-require-imports*/
const fs = require("fs");
const path = require("path");
const os = require("os");
const { contextBridge, ipcRenderer } = require("electron");

const saveLinkPath = path.join(os.homedir(), ".tabify_config.json");
console.log("hellonga");
contextBridge.exposeInMainWorld("electronAPI", {
  getSavedLink: () => {
    try {
      if (!fs.existsSync(saveLinkPath)) {
        return;
      }
      const data = fs.readFileSync(saveLinkPath, "utf-8");
      return JSON.parse(data).link || null;
    } catch (error) {
      console.error("Error reading saved link:", error);
      return;
    }
  },

  saveLink: (link: string) => {
    try {
      fs.writeFileSync(saveLinkPath, JSON.stringify({ link }), "utf-8");
      return true;
    } catch (error) {
      console.error("Error saving link:", error);
      return;
    }
  },
  minimize: () => ipcRenderer.send("minimize"),
  maximize: () => {
    ipcRenderer.send("maximize");
  },
  close: () => ipcRenderer.send("close"),

  toggleDevTools: () => ipcRenderer.send("toggle-devtools"),
});
