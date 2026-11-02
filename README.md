# KOGAS website source recovery

This repository contains the recovered KOGAS website source from a Vercel production deployment.

## Project structure

- `src/` — React + TypeScript application, pages, components, styles and data
- `public/` — images, logos and static assets
- `api/` — Vercel serverless API handlers for email, admin and scheduling
- `package.json` / `package-lock.json` — Node dependencies and scripts
- `vercel.json` — Vercel routing/configuration

## Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Build and lint:

```bash
npm run build
npm run lint
```

## Environment configuration

Copy `.env.example` to `.env.local` and fill in your own credentials. The recovered service-account private key and SMTP password have deliberately **not** been included. Configure variables in your hosting provider's secret/environment settings for production.

Google Sheets admin/scheduling routes require a Google service account with access to the configured spreadsheet. Email routes require SMTP credentials. Admin authentication also requires `ADMIN_DEFAULT_PASSWORD`.

**Security:** rotate any credentials that were present in the original deployed source before using this project. Do not commit `.env.local` or real credentials.

## Recovery notes

This is a source snapshot reconstructed from the available Vercel deployment file tree. It does not include Vercel environment variables, deployment secrets, generated build output, or local Git history.
