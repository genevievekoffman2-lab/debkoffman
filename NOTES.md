# Build notes

A running log of what was built and why. Newest at the bottom.

---

## Step 1 — Home page skeleton (2026-11-16)

**What**
- `src/layouts/BaseLayout.astro` (new): the shared page shell. It holds `<head>`,
  the top bar (Home · About Deb · Her Art · Shop), and a `<main>` where each
  page's content goes.
- `src/pages/index.astro` (rewritten): the Home page uses `BaseLayout` and has
  three dashed placeholder sections: the hero print, the intro, and Draw a Soul Support card.
- Removed the starter files: `src/components/Welcome.astro`,
  `src/layouts/Layout.astro`, and `src/assets/*.svg`.

**Why**
- One layout means the top bar is written once and every page gets it.
- The current page's link gets `aria-current="page"`. Screen readers announce
  it as the current page, and the CSS uses the same attribute to underline it,
  so a single attribute handles both.
- The nav links live in a `navLinks` list at the top of `BaseLayout.astro`, so
  you add or rename a page by editing that list.

**Terms**
- **Layout**: an Astro component that wraps pages with shared markup.
- **`<slot />`**: the spot in a layout or component where the content passed
  into it gets inserted.
- **Props**: values passed into a component, like `<BaseLayout title="Shop">`.
- **Scoped vs. global styles**: a plain `<style>` in an `.astro` file only
  affects that file. `<style is:global>` affects the whole page.
- **`aria-current="page"`**: an accessibility attribute that marks the link for
  the page you're on.

**Not yet**
- About, Her Art, and Shop pages don't exist yet, so those links show a 404.

---

## Step 2 — Placeholder pages for every nav link (2026-11-16)

**What**
- `src/pages/about.astro` → `/about`, `src/pages/art.astro` → `/art`,
  `src/pages/shop.astro` → `/shop`. Each one uses `BaseLayout` with a `title`
  and has a heading, one line of placeholder text, and a dashed image box.
- Moved the `.placeholder` style from `index.astro` into the global styles in
  `BaseLayout.astro`, and added `.image-placeholder` there.

**Why**
- Every top-bar link now works, and the current page's link is underlined.
- One shared style keeps every page's placeholders identical and avoids
  copying the same CSS into four files.
- `.image-placeholder` has a 4:3 aspect ratio and a max width of 600px. A real
  `<Image src={...} alt="..." class="image-placeholder" />` can replace the
  `<div>` and fill the same space.

**Terms**
- **File-based routing**: Astro makes a page for each file in `src/pages/`, and
  the URL comes from the filename (`shop.astro` → `/shop`).
- **Aspect ratio**: a box's width-to-height shape. With `aspect-ratio: 4 / 3`
  the box keeps that shape at any width.
- **`<Image />`**: Astro's image component (from `astro:assets`). It resizes and
  compresses images at build time, but only for images imported from `src/`.
  Files in `public/` are served exactly as they are, with no optimizing.

---

## Step 3 — Hand-drawn top bar (2026-11-16)

**What**
- `BaseLayout.astro`: the top bar is now drawn like one of Deb's panels. It uses
  three images in `public/images/header/`:
  - `header-sky.png` is the bar's background.
  - `header-grass.png` is tiled along the bottom edge.
  - `header-bird.png` sits in the center, links home, and has the alt text "Deb Koffman Art, home".
- The links are split around the bird: Home and About Deb on the left, Her Art
  and Shop on the right. Removed the "Deb Koffman" text logo.

**How (CSS)**
- Layers: the sky is the header's `background`. The grass is `header::after` (`z-index: 1`),
  and the nav is above it (`z-index: 2`).
- The header has `position: relative`, so the grass's `position: absolute; bottom: 0`
  pins it to the header's bottom edge.
- The nav is a grid, `1fr auto 1fr`. The two equal side columns keep the bird
  exactly centered even when the two link groups are different widths.
- The bird has a negative `margin-bottom`, so it dips down into the grass.
- Sizes are CSS variables at the top of `.top-bar` (`--grass-h`, `--bird-w`,
  `--ink`). Change them in one place.
- Phones (≤600px):
  - The grid becomes two rows: the bird, then all four links.
  - The grass moves up to sit under the bird.
  - The links sit on a cream band, made with a second background layer
    (a `linear-gradient`) stacked on top of the sky.

**Known issue**
- `header-bird.png` and `header-grass.png` are fully opaque, not transparent.
  The bird shows as a square tile, and the grass strip has a band of sky above it.
  Re-export them with transparent backgrounds under the same filenames. No code change needed.

**Terms**
- **Pseudo-element (`::after`)**: an extra box CSS creates without any HTML. Good for decoration.
- **`position: relative` / `absolute`**: an absolutely positioned element is
  placed using the edges of its nearest ancestor that has `position: relative`.
- **`z-index`**: stacking order. Higher numbers are drawn on top.
- **`1fr`**: one share of the leftover space in a CSS grid.
- **Media query (`@media (max-width: 600px)`)**: CSS that applies only when the
  screen is that narrow or narrower.
- **CSS variable (`--grass-h`)**: a named value, read with `var(--grass-h)`.
