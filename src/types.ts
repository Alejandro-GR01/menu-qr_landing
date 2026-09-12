export type OSType = 'macOS' | 'Windows' | 'Linux';

export interface OSContextType {
  os: OSType;
  detected: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export interface ComparisonItem {
  aspect: string;
  paper: string;
  cloud: string;
  local: string;
  localWins: boolean;
}

export interface TechBadge {
  name: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ViewEntry {
  id: string;
  title: string;
  /** Frase corta: lo que el dueño logra con esta vista (≤15 palabras) */
  description: string;
  desktopSrc: string;
  mobileSrc: string;
  /** Persona a la que pertenece: dueno | puesta-en-marcha | cliente | vendedor */
  area?: string;
  /** Máx 3 bullets cortos (6-8 palabras) — qué logras con esta vista */
  highlights?: string[];
}

export interface FunctionalArea {
  id: string;
  title: string;
  description: string;
  icon: import('lucide-react').LucideIcon;
  /** ids de ViewEntry que pertenecen a esta área */
  viewIds: string[];
}

export interface GetStartedStep {
  icon: import('lucide-react').LucideIcon;
  title: string;
  description: string;
}
