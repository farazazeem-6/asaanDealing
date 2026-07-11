# Asaan Dealing

**Asaan Dealing** is a service provider and tasker marketplace UI built with **Next.js**, **TypeScript**, and **React**. The app supports both service providers and customers by letting users discover local taskers, browse service categories, filter by popular services, and view top-rated experts.

## Project Overview

- Built with **Next.js App Router** and **TypeScript**.
- Uses **Stitches** for styling and theme-aware design tokens.
- Integrates **React Query** for remote data fetching and caching.
- Uses **Axios** for HTTP requests and centralized API route management.
- Supports **internationalization** with **i18next** and `react-i18next`.
- Includes **theme switching** using `next-themes` and a custom theme sync component.
- Prepared for Redux state management with **Redux Toolkit**, although the root reducer is currently empty.

## Marketplace Features

- **Airtasker-style homepage** with a hero search experience, local service discovery, and platform statistics.
- **Category browsing** for service types like home help, deliveries, handyman work, and more.
- **Top taskers section** to highlight expert providers across popular services.
- **Search and filter workflow** under `src/app/(taskers)/find-tasker` for categories and service listings.
- **Service discovery** using dynamic popular search labels and category-based navigation.
- **Localized experience** through multiple language support (English, Roman Urdu, Urdu).

## Architecture

- `src/app/layout.tsx` - root HTML layout, metadata, and global theme/font setup.
- `src/app/page.tsx` - homepage entrypoint rendering the main marketplace view.
- `src/app/Providers.tsx` - provider composition for theme, i18n, query cache, header, footer, and hydration-safe loading.
- `src/views/Home/` - marketplace homepage sections: hero, categories, top experts, and download CTA.
- `src/services/` - API service hooks for platform stats, categories, services, and tasker listings.
- `src/constants/serverRoutes.ts` - backend route constants used by Axios services.
- `src/theme/` - theme tokens, global styles, and Stitches configuration.
- `src/store/` - Redux store setup available for future state slices.

## Folder Highlights

- `src/components/elements/` - primitive UI elements like buttons, inputs, loaders, and layout helpers.
- `src/components/ui/` - marketplace-specific cards, tabs, category grids, and tasker listings.
- `src/layout/` - reusable header, footer, sidebar, and page structure components.
- `src/locales/` - translation files for `en`, `roman`, and `ur` language support.
- `src/config/` - application configuration files for navigation, Axios, and query providers.
- `src/utils/` - reusable helpers, enums, and shared type definitions.

## Getting Started

### Prerequisites

- Node.js **>= 20**
- npm, Yarn, or pnpm installed

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build for production

```bash
npm run build
npm run start
```

### Code quality

```bash
npm run lint
npm run lint:fix
npm run format
```

## Notes

- The project uses **Next.js 16** and **React 19**.
- API routes are defined in `src/constants/serverRoutes.ts` and consumed through services in `src/services`.
- The app layout is controlled through global providers in `src/app/Providers.tsx`.

## Contribution

This project is a marketplace UI prototype. Extend it with task posting, tasker profiles, bookings, reviews, authentication, or backend integration for a full Airtasker-style platform.
