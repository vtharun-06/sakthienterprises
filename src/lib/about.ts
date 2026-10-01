// Content for the About page. Add real entries here; sections with no entries stay hidden.

export type Founder = { name: string; role: string; note?: string };
export type Milestone = { year: string; text: string };

// Fill in with real names/roles from the owner, e.g. { name: "...", role: "Founder" }.
export const founders: Founder[] = [];

// Needs at least 3 real entries to show. Year 1999 is confirmed.
export const timeline: Milestone[] = [{ year: "1999", text: "Sakthi Enterprises starts in Chennai." }];

// Real photos of family/crew only. Never use AI faces here.
export const team: { name: string; role: string; photo?: string }[] = [];

export const promises = [
  {
    title: "Safety on site",
    text: "Scaffolding is erected to keep the people working on it safe.",
  },
  {
    title: "Material checked before dispatch",
    text: "Pipes and fittings are checked before they leave our yard.",
  },
  {
    title: "On-time delivery",
    text: "We deliver to the dates we agree, so your work does not wait.",
  },
  {
    title: "Same family, same phone number",
    text: "The owners answer your calls. You always reach the people responsible.",
  },
];
