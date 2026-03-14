"use client";

import { useEffect, useState } from "react";
import SaveLinkCard from "../components/saveLink/saveLinkCard";

export default function Home() {
  const [savedLink] = useState<string | null>(() =>
    typeof window !== "undefined" ? localStorage.getItem("savedLink") : null,
  );

  useEffect(() => {
    if (!window.electronAPI) {
      return;
    }
    const abortController = new AbortController();

    window.document.addEventListener(
      "keyup",
      (event) => {
        if (event.key === "F12") {
          window.electronAPI.toggleDevTools();
        }
      },
      { signal: abortController.signal },
    );
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      {savedLink ? (
        <div className="w-full h-screen">
          <webview src={savedLink} style={{ width: "100%", height: "100%" }} />
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <SaveLinkCard />
        </div>
      )}
    </>
  );
}
