export type Service = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  bestFor: string;
  focusAreas: string[];
};

export const services: Service[] = [
  {
    id: "1-on-1",
    title: "1-on-1 Private Training",
    description: "Personalized plan, high reps, and game-like decisions.",
    bestFor: "Confidence, rapid skill building, position-specific needs, tryout prep.",
    focusAreas: ["First touch", "Dribbling under pressure", "Weak foot", "Finishing", "Scanning"]
  },
  {
    id: "small-group",
    title: "Small Group Training",
    subtitle: "2–6 players",
    description: "More competition, realism, reps, and decision-making.",
    bestFor: "Teammates/friends, confidence in game chaos, passing combinations, 2v1/2v2/3v3.",
    focusAreas: ["Spatial awareness", "Passing combinations", "Defending together", "Game speed"]
  }
];

// Optional pricing table structure for the future
// export const pricing = {
//   "1-on-1": { single: "$XXX", package: "$XXX" },
//   "small-group": { single: "$XXX", package: "$XXX" }
// };
