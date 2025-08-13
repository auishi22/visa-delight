export interface Slide {
  image: string;
  title: string;          // big line
  subtitle?: string;      // small line
  description?: string;
  cta?: { text: string; href: string };
  accent?: string;        // underline color (optional)
};