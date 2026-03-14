export {};

declare global {
  interface Window {
    electronAPI: {
      getSavedLink: () => string | null;
      saveLink: (link: string) => boolean;
      minimize: () => void;
      maximize: () => void;
      close: () => void;
      toggleDevTools: () => void;
    };
  }
}
