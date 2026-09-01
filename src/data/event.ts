import { EventConfig } from '../types';

export const EVENT_DATA: EventConfig = {
  name: 'GDG Cloud Toronto — DevFest 2026',
  year: '2026',
  tagline: 'The Future of Computing Starts Here.',
  theme: 'AI × Cloud × Quantum × Infrastructure',
  subheadline: 'A premier developer community experience bringing together AI, Cloud Computing, Quantum Computing, hardware infrastructure, developers, technology leaders, innovators and builders.',
  description: 'DevFest 2026 is the annual flagship developer conference hosted by GDG Cloud Toronto. Join 1,500+ engineers, researchers, and technology pioneers in the heart of Downtown Toronto for a full day of hands-on workshops, keynotes, technical deep dives, and collaborative innovation.',
  location: {
    city: 'Toronto',
    country: 'Canada',
    venue: 'Metro Toronto Convention Centre (MTCC) — North Building',
    address: '255 Front St W, Toronto, ON M5V 2W6',
    roomHighlight: 'Constitution Hall & Grand Ballroom Labs',
  },
  dates: {
    display: 'Saturday, October 24, 2026',
    startDate: '2026-10-24T08:30:00-04:00',
    endDate: '2026-10-24T19:00:00-04:00',
    startTime: '08:30 AM EDT',
    endTime: '07:00 PM EDT',
  },
  metrics: {
    expectedDevelopers: 1500,
    speakersCount: 42,
    workshopsCount: 16,
    volunteersCount: 65,
    communityMembers: 5800,
    pastAttendees: 3400,
    handsOnParticipants: 850,
    podcastEpisodes: 12,
    awardsCategories: 6,
  },
  registration: {
    isOpen: true,
    tier: 'General Admission & Builder Pass',
    price: 'Free & Community Subsidized',
    portalUrl: '#register',
  },
  socials: {
    meetup: 'https://www.meetup.com/gdg-cloud-toronto/',
    linkedin: 'https://www.linkedin.com/company/gdg-cloud-toronto/',
    youtube: 'https://www.youtube.com/@gdgcloudtoronto',
    github: 'https://github.com/gdg-cloud-toronto',
    x: 'https://x.com/GDGCloudToronto',
  },
};
