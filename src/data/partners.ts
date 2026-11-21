export interface Partner {
  name: string;
  category: 'Titanium' | 'Platinum' | 'Gold' | 'Community' | 'Academic' | 'Sponsor' | 'Collaborator';
  logoText: string;
  accentColor: string;
  description: string;
  website: string;
}

export const PARTNERS: Partner[] = [
  {
    name: 'ECLARO: Global Staffing & Talent Solutions',
    category: 'Sponsor',
    logoText: 'ECLARO',
    accentColor: '#005696',
    description: 'Global custom talent solutions, enterprise technology staffing, and consulting services connecting top-tier tech professionals with industry-leading organizations.',
    website: 'https://www.eclaro.com/',
  },
  {
    name: 'Alumni Relations, George Brown Polytechnic',
    category: 'Collaborator',
    logoText: 'George Brown Alumni',
    accentColor: '#003366',
    description: 'Fostering lifelong community connections, career development, mentorship, and tech innovation networks for George Brown Polytechnic graduates and developer alumni.',
    website: 'https://www.georgebrown.ca/alumni',
  },
  {
    name: 'Nirucraft Solutions',
    category: 'Sponsor',
    logoText: 'Nirucraft Solutions',
    accentColor: '#EA4335',
    description: 'Modern enterprise technology foundations, Generative AI agentic workflows, software intelligence, and developer community enablement in Ontario.',
    website: 'https://nirucraft.com/',
  },
  {
    name: 'ITCLAN Consulting Services Inc.',
    category: 'Sponsor',
    logoText: 'ITCLAN Consulting Services Inc.',
    accentColor: '#34A853',
    description: 'Specialized enterprise technology consulting, digital solutions, cloud systems, and technical talent services driving organizational innovation.',
    website: 'https://itclan.ca/',
  },
];
