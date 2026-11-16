// installations.ts
// The list of Deb's installations, booths, and events. This one list drives:
//   - the grid on /art/installations
//   - one page per entry at /art/installations/<slug>
// To add one, add an entry here. The order here is the order on the site.
//
// Images live in src/assets/images/her-art/booths/ (any folder under src/assets/ works).
//
// COVER IMAGE (the card on the grid page):
//   1. put the file in the folder, e.g. complaint-t.jpg
//   2. import it at the top:  import ComplaintBoothImg from '../assets/images/her-art/booths/complaint-t.jpg';
import complaintMartyImg from '../assets/images/her-art/booths/complaint-marty-800.jpg';
//   3. set it on the entry:   image: ComplaintBoothImg, imageAlt: '...',
//
// GALLERY PHOTOS (shown on the entry's own page, in this order):
//   1. put the file in the folder and import it at the top, as above
//   2. add it to the entry's `photos` list:
//        photos: [
//          { src: ComplaintBoothImg, alt: 'What the photo shows' },
//          { src: complaintMartyImg, alt: '...', caption: 'Optional text under the photo' },
//        ],
//   The cover image isn't added to the gallery automatically; list it in `photos` too if you want it there.

import type { ImageMetadata } from 'astro';
import ComplaintBoothImg from '../assets/images/her-art/booths/complaint-t.jpg';
import SingYourHeartOutImg from '../assets/images/her-art/booths/sing-800.jpg';
import SingYourHeartOut_MartyImg from '../assets/images/her-art/booths/sing-mart-800.jpg';
import WhisperWishImg from '../assets/images/her-art/booths/whisper-300dpi.jpg';
import WhisperWish_MartyImg from '../assets/images/her-art/booths/whisper-mart.jpg';
import SignsImg from '../assets/images/her-art/booths/signs-800.jpg';

/** One photo in an entry's gallery. */
export interface InstallationPhoto {
	/** The imported image. */
	src: ImageMetadata;
	/** Describes the photo for screen readers. */
	alt: string;
	/** Optional text shown under the photo. */
	caption?: string;
}

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
	/** Photos shown on the entry's own page. Optional; without it the page shows a placeholder. */
	photos?: InstallationPhoto[];
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
		image: SingYourHeartOutImg,
		imageAlt: 'Debs Sing Your Heart out Booth',
		description: 'Everybody needs a safe place to just sing their heart out….I made this out of a recycled refrigerator box and acrylic paint.  I displayed booth in gallery, people had fun singing from the inside and out.',
		photos: [
			{
				src: SingYourHeartOut_MartyImg,
				alt: 'Sing your heart out Booth with Marty',
			}, 
		],
	},
	{ //TODO add link to ordering this print
		slug: 'signs-of-well-being',
		title: 'Signs of Well-Being Installation',
		kind: 'installation',
		description: 'I need to hear, and see words that encourage my well-being, lift my spirits and open my heart.  These do that for me. I made them big so they would fill the space around me and I could hear them LOUD AND CLEAR. There are other words I hear (inside and outside myself) that aren’t so encouraging.  I know they only encourage suffering because  they deaden me, make me feel depressed, anxious, worthless, ‘stupid’.   I don’t need to hear them any bigger or louder, but I do find it useful to feel, and see the difference between them. The interesting thing is that I have a choice which words to pay attention to.  There are people and places and voices that support my well-being.  It seems  essential to surround myself with those voices. You can order this print as a reminder for your well-being.',
		image: SignsImg,
		imageAlt: 'Debs Signs of well being',
		// photos: [
		// 	{
		// 		src: SingYourHeartOut_MartyImg,
		// 		alt: 'Sing your heart out Booth with Marty',
		// 	}, 
		// ],
	},
	{
		slug: 'whisper-your-wish-booth',
		title: 'Whisper Your Wish Booth',
		kind: 'booth',
		description: 'Whisper your wish…and then set it free.  This is my brother, Marty, demonstrating how the booth works.',
		image: WhisperWishImg,
		imageAlt: 'debs whisper wish booth',
		photos: [
			{
				src: WhisperWish_MartyImg,
				alt: 'Whisper Wish Booth with Marty',
			}, 
		],
	},
	{
		slug: 'complaint-booth',
		title: 'Complaint Booth',
		kind: 'booth',
		description: 'I think it’s so important to have a safe place to complain. Something miraculous happens when I complain consciously…I discover what I really need.  Then I can ask for it.  This is my brother Marty(who never complains! trying out the complaint booth).  Made from a recycled refrigerator box and acrylic paint.',
		image: ComplaintBoothImg,
		imageAlt: 'Debs Complaint Booth',
		photos: [
			{
				src: ComplaintBoothImg,
				alt: 'The Complaint Booth: a tall painted booth reading "Voice your complaints here. No limit to how much you can complain," with a side panel offering a free "Master Complainer" T-shirt if you complain enough.',
			},
			{
				src: complaintMartyImg,
				alt: 'A man leans into the Complaint Booth window, with a speech bubble saying "there is so much wrong here, this is wrong, that is wrong, its all just wrong."',
			},
		],
	},
	{
		slug: 'make-room-for-all-you-need',
		title: 'Make Room for All You Need Installation',
		kind: 'installation',
		description: '[Placeholder description of the Make Room for All You Need Installation.]',
	},
];
