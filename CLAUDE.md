# Deb Koffman Art website

## What this is
A website for my late aunt Deb Koffman's art, to show her work, tell her
story, and sell her cards, prints, and books. Her art is lighthearted,
hand-drawn mindfulness cartoons. Her tagline: "Cultivating kindness,
1 cartoon at a time."

## Tech
- Astro (minimal starter) + TypeScript
- Plain CSS; GSAP later for animation
- Site colors are CSS variables on `:root` in `src/layouts/BaseLayout.astro`:
  `--pink` (#ed9ba3) and `--ink` (#13202e)
- Content lives in TypeScript data files in `src/data/`:
  `series.ts`, `installations.ts`, `products.ts`, `shopCategories.ts`, and
  `galleries/<series-slug>.ts` (photo lists for series pages)
- Images live in `src/assets/images/` (so Astro can optimize them), in folders
  like `her-art/`, `series/<series-slug>/`, `products/<category-slug>/`.
  `public/images/` holds only images used as-is, like the header art.
  Name files with her catalog codes where there is one (e.g. p-grass.jpg)

## Site structure
- Top bar: Home · About Deb · Her Art · Shop
- Home: Watching the Grass Grow print as the hero (walking striped-stocking
  legs animation later), short intro, "Draw a Soul Support card"
- About Deb: fixed page
- Her Art: three doors: Series, Installations, More to Marvel At (placeholder page)
  - Series: Headstones, Food for the Soul, Wheel, Sitting Buddhas,
    One Way or Another, Love Your Body, Just a Moment
    (each at /art/series/<slug>; can have an intro photo and a PhotoGrid)
  - Installations: Complaint Booth, Whisper Your Wish Booth,
    Sing Your Heart Out Booth, Signs of Well-Being, Make Room for All You Need,
    Magic Lamp Book Launch (each at /art/installations/<slug>; can have
    a photo gallery and an ArtBubble)
- Shop: a grid of category cards (3x8 notecards, 4x6 notecards, Soul Support,
  Books, Prints), each opening /shop/<slug> with its products; clicking a
  product opens ProductDialog. Products have anchor ids (/shop/prints#print-1)

## Reusable components (`src/components/`)
- `CardGrid`: grid of clickable square cards (Series, Installations, Shop)
- `LinkCard`: one big clickable card; `variant="door"` swings open on hover (Her Art doors)
- `PhotoGrid`: gapless, full-width grid of square photos that open in the lightbox
- `Lightbox`: shared full-photo overlay; any button with `data-lightbox-src` opens it
- `ArtBubble`: floating bottom-right bubble with image, text, and link (desktop only)
- `ProductDialog`: product details overlay on shop category pages

## How I want to work
- One step at a time. Explain what you're about to do before doing it,
  then stop so I can check it at localhost:4321.
- Document everything: file paths, commands, and define any new term.
- Keep a running NOTES.md log of what was built and why.
- Suggest a git commit message after each working step.