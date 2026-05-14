# Video Editing Course — Landing Page

A static landing page built with React, Vite, Tailwind, and shadcn/ui.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

The output goes to `dist/public/`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), click **Add New → Project** and import the repo.
3. Vercel auto-detects the config from `vercel.json`. You shouldn't need to change any settings — just click **Deploy**.

That's it. Vercel will run `npm install` and `npm run build`, then serve `dist/public/`.

## Project structure

```
client/          React app (entry: client/index.html → client/src/main.tsx)
attached_assets/ Images used by the components
vite.config.ts   Vite configuration with @, @shared, @assets aliases
vercel.json      Vercel build + SPA-rewrite configuration
```
