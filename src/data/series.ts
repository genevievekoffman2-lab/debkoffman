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
import breastImg from '../assets/images/series/breasts-arms-800.jpg';
import { sittingBuddhasPhotos } from './galleries/sitting-buddhas';
import sittingBuddhasExhibitImg from '../assets/images/series/sitting-buddhas/sittingbuddhas-exhibit.jpg';

/** One photo in a series' photo grid (PhotoGrid). */
export interface GalleryPhoto {
	/** The image, imported from src/assets/images/. */
	src: ImageMetadata;
	/** Describes the photo for screen readers. Required: say what's in it. */
	alt: string;
}

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
	/** Photos for the full-width grid on this series' page. Optional: without it, the
	 *  page shows a "[Pieces in this series go here]" placeholder. Keep each series'
	 *  list in its own file in src/data/galleries/. */
	photos?: GalleryPhoto[];
	/** Photo shown to the right of the description, uncropped, no taller than about
	 *  4 lines of text. The row spans the full screen width. Optional: without it,
	 *  the description is centered on its own. */
	introImage?: ImageMetadata;
	/** Describes the intro photo for screen readers. */
	introImageAlt?: string;
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
		description: 'This cardboard installation of sitting buddhas speaks to my need to remember that I can simply sit with my feelings.  Hold them, be with them, not judge them.  They are all equal, no one better or worse.  Just different.  All worth experiencing.',
		photos: sittingBuddhasPhotos,
		introImage: sittingBuddhasExhibitImg,
		introImageAlt: 'Four Sitting Buddha paintings hanging in a gallery, holding signs that read "Desire," "Love," "Pain," and "Doubt"',
	},
	{
		slug: 'one-way-or-another',
		title: 'One Way or Another',
		description: '[Placeholder description of the One Way or Another series.]',
	},
	{
		slug: 'love-your-body',
		title: 'Love Your Body',
		description: 'These cardboard costumes (and accompanying song) became a little performance piece.  These are my friends from my authentic movement womens group.  You can watch the youtube video.  You can also see more pictures in my Don’t Stare Its Not Nice book.',
		image: breastImg,
		imageAlt: 'Deb and friends with breast art',
	},
	{
		slug: 'just-a-moment',
		title: 'Just a Moment',
		description: '[Placeholder description of the Just a Moment series.]',
	},
];
