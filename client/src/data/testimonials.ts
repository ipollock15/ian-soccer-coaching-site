export type Testimonial = {
  name: string;
  relationship: string;
  quote: string;
  highlightTag: string;
};

export const testimonials: Testimonial[] = [
  { name: "Sarah M.", relationship: "Parent", quote: "Hire him immediately and don't turn back. Wonderful... taught her a ton... always positive and present.", highlightTag: "Highly Recommended" },
  { name: "David L.", relationship: "Parent", quote: "Always excited for games and practices… developed a ton in skill and confidence. You'd be lucky to have him!", highlightTag: "Confidence Growth" },
  { name: "Jessica T.", relationship: "Parent", quote: "Confidence and love for the game started last season under Ian.", highlightTag: "Love for the Game" },
  { name: "Michael R.", relationship: "Parent", quote: "Consistent communication with parents… identified positives/negatives each game and kept the kids focused on improving.", highlightTag: "Great Communication" },
  { name: "Elena K.", relationship: "Parent", quote: "Goes the extra mile… showed up to support players outside soccer. 100% hire him… positive, knowledgeable.", highlightTag: "Goes the Extra Mile" },
  { name: "Robert B.", relationship: "Parent", quote: "Great combination of intellect and soccer experience… a true mentor for the kids.", highlightTag: "True Mentor" },
];
