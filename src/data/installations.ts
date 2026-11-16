// installations.ts
// The list of Deb's installations, booths, and events. This one list drives:
//   - the grid on /art/installations
//   - one page per entry at /art/installations/<slug>
// To add one, add an entry here. The order here is the order on the site.
//
// To add an image later:
//   1. put the file in src/assets/images/installations/, e.g. complaint-booth.jpg
//   2. import it at the top:  import complaintImg from '../assets/images/installations/complaint-booth.jpg';
//   3. set it on the entry:   image: complaintImg,

import type { ImageMetadata } from 'astro';

/** What kind of piece this is. */
export type InstallationKind = 'booth' | 'installation' | 'event';

export interface Installation {
	/** URL-friendly id: lowercase, words joined by dashes. Becomes /art/installations/<slug>. */
	slug: string;
	/** The name shown on the site. */
	title: string;
	/** Booth, installation, or event. */
	kind: InstallationKind;
	/** A short description. */
	description: string;
	/** Cover image, imported from src/assets/images/installations/. Optional. */
	image?: ImageMetadata;
	/** Describes the image for screen readers. Leave empty if the title says it all. */
	imageAlt?: string;
}

export const installations: Installation[] = [
	{
		slug: 'magic-lamp-book-launch',
		title: 'Magic Lamp Book Launch',
		kind: 'event',
		description: '[Placeholder description of the Magic Lamp Book Launch.]',
	},
	{
		slug: 'sing-your-heart-out-booth',
		title: 'Sing Your Heart Out Booth',
		kind: 'booth',
		description: '[Placeholder description of the Sing Your Heart Out Booth.]',
	},
	{
		slug: 'signs-of-well-being',
		title: 'Signs of Well-Being Installation',
		kind: 'installation',
		description: '[Placeholder description of the Signs of Well-Being Installation.]',
	},
	{
		slug: 'whisper-your-wish-booth',
		title: 'Whisper Your Wish Booth',
		kind: 'booth',
		description: '[Placeholder description of the Whisper Your Wish Booth.]',
	},
	{
		slug: 'complaint-booth',
		title: 'Complaint Booth',
		kind: 'booth',
		description: '[Placeholder description of the Complaint Booth.]',
	},
	{
		slug: 'make-room-for-all-you-need',
		title: 'Make Room for All You Need Installation',
		kind: 'installation',
		description: '[Placeholder description of the Make Room for All You Need Installation.]',
	},
];
