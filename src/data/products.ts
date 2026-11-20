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
// Book covers
import someDaysImg from '../assets/images/products/books/some-days-cover.jpg';
import beingWithABlockImg from '../assets/images/products/books/being-with-a-block-cover.jpg';
import thisMightBeItImg from '../assets/images/products/books/this-might-be-it-cover.jpg';
import theBlankPageImg from '../assets/images/products/books/blank-page-cover.jpg';
import standingImg from '../assets/images/products/books/standing-cover.jpg';
import theMagicLampImg from '../assets/images/products/books/the-magic-lamp-cover.jpg';
import onMyWayImg from '../assets/images/products/books/on-my-way-cover.jpg';
import seeingThingsImg from '../assets/images/products/books/seeing-things-cover.jpg';
import noticeThisImg from '../assets/images/products/books/notice-this-cover.jpg';
import facingFearImg from '../assets/images/products/books/fear-cover.jpeg';
import foodForTheSoulImg from '../assets/images/products/books/food-for-the-soul-cover.jpeg';
import howToHaveAMarvelousDayImg from '../assets/images/products/books/how-to-have-a-marvelous-day-cover.jpg';
// Prints
import makeRoomForAllYouNeedImg from '../assets/images/products/prints/make-room-for-what-you-need.jpg';

import originalSoulSupportImg from '../assets/images/products/soul-support/soul-support-cover.jpg';
import extraSoulSupportImg from '../assets/images/products/soul-support/extra-cover.jpg';

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
	/** One string, or an array of strings (one per paragraph). */
	description: string | string[];
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
		name: 'Original Soul Support Cards',
		price: 10,
		description: [
			'Use to get unstuck, expand your awareness, open your heart.  Put in drawers, pockets, your friend’s pocket.  Anywhere that supports your soul.',
			'Focus on a goal, a problem, a situation that isn’t working…choose 1 or more cards and take the messages to heart.',
			'Makes a great gift for coaching clients, artists, yoga practitioners. Put them in doctors’ offices, at the reception desk in hotels, spas, healing centers.  Give them to the toll booth attendant, leave on the table for your waiter, sneak them into books on your bookshelf.'
		],
		specs: [
			{ label: 'Cards', value: '[Number of cards]' },
			{ label: 'Size', value: 'size of pack of gum' },
		],
		image: originalSoulSupportImg,
	},
	{
		id: 'extra-soul-support-deck',
		categorySlug: 'soul-support',
		name: 'Extra Soul Support Cards',
		price: 10,
		description: '42 messages to lift your spirits and open your heart.  Comes with 2 blanks for your own message of support.  The size of a pack of gum, 1×3 comes in multicolorbrite stock…orange, gold, purple, lime green and red.  Color covers in orange, gold, purple, lime and red.  Wrapped in cellophane sleeve so you can carry them with you!!!!',
		specs: [{ label: 'Size', value: 'size of pack of gum' }],
		image: extraSoulSupportImg,
	},
	{
		id: 'soul-support-gift-set',
		categorySlug: 'soul-support',
		name: '[Soul Support Gift Set]',
		price: 35,
		description: '[Placeholder description of the gift set.]',
	},

	// ---- Books ----
	// Prices are placeholders (0) except The Magic Lamp.
	{
		id: 'some-days',
		categorySlug: 'books',
		name: 'Some Days',
		price: 0,
		description: '[Description of Some Days]',
		image: someDaysImg,
		imageAlt: 'Cover of Some Days',
	},
	{
		id: 'being-with-a-block',
		categorySlug: 'books',
		name: 'Being With A Block',
		price: 0,
		description: '[Description of Being With A Block]',
		image: beingWithABlockImg,
		imageAlt: 'Cover of Being With A Block',
	},
	{
		id: 'this-might-be-it',
		categorySlug: 'books',
		name: 'This Might Be IT.',
		price: 0,
		description: '[Description of This Might Be IT.]',
		image: thisMightBeItImg,
		imageAlt: 'Cover of This Might Be IT.',
	},
	{
		id: 'the-blank-page',
		categorySlug: 'books',
		name: 'The Blank Page',
		price: 0,
		description: '[Description of The Blank Page]',
		image: theBlankPageImg,
		imageAlt: 'Cover of The Blank Page',
	},
	{
		id: 'standing',
		categorySlug: 'books',
		name: 'Standing',
		price: 0,
		description: '[Description of Standing]',
		image: standingImg,
		imageAlt: 'Cover of Standing',
	},
	{
		id: 'the-magic-lamp',
		categorySlug: 'books',
		name: 'The Magic Lamp',
		price: 16.95,
		description: '[Description of The Magic Lamp]',
		image: theMagicLampImg,
		imageAlt: 'Cover of The Magic Lamp',
	},
	{
		id: 'on-my-way',
		categorySlug: 'books',
		name: 'On My Way',
		price: 0,
		description: '[Description of On My Way]',
		image: onMyWayImg,
		imageAlt: 'Cover of On My Way',
	},
	{
		id: 'seeing-things',
		categorySlug: 'books',
		name: 'Seeing Things',
		price: 0,
		description: '[Description of Seeing Things]',
		image: seeingThingsImg,
		imageAlt: 'Cover of Seeing Things',
	},
	{
		id: 'notice-this',
		categorySlug: 'books',
		name: 'Notice This.',
		price: 0,
		description: '[Description of Notice This.]',
		image: noticeThisImg,
		imageAlt: 'Cover of Notice This.',
	},
	{
		id: 'facing-fear',
		categorySlug: 'books',
		name: 'Facing Fear',
		price: 0,
		description: '[Description of Facing Fear]',
		image: facingFearImg,
		imageAlt: 'Cover of Facing Fear',
	},
	{
		id: 'food-for-the-soul',
		categorySlug: 'books',
		name: 'Food For The Soul',
		price: 0,
		description: '[Description of Food For The Soul]',
		image: foodForTheSoulImg,
		imageAlt: 'Cover of Food For The Soul',
	},
	{
		id: 'how-to-have-a-marvelous-day',
		categorySlug: 'books',
		name: 'How To Have A Marvelous Day',
		price: 0,
		description: '[Description of How To Have A Marvelous Day]',
		image: howToHaveAMarvelousDayImg,
		imageAlt: 'Cover of How To Have A Marvelous Day',
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
	{
		id: 'print-make-room-for-all-you-need',
		categorySlug: 'prints',
		name: 'Make Room For All You Need',
		price: 40,
		description: [
			'These doors are a reminder that my feelings  and needs matter.  I need a space, a place, time to be with them, experience them.  Anger is as valuable as dreaming, as valuable as making mistakes, as valuable as not knowing. Being with them shows me what they have to offer me.  They each serve me in some way.',
			'I can’t always be ‘perfect’ and ‘certain’ and ‘happy’.  For me, being a functional, resourceful, creative human being means accepting, respecting, making room for all parts of me.',
		],
		image: makeRoomForAllYouNeedImg,
		imageAlt: 'Make Room For All You Need print',
		specs: [
			{ label: 'Size', value: '8.5×11' },
		],
	},
];
