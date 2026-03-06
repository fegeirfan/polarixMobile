# Polarix Blueprint

## Overview

Polarix is a personal archive manager that allows users to connect their cloud drives, organize files into tables, and automate tasks with scripts. The application is designed with a mobile-first, modern SaaS aesthetic, drawing inspiration from Notion, Linear, and Google Drive.

## Project Structure & Features

### Pages

*   **Login (`LoginPage.svelte`):** Minimalist login with Google or email, featuring the Polarix logo and a card-style authentication form.
*   **Dashboard (`HomePage.svelte`):** Displays connected drives as cards with storage usage.
*   **Tables (`TablesPage.svelte`):** Lists archive tables with details.
*   **Table Detail (`TableDetailPage.svelte`):** A database-style interface for tables, presented as a list of cards for mobile-friendliness.
*   **Add Row (`AddRowPage.svelte`):** A form to add new rows with file uploads to a chosen drive.
*   **Scripts (`ScriptsPage.svelte`):** A list of automation scripts.
*   **Profile (`ProfilePage.svelte`):** User settings and information.
*   **Add Drive (`AddDrivePage.svelte`):** A page to connect a new cloud drive.

### Navigation

*   **Router (`App.svelte`):** A simple client-side router.
*   **Bottom Nav (`BottomNav.svelte`):** Main navigation with icon-based buttons.

### Styling (`src/styles.css`)

*   **Design System:** A global stylesheet defines a consistent design system with:
    *   **Colors:** The color scheme is based on the Polarix logo, with blue and light blue hues.
    *   **Typography:** Clean, sans-serif fonts for readability.
    *   **Spacing:** Standardized spacing for a balanced layout.
    *   **Cards:** Rounded cards with soft shadows are used for all major UI elements.
*   **Mobile-First:** The design is optimized for mobile devices.

## Current Task: Redesign Application

*   [x] Create a global stylesheet (`src/styles.css`) with a modern design system.
*   [x] Update `BottomNav.svelte` to use icons instead of text.
*   [x] Redesign `LoginPage.svelte` with a minimalist aesthetic.
*   [x] Redesign `HomePage.svelte` using the new card-based design.
*   [x] Redesign `TablesPage.svelte` with a clean, modern layout.
*   [x] Redesign `TableDetailPage.svelte` with a grid-based table view.
*   [x] Redesign `AddRowPage.svelte` with a clean form layout.
*   [x] Redesign `ScriptsPage.svelte` with a modern, card-based interface.
*   [x] Redesign `ProfilePage.svelte` with a clean user info and settings menu.
*   [x_] Redesign `AddDrivePage.svelte` to match the new design.
*   [x] Update `blueprint.md` to reflect the redesign.
*   [x] Add the Polarix logo to the `LoginPage.svelte`.
*   [x] Update the color scheme in `src/styles.css` to match the logo.
*   [x] Update `blueprint.md` to reflect the logo and color scheme changes.
*   [x] Convert the table in `TableDetailPage.svelte` to a mobile-friendly card list.
*   [x] Update the `blueprint.md` to reflect the table redesign.
*   [x] Fix the logo path in `LoginPage.svelte`.
*   [x] Add a frame to the authentication form in `LoginPage.svelte`.
*   [x] Update the `blueprint.md` to reflect the login page improvements.
