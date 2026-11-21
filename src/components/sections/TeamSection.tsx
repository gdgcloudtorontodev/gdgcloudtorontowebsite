import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  ExternalLink, 
  Mail
} from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon } from '../ui/BrandIcons';
import { EVENT_DATA } from '../../data/event';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Core Organizer' | 'Volunteer Lead';
  organization: string;
  bio: string;
  photo: string;
  badgeText: string;
  badgeColor: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  // 1. Core Organizers
  {
    id: 'team-1',
    name: 'Ramkumar Arun',
    role: 'Organizer',
    category: 'Core Organizer',
    organization: 'GDG Cloud Toronto',
    bio: 'Key organizer and host of GDG Cloud Toronto, leading conference vision, developer community growth, enterprise partnerships, and flagship DevFest events across Canada.',
    photo: '/images/team/ramkumar-arun.jpg',
    badgeText: 'ORGANIZER',
    badgeColor: 'bg-google-blue',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ramkumararun/'
    }
  },
  {
    id: 'team-2',
    name: 'Vimal',
    role: 'Co-organizer',
    category: 'Core Organizer',
    organization: 'GDG Cloud Toronto',
    bio: 'Co-organizer of GDG Cloud Toronto, driving conference technical logistics, stage operations, speaker coordination, and community engagement.',
    photo: '/images/team/vimal.jpg',
    badgeText: 'CO-ORGANIZER',
    badgeColor: 'bg-google-blue',
    socials: {
      linkedin: 'https://www.linkedin.com/in/vimalonline/'
    }
  },
  {
    id: 'team-3',
    name: 'Shweta Shukla',
    role: 'Co-organizer',
    category: 'Core Organizer',
    organization: 'GDG Cloud Toronto',
    bio: 'Co-founder and co-organizer of GDG Cloud Toronto, steering community programs, technical workshops, cloud study jams, and inclusive developer initiatives.',
    photo: '/images/team/shweta-shukla.jpg',
    badgeText: 'CO-ORGANIZER',
    badgeColor: 'bg-google-blue',
    socials: {
      linkedin: 'https://www.linkedin.com/in/shwetashuklas/'
    }
  },
  {
    id: 'team-4',
    name: 'Prachi Bhatnagar',
    role: 'Head of Digital Marketing',
    category: 'Core Organizer',
    organization: 'GDG Cloud Toronto',
    bio: 'Head of Digital Marketing for GDG Cloud Toronto, directing multi-channel event promotions, digital campaigns, attendee engagement, and community storytelling.',
    photo: '/images/team/prachi-bhatnagar.jpg',
    badgeText: 'HEAD OF DIGITAL MARKETING',
    badgeColor: 'bg-google-red',
    socials: {
      linkedin: 'https://www.linkedin.com/in/prachibhatnagar2893/'
    }
  },

  // 2. Volunteer Leads
  {
    id: 'team-5',
    name: 'Anastasia Annin',
    role: 'Volunteer Lead',
    category: 'Volunteer Lead',
    organization: 'GDG Cloud Toronto',
    bio: 'Volunteer Lead facilitating seamless attendee check-in, registration flow, and on-ground community experience at DevFest 2026.',
    photo: '/images/team/anastasia-annin.png',
    badgeText: 'VOLUNTEER LEAD',
    badgeColor: 'bg-google-green',
    socials: {
      linkedin: 'https://www.linkedin.com/in/anastannin/'
    }
  },
  {
    id: 'team-6',
    name: 'Mehul Akoliya',
    role: 'Volunteer Lead',
    category: 'Volunteer Lead',
    organization: 'GDG Cloud Toronto',
    bio: 'Volunteer Lead overseeing technical room coordination, developer track assistance, and speaker stage management.',
    photo: '/images/team/mehul-akoliya.png',
    badgeText: 'VOLUNTEER LEAD',
    badgeColor: 'bg-google-green',
    socials: {
      linkedin: 'https://www.linkedin.com/in/mehulakoliya/'
    }
  },
  {
    id: 'team-7',
    name: 'Aditya Kumar',
    role: 'Volunteer Lead',
    category: 'Volunteer Lead',
    organization: 'GDG Cloud Toronto',
    bio: 'Volunteer Lead coordinating workshop labs, speaker logistics, and developer showcase demonstrations.',
    photo: '/images/team/aditya-kumar.png',
    badgeText: 'VOLUNTEER LEAD',
    badgeColor: 'bg-google-green',
    socials: {
      linkedin: 'https://www.linkedin.com/in/aditya-kumar-14551a93/'
    }
  }
];

export const TeamSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const categories = [
    { id: 'ALL', label: 'All Team Members (7)' },
    { id: 'Core Organizer', label: 'Core Organizers (4)' },
    { id: 'Volunteer Lead', label: 'Volunteer Leads (3)' },
  ];

  const filteredMembers = selectedFilter === 'ALL'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.category === selectedFilter);

  return (
    <section id="team" className="py-24 bg-white relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 mb-3">
            <Users className="w-3.5 h-3.5 text-google-blue" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase">
              PEOPLE BEHIND DEVFEST 2026
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            MEET THE TEAM
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed mx-auto">
            The passionate community organizers, digital media partners, and volunteer leads dedicating their time to orchestrate Canada’s premier developer gathering.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                selectedFilter === cat.id
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#F8F9FA] rounded-3xl border border-gray-200/90 overflow-hidden shadow-xs hover:shadow-google-card hover:border-google-blue/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Badge Container */}
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Pill Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[9px] font-mono font-bold px-2.5 py-1 rounded-full text-white shadow-sm ${member.badgeColor}`}>
                      {member.badgeText}
                    </span>
                  </div>

                  {/* Name on image bottom */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-extrabold text-lg leading-tight drop-shadow-sm">
                      {member.name}
                    </h3>
                    <span className="text-xs text-gray-200 font-mono block drop-shadow-sm truncate">
                      {member.organization}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <span className="text-xs font-bold text-google-blue-dark block font-mono">
                    {member.role}
                  </span>
                  
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Social / Contact Links Footer */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-gray-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-google-blue hover:border-google-blue transition-colors"
                        title={`${member.name} on LinkedIn`}
                      >
                        <LinkedinIcon size={14} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-colors"
                        title={`${member.name} on X`}
                      >
                        <TwitterIcon size={14} />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-colors"
                        title={`${member.name} on GitHub`}
                      >
                        <GithubIcon size={14} />
                      </a>
                    )}
                  </div>

                  <span className="text-[10px] font-mono text-gray-400">
                    GDG Toronto
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the Team Callout Box */}
        <div className="bg-gradient-to-r from-google-blue/10 via-purple-50 to-pink-50 p-6 sm:p-8 rounded-3xl border border-google-blue/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-google-blue-dark font-mono text-xs font-bold uppercase">
              <Heart className="w-4 h-4 text-google-red fill-google-red" />
              <span>PASSIONATE ABOUT DEVELOPER COMMUNITIES?</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
              Join Our 100+ Organizing & Volunteer Team
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl">
              From technical operations and AV production to stage hospitality, workshop TAs, and digital media, help shape DevFest 2026.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="mailto:gdgcloudtoronto@gmail.com?subject=DevFest%202026%20Organizing%20Team%20%26%20Volunteer%20Inquiry"
              className="bg-google-blue hover:bg-google-blue-dark text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xs transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Organizers</span>
            </a>
            <a
              href={EVENT_DATA.socials.meetup}
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-gray-50 text-gray-800 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-gray-300 transition-all flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4 text-gray-500" />
              <span>Join GDG Chapter</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};