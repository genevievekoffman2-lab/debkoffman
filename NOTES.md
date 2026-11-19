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

---

## Step 9 — Door images on Her Art cards (2026-11-16)

- Copied `public/images/her-art/series-door.png` and `installations-door.png` →
  `src/assets/images/her-art/`.
- `src/pages/art.astro`: imports both and passes them to the cards as
  `image={seriesDoor}` / `image={installationsDoor}`, replacing the placeholders.
  `LinkCard` serves each as an 800px-wide WebP instead of the 2 MB, 2048px PNG.
- The doors are square, and the card's image box is 4:3, so a little white space is
  trimmed from the top and bottom. The doors themselves fit inside.
- Alt text is empty on purpose. The card title already names the link, so describing
  the door would make screen readers say it twice.

---

## Step 10 — Swinging-door links on Her Art (2026-11-16)

- `src/components/LinkCard.astro`: new `variant="door"` option. The default `card`
  look is unchanged, for use elsewhere later.
  - No background, border, rounded corners, shadow, or padding: just the image, then
    the title and description.
  - The image keeps its natural shape (`height: auto`, `aspect-ratio: auto`, no cover crop),
    up to 420px wide.
  - On hover or keyboard focus the image swings open:
    `transform: perspective(900px) rotateY(-24deg)` with `transform-origin: 26% 50%`,
    the hinge line in Deb's drawings.
  - Opening takes 0.35s, ease-out. Closing takes 0.7s with a springy curve that
    overshoots slightly, so the door settles back.
  - Keyboard focus shows a 3px dark outline around the link.
  - With reduced motion turned on, there is no swing at all.
- `src/pages/art.astro`: both cards use `variant="door"`.

**Terms**
- **`perspective()`**: how far away the viewer is from a 3D-transformed element. A
  smaller number means more dramatic depth.
- **`rotateY()`**: turns an element around its vertical axis, like a door on its hinges.
- **`transform-origin`**: the point an element rotates around.
- **`cubic-bezier(...)`**: a custom speed curve for an animation. Values above 1
  make it overshoot and come back, which gives a springy feel.
- **`class:list`**: Astro's way to add classes conditionally, here `link-card--door`
  only when `variant="door"`.

---

## Step 11 — Series: data file + dynamic routes (2026-11-16)

**What**
- `src/data/series.ts` (new): exports the `Series` type and the `series` list:
  Headstones, Food for the Soul, Wheel, Sitting Buddhas, One Way or Another,
  Love Your Body, Just a Moment.
  - Each entry has a `slug`, `title` and `description`, plus an optional
    `image` / `imageAlt`.
  - **To add a series, add an entry to this list.** The grid card and its page appear automatically.
- `src/pages/art/series.astro` (rewritten): a grid of cards built from `series.ts`.
  - Each card is a square dashed placeholder labeled with the title, or the real
    image via `<Image />` if `image` is set, with the title below.
  - On hover the image lifts slightly with a soft shadow.
  - The grid is 3 columns, then 2 below 900px, then 1 below 560px.
  - Each card links to `/art/series/<slug>`, and the "← Back to Her Art" link is kept.
- `src/pages/art/series/[slug].astro` (new): one page per series, with the title,
  description, a "[Pieces in this series go here]" area, and "← Back to Series".

**Adding a series image later**
1. Put the file in `src/assets/images/series/`.
2. Import it at the top of `series.ts`.
3. Set `image: thatImport` on the entry.

**Terms**
- **Dynamic route**: a page file with `[brackets]` in its name. One template makes
  many pages, and the bracketed part of the URL fills the placeholder.
- **`getStaticPaths()`**: on a static site, the function a dynamic route exports to
  list every page to build, giving each one `params` (the URL value) and `props` (its data).
- **Static site**: every page is built into an HTML file ahead of time, before anyone visits.
- **Slug**: the URL-friendly id of a page: lowercase, with dashes instead of spaces.
- **`interface`** (TypeScript): a description of an object's shape. Your editor
  warns you if an entry is missing a field or has a typo.
- **`satisfies`** (TypeScript): checks that a value matches a type without changing it.

---

## Step 12 — Installations & Booths: data file + dynamic routes, shared CardGrid (2026-11-16)

**What**
- `src/components/CardGrid.astro` (new): the card grid that used to be written
  inside `series.astro`, moved into a component.
  - Usage: `<CardGrid items={...} baseUrl="/art/..." />`. Each card links to `baseUrl/slug`.
  - Classes were renamed from `series-*` to `card-*`. The markup and CSS are otherwise
    the same. I compared the Series page HTML before and after, and only the class names changed.
- `src/pages/art/series.astro`: now just a heading, `<CardGrid items={series} baseUrl="/art/series" />`,
  and the back link.
- `src/data/installations.ts` (new): the `Installation` type and `installations` list.
  Same fields as Series, plus `kind: 'booth' | 'installation' | 'event'`.
- `src/pages/art/installations.astro` (rewritten): uses `CardGrid` with the installations list.
- `src/pages/art/installations/[slug].astro` (new): one page per entry, with the title,
  description, "[Photos go here]", "[Video goes here]" (16:9) and a back link.

**Why**
- One grid component means Series and Installations always look the same. A style
  change made in `CardGrid.astro` applies to both pages.
- `CardGrid` needs only `slug`, `title`, `image` and `imageAlt` (its `CardItem` type).
  Any list with those fields works, so extra fields like `description` and `kind`
  don't get in the way.
- `kind` isn't shown on the site yet. It's there for later, e.g. a "Booth" label or a filter.

**Slugs**
- I left the word "installation" out of two slugs to keep their URLs shorter:
  `signs-of-well-being` and `make-room-for-all-you-need`. Their titles still say "Installation".

**Terms**
- **Union type** (`'booth' | 'installation' | 'event'`): a value that must be one of
  these exact strings. Your editor flags a typo like `'boothe'`.
- **Refactor**: changing how code is organized without changing what it does.

---

## Step 13 — Shop outline with category sub-navigation (2026-11-16)

**What**
- `src/data/shopCategories.ts` (new): the `ShopCategory` type and 5 categories:
  3x8 Notecards, 4x6 Notecards, Soul Support, Books, Prints.
- `src/components/ShopNav.astro` (new): a bar of pill-shaped tabs, one per category,
  each linking to `/shop/<slug>`.
  - `current="<slug>"` marks that tab with `aria-current="page"` and a dark filled pill.
  - On narrow screens the row scrolls sideways inside the bar. Tabs never squish
    or push the page wider.
