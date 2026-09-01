export type AiCategory =
  | 'CREATE'
  | 'THINK'
  | 'BUILD'
  | 'CODE'
  | 'RESEARCH'
  | 'COMMUNICATE'
  | 'ANALYZE'
  | 'AUTOMATE'
  | 'DEPLOY'
  | 'DISCOVER';

export type AiStatus =
  | 'NEW'
  | 'POPULAR'
  | 'DEVELOPER FAVORITE'
  | 'EMERGING'
  | 'EXPERIMENTAL';

export type AiAudience =
  | 'Developers'
  | 'Creators'
  | 'Researchers'
  | 'Enterprise'
  | 'Students'
  | 'Data Scientists';

export interface AiProduct {
  id: string;
  name: string;
  company: string;
  category: AiCategory;
  purpose: string;
  description: string;
  capabilities: string[];
  audience: AiAudience[];
  status?: AiStatus;
  releaseDate: string;
  officialUrl: string;
  documentationUrl?: string;
  relatedProducts: string[];
  color: string;
  iconName: string;
  rapidLearning: {
    whatIsIt: string;
    whatDoesItDo: string;
    whyItMatters: string;
    whoShouldUseIt: string;
    practicalExample: string;
  };
  buildWorkflow?: {
    stage: string;
    label: string;
    detail: string;
    icon: string;
  }[];
}

export interface AiPurposeItem {
  id: string;
  headline: string;
  description: string;
  queryMatchKeywords: string[];
  productIds: string[];
  badgeColor: string;
  icon: string;
}

export interface AiEvolutionMilestone {
  era: string;
  period: string;
  title: string;
  milestone: string;
  breakthrough: string;
  techKeywords: string[];
  status: 'FOUNDATIONAL' | 'TRANSFORMATIVE' | 'FRONTIER';
}
