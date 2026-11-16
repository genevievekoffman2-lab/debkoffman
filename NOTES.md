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

---

## Step 4 — About Deb layout + Deb's House page (2026-11-16)

**What**
- `src/components/IconDivider.astro` (new): a centered 80px icon between sections.
  With no props it shows a dashed "[icon]" circle. To use a real icon:
  `import leaf from '../assets/images/icons/leaf.png'` then `<IconDivider src={leaf} />`.
- `src/pages/about.astro` (rewritten), top to bottom:
  - intro (photo and opening paragraph, side by side on desktop, stacked under 700px)
  - icon divider
  - section
  - icon divider
  - pull quote
  - photo 2
  - section
  - icon divider
  - section
  - icon divider
  - a clickable "Come see Deb's house →" card linking to `/about/house`
- `src/pages/about/house.astro` (new): heading, image placeholder, and a back link.
- `BaseLayout.astro`: a nav link now counts as current on its own path or on paths
  under it (`/about` or `/about/...`), and nowhere else.

**Why**
- Text sections are capped at `max-width: 65ch` (about 65 characters per line),
  which is comfortable for reading.
- The icon divider is a component, so the size and spacing are defined once.
  Swapping in a real icon is a one-line change, and the real image fills the same box.
- The old check (`startsWith('/about')`) would also have matched a page like
  `/aboutsomething`.
- The house card's hover (a small lift plus a shadow) is turned off for visitors
  whose system setting asks for reduced motion.

**Terms**
- **Component**: a reusable `.astro` file you can drop into any page, like `<IconDivider />`.
- **`ch`**: a CSS unit equal to the width of the "0" character. `65ch` ≈ 65 characters.
- **`clamp(min, preferred, max)`**: a size that scales with the screen but stays between a minimum and a maximum.
- **Nested route**: `src/pages/about/house.astro` → `/about/house`.
- **`prefers-reduced-motion`**: a media query for visitors who have turned on
  "reduce motion" in their system settings.
- **`ImageMetadata`**: the type Astro gives an image you `import`. That type is
  what `<Image />` needs to optimize it.

---

## Step 5 — Her Art landing cards + Series / Installations pages (2026-11-16)

**What**
- `src/components/LinkCard.astro` (new): a big clickable card (image, title,
  description). The whole card is one `<a>`. It shows a dashed placeholder until
  you pass `image={...}`, an image imported from `src/assets/images/`, and then
  renders it with `<Image />` in the same 4:3 box.
- `src/pages/art.astro` (rewritten): two `LinkCard`s, "Series" → `/art/series`
  and "Installations & Booths" → `/art/installations`. They sit side by side in
  a 2-column grid and stack below 700px.
- `src/pages/art/series.astro`, `src/pages/art/installations.astro` (new):
  heading, placeholder line, and "← Back to Her Art".
- `BaseLayout.astro`: no change. The nested-path check from Step 4 already keeps
  "Her Art" marked on every `/art/...` page.

**Why**
- One card component means both cards (and future ones) look and behave the same.
- Hover and keyboard focus lift the card 4px and add a soft shadow. The lift is
  turned off for visitors who have reduce-motion switched on.
- `height: 100%` on the cards keeps both the same height even if one description
  runs longer.

**Terms**
- **`minmax(0, 1fr)`**: a grid column that shares space equally and can shrink
  below its content's natural width, which keeps long words from breaking the layout.
- **`overflow: hidden`**: clips anything that sticks out of a box. Here it keeps
  the image inside the card's rounded corners.

---

## Step 6 — Feet icons on About Deb (2026-11-16)

- Copied `public/images/about/feet1.png` → `src/assets/images/icons/feet1.png`.
  Astro's `<Image />` only optimizes images that live in `src/`.
- `src/pages/about.astro` imports it (`import feet from '../assets/images/icons/feet1.png'`)
  and all four dividers are now `<IconDivider src={feet} />`.
- Astro serves each one as a 160×160 WebP image, much smaller than the 280 KB PNG.
  It's shown at 80px, and the extra pixels keep it sharp on high-resolution (retina) screens.
- The PNG's background is pale gray-white, not transparent, so it may show as a
  faint square on the cream page.

---

## Step 7 — Deb's blessings note on About Deb (2026-11-16)

- Copied `public/images/about/mailchimp-blessings.png` →
  `src/assets/images/about/mailchimp-blessings.png` so `<Image />` can optimize it.
- `src/pages/about.astro`: replaced the "[Photo of Deb 2]" placeholder with
  `<Image src={blessings} ... class="blessings" />`.
- The image is tall (1380×2100) and has text in it, so it is shown at its own
  proportions, up to 480px wide and centered, rather than cropped into the
  4:3 placeholder box.
- The alt text transcribes Deb's handwritten note, so screen readers read it too.
- `widths` + `sizes` let the browser pick a 480, 720, or 960px-wide version
  depending on the screen, instead of downloading the 1.6 MB original.

**Terms**
- **`widths` / `sizes`**: `widths` tells `<Image />` which versions to generate.
  `sizes` tells the browser how wide the image will display, so it can download
  the smallest version that still looks sharp.
- **Alt text**: a written description of an image, read aloud by screen readers.
  It also shows if the image fails to load.

---

## Step 8 — "More About Deb" text beside the blessings note (2026-11-16)

- `src/pages/about.astro`: wrapped section 3 ("More About Deb") and section 6
  (the blessings image) in a `<div class="story">`. It's a two-column grid, with the
  text (up to 65ch) on the left and the image (up to 420px) on the right, both
  starting at the top.
- Below 900px wide they stack: text first, then the image (up to 480px, centered).
  The breakpoint is wider than the intro's 700px because these two columns need more room.
