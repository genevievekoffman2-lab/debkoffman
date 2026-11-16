// lightbox.ts
// Helper for the Lightbox component (src/components/Lightbox.astro).
//
// lightboxSrc(image) makes a large webp copy of an imported image (up to 1600px
// wide, never bigger than the original) and returns its URL. Put that URL in a
// button's data-lightbox-src attribute to open it in the lightbox.
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

export async function lightboxSrc(image: ImageMetadata): Promise<string> {
	const full = await getImage({ src: image, width: Math.min(1600, image.width), format: 'webp' });
	return full.src;
}