- `BaseLayout.astro`: added `<slot name="subnav" />` between the header and `<main>`,
  so a page can put a bar directly under the top bar without `<main>`'s padding.
- `src/pages/shop.astro` (rewritten): ShopNav with no tab marked, then "Choose a
  collection to browse." No products.
- `src/pages/shop/[slug].astro` (new): one page per category. It has ShopNav with
  this category marked, the title and description, and a 3/2/1-column grid of 6
  placeholder products (image box, "[Product name]", "[Price]", and a disabled
  "Add to cart" button).
- The main top bar needed no change. Its nested-path check already marks "Shop"
  on every `/shop/...` page.

**Terms**
- **Named slot**: a second, named spot in a layout where a page can insert content.
  The page uses `slot="subnav"` on an element to send it there instead of the default `<slot />`.
- **Sub-navigation**: a second row of links for moving within one section.
- **`overflow-x: auto`**: if the content is wider than its box, the box scrolls
  sideways instead of spilling out.
- **`disabled`** (on a button): the button can't be clicked or focused. It's used
  here until a real cart exists.

---

## Step 14 — House photo on About Deb (2026-11-16)

- Copied `public/images/about/house-tulips.jpg` → `src/assets/images/about/house-tulips.jpg`.
- `src/pages/about.astro`: the "Come see Deb's house →" card now shows the photo
  (`<Image src={houseTulips} width={600} class="house-photo" />`) instead of the
  "[Photo of Deb's house]" placeholder. It's shown uncropped at its natural proportions
  (720×570), full card width, with rounded corners. The card's existing hover lift is unchanged.

---

## Step 15 — House photo on /about/house (2026-11-16)

- `src/pages/about/house.astro`: replaced the "[Image goes here]" placeholder with
  `<Image src={houseTulips} width={720} class="house-photo" />`, the same
  `src/assets/images/about/house-tulips.jpg` used on About Deb. It's shown at full size
  (720px max), centered, uncropped, with rounded corners.

---

## Step 16 — Product detail overlay on shop category pages (2026-11-16)

**What**
- `src/data/products.ts` (new): the `Product` type plus 3–4 placeholder products per
  category. Each one has `id`, `categorySlug`, `name`, `price` (a number, in dollars),
  `description`, optional `image`/`imageAlt`, and optional `details` (a list of
  label/value lines). Also `formatPrice()`, which turns 4.5 into "$4.50".
- `src/lib/cart.ts` (new): `addToCart(productId, quantity)`. For now it only logs to the
  console. **This is the one place to connect Shopify or Stripe later.**
- `src/components/ProductDialog.astro` (new): the single overlay, with its markup,
  styles and script.
- `src/pages/shop/[slug].astro`: product cards now come from `products.ts`, filtered by
  category. Each card is a `<button data-product-id="…">`. The disabled "Add to cart"
  buttons on the cards are gone, since a button can't contain another button and adding
  now happens in the overlay. The page includes `<ProductDialog products={…} />`.

**How the data gets into the overlay**
1. At build time, ProductDialog writes the category's products into the page as JSON
   (`<script type="application/json" id="product-data">`), with prices already
   formatted and image URLs already optimized.
2. On click, the script reads the card's `data-product-id`, finds that product in the
   JSON, fills in the dialog's name, price, description, details and image, resets the
   quantity to 1, and calls `dialog.showModal()`.

**Overlay behavior**
- Closes with ×, Escape (built in), or a click on the backdrop. A click only counts as a
  backdrop click if the press also started there, so dragging out of a text selection
  doesn't close it.
- Every way of closing fires the dialog's `close` event. That handler restores page
  scrolling and moves focus back to the card that opened the dialog.
- Page scrolling is locked by setting `overflow: hidden` on `<html>` while the dialog is open.
- Quantity is kept to a whole number from 1 to 99. "−" is disabled at 1 and "+" at 99,
  and typed values are corrected when you leave the box.
- Add to cart calls `addToCart()`, then shows "Added N × Name" in a `role="status"`
  line, which screen readers announce.
- Desktop: image left, info right. Phones: nearly full screen, stacked, and the content
  scrolls while the × stays in the corner.
- Opening uses a fade/scale-in, turned off when reduced motion is on.

**Terms**
- **`<dialog>` + `showModal()`**: the browser's built-in modal. It puts the dialog on
  top, makes the rest of the page unclickable and untabbable ("inert"), keeps focus
  inside, and closes on Escape.
- **`::backdrop`**: the full-screen layer behind a modal dialog. It's styled here as a dim overlay.
- **`data-*` attribute**: a custom attribute for storing your own data on an element,
  read in JavaScript as `element.dataset.productId`.
- **JSON**: a text format for data. Here it's how the build passes product info to the browser script.
- **Client-side script**: JavaScript that runs in the visitor's browser. Astro bundles a
  plain `<script>` in a component and includes it once per page.
- **`aria-haspopup="dialog"`**: tells screen readers a button opens a dialog.
- **`role="status"`**: a polite live region. Screen readers read its new text without moving focus.

---

## Step 17 — "Details" row with category fallback (2026-11-16)

**What**
- `src/data/products.ts`:
  - The label/value rows were renamed from `details` to `specs` (type `ProductSpec`).
  - Added an optional `details?: string`, a sentence for the overlay's Details row.
  - Removed every Paper and Envelope row.
- `src/data/shopCategories.ts`: added optional `details?: string`. Both notecard categories
  use "Single sheet notecard with colorbrite envelope wrapped in cellophane sleeve."
- `src/components/ProductDialog.astro`:
  - `overlayRows()` builds the rows: the product's `specs`, then a Details row.
  - Long values wrap inside the value column, aligned with the other values
    (`minmax(0, 1fr)` column, `align-items: baseline`).

**Fallback logic** (`p.details ?? category?.details`)
1. If the product has its own `details`, use it.
2. Otherwise use its category's `details`.
3. If neither exists, there's no Details row. If a product has no rows at all, the whole list is hidden.

**Terms**
- **`??` (nullish coalescing)**: `a ?? b` means "use `a`, unless it's missing
  (`undefined`/`null`), then use `b`".
- **`?.` (optional chaining)**: `category?.details` means "`category.details`, or
  `undefined` if there's no category", instead of crashing.

## Step 18: Pink shop category bar
- **File:** `src/components/ShopNav.astro`
- The category bar's background changed from beige (`#f4efe4`) to pink, **`#ED9BA3`**. Its bottom border is now a slightly deeper pink (`#d9848d`), so the edge still shows.
- Unchanged: dark tab text, the dark filled pill on the current tab, and the hover tint. Dark text on this pink stays easy to read.

