// products.ts
// Every product in the Shop. Each product belongs to one category through
// `categorySlug`, which must match a slug in shopCategories.ts.
// The category pages (/shop/<slug>) show the products whose categorySlug matches.
//
// ALL PRODUCTS AND PRICES BELOW ARE PLACEHOLDERS.
//
// To add an image later:
//   1. put the file in its category's folder: src/assets/images/products/<category-slug>/
//      e.g. src/assets/images/products/3x8-notecards/different-views.jpg
//   2. import it at the top:
//        import differentViewsImg from '../assets/images/products/3x8-notecards/different-views.jpg';
//   3. set it on the product:  image: differentViewsImg, imageAlt: '...',

import type { ImageMetadata } from 'astro'; 
import barrelOWordsImg from '../assets/images/products/3x8-notecards/barrel-o-words.jpg';
import differentViewsImg from '../assets/images/products/3x8-notecards/different-views.jpg';
import feelingSecureImg from '../assets/images/products/3x8-notecards/feeling-secure.jpg';

/** One label/value row shown in the overlay, e.g. { label: 'Size', value: '3 × 8 in' }. */
export interface ProductSpec {
	label: string;
	value: string;
}

export interface Product {
	/** Unique id. Never shown; used by the cart. Keep it stable once real orders exist. */
	id: string;
	/** Which shop category this belongs to (a slug from shopCategories.ts). */
	categorySlug: string;
	name: string;
	/** Price in US dollars, e.g. 4.5 for $4.50. */
	price: number;
	description: string;
	/** Product photo, imported from src/assets/images/products/. Optional. */
	image?: ImageMetadata;
	imageAlt?: string;
	/** Label/value rows shown in the overlay (Size, Pages, …). Optional. */
	specs?: ProductSpec[];
	/** A sentence shown in the overlay's "Details" row. Optional.
	 *  If left out, the category's `details` (shopCategories.ts) is used instead. */
	details?: string;
}

/** Turns 4.5 into "$4.50". */
export function formatPrice(price: number): string {
	return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
}

