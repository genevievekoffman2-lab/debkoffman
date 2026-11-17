// frames.ts
// Deb's hand-drawn picture frames (PNG files with a transparent "window" in
// the middle). CardGrid lays one over each card when given `frames`.
//
// `window` is where the transparent window is, as percentages of the frame
// image (measured from the PNG's transparency). The card's photo is placed
// there, behind the frame, so it shows through.
//
// To add a frame: put the PNG in src/assets/images/frames/, import it here,
// and add an entry with its window box.
import type { ImageMetadata } from 'astro';
import frameGreen from '../assets/images/frames/frame-green.png';
import frameOrange from '../assets/images/frames/frame-orange.png';
import framePink from '../assets/images/frames/frame-pink.png';
import framePurple from '../assets/images/frames/frame-purple.png';
import frameTeal from '../assets/images/frames/frame-teal.png';
import frameYellow from '../assets/images/frames/frame-yellow.png';

export interface Frame {
	image: ImageMetadata;
	/** The transparent window, in % of the frame's width (left, width) and height (top, height). */
	window: { left: number; top: number; width: number; height: number };
}

export const frames: Frame[] = [
	{ image: framePink, window: { left: 24.5, top: 24.3, width: 49.5, height: 52.3 } },
	{ image: frameTeal, window: { left: 22.4, top: 25.3, width: 50.8, height: 53.8 } },
	{ image: frameYellow, window: { left: 27.6, top: 23.9, width: 43.6, height: 53.2 } },
	{ image: framePurple, window: { left: 27.1, top: 24.4, width: 49.4, height: 51.0 } },
	{ image: frameGreen, window: { left: 27.0, top: 21.4, width: 47.3, height: 55.0 } },
	{ image: frameOrange, window: { left: 31.8, top: 22.9, width: 41.6, height: 50.5 } },
];