## Step 19: Real photo of Deb on the About page
- **File:** `src/pages/about.astro`
- The "[Photo of Deb 1]" placeholder was replaced by `src/assets/images/about/aunt_deb_img.png`, a 580 × 385 photo of Deb smiling.
- It's shown with Astro's `<Image />`, which makes an optimized copy at build time. The alt text describes the photo for screen readers.
- `.intro-photo` now makes the photo fill its column, keep its proportions, and get softly rounded corners. On phones it still stacks above the text.

## Step 20: Photo galleries for installations & booths
- **Files:** `src/data/installations.ts`, `src/pages/art/installations/[slug].astro`
- New optional field on each entry, **`photos`**: a list of `{ src, alt, caption? }` (the new `InstallationPhoto` type).
  - `src`: an image imported at the top of `installations.ts`
  - `alt`: a description for screen readers
  - `caption`: optional text shown under the photo
- The detail page shows the photos as a gallery: 2 columns on desktop, 1 on phones (≤600px). Each photo keeps its own shape. If an entry has no `photos`, the "[Photos go here]" placeholder still shows.
- `<Image widths={[400, 800]} sizes=...>` makes two sizes of each photo. The browser downloads the one that fits the screen (**`srcset`**).
- The Complaint Booth now has 2 photos: `complaint-t.jpg` (the booth) and `complaint-marty-800.jpg` (someone complaining into it). Both are in `src/assets/images/her-art/booths/`.
- The how-to comment at the top of `installations.ts` was updated to explain cover images vs. gallery photos and to name the real folder.

## Step 21: Third door on Her Art: "More to Marvel At"
- **Files:** `src/pages/art.astro`, `src/pages/art/more-to-marvel-at.astro` (new)
- A third door, `src/assets/images/her-art/more-to-marvel-at-door.png`, now sits beside Series and Installations. It links to `/art/more-to-marvel-at`.
- The `.art-cards` grid went from 2 to 3 columns, and its max width from 1000px to 1200px so each door stays a good size. On phones (≤700px) the doors still stack in one column.
- `/art/more-to-marvel-at` is a placeholder page for now ("Coming soon" + back link), so the door doesn't lead to a 404.

## Step 22: Shop uses cards instead of the category bar
- **Files:** `src/pages/shop.astro`, `src/pages/shop/[slug].astro`, `src/data/shopCategories.ts`, `src/components/CardGrid.astro` (comments only). **Deleted:** `src/components/ShopNav.astro`
- `/shop` now shows a "Shop" heading and one card per category, using the same `CardGrid` as Series and Installations: 3x8 Notecards, 4x6 Notecards, Soul Support, Books, Prints. The order comes from the list in `shopCategories.ts`. Each card links to `/shop/<slug>`.
- Each category in `shopCategories.ts` has two new optional fields, **`image`** and **`imageAlt`**. Until a category has an image, its card shows a dashed placeholder with the category name. Instructions for adding images (from `src/assets/images/shop/`) are in the comment at the top of that file.
- Category pages (`/shop/<slug>`): ShopNav was replaced with a "← Back to Shop" link at the top, styled like the back links on Series/Installations. The product grid and the `ProductDialog` overlay are unchanged.
- `ShopNav.astro` wasn't used anywhere anymore, so it was deleted (`git rm`). The empty `<slot name="subnav" />` in `BaseLayout.astro` was kept; it shows nothing when no page fills it.
- No change was needed for the top bar: `isCurrent()` in `BaseLayout.astro` already marks "Shop" on `/shop` and anything under `/shop/`.

## Step 23: Gapless photo grid + lightbox (Sitting Buddhas)
- **New files:** `src/components/PhotoGrid.astro`, `src/data/galleries/sitting-buddhas.ts`
- **Changed:** `src/data/series.ts`, `src/pages/art/series/[slug].astro`, `src/layouts/BaseLayout.astro`
- **PhotoGrid** is a reusable component: `<PhotoGrid photos={[{ src, alt }, ...]} />`.
  - Square tiles with no gaps. `object-fit: cover` fills each square and crops the edges, so all tiles line up.
  - 5 columns on desktop, 3 at 900px wide and below (tablets and phones).
  - **Full bleed** (full width, edge to edge): `width: 100vw; margin-left: calc(50% - 50vw)` pulls the grid out of the centered text column to the edges of the screen.
  - Hover: the photo zooms 5% and brightens a little *inside* its tile. `overflow: hidden` on the tile keeps the zoom from spilling over, so the grid never moves.
  - **Lightbox**: an overlay showing the full, uncropped photo, using a native `<dialog>`. `showModal()` gives the dark `::backdrop` and makes Escape close it for free. Clicking the backdrop or the × button also closes it.
  - `getImage()` makes a large webp (up to 1600px wide) for the lightbox, while the tiles use smaller 300/600px versions picked through `srcset`.
- **Data:** `Series` has a new optional field, `photos` (a list of `GalleryPhoto`: `{ src, alt }`). Each series keeps its photo list in its own file in `src/data/galleries/`. A series page shows the grid when it has photos; otherwise it shows the old placeholder.
- Sitting Buddhas has 12 photos: an overview of a buddha holding a pile of signs (`all.jpg`), then one buddha per feeling. Each has alt text naming the sign's word and color.
- `BaseLayout.astro`: added `overflow-x: clip` to `body`, so `100vw` can't cause a tiny sideways scroll on computers where the scrollbar takes up space.
- **To add a grid to another series:** create `src/data/galleries/<slug>.ts` like the Sitting Buddhas one, import it in `series.ts`, and set `photos:` on that series.

## Step 24: (tried and undone) Image beside the Sitting Buddhas description
- I tried putting the Love buddha beside the description, first inside the page column and then full width. Neither looked right, so it was removed. The page is back to a centered description followed by the full-width photo grid, and the Love buddha appears only in the grid.

## Step 25: Exhibit photo to the right of the Sitting Buddhas description
- **Files:** `src/data/series.ts`, `src/pages/art/series/[slug].astro`
- New optional fields on `Series`: **`introImage`** and **`introImageAlt`**. Sitting Buddhas uses `src/assets/images/series/sitting-buddhas/sittingbuddhas-exhibit.jpg`, a photo of four of the buddha paintings hanging in a gallery.
- Layout: description on the left, photo on the right. The row is **full bleed** (edge to edge, like PhotoGrid), and the photo touches the right edge of the screen.
- Height: the photo is fixed at `6.75rem` (≈108px), the height of 4 lines of description (4 × 1.5 line-height × 1.125rem), so the row is no taller than the description was. `width: auto` keeps the photo's own shape, so nothing is cropped. The text fills the rest of the width.
- Phones (≤700px): text first, then the photo across the full width.
- Series without an `introImage` still show the centered description.


