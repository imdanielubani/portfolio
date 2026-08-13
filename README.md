# Portfolio

A from-scratch rebuild of a Framer-built portfolio site, reproduced as a
Next.js application. Built stage by stage per an approved rebuild
specification derived from a forensic analysis of the reference site
(technology stack, design tokens, typography, spacing, breakpoints, and
animation behavior).

## Stack

- Next.js (App Router) + TypeScript
- CSS Modules + a hand-written design token system (`src/styles`)
- [Motion](https://motion.dev) for component-level animation
- [GSAP](https://gsap.com) + ScrollTrigger for scroll-driven reveals

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/            Routes (App Router)
├── components/      layout / sections / ui / icons
├── data/            typed content collections (projects, testimonials, posts)
├── lib/             shared animation configs and helpers
└── styles/           design tokens and typography scale
```

## Status

Build is in progress across a sequence of staged commits — see commit
history for the current checkpoint.
