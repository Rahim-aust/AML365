# AML365 Website

Production website for DataSoft's AML365 anti-money laundering and financial crime compliance product.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router

## Local setup

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
```

The static production output is written to `dist/`. The Sites hosting manifest in `.openai/hosting.json` points to that directory.

## Routes

- `/` - complete product landing page
- `/solutions` - detailed solution catalogue
- `/contact` - validated enquiry form

## Content and assets

Product statements, capability boundaries, client logos and product screenshots come from the supplied AML presentation. AI and machine-learning capabilities are explicitly labelled as planned roadmap items. The contact form validates entries in the browser and opens the visitor's email application for final review and sending.
