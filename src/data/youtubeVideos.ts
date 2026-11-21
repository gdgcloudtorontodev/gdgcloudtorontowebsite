export type VideoCategory = 
  | 'DevFest Highlights'
  | 'Google IO Extended'
  | 'Women in Technology'
  | 'Speakers Videos'
  | 'Young Minds'
  | 'Keynote Speakers'
  | 'Panel Discussion';

export interface YouTubeVideo {
  id: string;
  youtubeId: string;
  url: string;
  title: string;
  speaker: string;
  organization: string;
  category: VideoCategory;
  duration?: string;
  views?: string;
  date?: string;
  thumbnail: string;
  description: string;
  tags: string[];
}

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  // 1. DevFest Highlights
  {
    id: 'yt-df-2025-official-highlights',
    youtubeId: 'cqHQAcxV_Xs',
    url: 'https://www.youtube.com/watch?v=cqHQAcxV_Xs',
    title: 'GDG Cloud Toronto DevFest 2025 Official Highlights',
    speaker: 'GDG Cloud Toronto Community',
    organization: 'GDG Cloud Toronto',
    category: 'DevFest Highlights',
    duration: '04:12',
    views: 'DevFest 2025 Highlights',
    date: 'DevFest 2025',
    thumbnail: 'https://img.youtube.com/vi/cqHQAcxV_Xs/hqdefault.jpg',
    description: 'Official highlights from GDG Cloud Toronto DevFest 2025! Featuring keynote addresses, hands-on workshops, AI demos, sponsor expo, and developer community celebrations in Toronto.',
    tags: ['DevFest2025', 'Highlights', 'Community', 'TorontoTech', 'GoogleCloud'],
  },
  {
    id: 'yt-df-highlight-1',
    youtubeId: '5znGR8XnLuE',
    url: 'https://youtu.be/5znGR8XnLuE',
    title: 'GDG Cloud Toronto DevFest Highlights — Community & Innovation',
    speaker: 'GDG Cloud Toronto Community',
    organization: 'GDG Cloud Toronto',
    category: 'DevFest Highlights',
    duration: '03:45',
    views: 'DevFest Highlight',
    date: 'DevFest Chapter',
    thumbnail: 'https://img.youtube.com/vi/5znGR8XnLuE/hqdefault.jpg',
    description: 'Highlights from GDG Cloud Toronto DevFest featuring developer keynotes, tech booths, workshop codelabs, and community celebrations.',
    tags: ['DevFest', 'Highlights', 'Community', 'Toronto Tech'],
  },
  {
    id: 'yt-df-highlight-2',
    youtubeId: 'TOL0T9-akVU',
    url: 'https://www.youtube.com/live/TOL0T9-akVU',
    title: 'GDG Cloud Toronto DevFest Live Stream & Highlight Stream',
    speaker: 'DevFest Organizing Team & Speakers',
    organization: 'GDG Cloud Toronto',
    category: 'DevFest Highlights',
    duration: 'Live Broadcast',
    views: 'Live Stream',
    date: 'DevFest Chapter',
    thumbnail: 'https://img.youtube.com/vi/TOL0T9-akVU/hqdefault.jpg',
    description: 'Official live broadcast stream capturing stage keynotes, technical deep dives, and community interviews from DevFest.',
    tags: ['LiveStream', 'DevFest', 'GoogleCloud', 'Toronto'],
  },

  // 2. Google IO Extended
  {
    id: 'yt-io-1',
    youtubeId: 'GVrHJr9rUf4',
    url: 'https://www.youtube.com/live/GVrHJr9rUf4',
    title: 'Google I/O Extended Toronto — Main Stage Live Stream',
    speaker: 'Google Developer Experts & Chapter Leads',
    organization: 'GDG Cloud Toronto',
    category: 'Google IO Extended',
    duration: 'Live Stream',
    views: 'I/O Extended',
    date: 'Google I/O Chapter',
    thumbnail: 'https://img.youtube.com/vi/GVrHJr9rUf4/hqdefault.jpg',
    description: 'Google I/O Extended brings the latest announcements from Google I/O directly to the Toronto developer community with live demos and architecture breakdowns.',
    tags: ['GoogleIO', 'IOExtended', 'GCP', 'AI'],
  },
  {
    id: 'yt-io-2',
    youtubeId: '6c8yB5mi-cE',
    url: 'https://www.youtube.com/live/6c8yB5mi-cE',
    title: 'Google I/O Extended Toronto — Technical Sessions & Cloud Demos',
    speaker: 'Google Cloud Architects & Tech Leads',
    organization: 'GDG Cloud Toronto',
    category: 'Google IO Extended',
    duration: 'Live Stream',
    views: 'I/O Extended',
    date: 'Google I/O Chapter',
    thumbnail: 'https://img.youtube.com/vi/6c8yB5mi-cE/hqdefault.jpg',
    description: 'Technical sessions, cloud infrastructure updates, and hands-on Google Developer technologies showcased at Google I/O Extended Toronto.',
    tags: ['GoogleIO', 'CloudArchitecture', 'DeveloperTools', 'Toronto'],
  },

  // 3. Women in Technology
  {
    id: 'yt-wit-1',
    youtubeId: '_BWdaulNbN4',
    url: 'https://youtu.be/_BWdaulNbN4',
    title: 'Women in Technology — Leadership, Cloud & Engineering Excellence',
    speaker: 'Women Techmakers & Community Leaders',
    organization: 'Women Techmakers & GDG Cloud Toronto',
    category: 'Women in Technology',
    duration: 'Special Edition',
    views: 'WTM Spotlight',
    date: 'Community Spotlight',
    thumbnail: 'https://img.youtube.com/vi/_BWdaulNbN4/hqdefault.jpg',
    description: 'Inspiring session championing diversity, technical excellence, and engineering leadership in cloud computing and artificial intelligence.',
    tags: ['WomenInTech', 'WomenTechmakers', 'Leadership', 'Inclusion'],
  },

  // 4. Speakers Videos
  {
    id: 'yt-spk-1',
    youtubeId: 'Q0oMg1SF1vA',
    url: 'https://youtu.be/Q0oMg1SF1vA',
    title: 'Speaker Session: Frontier Cloud & Modern Architecture',
    speaker: 'Featured Speaker Presentation',
    organization: 'GDG Cloud Toronto',
    category: 'Speakers Videos',
    duration: 'Tech Session',
    views: 'Speaker Talk',
    date: 'Conference Talk',
    thumbnail: 'https://img.youtube.com/vi/Q0oMg1SF1vA/hqdefault.jpg',
    description: 'Insightful technical session from leading technology practitioner addressing real-world implementation challenges and cloud architecture patterns.',
    tags: ['Speaker', 'Architecture', 'CloudEngineering', 'TechTalk'],
  },
  {
    id: 'yt-spk-2',
    youtubeId: 'cq_OaBEsvFA',
    url: 'https://youtu.be/cq_OaBEsvFA',
    title: 'Speaker Session: Engineering Deep Dive & Practical Applications',
    speaker: 'Technical Speaker',
    organization: 'GDG Cloud Toronto',
    category: 'Speakers Videos',
    duration: 'Deep Dive',
    views: 'Speaker Talk',
    date: 'Conference Talk',
    thumbnail: 'https://img.youtube.com/vi/cq_OaBEsvFA/hqdefault.jpg',
    description: 'Engineering presentation examining developer workflows, scalable backend systems, and modern software craftmanship.',
    tags: ['Speaker', 'DeepDive', 'SoftwareEngineering', 'GoogleCloud'],
  },

  // 5. Young Minds
  {
    id: 'yt-ym-1',
    youtubeId: 'Fuh29-XXj9E',
    url: 'https://youtu.be/Fuh29-XXj9E',
    title: 'Young Minds in Technology — Next Generation Innovators & Creators',
    speaker: 'Student Builders & Next-Gen Innovators',
    organization: 'GDG Student & Youth Initiative',
    category: 'Young Minds',
    duration: 'Inspiring Talk',
    views: 'Young Innovators',
    date: 'Next-Gen Series',
    thumbnail: 'https://img.youtube.com/vi/Fuh29-XXj9E/hqdefault.jpg',
    description: 'Highlighting next-generation student builders, aspiring engineers, and young innovators solving community challenges with Google technology.',
    tags: ['YoungMinds', 'Students', 'NextGen', 'Innovation'],
  },

  // 6. Keynote Speakers
  {
    id: 'yt-key-1',
    youtubeId: 'Q0oMg1SF1vA',
    url: 'https://youtu.be/Q0oMg1SF1vA',
    title: 'Keynote Address: Scaling Developer Technology for the Future',
    speaker: 'Distinguished Keynote Speaker',
    organization: 'DevFest Keynote Stage',
    category: 'Keynote Speakers',
    duration: 'Flagship Keynote',
    views: 'Keynote',
    date: 'Main Stage',
    thumbnail: 'https://img.youtube.com/vi/Q0oMg1SF1vA/hqdefault.jpg',
    description: 'Flagship keynote opening the conference with vision, technical roadmaps, and transformative computing paradigms for developers.',
    tags: ['Keynote', 'MainStage', 'FutureOfTech', 'DevFest'],
  },
  {
    id: 'yt-key-2',
    youtubeId: 'ps8teju_C1g',
    url: 'https://youtu.be/ps8teju_C1g',
    title: 'Keynote Address: Cloud, AI & Ecosystem Frontiers',
    speaker: 'Keynote Speaker',
    organization: 'DevFest Main Stage',
    category: 'Keynote Speakers',
    duration: 'Flagship Keynote',
    views: 'Keynote',
    date: 'Main Stage',
    thumbnail: 'https://img.youtube.com/vi/ps8teju_C1g/hqdefault.jpg',
    description: 'Inspiring keynote address on ecosystem growth, cloud modernization, and responsible artificial intelligence integration.',
    tags: ['Keynote', 'AI', 'Cloud', 'Ecosystem'],
  },
  {
    id: 'yt-key-3',
    youtubeId: '_BWdaulNbN4',
    url: 'https://youtu.be/_BWdaulNbN4',
    title: 'Keynote Presentation: Empowering Tech Communities & Global Reach',
    speaker: 'Keynote Leader',
    organization: 'Women Techmakers & GDG',
    category: 'Keynote Speakers',
    duration: 'Keynote Feature',
    views: 'Keynote',
    date: 'Main Stage',
    thumbnail: 'https://img.youtube.com/vi/_BWdaulNbN4/hqdefault.jpg',
    description: 'Main stage keynote on inclusive developer culture, tech empowerment, and scaling community initiatives across Canada.',
    tags: ['Keynote', 'WomenInTech', 'Community', 'GlobalImpact'],
  },

  // 7. Panel Discussion
  {
    id: 'yt-panel-1',
    youtubeId: '6nLJ030VLHI',
    url: 'https://www.youtube.com/live/6nLJ030VLHI',
    title: 'Panel Discussion: The Future of Cloud, AI & Engineering Horizons',
    speaker: 'Industry Panel Experts & Moderators',
    organization: 'DevFest 2026 Panel Stage',
    category: 'Panel Discussion',
    duration: 'Live Panel Debate',
    views: 'Live Panel',
    date: 'Panel Stage',
    thumbnail: 'https://img.youtube.com/vi/6nLJ030VLHI/hqdefault.jpg',
    description: 'Dynamic live panel debate featuring industry practitioners and architects discussing emerging AI governance, multi-cloud topologies, and tech talent.',
    tags: ['PanelDiscussion', 'LiveStream', 'CloudDebate', 'TechLeaders'],
  },
];
