import { Award, PrizeWinner } from '../types';

export const COMMUNITY_AWARDS: Award[] = [
  {
    id: 'monumental-scale-award',
    title: 'Monumental Scale Award by Google',
    category: 'Google Recognition',
    description: 'Prestigious global recognition awarded by Google to GDG Cloud Toronto in recognition of extraordinary community leadership, monumental event scale, developer empowerment, and organizing flagship DevFest conferences across North America.',
    criteria: [
      'Monumental developer community growth and record conference attendance',
      'Exemplary leadership in advancing AI, Cloud, and developer enablement',
      'Delivering premier, inclusive technical conference experiences across Canada',
    ],
    icon: 'Trophy',
    recipient2025: 'GDG Cloud Toronto (Presented by Google)',
  },
];

// Hackathon winners shown in the WinnersPodium section. Populate once results are announced.
export const PRIZE_WINNERS: PrizeWinner[] = [];
