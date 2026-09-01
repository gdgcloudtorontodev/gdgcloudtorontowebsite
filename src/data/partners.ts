export interface Partner {
  name: string;
  category: 'Titanium' | 'Platinum' | 'Gold' | 'Community' | 'Academic';
  logoText: string;
  accentColor: string;
  description: string;
  website: string;
}

export const PARTNERS: Partner[] = [
  {
    name: 'Google Cloud & Google Developers',
    category: 'Titanium',
    logoText: 'Google Cloud',
    accentColor: '#4285F4',
    description: 'Empowering developers worldwide with Vertex AI, Google Kubernetes Engine, and Google Cloud infrastructure.',
    website: 'https://cloud.google.com/',
  },
  {
    name: 'Vector Institute for AI',
    category: 'Platinum',
    logoText: 'Vector Institute',
    accentColor: '#EA4335',
    description: 'Canada’s premier independent research institute driving transformative AI excellence and commercialization.',
    website: 'https://vectorinstitute.ai/',
  },
  {
    name: 'Toronto Quantum Initiative',
    category: 'Platinum',
    logoText: 'Toronto Quantum',
    accentColor: '#A142F4',
    description: 'Advancing hybrid quantum-classical algorithms and high-performance computing in Ontario.',
    website: 'https://utoronto.ca',
  },
  {
    name: 'Canadian AI Builders Coalition',
    category: 'Gold',
    logoText: 'AI Builders CA',
    accentColor: '#34A853',
    description: 'Grassroots open-source alliance fostering Canadian developer innovation across agentic systems.',
    website: 'https://github.com',
  },
  {
    name: 'MaRS Discovery District',
    category: 'Community',
    logoText: 'MaRS Innovation',
    accentColor: '#FBBC04',
    description: 'North America’s largest urban innovation hub, supporting tech startups and developer talent.',
    website: 'https://marsdd.com/',
  },
  {
    name: 'University of Toronto Computer Science',
    category: 'Academic',
    logoText: 'U of T DCS',
    accentColor: '#1A73E8',
    description: 'World-renowned department of computer science pioneering deep learning, robotics, and distributed systems.',
    website: 'https://web.cs.toronto.edu/',
  },
];