## Step 26: Exhibit photo opens in the lightbox too; shared Lightbox component
- **New files:** `src/components/Lightbox.astro`, `src/lib/lightbox.ts`
- **Changed:** `src/components/PhotoGrid.astro`, `src/pages/art/series/[slug].astro`
- The lightbox used to live inside PhotoGrid, so only gallery tiles could open it. It now has its own component, **Lightbox**, that any photo on the page can use:
  - Put `<Lightbox />` on the page. PhotoGrid already includes it. Including it more than once is fine, because Astro bundles the script only once.
  - Give any button `data-lightbox-src="<large photo URL>"` and `data-lightbox-alt="<description>"`. A single click listener on the whole page opens whichever photo was clicked (**event delegation**: one listener on a parent handles clicks for many children).
  - `lightboxSrc(image)` in `src/lib/lightbox.ts` makes the large webp copy (up to 1600px) and returns its URL.
  - The script creates the `<dialog>` the first time it's needed, so there's only ever one. Its styles use `is:global` because Astro's normal (scoped) styles don't reach elements created by a script.
- The Sitting Buddhas exhibit photo is now a button: clicking it (or pressing Tab, then Enter) opens the full photo in the same overlay. It has the same hover as the tiles (slight zoom and brighten, kept inside its own box).

## Step 27: ArtBubble, a floating "art bubble" (like a chat widget)
- **New file:** `src/components/ArtBubble.astro`
- **Changed:** `src/layouts/BaseLayout.astro`, `src/data/installations.ts`, `src/pages/art/installations/[slug].astro`, `src/pages/shop/[slug].astro`
- **Usage:** `<ArtBubble image={someImport} text="Order this print" href="/shop/prints#print-1" />`. All three props are required. Pages without it show nothing.
  - `image`: imported from `src/assets/images/`. It's shown cropped to a circle in the bubble and larger in the open card.
  - `text`: shown in the open card. It's also the bubble button's `aria-label` (the name screen readers announce).
  - `href`: where the card's "Take a look →" link goes.
- **Behavior:**
  - Hidden at first. The script adds `.is-visible` 2 seconds after the page loads, which fades it in with a small "pop" (a `cubic-bezier` curve that overshoots slightly).
  - Closed state: a 64px round button pinned to the bottom-right corner (`position: fixed`).
  - Clicking it opens a 240px card above it. Clicking again, or pressing Escape, closes the card.
  - `aria-expanded` on the button says whether the card is open. `aria-controls` points to the card.
  - There's no close-forever option; the bubble always stays.
  - Hidden below 768px (phones). With "reduce motion" on, it appears and opens without animation.
- **Site colors:** `--pink` (`#ed9ba3`) and `--ink` (`#13202e`) are now defined on `:root` in `BaseLayout.astro`, so any component can use `var(--pink)` and `var(--ink)`. `--ink` used to be defined only inside the top bar; that copy was removed, and the top bar now uses the global one (same value).
- **Installations:** new optional `bubble: { image, text, href }` field on each entry. `[slug].astro` renders an ArtBubble when it's set. Signs of Well-Being uses its booth photo, "Order this print", and `/shop/prints#print-1` (a placeholder print).
- **Shop anchors:** each product `<li>` on a category page now has `id={product.id}`, so a link like `/shop/prints#print-1` jumps to that product. `scroll-margin-top` leaves a little space above it.
- Note: Astro adds ArtBubble's small script to every installation page (because `[slug].astro` imports the component), but it does nothing on pages without a bubble.
- **`ProductCallout`** didn't exist, so there was nothing to replace.

## Step 28: Shop category cards use their cover images
- **Changed:** `src/data/shopCategories.ts`
- Each folder in `src/assets/images/products/<slug>/` now has a cover image (`3x8notecardsCover.png`, `4x6notecardsCover.jpg`, `soulSupportCover.jpg`, `bookCover.jpg`, `printsCover.jpg`). Each is imported at the top of `shopCategories.ts` and set as its category's `image` (with an `imageAlt`), so the cards on `/shop` show the cover instead of the dashed placeholder. No component changes were needed: CardGrid already shows `image` when it's set.

## Step 29: Real print titles in the Shop
- **Changed:** `src/data/products.ts`, `src/data/installations.ts` (plus two comments in `ArtBubble.astro` and `shop/[slug].astro`)
- The three placeholder prints (`print-1`–`print-3`) are replaced by Deb's 19 prints, in the order given: Sit With It All, Headstones, 2 Paths, Observing Fear, Transforming Fear, My Mind, Creative Block, Watching The Grass Grow, Instant Clarity, Instant Compassion, Instant Courage, Writing, One, Two Many Views, Box Of Views, Make Space, Marvelous Day, Map of Yesterday, Looking, Map Of The Territory.
- Each id is `print-<title-in-lowercase-with-dashes>`, e.g. `print-watching-the-grass-grow`, so `/shop/prints#print-watching-the-grass-grow` jumps to it.
- Price ($40), description, and size are still placeholders. No images yet.
- `print-1` no longer exists, so the Signs of Well-Being ArtBubble now links to `#print-sit-with-it-all` (still a placeholder choice).

## Step 30: Hand-drawn frames on the Installations & Booths cards
- **New:** `src/data/frames.ts` (the six frame PNGs from `src/assets/images/frames/`, each with the position of its transparent window)
- **Changed:** `src/components/CardGrid.astro` (new optional `frames` prop), `src/pages/art/installations.astro` (passes `frames={frames}`)
- Each card on `/art/installations` gets a different frame on top (pink, teal, yellow, purple, green, orange, in card order). The card's image sits behind the frame, placed in the frame's window, so it shows through.
- **Window box:** the window's `left`/`top`/`width`/`height` are percentages of the frame image, measured from the PNG's transparency (alpha = how see-through each pixel is). Each frame's window is in a slightly different place, so each has its own numbers.
- The photo uses `object-fit: cover` (fills the window, trimming edges if needed) and is 4% bigger than the window so its edges hide under the drawn line.
- Framed cards are 6:7 (portrait) instead of square, to match the frames' shape; the frame stretches to fill the card (`object-fit: fill`), only a few percent.
- Entries without an image (Magic Lamp Book Launch, Make Room for All You Need) show the dashed placeholder inside the window.
- Series and Shop grids don't pass `frames`, so they're unchanged.

