// aboutMap.ts
// Clickable spots on Deb's "Map of the Territory" (src/assets/images/about/map-territory-framed.jpg,
// a version cropped to the drawing so it fits the polka-dot frame).
//
// All positions are PERCENTAGES of the map image, so they stay lined up at any screen size.
//   box:  the clickable area, covering the red arrow AND its handwritten label
//   glow: the centre of the red arrow, where the glow is drawn
//
// Spots are listed in story order (her life, then her work); "next →" follows this order.
// Each spot shows a short excerpt in Deb's own words. Her full text is in `fullStory`
// below, for the "read it all" view.

export interface MapSpot {
  id: string;
  label: string; // the words Deb wrote on the map
  text: string;  // the excerpt this spot reveals
  box: { left: number; top: number; width: number; height: number };
  glow: { x: number; y: number };
}

export const mapSpots: MapSpot[] = [
  {
    id: "start",
    label: "Start here",
    text: "Click the glowing arrows to explore Deb's map.",
    box: { left: 8.7, top: 4.2, width: 8.9, height: 13.6 },
    glow: { x: 13.2, y: 11.8 },
  },
  {
    id: "unknown-part",
    label: "The Unknown Part",
    text: "When I moved to the Berkshires in 1988 I didn’t know a thing about spirituality or feelings or healing or art.",
    box: { left: 32.2, top: 9.1, width: 14.9, height: 6.1 },
    glow: { x: 33.6, y: 12.7 },
  },
  {
    id: "obstacle",
    label: "The Obstacle",
    text: "I was deeply deeply unhappy and confused about life. I didn’t know what mattered, I didn’t know how I mattered.",
    box: { left: 15.8, top: 77.3, width: 10.3, height: 7.8 },
    glow: { x: 17.4, y: 80.1 },
  },
  {
    id: "opportunity",
    label: "An Opportunity",
    text: "By chance, and grace I discovered Kripalu, Gurudev, yoga, and an amazing community of body-centered healers. My whole world changed.",
    box: { left: 67.7, top: 5.5, width: 17.9, height: 4.5 },
    glow: { x: 70.0, y: 8.1 },
  },
  {
    id: "different-opportunity",
    label: "A Different Opportunity",
    text: "I found and studied NLP (neuro-linguistic programming) and Ericksonian Hypnosis with Zen teacher and NLP trainer, Richard Clarke. NLP became a foundation for my thinking and being, and continues to inform my life and art.",
    box: { left: 85.4, top: 77.5, width: 11.4, height: 8.6 },
    glow: { x: 87.8, y: 84.4 },
  },
  {
    id: "bold-part",
    label: "The Bold Part",
    text: "All of these practices inspired ART. I needed to make visual reminders of what I learned ‘on the cushion’ and in the therapist’s office. I make art (stories, poems, cartoons, installations, card decks) to understand, reflect and honor my emotions and thinking patterns.",
    box: { left: 4.9, top: 44.9, width: 7.9, height: 11.5 },
    glow: { x: 10.5, y: 47.4 },
  },
  {
    id: "highlight",
    label: "The Highlight",
    text: "I write stories about choice, poems that give me advice, cartoons that remind me what really matters to my heart and soul.",
    box: { left: 26.3, top: 40.8, width: 12.3, height: 8.6 },
    glow: { x: 32.5, y: 43.7 },
  },
  {
    id: "smooth-part",
    label: "The Smooth Part",
    text: "I’m deeply drawn to Buddhist teachings and to the practice of meditation and mindful awareness.",
    box: { left: 35.0, top: 64.5, width: 10.0, height: 11.3 },
    glow: { x: 38.3, y: 72.8 },
  },
  {
    id: "indecisive-part",
    label: "The Indecisive Part",
    text: "I practice paying attention to my reactions, my thinking, my speech, my physical sensations.",
    box: { left: 42.5, top: 51.8, width: 9.0, height: 11.5 },
    glow: { x: 47.8, y: 54.7 },
  },
  {
    id: "confusing-part",
    label: "The Confusing Part",
    text: "My books, cartoons and card decks all offer me guidance, wise advice, reminders when I’m stuck or struggling, lost or confused.",
    box: { left: 60.8, top: 29.0, width: 10.3, height: 7.9 },
    glow: { x: 62.3, y: 32.4 },
  },
  {
    id: "another-confusing-part",
    label: "Another Confusing Part",
    text: "Words have the power to ground me and comfort me or twist me into a whirling ball of distress, confusion and fear. … Does ‘crazy’ mean wrong? or different? or brave? or swimming in unknown territory?",
    box: { left: 80.0, top: 55.5, width: 10.2, height: 6.9 },
    glow: { x: 81.0, y: 59.5 },
  },
  {
    id: "point",
    label: "The Point",
    text: "Making art has saved my life and kept me sane, by helping me literally to SEE what goes on in my mind. Once seen, I am free to make new (or the same old) choices.",
    box: { left: 75.5, top: 34.7, width: 7.6, height: 8.7 },
    glow: { x: 78.4, y: 40.6 },
  },
  {
    id: "bigger-point",
    label: "The Bigger Point",
    text: "My hope is that my work encourages your well-being, helping you navigate your emotional and mental life more easily.",
    box: { left: 49.7, top: 76.0, width: 14.1, height: 9.4 },
    glow: { x: 55.7, y: 79.1 },
  },
];

