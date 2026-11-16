// shopCategories.ts
// The Shop's collections. This one list drives:
//   - the cards on the Shop landing page (/shop), via CardGrid
//   - one page per category at /shop/<slug>
// To add a category, add an entry here. The order here is the order of the cards.
//
// To give a card a real image (instead of the dashed placeholder):
//   1. Put the image in src/assets/images/shop/, e.g. books.jpg
//   2. Import it at the top of this file:
//        import booksImg from '../assets/images/shop/books.jpg';
//   3. Add it to the entry:  image: booksImg, imageAlt: "A stack of Deb's books",

import type { ImageMetadata } from 'astro';

export interface ShopCategory {
	/** URL-friendly id: lowercase, words joined by dashes. Becomes /shop/<slug>. */
	slug: string;
	/** The name shown on its card on /shop and as the page title. */
	title: string;
	/** A short description shown at the top of the category page. */
	description: string;
	/** Default sentence for the "Details" row in the product overlay, for every
	 *  product in this category. A product's own `details` replaces it. Optional. */
	details?: string;
	/** Image for this category's card on /shop, imported from src/assets/images/shop/. Optional:
	 *  without it, the card shows a dashed placeholder labeled with the title. */
	image?: ImageMetadata;
	/** Description of the image for screen readers. */
	imageAlt?: string;
}

const notecardDetails =
	'Single sheet notecard with colorbrite envelope wrapped in cellophane sleeve.';

export const shopCategories: ShopCategory[] = [
	{
		slug: '3x8-notecards',
		title: '3x8 Notecards',
		description: '[Placeholder description of the 3x8 notecards.]',
		details: notecardDetails,
	},
	{
		slug: '4x6-notecards',
		title: '4x6 Notecards',
		description: '[Placeholder description of the 4x6 notecards.]',
		details: notecardDetails,
	},
	{
		slug: 'soul-support',
		title: 'Soul Support',
		description: '[Placeholder description of the Soul Support cards.]',
	},
	{
		slug: 'books',
		title: 'Books',
		description: "[Placeholder description of Deb's books.]",
	},
	{
		slug: 'prints',
		title: 'Prints',
		description: "[Placeholder description of Deb's prints.]",
	},
];
