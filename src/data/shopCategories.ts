// shopCategories.ts
// The Shop's collections. This one list drives:
//   - the cards on the Shop landing page (/shop), via CardGrid
//   - one page per category at /shop/<slug>
// To add a category, add an entry here. The order here is the order of the cards.
//
// Each card's image is the category's cover photo, in
// src/assets/images/products/<slug>/ (e.g. printsCover.jpg). To change one:
//   1. Put the new image in that folder
//   2. Update its import below
//   3. Entries use it as:  image: printsCover, imageAlt: "...",

import type { ImageMetadata } from 'astro';
import notecards3x8Cover from '../assets/images/products/3x8-notecards/3x8notecardsCover.png';
import notecards4x6Cover from '../assets/images/products/4x6-notecards/4x6notecardsCover.jpg';
import soulSupportCover from '../assets/images/products/soul-support/soulSupportCover.jpg';
import booksCover from '../assets/images/products/books/bookCover.jpg';
import printsCover from '../assets/images/products/prints/printsCover.jpg';

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
	/** Image for this category's card on /shop, imported from src/assets/images/products/<slug>/. Optional:
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
		image: notecards3x8Cover,
		imageAlt: "Deb's 3x8 notecards",
		title: '3x8 Notecards',
		description: '[Placeholder description of the 3x8 notecards.]',
		details: notecardDetails,
	},
	{
		slug: '4x6-notecards',
		image: notecards4x6Cover,
		imageAlt: "Deb's 4x6 notecards",
		title: '4x6 Notecards',
		description: '[Placeholder description of the 4x6 notecards.]',
		details: notecardDetails,
	},
	{
		slug: 'soul-support',
		image: soulSupportCover,
		imageAlt: "Deb's Soul Support cards",
		title: 'Soul Support',
		description: '[Placeholder description of the Soul Support cards.]',
	},
	{
		slug: 'books',
		image: booksCover,
		imageAlt: "Deb's books",
		title: 'Books',
		description: "[Placeholder description of Deb's books.]",
	},
	{
		slug: 'prints',
		image: printsCover,
		imageAlt: "Deb's prints",
		title: 'Prints',
		description: "[Placeholder description of Deb's prints.]",
	},
];
