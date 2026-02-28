"use client";

import { useState } from "react";
import SaveLinkCard from "../components/saveLink/saveLinkCard";

export default function Home() {
  const [savedLink] = useState<string | null>(
    () => typeof window !== "undefined" ? localStorage.getItem("savedLink") : null
  );

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
