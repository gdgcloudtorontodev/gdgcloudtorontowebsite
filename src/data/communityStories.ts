export interface CommunityStory {
  id: string;
  title: string;
  category: 'DevFest Announcement' | 'Community Milestone' | 'Speaker Spotlight' | 'Tech Article';
  date: string;
  readTime: string;
  author: string;
  summary: string;
  image: string;
}

export const COMMUNITY_STORIES: CommunityStory[] = [
  {
    id: 'story-1',
    title: 'Why DevFest 2026 Focuses on Agentic AI & Quantum Compute',
    category: 'DevFest Announcement',
    date: 'October 2026',
    readTime: '4 min read',
    author: 'Sarah Jenkins, Community Director',
    summary: 'The software industry is transitioning from conversational generative tools to proactive autonomous agentic workflows and specialized hardware co-design.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'story-2',
    title: 'Inside the Toronto GDG Cloud Community: 5,800 Builders Strong',
    category: 'Community Milestone',
    date: 'September 2026',
    readTime: '5 min read',
    author: 'Samuel Adebayo, GDE',
    summary: 'From small study jams in 2021 to a flagship 1,500-attendee digital headquarters at MTCC: reflecting on half a decade of developer growth.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'story-3',
    title: 'Speaker Spotlight: Dr. Elena Vance on Multimodal Frontier Models',
    category: 'Speaker Spotlight',
    date: 'September 2026',
    readTime: '6 min read',
    author: 'Kenji Takahashi, Speaker Lead',
    summary: 'An exclusive preview of Dr. Elena Vance’s DevFest 2026 keynote exploring test-time reasoning and test-driven agentic verification.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
];
