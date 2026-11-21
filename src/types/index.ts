export interface EventConfig {
  name: string;
  year: string;
  tagline: string;
  theme: string;
  subheadline: string;
  description: string;
  location: {
    city: string;
    country: string;
    venue: string;
    address: string;
    roomHighlight: string;
    mapUrl?: string;
  };
  dates: {
    display: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
  };
  metrics: {
    expectedDevelopers: number;
    speakersCount: number;
    workshopsCount: number;
    volunteersCount: number;
    communityMembers: number;
    pastAttendees: number;
    handsOnParticipants: number;
    podcastEpisodes: number;
    awardsCategories: number;
  };
  registration: {
    isOpen: boolean;
    tier: string;
    price: string;
    portalUrl: string;
    eventbriteUrl?: string;
  };
  callForSpeakers?: {
    isOpen: boolean;
    formUrl: string;
  };
  sponsorship?: {
    interestFormUrl: string;
    contactEmail: string;
  };
  socials: {
    meetup: string;
    bevy: string;
    linkedin: string;
    instagram: string;
    youtube: string;
    github: string;
    x: string;
  };
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  category: 'Keynote' | 'AI & Agents' | 'Cloud Architecture' | 'Quantum & Compute' | 'Infrastructure' | 'Community';
  bio: string;
  photo: string;
  expertise: string[];
  sessionTitle: string;
  sessionType: 'Keynote' | 'Tech Deep Dive' | 'Lightning Talk' | 'Workshop' | 'Panel';
  timeSlot: string;
  room: string;
  socials: {
    linkedin?: string;
    x?: string;
    github?: string;
  };
  careerHighlights: string[];
  previousTalksCount: number;
}

export interface Workshop {
  id: string;
  title: string;
  instructor: {
    name: string;
    role: string;
    organization: string;
    avatar: string;
  };
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  duration: string;
  technology: string[];
  track: 'AI & Agents' | 'Cloud & Kubernetes' | 'Data & Analytics' | 'Quantum Computing' | 'Infrastructure';
  capacity: number;
  enrolled: number;
  prerequisites: string[];
  location: string;
  timeSlot: string;
  description: string;
  workflowSteps: {
    stage: 'BUILD' | 'EXPERIMENT' | 'DEPLOY';
    title: string;
    description: string;
  }[];
  githubRepoUrl?: string;
}

export interface Award {
  id: string;
  title: string;
  category: 'Developer' | 'Community' | 'Innovation' | 'Volunteer' | 'Speaker' | 'Special Recognition' | 'Google Recognition';
  description: string;
  criteria: string[];
  icon: string;
  recipient2025?: string;
}

export interface Volunteer {
  id: string;
  name: string;
  role: string;
  domain: 'Organizer' | 'Track Lead' | 'Workshop Lead' | 'Speaker Coordination' | 'Registration' | 'Production & AV' | 'Marketing' | 'Community';
  yearsInvolved: number;
  contribution: string;
  photo: string;
  quote: string;
  badge: string;
  linkedin?: string;
}

export interface PastDevfestVideo {
  id: string;
  youtubeId: string;
  url: string;
  title: string;
  category: string;
  duration?: string;
  description: string;
  publishedYear: string;
}

export interface PastDevfestYear {
  year: string;
  theme: string;
  attendees: string;
  speakersCount: number;
  highlight: string;
  keynote: string;
  photoGallery: string[];
  youtubeVideos: PastDevfestVideo[];
  videoHighlight?: {
    title: string;
    url: string;
    youtubeId: string;
  };
}

export interface PodcastEpisode {
  id: string;
  episodeNumber: string;
  title: string;
  guest: string;
  guestRole: string;
  guestOrg: string;
  duration: string;
  topics: string[];
  summary: string;
  youtubeId?: string;
  audioUrl?: string;
  transcriptSnippet: string;
  recordedDate: string;
}

export interface RadarItem {
  id: string;
  name: string;
  category: 'AI & Agents' | 'Cloud & Compute' | 'Infrastructure & Hardware' | 'Quantum & Next-Gen';
  ring: 'ADOPT' | 'TRIAL' | 'ASSESS' | 'WATCH';
  description: string;
  trend: 'UP' | 'NEW' | 'STABLE';
  tags: string[];
}

export interface Panelist {
  name: string;
  role: string;
  organization: string;
  photo: string;
  stance: string;
}

export interface Panel {
  id: string;
  title: string;
  theme: string;
  description: string;
  timeSlot: string;
  room: string;
  moderator: {
    name: string;
    role: string;
    organization: string;
  };
  panelists: Panelist[];
  keyQuestions: string[];
}

export interface PrizeWinner {
  id: string;
  rank: 1 | 2 | 3;
  prize: string;
  category: string;
  projectName: string;
  teamName: string;
  organization: string;
  summary: string;
  technology: string[];
  githubUrl?: string;
}
