# Polarix Mobile - Blueprint

## Overview
Polarix Mobile is a front-end application built with Svelte and TypeScript, using Vite as the development server. It serves as a dashboard for a user role, displaying connected drives, tables, scripts, profiles, and recent activity.

## Project Details
*   **Architecture:** Svelte + TypeScript + Vite. Client-side only (no SvelteKit SSR).
*   **Styling:** Scoped CSS within Svelte components.
*   **State Management:** Svelte stores (`src/store.ts`).

### Implemented Features (Current State)
*   **Routing:** Custom client-side router (`src/store.ts`).
*   **Pages:** Home, Tables, Table Detail, Add Row, Scripts, Profile, Add Drive.
*   **Data:** All UI features are currently populated with static mock data exported from `src/lib/data.ts`.

## Current Plan: Supabase Integration
The current objective is to replace the dummy data with a functional Supabase backend. All records for the "User Role" should be fetched from, created in, and updated in Supabase.

### Steps
1.  **Configure Supabase:** Add `@supabase/supabase-js`, create `src/lib/supabaseClient.ts`, and set up environment variables `.env`.
2.  **Define Schema:** Create corresponding tables in the Supabase instance (`drives`, `activities`, `tables`, `table_rows`, `scripts`).
3.  **Refactor Data Layer:** Migrate `src/lib/data.ts` to fetch and write to Supabase instead of returning static arrays.
4.  **Update UI:** Refactor Svelte components (like `HomePage.svelte` and `TablesPage.svelte`) to handle asynchronous data loading (using `#await` blocks where appropriate) and implement real write-actions instead of just showing toasts.
