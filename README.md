# Tabify

Turn any website into a full-screen desktop app. Tabify is an Electron + Next.js application that lets you save a URL and launch it as a dedicated desktop experience  no browser chrome, no distractions.

---

## Download

[![Download for Windows](https://img.shields.io/badge/Download-Windows%20Installer-blue?style=for-the-badge&logo=windows)](https://github.com/sthaSandesh/Tabify/releases/latest)

> Windows 10/11 — download `TabifyBySandy Setup 0.1.0.exe` from the latest release.
or 
clone the repo and run "yarn dist" it will create release folder and then you can see the tabify setup inside it 

---
## Features

- Save any URL as your app's target link
- Launches the saved link in a full-screen webview
- Persists your link across sessions via `localStorage`
- Clean, minimal UI built with shadcn/ui and Tailwind CSS

---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Desktop    | Electron 40                         |
| Frontend   | Next.js 16 (App Router)             |
| UI         | shadcn/ui + Tailwind CSS v4         |
| Language   | TypeScript                          |
| Runtime    | React 19                            |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/sthaSandesh/Tabify.git
cd Tabify
yarn install
```

### Development

Runs both the Next.js dev server and Electron concurrently:

```bash
yarn dev
```

> Electron will wait for Next.js to be ready on `http://localhost:3000` before launching.

### Build

```bash
yarn build
```

---

## Usage

1. Launch the app with `yarn dev`
2. Enter a URL in the input field and click **Save**
3. The app reloads and displays the saved URL full-screen as a webview
4. To change the URL, clear `localStorage` and restart

---

## Project Structure

```
src/
 app/
    globals.css           # Global styles
    layout.tsx            # Root layout
    page.tsx              # Main page (reads savedLink from localStorage)
 components/
    saveLink/
       saveLinkCard.tsx  # Form to save a URL
    ui/                   # shadcn/ui components
 electron/
     main.ts               # Electron main process
     preload.ts            # Electron preload script
```

---

## License

MIT