// Deb's full text, unshortened, for the "read it all" view. One string per paragraph.
export const fullStory = {
  aboutDeb: [
    "I make art (stories, poems, cartoons, installations, card decks) to understand, reflect and honor my emotions and thinking patterns. I write stories about choice, poems that give me advice, cartoons that remind me what really matters to my heart and soul. I’m deeply drawn to Buddhist teachings and to the practice of meditation and mindful awareness. I practice paying attention to my reactions, my thinking, my speech, my physical sensations. My books, cartoons and card decks all offer me guidance, wise advice, reminders when I’m stuck or struggling, lost or confused. My hope is that my work encourages your well-being, helping you navigate your emotional and mental life more easily.",
  ],
  moreAboutDeb: [
    "When I moved to the Berkshires in 1988 I didn’t know a thing about spirituality or feelings or healing or art. I was deeply deeply unhappy and confused about life. I didn’t know what mattered, I didn’t know how I mattered.",
    "By chance, and grace I discovered Kripalu, Gurudev, yoga, and an amazing community of body-centered healers. My whole world changed. What I wore, what I ate, what I thought about, my friends, the pace I moved at, what I cared about. I read TONS of books on psychology, physics, mind-body awareness and healing. I found and studied NLP (neuro-linguistic programming) and Ericksonian Hypnosis with Zen teacher and NLP trainer, Richard Clarke. NLP became a foundation for my thinking and being, and continues to inform my life and art.",
    "I studied and trained in Vivation (breathwork), NVC (non-violent communication), authentic movement (a mindfulness based movement practice), continuum, and mindfulness meditation.",
    "All of these practices inspired ART. I needed to make visual reminders of what I learned ‘on the cushion’ and in the therapist’s office.",
    "Most of my work (on myself and on paper) is about understanding words; concepts, feelings and ideas that don’t make sense to me. Words have the power to ground me and comfort me or twist me into a whirling ball of distress, confusion and fear.",
    "Compassion, love, creativity, depression, peace, presence, humility, relax, choice, emptiness.",
    "What do these words really mean? Deeply? In my body? Does ‘crazy’ mean wrong? or different? or brave? or swimming in unknown territory?",
    "I explore words/concepts through writing, drawing, painting and performance art. I work on the computer in photoshop, powerpoint and final cut. I use whatever form ‘it takes’ to figure out what the word really means.",
    "Making art has saved my life and kept me sane, by helping me literally to SEE what goes on in my mind. Once seen, I am free to make new (or the same old) choices.",
  ],
};