## Step 31: Shop landing page styled like the "It's Not What It Is" print
- **Changed:** `src/pages/shop.astro` only (no longer uses CardGrid, so Series/Installations are untouched)
- **Reference:** `src/assets/images/products/prints/notwhatitisprint.jpg`
- **Teal panel** (`#46BFBA`) holds the page title and cards, inside the normal page width.
- **Border:** four `<span class="strip">` elements on the panel's edges, each 24px thick, using `border-strip-horizontal.png` (repeat-x) and `border-strip-vertical.png` (repeat-y) from `src/assets/images/products/`. The strip images are passed into CSS with `define:vars` (an Astro feature that turns frontmatter values into CSS variables, here `--stripH`/`--stripV`).
  - The strips aren't transparent; they have a white background. Their thin black line is the outer edge and their teal-tinted edge is the inner edge. They're drawn for top/left, so the bottom and right strips are flipped with `transform: scaleY(-1)` / `scaleX(-1)`.
  - Corners: top/bottom strips run the full width; left/right strips start and stop where those end, so nothing overlaps.
- **Cards:** off-white `#FEFDF3`, 2px ink outline with slightly uneven corner rounding (looks hand-drawn), solid blue `#2D67A9` shadow offset 8px down-right with no blur. Image centered (`object-fit: contain`), title below inside the card. Same `/shop/<slug>` links.
- **Grid:** 3 columns, 2 at ≤900px, 1 at ≤560px; even 2.5rem teal gaps (2rem on phones).

