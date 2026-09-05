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
  description: string;
  desktopSrc: string;
  mobileSrc: string;
  tags: string[];
  /** Área funcional a la que pertenece (id de FunctionalArea) */
  area?: string;
  /** Qué te permite hacer esta vista — lista de capacidades reales */
  capabilities?: string[];
  /** Cómo se usa — pasos numerados concretos */
  steps?: string[];
  /** Caso práctico real de cuándo te sirve */
  useCase?: string;
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
