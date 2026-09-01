export type EraId =
  | 'compute'
  | 'web'
  | 'mobile'
  | 'cloud'
  | 'ml'
  | 'genai'
  | 'agents'
  | 'next';

export interface EvolutionEra {
  id: EraId;
  order: string;
  shortName: string;
  name: string;
  headline: string;
  subtitle: string;
  concept: string;
  colorPalette: {
    name: string;
    primary: string;
    secondary: string;
    accent: string;
    bgGradient: string;
    nodeGlow: string;
    border: string;
  };
  conceptsList: string[];
  visualMode: 'grid' | 'network' | 'mobile_cluster' | 'cloud_nodes' | 'neural_mesh' | 'multimodal_rays' | 'agent_orchestra' | 'quantum_matrix';
  story: string;
  keyInnovations: {
    title: string;
    description: string;
    impact: string;
  }[];
  transitionNote: string;
  frontierBadges?: {
    today: string[];
    emerging: string[];
    experimental: string[];
  };
}
