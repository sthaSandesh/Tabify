import fs from "fs";
import path from "path";
import os from "os";
import { contextBridge } from "electron";

const saveLinkPath = path.join(os.homedir(), ".tabify_config.json");

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
});
