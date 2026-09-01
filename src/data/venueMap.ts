export interface VenueZone {
  id: string;
  name: string;
  type: 'stage' | 'lab' | 'studio' | 'lounge' | 'info' | 'sponsor';
  floor: string;
  capacity: string;
  description: string;
  currentActivity: string;
  coordinates: { x: number; y: number; width: number; height: number };
  color: string;
}

export const VENUE_ZONES: VenueZone[] = [
  {
    id: 'main-stage',
    name: 'Grand Ballroom A (Main Stage)',
    type: 'stage',
    floor: 'Floor 100 — North Hall',
    capacity: '1,200 Seats',
    description: 'Host venue for the Opening Ceremony, Keynotes, Fireside Chats, Flagship Panels, and Community Honors.',
    currentActivity: '09:30 AM — Keynote: Dr. Elena Vance',
    coordinates: { x: 10, y: 15, width: 45, height: 40 },
    color: '#4285F4',
  },
  {
    id: 'lab-room-201',
    name: 'Lab 201 — AI Sandbox',
    type: 'lab',
    floor: 'Floor 200 — Workshop Mezzanine',
    capacity: '80 Seats',
    description: 'Equipped with high-speed fiber, power at every seat, and GPU cloud sandbox terminals for hands-on labs.',
    currentActivity: '11:00 AM — Building Autonomous AI Agents with MCP',
    coordinates: { x: 60, y: 15, width: 35, height: 22 },
    color: '#34A853',
  },
  {
    id: 'lab-room-202',
    name: 'Lab 202 — Innovation Hub',
    type: 'lab',
    floor: 'Floor 200 — Workshop Mezzanine',
    capacity: '80 Seats',
    description: 'Dedicated to Multimodal RAG with Gemini, Vertex AI Vector Search, and database architectures.',
    currentActivity: '01:45 PM — Multimodal RAG with Gemini & Vertex AI',
    coordinates: { x: 60, y: 40, width: 35, height: 22 },
    color: '#FBBC04',
  },
  {
    id: 'podcast-studio',
    name: 'DevFest Podcast & Media Studio',
    type: 'studio',
    floor: 'Floor 100 — East Atrium',
    capacity: 'Live Audience (40)',
    description: 'Sound-treated digital broadcast studio recording live episodes with keynote speakers, GDG leaders, and community builders.',
    currentActivity: '02:30 PM — Recording: Episode 03 with Dr. Julian Trent',
    coordinates: { x: 10, y: 60, width: 25, height: 30 },
    color: '#EA4335',
  },
  {
    id: 'networking-lounge',
    name: 'Community Constellation Lounge & Sponsors',
    type: 'lounge',
    floor: 'Floor 100 — Grand Promenade',
    capacity: '500+ Builders',
    description: 'Interactive demo booths, partner lounges, mentor matching corner, coffee bar, and developer swag distribution.',
    currentActivity: 'All Day — Ecosystem Demo Showcase & Mentorship',
    coordinates: { x: 38, y: 65, width: 57, height: 25 },
    color: '#A142F4',
  },
];
