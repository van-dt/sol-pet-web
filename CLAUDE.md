# Monster Pet Game — Landing Website

> Next.js web app that introduces the Monster Pet Game mobile RPG.

---

## Project Overview

- **Purpose:** Marketing/intro landing page for the Monster Pet Game Flutter app
- **Stack:** Next.js 16 (App Router) / TypeScript / Tailwind CSS
- **Flutter source app:** `/Users/vandt/work-space/project/pet-monster/sol-pet-app`

---

## Run / Build

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

---

## Folder Structure

```
pet-monster-web/
├── app/
│   ├── layout.tsx              # Root layout, SEO metadata
│   ├── page.tsx                # Main page — assembles all sections in order
│   ├── globals.css             # Game color palette, animations, utility classes
│   └── components/
│       ├── Navbar.tsx          # Fixed nav, scroll effect, mobile hamburger
│       ├── HeroSection.tsx     # Full-screen hero, bg_main_menu, floating pets
│       ├── FeaturesSection.tsx # 6 feature cards
│       ├── PetsSection.tsx     # Pet cards with rarity, role, element, evolution stages
│       ├── CombatSection.tsx   # Room types, enemies, bosses, combat actions
│       ├── ElementsSection.tsx # 6 elements + skill icons
│       ├── EggsSection.tsx     # 4 egg rarities + mystery egg teaser
│       ├── DownloadSection.tsx # Email signup + App Store / Google Play CTAs
│       └── Footer.tsx          # Nav links, branding
├── public/
│   └── assets/                 # All game assets (copied from sol-pet-app/assets)
│       ├── backgrounds/        # bg_main_menu, bg_town, bg_combat_slime, bg_hatchery, etc.
│       ├── pets/               # Sprites: baby / adult / final forms
│       ├── eggs/               # egg_common, egg_rare, egg_epic, egg_legendary, egg_unknow
│       ├── bosses/             # 4 boss sprites
│       ├── enemies/            # 9 enemy sprites
│       ├── elements/           # 6 element icons (fire/water/earth/thunder/light/shadow)
│       ├── icons/              # Nav, combat, stat, currency, reward icons
│       ├── skills/             # Skill icons grouped by element subfolder
│       ├── rooms/              # 7 dungeon room type icons
│       ├── status/             # 15 status effect icons
│       └── items/              # Item icons
├── next.config.ts              # images.unoptimized: true (local assets)
└── CLAUDE.md                   # This file
```

---

## Design System

### Colors (CSS variables in globals.css)

| Variable        | Hex       | Usage                       |
|-----------------|-----------|-----------------------------|
| `--forest-deep` | `#2D4F2B` | Page background             |
| `--forest-mid`  | `#5A8A3E` | Primary buttons, active nav |
| `--leaf-light`  | `#A8C770` | Earth element, accents      |
| `--sun-warm`    | `#E8B85C` | Gold highlights, legendary  |
| `--cream`       | `#F5EBD8` | Body text                   |
| `--hp-red`      | `#E84545` | Enemies, danger             |
| `--sky-blue`    | `#5A9FE8` | Rare rarity, water element  |
| `--plum-purple` | `#8B4A6B` | Epic rarity                 |

### Fonts

- **Cinzel** — headings, labels, nav links
- **Cinzel Decorative** — hero title only
- **Inter** — body text (default)

Loaded via Google Fonts `@import` in `globals.css`. The `@import` must come **before** `@import "tailwindcss"` or the build emits a CSS ordering warning.

### Key Utility Classes (globals.css)

- `.glass` — frosted glass background + backdrop blur
- `.card-hover` — lift + shadow on hover
- `.shimmer-text` — animated gold shimmer on text
- `.animate-float` — vertical float loop
- `.animate-pulse-glow` — gold glow pulse
- `.btn-primary` — green bordered button
- `.btn-gold` — gold gradient button
- `.section-divider` — centered gold gradient hr

### Rarity Colors

| Rarity    | Color     |
|-----------|-----------|
| Common    | `#aaa`    |
| Rare      | `#5A9FE8` |
| Epic      | `#c084fc` |
| Legendary | `#E8B85C` |

---

## Page Sections (top → bottom)

| Component           | Section id   | Description                                               |
|---------------------|--------------|-----------------------------------------------------------|
| `Navbar`            | —            | Fixed top nav, transparent → glass on scroll              |
| `HeroSection`       | `#hero`      | bg_main_menu, game title, 5 floating baby pets, CTA       |
| `FeaturesSection`   | `#features`  | 6 feature cards with game asset icons                     |
| `PetsSection`       | `#pets`      | 6 pet cards: rarity, role, element, evolution chain       |
| `CombatSection`     | `#combat`    | bg_combat_slime overlay, rooms, enemies, bosses, actions  |
| `ElementsSection`   | `#elements`  | 6 element cards with description + 3 sample skill icons   |
| `EggsSection`       | `#eggs`      | bg_hatchery overlay, 4 rarity cards with drop rates       |
| `DownloadSection`   | `#download`  | Floating pets, email signup, store badges                 |
| `Footer`            | —            | Branding + section anchor links                           |

---

## Rules to Follow

1. **`"use client"` is required** on any component using event handlers (`onClick`, `onSubmit`, `onMouseEnter`, etc.). Currently applies to: `Navbar`, `DownloadSection`, `Footer`.
2. **Always use `next/image`** for images. `next.config.ts` sets `images.unoptimized: true` so local assets work without a loader.
3. **Asset paths start with `/assets/...`** (served from `public/assets/`).
4. **No `withOpacity()`** — use `withValues(alpha: ...)` or rgba strings directly (Flutter rule carried over to keep consistency).

---

## Adding a New Section

1. Create `app/components/YourSection.tsx` (add `"use client"` if interactive)
2. Add `id="your-section"` to the section element
3. Import and place it in `app/page.tsx`
4. Add a nav link entry in `Navbar.tsx`

---

## Syncing Assets from Flutter App

If new assets are added to the Flutter project, re-copy them:

```bash
cp -r ../sol-pet-app/assets ./public/assets
```
