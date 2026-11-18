// aboutMap.ts
// Clickable spots on Deb's "Map of the Territory" (src/assets/images/about/map-territory-1200.jpg).
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
    text: "Click the red arrows to explore Deb's map.",
    box: { left: 12.5, top: 14.5, width: 8.2, height: 10.6 },
    glow: { x: 16.7, y: 20.4 },
  },
  {
    id: "unknown-part",
    label: "The Unknown Part",
    text: "When I moved to the Berkshires in 1988 I didn’t know a thing about spirituality or feelings or healing or art.",
    box: { left: 34.2, top: 18.3, width: 13.7, height: 4.8 },
    glow: { x: 35.5, y: 21.1 },
  },
  {
    id: "obstacle",
    label: "The Obstacle",
    text: "I was deeply deeply unhappy and confused about life. I didn’t know what mattered, I didn’t know how I mattered.",
    box: { left: 19.1, top: 71.5, width: 9.5, height: 6.1 },
    glow: { x: 20.5, y: 73.7 },
  },
  {
    id: "opportunity",
    label: "An Opportunity",
    text: "By chance, and grace I discovered Kripalu, Gurudev, yoga, and an amazing community of body-centered healers. My whole world changed.",
    box: { left: 66.9, top: 15.5, width: 16.5, height: 3.5 },
    glow: { x: 69.0, y: 17.5 },
  },
  {
    id: "different-opportunity",
    label: "A Different Opportunity",
    text: "I found and studied NLP (neuro-linguistic programming) and Ericksonian Hypnosis with Zen teacher and NLP trainer, Richard Clarke. NLP became a foundation for my thinking and being, and continues to inform my life and art.",
    box: { left: 83.2, top: 71.7, width: 10.5, height: 6.7 },
    glow: { x: 85.4, y: 77.1 },
  },
  {
    id: "bold-part",
    label: "The Bold Part",
    text: "All of these practices inspired ART. I needed to make visual reminders of what I learned ‘on the cushion’ and in the therapist’s office. I make art (stories, poems, cartoons, installations, card decks) to understand, reflect and honor my emotions and thinking patterns.",
    box: { left: 9.0, top: 46.2, width: 7.3, height: 9.0 },
    glow: { x: 14.2, y: 48.2 },
  },
  {
    id: "highlight",
    label: "The Highlight",
    text: "I write stories about choice, poems that give me advice, cartoons that remind me what really matters to my heart and soul.",
    box: { left: 28.7, top: 43.0, width: 11.3, height: 6.7 },
    glow: { x: 34.5, y: 45.3 },
  },
  {
    id: "smooth-part",
    label: "The Smooth Part",
    text: "I’m deeply drawn to Buddhist teachings and to the practice of meditation and mindful awareness.",
    box: { left: 36.8, top: 61.5, width: 9.2, height: 8.8 },
    glow: { x: 39.8, y: 68.0 },
  },
  {
    id: "indecisive-part",
    label: "The Indecisive Part",
    text: "I practice paying attention to my reactions, my thinking, my speech, my physical sensations.",
    box: { left: 43.7, top: 51.6, width: 8.3, height: 9.0 },
    glow: { x: 48.6, y: 53.9 },
  },
  {
    id: "confusing-part",
    label: "The Confusing Part",
    text: "My books, cartoons and card decks all offer me guidance, wise advice, reminders when I’m stuck or struggling, lost or confused.",
    box: { left: 60.5, top: 33.8, width: 9.5, height: 6.2 },
    glow: { x: 61.9, y: 36.5 },
  },
  {
    id: "another-confusing-part",
    label: "Another Confusing Part",
    text: "Words have the power to ground me and comfort me or twist me into a whirling ball of distress, confusion and fear. … Does ‘crazy’ mean wrong? or different? or brave? or swimming in unknown territory?",
    box: { left: 78.2, top: 54.5, width: 9.4, height: 5.4 },
    glow: { x: 79.2, y: 57.6 },
  },
  {
    id: "point",
    label: "The Point",
    text: "Making art has saved my life and kept me sane, by helping me literally to SEE what goes on in my mind. Once seen, I am free to make new (or the same old) choices.",
    box: { left: 74.1, top: 38.3, width: 7.0, height: 6.8 },
    glow: { x: 76.8, y: 42.9 },
  },
  {
    id: "bigger-point",
    label: "The Bigger Point",
    text: "My hope is that my work encourages your well-being, helping you navigate your emotional and mental life more easily.",
    box: { left: 50.3, top: 70.5, width: 13.0, height: 7.3 },
    glow: { x: 55.8, y: 72.9 },
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