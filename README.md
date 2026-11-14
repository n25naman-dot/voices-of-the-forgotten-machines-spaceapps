# Voices of the Forgotten Machines

A React + Vite starter for a NASA Space Apps Challenge project about stories of equipment left behind on the Moon and Mars. Content and map routes are currently starter placeholders; only publish facts and coordinates after verifying them against authoritative sources.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
git clone https://github.com/n25naman-dot/voices-of-the-forgotten-machines-spaceapps.git
cd voices-of-the-forgotten-machines-spaceapps
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173). Stop the development server with Ctrl+C.

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`. Map tiles, verified artifact data, the source-grounded assistant, quiz bank, and remaining experience features still need implementation. Do not add a browser-exposed AI provider key; connect AI through a server-side endpoint.
