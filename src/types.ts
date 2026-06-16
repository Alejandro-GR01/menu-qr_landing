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
  cloud: string;
  local: string;
  localWins: boolean;
}

export interface TechBadge {
  name: string;
  description: string;
}
