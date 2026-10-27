# AML365

Enterprise product website for AML365, DataSoft's Anti-Money Laundering and financial crime compliance solution for banks and financial institutions.

## Technology

- React 19
- JavaScript (ES modules)
- Vite 8
- Tailwind CSS 4
- React Router

## Getting started

### Requirements

- Node.js 20 or later
- npm 10 or later

### Run locally

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

### Production build

```bash
npm run build
npm run preview
```

The optimized static build is generated in `dist/`.

## Available routes

- `/` — product landing page
- `/solutions` — AML solution and module catalogue
- `/contact` — validated business enquiry form
- `/careers` — current recruitment status

## Project structure

```text
public/                 Static images, product screenshots and client logos
src/components/         Reusable interface components
src/data/               Product and module content
src/pages/              Route-level pages
src/App.js              Application routes
src/index.css           Tailwind theme and shared styles
vercel.json             Vercel SPA routing configuration
.openai/hosting.json    Sites production deployment configuration
```

## Deploying to Vercel

1. Import `Rahim-aust/AML365` into Vercel.
2. Select the **Vite** framework preset.
3. Keep the project root as the repository root.
4. Use `npm run build` as the build command and `dist` as the output directory if Vercel does not detect them automatically.
5. Deploy from `main`; use the other branches for preview deployments.

The tracked `vercel.json` sends direct requests such as `/solutions`, `/contact` and `/careers` to `index.html`, allowing React Router to handle those routes instead of returning a 404.

## Content governance

Product descriptions, capability boundaries, client logos and screenshots are based on the supplied AML presentation. Planned artificial-intelligence and machine-learning capabilities are labelled as roadmap items rather than current product features.

Before reusing client marks or publishing content in another environment, confirm that the appropriate usage permissions are in place.

## License

The source code is available under the [MIT License](LICENSE). Product names, logos, screenshots, written product material and third-party client marks may be subject to separate ownership and usage restrictions.
