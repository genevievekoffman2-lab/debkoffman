// soulSupportCards.ts
// Deb's Soul Support cards for the "draw a card" feature.
// Each image is a straightened photo of the real card (1200x500, the 3 x 1.25 in shape),
// stored in src/assets/images/soul-support/cards/<id>.jpg.
// `text` is the message exactly as written on the card, for screen readers and search.

export interface SoulSupportCard {
  id: string;   // also the image file name (without .jpg)
  text: string;
}

export const soulSupportCards: SoulSupportCard[] = [
  { id: "take-a-breath", text: "Take a breath." },
  { id: "feel-whats-happening-right-now", text: "Feel what’s happening RIGHT now." },
  { id: "let-go-of-thinking", text: "Let go of thinking." },
  { id: "notice-whats-really-important", text: "Notice what’s really important." },
  { id: "have-compassion-for-yourself", text: "Have compassion for yourself." },
  { id: "acknowledge-what-youre-doing-well", text: "Acknowledge what you’re doing well." },
  { id: "trust-your-own-way", text: "Trust your own way of expressing yourself." },
  { id: "mistakes-open-the-door", text: "Mistakes open the door to creativity." },
  { id: "pain-is-a-place-calling-for-breath", text: "Pain is a place calling for breath." },
];