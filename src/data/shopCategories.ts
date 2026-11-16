// shopCategories.ts
// The Shop's collections. This one list drives:
//   - the sub-navigation bar on every shop page (ShopNav)
//   - one page per category at /shop/<slug>
// To add a category, add an entry here. The order here is the order in the bar.

export interface ShopCategory {
	/** URL-friendly id: lowercase, words joined by dashes. Becomes /shop/<slug>. */
	slug: string;
	/** The name shown in the bar and as the page heading. */
	title: string;
	/** A short description shown at the top of the category page. */
	description: string;
	/** Default sentence for the "Details" row in the product overlay, for every
	 *  product in this category. A product's own `details` replaces it. Optional. */
	details?: string;
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
