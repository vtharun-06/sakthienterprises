// Real customer reviews only, with the customer's permission. Section stays hidden while empty.
// Never add an aggregateRating to the structured data.
export type Review = { name: string; text: string; source?: string };
export const reviews: Review[] = [];
