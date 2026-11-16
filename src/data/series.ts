// series.ts
// The list of Deb's cartoon series. This one list drives:
//   - the grid on /art/series
//   - one page per series at /art/series/<slug>
// To add a series, add an entry here. The order here is the order on the site.
//
// To add an image later:
//   1. put the file in src/assets/images/series/, e.g. headstones.jpg
//   2. import it at the top:  import headstonesImg from '../assets/images/series/headstones.jpg';
//   3. set it on the entry:   image: headstonesImg,

import type { ImageMetadata } from 'astro';
import headstoneImg from '../assets/images/series/lady-tulips.png';
import courageImg from '../assets/images/series/courage-bcard.jpg';

export interface Series {
	/** URL-friendly id: lowercase, words joined by dashes. Becomes /art/series/<slug>. */
	slug: string;
	/** The name shown on the site. */
	title: string;
	/** A short description of the series. */
	description: string;
	/** Cover image, imported from src/assets/images/series/. Optional. */
	image?: ImageMetadata;
	/** Describes the image for screen readers. Leave empty if the title says it all. */
	imageAlt?: string;
}

export const series: Series[] = [
	{
		slug: 'headstones',
		title: 'Headstones',
		description: 'I have often thought about death and how I want to live my life.   What really matters?  What nourishes my heart and soul?  This series made me laugh, and some of the headstones touched my heart.  They are made of cardboard, and the ones placed in the graveyard are photoshopped in.',
		image: headstoneImg,
	},
	{
		slug: 'food-for-the-soul',
		title: 'Food for the Soul',
		description: '[Placeholder description of the Food for the Soul series.]',
		image: courageImg,
	},
	{
		slug: 'wheel',
		title: 'Wheel',
		description: '[Placeholder description of the Wheel series.]',
	},
	{
		slug: 'sitting-buddhas',
		title: 'Sitting Buddhas',
		description: '[Placeholder description of the Sitting Buddhas series.]',
	},
	{
		slug: 'one-way-or-another',
		title: 'One Way or Another',
		description: '[Placeholder description of the One Way or Another series.]',
	},
	{
		slug: 'love-your-body',
		title: 'Love Your Body',
		description: '[Placeholder description of the Love Your Body series.]',
	},
	{
		slug: 'just-a-moment',
		title: 'Just a Moment',
		description: '[Placeholder description of the Just a Moment series.]',
	},
];
