# Due Date Calculator (MVP v1)

A privacy-first pregnancy due date calculator with LMP, conception, and IVF inputs, a unified timeline, and PNG export.

## Features

- LMP calculator with cycle length adjustment (22–45 days, default 28)
- Conception date calculator (converted to equivalent LMP)
- IVF calculator (D3/D5; transfer type is explanatory only)
- Unified pregnancy timeline with status, date ranges, and countdowns
- Privacy-first 9:16 PNG export (input dates hidden by default)
- Local-only storage for the last result (language preference is stored separately)
- i18n-ready UI with EN/FR/DE/ZH-CN/JA/ES options

## Tech Stack

- Next.js 14.2.5 (App Router)
- TypeScript
- CSS Modules
- No external APIs

## Running Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Typecheck

```bash
npm run typecheck
```

## Notes

- Results are stored only in `localStorage` and only the most recent result is kept.
- Privacy mode hides input dates in exports; only due date and progress are included.
- This tool provides general information and is not medical advice.
