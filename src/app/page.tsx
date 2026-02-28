import SaveLinkCard from "../components/saveLink/saveLinkCard";

export default function Home() {
  const savedLink = "https://demoapp.dolmapos.com/";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {savedLink ? (
        <div className="w-full h-screen">
          <webview
            src={savedLink}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      ) : (
        <SaveLinkCard />
      )}
    </div>
  );
}