## Step 32: Shop teal panel goes full-bleed
- **Changed:** `src/pages/shop.astro` only
- **Why there was a gap:** BaseLayout's `<main>` is a centered column (`max-width: 1100px`, `padding: 1.5rem`), so the panel sat inside it with cream showing above and on the sides. The panel also had `margin-bottom: 3rem`.
- **Fix:** in shop.astro's styles, `:global(main:has(> .shop-panel))` removes main's max-width, margin, and padding. `:has()` is a CSS selector meaning "an element that contains…", so this matches only on the page with the teal panel, and BaseLayout itself is unchanged. The panel's bottom margin is gone.
- **Full height:** `body:has(.shop-panel)` becomes a flex column at least `100dvh` tall (`dvh` = the visible window height, which on phones excludes the browser toolbars). `main` and the panel each take `flex: 1`, so the teal reaches the bottom of the window and still grows with content.
- Strips stay on the panel's four edges, which are now the window's edges. The card grid stays centered at `max-width: 1000px`.
- No `100vw` is used (it can include the scrollbar's width), so the full-bleed panel doesn't cause sideways scrolling.

## Step 33: Painted teal texture on the Shop panel
- **Changed:** `src/pages/shop.astro` only
- The panel's flat teal is replaced by `src/assets/images/products/teal-background.jpg` (imported like the border strips and passed to CSS as `--tealTexture` via `define:vars`).
- `background: #1cb0aa var(--tealTexture) center / cover no-repeat;`: `cover` scales the image to fill the whole panel at any size (trimming edges if needed), `center` keeps it centered, no tiling. `#1CB0AA` is the solid fallback shown while the image loads.
- The border strips are separate elements on top, so they're unchanged.

## Step 34: Home page film reels (layout only)
- **New:** `src/data/filmReels.ts`, `src/components/FilmReel.astro`. **Changed:** `src/pages/index.astro`
- **`filmReels.ts`:** `leftReel` and `rightReel` are lists of file names (no `.jpg`) from `src/assets/images/walking/`, top to bottom. `getReelImages(names)` turns names into `{ src, alt }` using `import.meta.glob` (a Vite feature that imports every matching file at build time). A misspelled name fails the build with a clear message. Alt text comes from the name: `walking-on-stilts` → "Deb's striped-stocking feet walking on stilts"; `sand` → "Deb's striped-stocking feet walking: sand".
- **`FilmReel.astro`:** takes `images` and stacks them vertically with `<Image />` at 240px wide (also a 480px version for sharp high-res screens; `sizes="240px"` tells the browser which to pick). Fills its parent's height with `overflow: hidden`, so frames past the bottom are cut off like film behind a window.
- **Home page:** the intro is wrapped in `.reel-section`, a 3-column grid (240px | blurb | 240px), `100vh` tall, blurb vertically centered. Under 900px the reels are hidden and the blurb shows on its own.
- Unused for now: `hill.jpg` and `walking-panels.zip` in the walking folder.

## Step 35: FilmReel looks like a strip of film
- **Changed:** `src/components/FilmReel.astro` only
- Black strip (`#111`), still 240px wide: 4px black | 10px hole | 8px black | 196px image | 8px black | 10px hole | 4px black. 8px black bars between frames (and before the first). Images have 2px rounded corners. `<Image />` now makes 196px and 392px versions.
- **Sprocket holes (CSS only):** `::before` and `::after` on the strip are two 10px-wide columns, full strip height, filled with the page color `#fffdf8`. A **mask** (a CSS image that decides which parts of an element are visible) cuts each column down to just the holes: the mask is a tiny inline SVG tile, 10x24px, containing one 10x14 rounded rectangle (`rx=3`), repeated down the column with `repeat-y`. So there's one hole every 24px for any reel length, and the holes move with the strip when it's animated.
- Sizes live as CSS variables at the top of `.film-reel` (`--hole-w`, `--hole-h`, `--hole-pitch`, `--hole-edge`, `--hole-gap`, `--film-hole`). Note the hole's 10x14 and 24px pitch are also written inside the SVG tile; change both together.

## Step 36: Film reels loop in opposite directions
- **Changed:** `src/components/FilmReel.astro`, `src/pages/index.astro`
- New `direction` prop (`"up"` default, or `"down"`). Home page: left reel `down`, right reel `up`.
- **Seamless loop:** the strip holds the frames twice (two identical `<ul>`s). A CSS keyframe animation slides the strip with `transform: translateY` from `0` to `-50%`; a % in translate is of the element's own height, so -50% is exactly one set. At the end, set 2 is exactly where set 1 started, so jumping back to 0 is invisible. Down runs the same animation with `animation-direction: reverse`.
  - Every frame has its 8px bar *after* it (`padding-bottom`, instead of flex `gap`), so a set ends with a bar too and every frame-to-frame step is identical, including set 1 → set 2.
  - Sprocket holes are on the moving strip, so they move with the film. The hole spacing is now exactly 1/6 of a frame (`--frame-pitch / 6`, about 23.1px instead of 24px), so a set is a whole number of holes and they also line up at the loop point. The mask SVG has a `viewBox` + `preserveAspectRatio='none'` so it stretches to that spacing.
  - Images get `aspect-ratio: 3 / 2` so their height is fixed before they load (otherwise -50% would be wrong for a moment).
- **Speed:** `images.length * 4` seconds (60s for 15 frames), linear, infinite. Passed in as `--reel-duration`.
- **Hover:** `animation-play-state: paused` on the reel under the mouse. **Reduced motion:** `animation: none`. **Performance:** only `transform` animates, plus `will-change: transform`.
- The copy's images have `alt=""` and its `<ul>` is `aria-hidden="true"`, so screen readers read each frame once.

## Step 37: Home film reels touch the header
- **Changed:** `src/pages/index.astro` only
- **Cause of the gap:** `main { padding: 1.5rem; }` in `BaseLayout.astro` (1.5rem of cream above every page's content).
- **Fix:** `:global(main:has(> .reel-section)) { padding-top: 0; }` inside `@media (min-width: 901px)`. It matches only the `<main>` that directly contains the reel section (the home page), only on wide screens where the reels show. Side/bottom padding and every other page are unchanged; the blurb keeps its own padding and stays vertically centered.

## Step 38: Photo of Deb on the home page
- **Changed:** `src/pages/index.astro`
- `src/assets/images/about/aunt_debby.jpg` (square, 762x761) is imported and shown with `<Image />` above the h1 in the intro: centered, 200px wide (plus a 400px version for high-res screens), 8px rounded corners, alt "Deb Koffman".

## Step 39: No dashed border around the home intro
- **Changed:** `src/pages/index.astro`
- The intro `<section>` no longer has the global `placeholder` class (which drew the dashed gray border). Its padding (1.5rem), bottom margin, and centered text are now set on `.intro` in the page's own styles, so the spacing looks the same.

## Step 40: Sitting Buddhas card image
- **Changed:** `src/data/series.ts`
- Imported `src/assets/images/series/sitting-buddhas/doubt_buddha.JPG` as `doubtBuddhaImg` and set it as the Sitting Buddhas entry's `image` (the square card on `/art/series`), with alt text. The import path keeps the file's uppercase `.JPG`: paths are case-sensitive on most web hosts, so they must match the filename exactly.

## Step 41: Interactive Story Map on the About page
- **New:** `src/components/StoryMap.astro`, `src/data/aboutMap.ts`, `src/assets/images/about/map-territory-1200.jpg`. **Changed:** `src/pages/about.astro` (StoryMap placed right under the "About Deb" h1; the old content is still below it for now).
- **Layout:** the map `<Image />` (600/900/1200px versions) sits in `.map`, which is `position: relative`. Each spot in `mapSpots` gets a transparent `<button>` placed with `left/top/width/height` in % from its `box`, and a sibling `<span class="glow">` placed at its `glow` x/y in %. Because every value is a % of the map box, and the box always has the image's proportions, the buttons and glows scale with the image and stay on the arrows at any width.
- **Glow:** a 6%-wide circle (`aspect-ratio: 1` keeps it round), centered on its point with `translate: -50% -50%`, filled with a radial gradient of `#FFE45C` fading to transparent. `mix-blend-mode: multiply` (a blend mode: the glow's color is multiplied with the pixels under it, so white paper turns yellow and dark ink/red stays dark) makes it look like the glow is behind the arrow. `pointer-events: none` lets clicks go through to the button.
  - Pulse: `glow-pulse` keyframes (opacity + scale) on all glows. `.map:has(.spot:hover)` stops all pulsing while any spot is hovered.
  - Hover/focus: `.spot:hover + .glow` (`+` = the element right after) is brightest. Selected: `.spot[aria-pressed="true"] + .glow` is steady and bright.
  - `prefers-reduced-motion`: no pulse, no transitions, no text fade.
- **Accessibility:** buttons are labeled "<label>: <first 6 words>…" and use `aria-pressed` (tells screen readers which one is selected). Native buttons give Tab / Enter / Space for free; a 3px ink outline appears on `:focus-visible` (keyboard focus only). The panel text is `aria-live="polite"`, so screen readers read the new text when it changes.
- **Panel:** shows the selected text (1.75rem; 1.25rem under 700px) and fades in on each change (the script removes and re-adds the `is-showing` class). "next →" goes to the next spot and wraps back to "start" using `%`. "read it all" clears the selection and shows every text except the "start" instructions as one paragraph.

## Step 42: Story Map panel beside the map
- **Changed:** `src/components/StoryMap.astro`
- `.story-map` is now a 2-column grid on desktop: text panel `minmax(16rem, 1fr)` | map `2fr` (the map gets twice the space), 2.5rem gap, panel vertically centered against the map. The panel comes first in the HTML, so it's on the left. Text is left-aligned beside the map.
- Under 900px it's one column (panel on top, map below), with centered text, the same as before.
- "read it all" adds an `is-all` class to the text, making it smaller (1.25rem desktop, 1.125rem phone), so the long paragraph fits beside the map. Single spots stay at 1.75rem / 1.25rem.
- The map image `sizes` is now `(max-width: 900px) calc(100vw - 3rem), 800px`, since on desktop the map is only about 2/3 of the width.
- The % positioning of the buttons and glows is unchanged: they're measured from the `.map` box, which still has the image's exact proportions.

## Step 43: 13 map spots + full story for "read it all"
- **Changed:** `src/data/aboutMap.ts` (by me: 13 spots in story order, plus new `fullStory` export), `src/components/StoryMap.astro`
- StoryMap already builds one button + glow per entry in `mapSpots`, and "next →" uses the array order, so all 13 spots work with no code change. A quick script confirmed every spot has numeric `box`/`glow` values and that each glow falls inside its click box.
- **"read it all"** no longer joins the spot texts. `fullStory` is rendered at build time into a `<div class="full-story" hidden>` in the panel: an `<h2>About Deb</h2>`, the `aboutDeb` paragraphs, an `<h2>More About Deb</h2>`, and the `moreAboutDeb` paragraphs, each paragraph its own `<p>`. (`hidden` is an HTML attribute that hides an element until script removes it.)
- The script's `reveal(el, other)` shows one block, hides the other, and replays the fade-in. "read it all" reveals the full story; clicking a spot or "next →" goes back to that spot's text. The old `allText` / `data-all-text` code is gone.
- The full story keeps the smaller "read it all" size (`is-all`: 1.25rem desktop, 1.125rem phone). It's taller than the map, so on desktop the map sits centered beside it.

## Step 44: "read it all" opens a full-story section below the map
- **Changed:** `src/components/StoryMap.astro`
- The full story moved out of the panel into its own `<div class="full-story" id="full-story" hidden>` after the map. It's a third item in the `.story-map` grid with `grid-column: 1 / -1` (start at the first column line, end at the last), so it sits under both the panel and the map. Inside: `<h2>About Deb</h2>` + paragraphs, `<h2>More About Deb</h2>` + paragraphs, then a `↑ back to the map` link (`href="#story-map"`; the section now has `id="story-map"`).
- **Reading style:** 1.125rem, line-height 1.7 (the same as the About page's `.prose`), `max-width: 65ch`, centered, left-aligned, 1.25em between paragraphs, 2.5rem before the second heading. A short fade-in when it opens (none with reduced motion).
- **Toggle button:** `aria-expanded` ("false"/"true": tells screen readers whether the section it controls is open) and `aria-controls="full-story"` (says which section that is). The label switches between "read it all" and "hide full story". It no longer touches the selected spot or the panel text.
- **Open:** remove `hidden` → `heading.focus({ preventScroll: true })` → `section.scrollIntoView({ behavior, block: 'start' })`. `behavior` is `'smooth'`, or `'auto'` (instant) when `matchMedia('(prefers-reduced-motion: reduce)')` matches. The heading has `tabindex="-1"` (it can receive focus from script but isn't added to the Tab order). `scroll-margin-top: 1.5rem` leaves a little space above it.
- **Back link:** stops the normal `#` jump (`preventDefault`), focuses the toggle button (`preventScroll`), and scrolls the map section into view the same way. Without JavaScript the link still jumps to `#story-map`.
- **Removed:** the old `reveal()` helper and the `is-all` styles.

## Step 45: Glow only on hover, focus, and the selected arrow
- **Changed:** `src/components/StoryMap.astro` (CSS only)
- Removed the `glow-pulse` animation and the `.map:has(.spot:hover)` rule. Glows now start at `opacity: 0` (invisible).
- A glow shows (`opacity: 1`) only on the hovered spot (`.spot:hover + .glow`), the keyboard-focused spot (`.spot:focus-visible + .glow`), and the selected spot (`.spot[aria-pressed="true"] + .glow`). The script already sets `aria-pressed="true"` on just one spot at a time, so only one stays glowing.
- The fade in/out is `transition: opacity 0.2s, scale 0.2s`. With `prefers-reduced-motion` it's instant (no transition), the same as before.
- `cursor: pointer` on `.spot` is unchanged.

## Step 46: Bigger Her Art doors, centered vertically + Magic Lamp cover
- **Changed:** `src/pages/art.astro`, `src/components/LinkCard.astro`, `src/data/installations.ts`
- **Full width on /art only:** `:global(main:has(> .art-cards))` removes BaseLayout's 1100px column (`max-width: none`), so the three equal `1fr` columns span the window (up to 2000px). Same `:has()` trick as the Shop page.
- **Vertical centering:** `body:has(.art-cards)` becomes a flex column at least the window's height (`min-height: 100dvh`). `main` gets `flex: 1` (takes all the space under the header) and `justify-content: center`, so the doors sit in the middle of that space.
- **Door size:** in LinkCard's door variant, the `max-width: 420px` cap is gone. The image is now `width/height: auto` + `max-width: 100%` (fills its column) + `max-height: var(--door-max-h, none)`. A CSS variable is a named value; set on a parent, it's passed down to children. art.astro sets `--door-max-h: calc(100dvh - 14rem)` (the window height minus room for the header), so on wide screens all three doors still fit on screen. With `auto` sizes and two max limits, the browser keeps the image's proportions, so the hinge point (26%) stays in the right spot.
- Door images now optimize at 1200px wide (cards stay 800px), so bigger doors stay sharp.
- **Magic Lamp Book Launch** now has a cover image: `her-art/booths/magic-lamp-group.jpg` (imported as `MagicLampGroupImg`).

## Step 47: Center a lone gallery photo on installation pages
- **Changed:** `src/pages/art/installations/[slug].astro` (CSS only)
- The gallery is a 2-column grid, so pages with a single photo (Whisper Your Wish, Sing Your Heart Out) showed it in the left column. New rule: `.gallery li:only-child { grid-column: 1 / -1; }`. `:only-child` matches an element that is the only one inside its parent, and `1 / -1` means "from the first column line to the last", so the photo's cell spans the full width. The image already has `max-width: 480px; margin: 0 auto`, so it's centered in that cell.
- Pages with 2+ photos (Complaint Booth) are unchanged.

## Step 48: Deb's real books in the Books category
- **Renamed:** `src/assets/images/products/books/Food-For-The-Soul-cover.jpeg` → `food-for-the-soul-cover.jpeg` (lowercase-with-dashes, like every other image).
- **Changed:** `src/data/products.ts`: removed the 3 placeholder books (`book-1`–`book-3`) and added 12 real ones, in this order: Some Days, Being With A Block, This Might Be IT., The Blank Page, Standing, The Magic Lamp, On My Way, Seeing Things, Notice This., Facing Fear, Food For The Soul, How To Have A Marvelous Day. Each `id` is the title's URL slug (e.g. `/shop/books#facing-fear`). Price is a placeholder `0` except The Magic Lamp (`16.95`). Description is a placeholder `[Description of <title>]`. `imageAlt` is `Cover of <title>`. The placeholder Pages/Format specs were dropped.
- Some cover files are named differently from the title: `blank-page-cover.jpg` (The Blank Page) and `fear-cover.jpeg` (Facing Fear).
- `bookCover.jpg` (used by the Books category card in `shopCategories.ts`) is an identical copy of `being-with-a-block-cover.jpg`. It was left as is.
- **Uncropped covers:** `src/pages/shop/[slug].astro` and `src/components/ProductDialog.astro`. Product images normally sit in a square box (`aspect-ratio: 1 / 1`; `object-fit: contain` fits the whole image inside it). On the Books page only (`naturalShape = category.slug === 'books'`), a `natural-shape` class turns the box off (`aspect-ratio: auto`), so each cover shows at its own proportions.
  - Grid: `align-items: end` lines up the bottoms of covers in a row, so titles and prices stay level.
  - Overlay: `ProductDialog` takes a new optional `naturalShape` prop. The cover fills the column's width, with `max-height: calc(100dvh - 6rem)` (`dvh` = 1% of the visible window height), so a tall cover shrinks to fit the window instead of running off it.
  - Other categories are unchanged.

## Step 49: Cover image for Make Room for All You Need
- **Changed:** `src/data/installations.ts`: imported `src/assets/images/her-art/booths/room-for-all-you-need.jpg` as `MakeRoomImg` and set it as the entry's `image` (with `imageAlt`), so its card on `/art/installations` now shows a photo like the others. Its own page still has no `photos` gallery.

## Step 50: Multi-paragraph installation descriptions
- **Changed:** `src/data/installations.ts`: `description` can now be one string or an array of strings (`string | string[]`), one string per paragraph.
- **Changed:** `src/pages/art/installations/[slug].astro`: `paragraphs` turns `description` into a list either way (a single string becomes a one-item list), and each item is drawn as its own `<p class="description">`.

## Step 51: Make Room For All You Need print
- **Changed:** `src/data/products.ts`: added a print `print-make-room-for-all-you-need` (name "Make Room For All You Need") at the end of the Prints list, so it's at `/shop/prints#print-make-room-for-all-you-need`. Price `40` and size are placeholders, like the other prints.
- Image: `src/assets/images/products/prints/make-room-for-what-you-need.jpg`, imported as `makeRoomForAllYouNeedImg`. (No file named `make-room-for-all-you-need.jpg` exists; this is the matching file in the prints folder.)

## Step 52: Multi-paragraph product descriptions
- **Changed:** `src/data/products.ts`: `description` can now be one string or an array of strings (`string | string[]`), one per paragraph. Existing products (single strings) are unchanged.
- **Changed:** `src/components/ProductDialog.astro`:
  - At build time, `description` is turned into a list either way (a single string becomes a one-item list) before it's written into the page's JSON.
  - `#pd-description` is now a `<div>` instead of a `<p>` (a `<p>` can't hold other `<p>`s). The script fills it with one `<p>` per paragraph using `replaceChildren` (swaps out everything inside an element at once).
  - CSS: the old `.pd-description` spacing moved to `.pd-description :global(p)`. `:global()` is needed because those `<p>`s are made by the script, so Astro's scoped styles wouldn't reach them otherwise.

## Step 53: ArtBubble on the Make Room for All You Need page
- **Changed:** `src/data/installations.ts`: imported the print's image (`src/assets/images/products/prints/make-room-for-what-you-need.jpg`) as `MakeRoomPrintImg` and added a `bubble` to the `make-room-for-all-you-need` entry: that image, the text "Order this print", and the link `/shop/prints#print-make-room-for-all-you-need`.
- The part after `#` is the print's `id` from `products.ts`. Each product on `/shop/<slug>` is an `<li id={p.id}>`, so the browser scrolls to it (with `scroll-margin-top: 2rem` leaving a little space above it). It doesn't open the product overlay.
- No template change was needed: `src/pages/art/installations/[slug].astro` already draws an `ArtBubble` for any entry with a `bubble`.

## Step 54: ArtBubble takes two images
- **Changed:** `src/components/ArtBubble.astro`: the single `image` prop is replaced by two required props:
  - `bubbleImage`: shown in the floating 64px circle in the corner (cropped to fill it).
  - `cardImage`: shown in the card that opens when the circle is clicked (shown whole).
- **Changed:** `src/data/installations.ts`: `InstallationBubble` has `bubbleImage` and `cardImage` instead of `image`. Both existing bubbles use the same image for both, so they look the same as before: Signs of Well-Being (`SignsImg`) and Make Room for All You Need (`MakeRoomPrintImg`).
- **Changed:** `src/pages/art/installations/[slug].astro`: passes both images to `<ArtBubble>`.

## Step 55: Door bubble image on Make Room for All You Need
- **Changed:** `src/data/installations.ts`: imported `src/assets/images/bubbles/door-doorway.jpg` as `DoorDoorwayImg` and set it as the Make Room for All You Need bubble's `bubbleImage` (the floating circle). The opened card still shows the print (`MakeRoomPrintImg`).
- New folder `src/assets/images/bubbles/` holds images made for bubbles.

## Step 56: Card photo for One Way or Another
- **Changed:** `src/data/series.ts`: imported `src/assets/images/series/one-way-or-another/one-way-cover.JPG` as `oneWayCoverImg` and set it as the entry's `image`, so its card on `/art/series` shows a photo.
- The file's extension is uppercase (`.JPG`), so the import uses `.JPG` too. Macs ignore the difference, but many web servers and build machines don't, so the import has to match the real file name exactly.

## Step 57: Multi-paragraph series descriptions
- **Changed:** `src/data/series.ts`: `description` can now be one string or an array of strings (`string | string[]`), one per paragraph. Existing series (single strings) are unchanged.
- **Changed:** `src/pages/art/series/[slug].astro`:
  - `paragraphs` turns `description` into a list either way.
  - The description is now a `<div class="description">` holding one `<p>` per paragraph (in both places it's drawn: with and without an intro photo). It's a single wrapper because `.intro` is a 2-column grid (text | photo): separate `<p>`s would each become their own grid cell and break the layout.
  - CSS: `.description p` gets `1em` space below it, except the last one (`:last-child`), so a one-paragraph description looks exactly as before.

## Step 58: Center photo rows that aren't full
- **Changed:** `src/components/PhotoGrid.astro` (CSS only). The tiles used to be a CSS grid with 5 fixed columns (3 on screens ≤ 900px), so a short row sat on the left: One Way or Another's 2 photos took the first 2 of 5 columns.
- Now `.photo-grid` uses flexbox: `flex-wrap: wrap` (tiles that don't fit move to a new row) and `justify-content: center` (each row's tiles sit in the middle). Each tile (`li`) is `20%` wide (5 per row), or `calc(100% / 3)` (3 per row) on screens ≤ 900px. Tiles are still gapless squares.
- Applies to every series page: full rows look the same, and any row that isn't full is centered. On Sitting Buddhas (13 photos) the last row (3 on desktop, 1 on tablets/phones) is now centered.

## Step 59: Card photo for Sitting Buddhas
- **Changed:** `src/data/series.ts`: imported `src/assets/images/series/sitting-buddhas/all.jpg` as `sittingBuddhasCardImg` and set it as the Sitting Buddhas entry's `image` (with `imageAlt`), so its card on `/art/series` shows a photo. Chosen because it shows one buddha holding several feeling signs at once (Anger, Love, Comfort), which sums up the series.
