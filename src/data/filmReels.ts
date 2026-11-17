// filmReels.ts
// The two "film reels" on the home page: vertical strips of Deb's walking
// striped-stocking feet panels, one on each side of the intro.
//
// Images live in src/assets/images/walking/ (all 1200x800). Each reel is a
// list of file names WITHOUT ".jpg", top to bottom.
// To add a panel: put the .jpg in that folder and add its name to a list.
import type { ImageMetadata } from 'astro';

export const leftReel: string[] = [
	'ground',
	'walking-on-skates',
	'sand',
	'rain',
	'curtain-blue',
	'ladder',
	'robe',
	'sidewalk',
	'baggage',
	'cowboy-boots',
	'checkerboard',
	'clouds',
	'teddy-bear',
	'polka-dot-shoes',
	'backwards',
];

export const rightReel: string[] = [
	'air',
	'walking-on-stilts',
	'upside-down',
	'snow',
	'ball-and-chain',
	'cast',
	'skating-rink',
	'boots',
	'hammock',
	'curtain-hill',
	'white-socks',
	'uphill',
	'robe-pointy-shoes',
	'tail',
	'swing',
];

/** One image in a reel, ready for <Image />. */
export interface ReelImage {
	src: ImageMetadata;
	alt: string;
}

// import.meta.glob (a Vite feature Astro uses) loads every .jpg in the folder
// at build time, keyed by path, e.g. '../assets/images/walking/sand.jpg'.
const walkingImages = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/images/walking/*.jpg',
	{ eager: true },
);

/** Turns a list of names into images with alt text. Fails the build on a typo. */
export function getReelImages(names: string[]): ReelImage[] {
	return names.map((name) => {
		const mod = walkingImages[`../assets/images/walking/${name}.jpg`];
		if (!mod) {
			throw new Error(`filmReels.ts: no image src/assets/images/walking/${name}.jpg`);
		}
		const words = name.replace(/-/g, ' ');
		const alt = name.startsWith('walking')
			? `Deb's striped-stocking feet ${words}` // "…feet walking on stilts"
			: `Deb's striped-stocking feet walking: ${words}`; // "…feet walking: sand"
		return { src: mod.default, alt };
	});
}