export const products: Product[] = [
	// ---- 3x8 Notecards ----
	// Prices are placeholders.
	{
		id: '3x8-feeling-secure',
		categorySlug: '3x8-notecards',
		name: 'Feeling Secure',
		price: 5,
		description: 'Mail them, frame them, meditate on them.',
		image: feelingSecureImg,
		imageAlt: 'Debs Cartoon of Feeling Secure',
		specs: [
			{ label: 'Size', value: '3 × 8 in' },
		],
	},
	{
		id: '3x8-highlight-of-the-journey',
		categorySlug: '3x8-notecards',
		name: 'Highlight of the Journey',
		price: 5,
		description: '[Placeholder description of this notecard.]',
		specs: [
			{ label: 'Size', value: '3 × 8 in' },
		],
	},
	{
		id: '3x8-now-leaving-pain',
		categorySlug: '3x8-notecards',
		name: 'Now Leaving Pain',
		price: 5,
		description: '[Placeholder description of this notecard.]',
		specs: [
			{ label: 'Size', value: '3 × 8 in' },
		],
	},
	{
		id: '3x8-safe-challenging-certain',
		categorySlug: '3x8-notecards',
		name: 'Safe, Challenging, Certain',
		price: 5,
		description: '[Placeholder description of this notecard.]',
		specs: [
			{ label: 'Size', value: '3 × 8 in' },
		],
	},
	{
		id: '3x8-its-what-it-inspires',
		categorySlug: '3x8-notecards',
		name: 'It’s What It Inspires',
		price: 5,
		description: '[Placeholder description of this notecard.]',
		specs: [
			{ label: 'Size', value: '3 × 8 in' },
		],
	},
	{
		id: '3x8-peace-is-a-choice',
		categorySlug: '3x8-notecards',
		name: 'Peace is a Choice',
		price: 5,
		description: '[Placeholder description of this notecard.]',
		specs: [
			{ label: 'Size', value: '3 × 8 in' },
		],
	},
	{
		id: '3x8-travel-the-road-in-your-own-way',
		categorySlug: '3x8-notecards',
		name: 'Travel the Road In Your Own Way',
		price: 5,
		description: '[Placeholder description of this notecard.]',
		specs: [
			{ label: 'Size', value: '3 × 8 in' },
		],
	},
	{
		id: '3x8-the-end-is-just-the-beginning',
		categorySlug: '3x8-notecards',
		name: 'The end is just the beginning',
		price: 5,
		description: '[Placeholder description of this notecard.]',
		specs: [
			{ label: 'Size', value: '3 × 8 in' },
		],
	},
	{
		id: '3x8-different-views',
		categorySlug: '3x8-notecards',
		name: 'Different Views',
		price: 5,
		description: '[Placeholder description of this notecard.]',
		image: differentViewsImg,
		imageAlt: 'Debs Cartoon of Different Views',
		specs: [
			{ label: 'Size', value: '3 × 8 in' },
		],
	},
	{
		id: '3x8-then-when-now',
		categorySlug: '3x8-notecards',
		name: 'Then, When, Now',
		price: 5,
		description: '[Placeholder description of this notecard.]',
		specs: [
			{ label: 'Size', value: '3 × 8 in' },
		],
	},
	{
		id: '3x8-barrel-o-words',
		categorySlug: '3x8-notecards',
		name: 'Barrel’ O Words',
		price: 5,
		description: 'Sometimes I just can’t find the right words.',
		image: barrelOWordsImg,
		imageAlt: 'Debs Cartoon of Barrel O Words',
		specs: [
			{ label: 'Size', value: '3 × 8 in' },
		],
	},
	{
		id: '3x8-boxed-notecards',
		categorySlug: '3x8-notecards',
		name: 'Boxed 3.5x8.5 Notecards',
		price: 25,
		description: '[Placeholder description of the boxed set.]',
		specs: [
			{ label: 'Size', value: '3.5 × 8.5 in' },
			{ label: 'Includes', value: '[Number of cards] + envelopes' },
		],
	},

	// ---- 4x6 Notecards ----
	{
		id: '4x6-notecard-1',
		categorySlug: '4x6-notecards',
		name: '[4x6 Notecard 1]',
		price: 4.5,
		description: '[Placeholder description of this notecard.]',
		specs: [
			{ label: 'Size', value: '4 × 6 in' },
		],
	},
	{
		id: '4x6-notecard-2',
		categorySlug: '4x6-notecards',
		name: '[4x6 Notecard 2]',
		price: 4.5,
		description: '[Placeholder description of this notecard.]',
		specs: [
			{ label: 'Size', value: '4 × 6 in' },
		],
	},
	{
		id: '4x6-notecard-3',
		categorySlug: '4x6-notecards',
		name: '[4x6 Notecard 3]',
		price: 4.5,
		description: '[Placeholder description of this notecard.]',
		specs: [
			{ label: 'Size', value: '4 × 6 in' },
		],
	},

	// ---- Soul Support ----
	{
		id: 'soul-support-deck',
		categorySlug: 'soul-support',
		name: '[Soul Support Card Deck]',
		price: 25,
		description: '[Placeholder description of the Soul Support deck.]',
		specs: [
			{ label: 'Cards', value: '[Number of cards]' },
			{ label: 'Size', value: '[Card size]' },
		],
	},
	{
		id: 'soul-support-single',
		categorySlug: 'soul-support',
		name: '[Soul Support Single Card]',
		price: 4,
		description: '[Placeholder description of a single Soul Support card.]',
		specs: [{ label: 'Size', value: '[Card size]' }],
	},
	{
		id: 'soul-support-gift-set',
		categorySlug: 'soul-support',
		name: '[Soul Support Gift Set]',
		price: 35,
		description: '[Placeholder description of the gift set.]',
	},

	// ---- Books ----
	{
		id: 'book-1',
		categorySlug: 'books',
		name: '[Book Title 1]',
		price: 18,
		description: '[Placeholder description of this book.]',
		specs: [
			{ label: 'Pages', value: '[Pages]' },
			{ label: 'Format', value: '[Paperback / Hardcover]' },
		],
	},
	{
		id: 'book-2',
		categorySlug: 'books',
		name: '[Book Title 2]',
		price: 18,
		description: '[Placeholder description of this book.]',
		specs: [
			{ label: 'Pages', value: '[Pages]' },
			{ label: 'Format', value: '[Paperback / Hardcover]' },
		],
	},
	{
		id: 'book-3',
		categorySlug: 'books',
		name: '[Book Title 3]',
		price: 18,
		description: '[Placeholder description of this book.]',
		specs: [
			{ label: 'Pages', value: '[Pages]' },
			{ label: 'Format', value: '[Paperback / Hardcover]' },
		],
	},

	// ---- Prints ----
	// Prices and sizes are placeholders.
	{
		id: 'print-sit-with-it-all',
		categorySlug: 'prints',
		name: 'Sit With It All',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-headstones',
		categorySlug: 'prints',
		name: 'Headstones',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-2-paths',
		categorySlug: 'prints',
		name: '2 Paths',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-observing-fear',
		categorySlug: 'prints',
		name: 'Observing Fear',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-transforming-fear',
		categorySlug: 'prints',
		name: 'Transforming Fear',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-my-mind',
		categorySlug: 'prints',
		name: 'My Mind',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-creative-block',
		categorySlug: 'prints',
		name: 'Creative Block',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-watching-the-grass-grow',
		categorySlug: 'prints',
		name: 'Watching The Grass Grow',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-instant-clarity',
		categorySlug: 'prints',
		name: 'Instant Clarity',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-instant-compassion',
		categorySlug: 'prints',
		name: 'Instant Compassion',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-instant-courage',
		categorySlug: 'prints',
		name: 'Instant Courage',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-writing',
		categorySlug: 'prints',
		name: 'Writing',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-one-two-many-views',
		categorySlug: 'prints',
		name: 'One, Two Many Views',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-box-of-views',
		categorySlug: 'prints',
		name: 'Box Of Views',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-make-space',
		categorySlug: 'prints',
		name: 'Make Space',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-marvelous-day',
		categorySlug: 'prints',
		name: 'Marvelous Day',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-map-of-yesterday',
		categorySlug: 'prints',
		name: 'Map of Yesterday',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-looking',
		categorySlug: 'prints',
		name: 'Looking',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
	{
		id: 'print-map-of-the-territory',
		categorySlug: 'prints',
		name: 'Map Of The Territory',
		price: 40,
		description: '[Placeholder description of this print.]',
		specs: [
			{ label: 'Size', value: '[Print size]' },
		],
	},
];
