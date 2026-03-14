"use client";

import { FcRefresh } from "react-icons/fc";
import { Button } from "../ui/button";
import { IoIosApps } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaWindowMinimize } from "react-icons/fa6";
import { TiTabsOutline } from "react-icons/ti";

export default function CustomTitleBar() {
  const handleChangeApp = () => {
    if (typeof window === "undefined") return;

    try {
      localStorage.removeItem("savedLink");
    } catch {
      console.log("error saving link in local storage");
    }

    window.location.reload();
  };

  return (
    <div
      className="flex items-center justify-between h-8 bg-gray-900 text-white text-sm"
      style={{ WebkitAppRegion: "drag" } as any}
    >
      <div className="px-3 font-medium flex items-center gap-2 justify-center text-center">
        <IoIosApps /> <p>Tabify</p>
      </div>

      <div
        className="flex items-center gap-2 pr-2"
        style={{ WebkitAppRegion: "no-drag" } as any}
      >
        <Button
          variant="ghost"
          className="hover:bg-transparent text-gray-400 hover:text-white"
          onClick={handleChangeApp}
        >
          <FcRefresh />
        </Button>
        <div>
          <Button
            variant="ghost"
            className="hover:bg-transparent text-gray-400 hover:text-white"
            onClick={() => {
              window.electronAPI.minimize();
            }}
          >
            <FaWindowMinimize />
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-transparent text-gray-400 hover:text-white"
            onClick={() => {
              window.electronAPI.maximize();
            }}
          >
            <TiTabsOutline />
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-transparent text-gray-400 hover:text-white"
            onClick={() => {
              window.electronAPI.close();
            }}
          >
            <RxCross2 />
          </Button>
        </div>
      </div>
    </div>
  );
}
