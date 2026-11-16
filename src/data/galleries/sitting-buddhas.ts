// galleries/sitting-buddhas.ts
// Photos for the grid on /art/series/sitting-buddhas, in the order shown.
//
// To add a photo:
//   1. Put the file in src/assets/images/series/sitting-buddhas/
//   2. Import it below, e.g.  import fearImg from '../../assets/images/series/sitting-buddhas/fear_buddha.jpeg';
//   3. Add an entry to the list: { src: fearImg, alt: 'Describe what the photo shows' },

import type { GalleryPhoto } from '../series';

import allImg from '../../assets/images/series/sitting-buddhas/all.jpg';
import angerImg from '../../assets/images/series/sitting-buddhas/anger_buddha.jpeg';
import boredomImg from '../../assets/images/series/sitting-buddhas/boredom_budha.jpeg';
import comfortImg from '../../assets/images/series/sitting-buddhas/comfort_buddha.jpeg';
import cravingImg from '../../assets/images/series/sitting-buddhas/craving_buddha.jpeg';
import depressionImg from '../../assets/images/series/sitting-buddhas/depression_buddha.jpeg';
import desireImg from '../../assets/images/series/sitting-buddhas/desire_budha.jpeg';
import doubtImg from '../../assets/images/series/sitting-buddhas/doubt_buddha.JPG';
import loveImg from '../../assets/images/series/sitting-buddhas/love_budha.jpeg';
import mistakesImg from '../../assets/images/series/sitting-buddhas/mistakes_budha.jpeg';
import painImg from '../../assets/images/series/sitting-buddhas/pain_budha.jpeg';
import resistanceImg from '../../assets/images/series/sitting-buddhas/resistance_buddha.jpeg';

// Every buddha is the same painted cardboard figure: a white torso, a black lap with
// white polka dots, and hands holding a sign that names a feeling.
const buddha = (feeling: string, sign: string) =>
	`Painted cardboard sitting buddha with a black polka-dot lap, hands holding a ${sign} sign that reads "${feeling}"`;

export const sittingBuddhasPhotos: GalleryPhoto[] = [
	{
		src: allImg,
		alt: 'Painted cardboard sitting buddha holding a pile of overlapping signs: "Anger," "Love," and "Comfort"',
	},
	{ src: angerImg, alt: buddha('Anger', 'pale pink') },
	{ src: boredomImg, alt: buddha('Boredom', 'tan') },
	{ src: comfortImg, alt: buddha('Comfort', 'yellow') },
	{ src: cravingImg, alt: buddha('Craving', 'orange-red') },
	{ src: depressionImg, alt: buddha('Depression', 'olive green') },
	{ src: desireImg, alt: buddha('Desire', 'lime green') },
	{ src: doubtImg, alt: buddha('Doubt', 'blue') },
	{ src: loveImg, alt: buddha('Love', 'red') },
	{ src: mistakesImg, alt: buddha('Mistakes', 'orange') },
	{ src: painImg, alt: buddha('Pain', 'yellow') },
	{ src: resistanceImg, alt: buddha('Resistance', 'brown') },
];
