import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Heart, 
  Sparkles, 
  Users, 
  Award, 
  CheckCircle2,
  Calendar,
  Star,
  Trophy,
  ShieldCheck,
  Video,
  Laptop,
  Smile,
  ExternalLink
} from 'lucide-react';
import { VOLUNTEERS } from '../../data/volunteers';
import { EVENT_DATA } from '../../data/event';
import { LinkedinIcon } from '../ui/BrandIcons';

export const VolunteerRecognition: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('ALL');

  const volunteerAwards = [
    {
      title: 'DevFest Volunteer Lead of the Year 2026',
      recipient: 'Anastasia Annin',
      role: 'Attendee Experience & Registration Lead',
      description: 'Awarded for extraordinary dedication in leading attendee check-in kiosks, accessibility accommodations, badge verification, and welcoming 1,500+ builders.',
      icon: Trophy,
      color: '#FBBC04',
      badge: 'LEADERSHIP HONOR',
    },
    {
      title: 'Technical Operations & Stage Crew Pillar',
      recipient: 'Mehul Akoliya',
      role: 'Technical Operations & Room Management Lead',
      description: 'Awarded for exceptional care in orchestrating technical room readiness, speaker audio-visual synchronization, and keynote stage operations.',
      icon: Laptop,
      color: '#4285F4',
      badge: 'TECHNICAL EXCELLENCE',
    },
    {
      title: 'Workshop & Developer Showcase Champion',
      recipient: 'Aditya Kumar',
      role: 'Workshop Labs & Interactive Showcase Lead',
      description: 'Awarded for curating interactive technology demonstrations, coordinating developer mentors, and supporting live AI agent workshops.',
      icon: Star,
      color: '#34A853',
      badge: 'COMMUNITY IMPACT',
    },
  ];

  const domains = ['ALL', 'Registration', 'Production & AV', 'Workshop Lead'];

  const filteredVolunteers = selectedDomain === 'ALL' 
    ? VOLUNTEERS 
    : VOLUNTEERS.filter(v => v.domain === selectedDomain);

  return (
    <section id="volunteers" className="py-24 bg-white relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-red/10 border border-google-red/20 mb-3">
            <Heart className="w-3.5 h-3.5 text-google-red fill-google-red" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-red-dark uppercase">
              100+ VOLUNTEERS STRONG
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Volunteer Recognition & Awards
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-medium max-w-2xl mt-3 italic mx-auto">
            "DevFest 2026 is made possible by 100+ selfless volunteers who dedicate hundreds of hours to build an inspiring, inclusive space for developers in Toronto."
          </p>
        </div>

        {/* 100+ Volunteer Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
          <div className="bg-[#F8F9FA] p-5 rounded-2xl border border-gray-200 text-center shadow-xs">
            <span className="block text-3xl sm:text-4xl font-extrabold text-google-blue font-mono">100+</span>
            <span className="text-xs font-semibold text-gray-700 mt-1 block">Active Volunteers</span>
            <span className="text-[11px] text-gray-500">Across 6 specialized teams</span>
          </div>
          <div className="bg-[#F8F9FA] p-5 rounded-2xl border border-gray-200 text-center shadow-xs">
            <span className="block text-3xl sm:text-4xl font-extrabold text-google-green font-mono">4,200+</span>
            <span className="text-xs font-semibold text-gray-700 mt-1 block">Community Hours</span>
            <span className="text-[11px] text-gray-500">Preparation & execution</span>
          </div>
          <div className="bg-[#F8F9FA] p-5 rounded-2xl border border-gray-200 text-center shadow-xs">
            <span className="block text-3xl sm:text-4xl font-extrabold text-google-yellow font-mono">1,500+</span>
            <span className="text-xs font-semibold text-gray-700 mt-1 block">Builders Welcomed</span>
            <span className="text-[11px] text-gray-500">Hospitality & badge desks</span>
          </div>
          <div className="bg-[#F8F9FA] p-5 rounded-2xl border border-gray-200 text-center shadow-xs">
            <span className="block text-3xl sm:text-4xl font-extrabold text-google-red font-mono">100%</span>
            <span className="text-xs font-semibold text-gray-700 mt-1 block">Community Driven</span>
            <span className="text-[11px] text-gray-500">Non-profit volunteer spirit</span>
          </div>
        </div>

        {/* Volunteer Awards & Honors 2026 */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-google-yellow" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              2026 Volunteer Honors & Awards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {volunteerAwards.map((award, idx) => {
              const Icon = award.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-google-subtle p-5 flex flex-col justify-between transition-all relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: award.color }}></div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-50 border border-gray-200">
                        <Icon className="w-4 h-4" style={{ color: award.color }} />
                      </span>
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 uppercase">
                        {award.badge}
                      </span>
                    </div>
                    <h4 className="font-bold text-base text-gray-900 group-hover:text-google-blue transition-colors">
                      {award.title}
                    </h4>
                    <div className="mt-2 mb-3">
                      <span className="block font-semibold text-xs text-google-blue-dark">
                        Recipient: {award.recipient}
                      </span>
                      <span className="text-[11px] text-gray-500 font-mono">
                        {award.role}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter Buttons for Volunteers */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Meet the Volunteer Leadership Team
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Representing our cohort of 100+ passionate Toronto community builders
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {domains.map((dom) => (
              <button
                key={dom}
                onClick={() => setSelectedDomain(dom)}
                className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all ${
                  selectedDomain === dom
                    ? 'bg-google-blue text-white shadow-xs'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {dom === 'ALL' ? 'All Leads' : dom}
              </button>
            ))}
          </div>
        </div>

        {/* Volunteers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredVolunteers.map((vol) => (
            <div
              key={vol.id}
              className="bg-[#F8F9FA] rounded-3xl border border-gray-200 shadow-xs hover:shadow-google-card transition-all p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={vol.photo}
                    alt={vol.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white border border-gray-200 text-google-blue-dark inline-block mb-1">
                      {vol.badge}
                    </span>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-base text-gray-900">
                        {vol.name}
                      </h4>
                      {vol.linkedin && (
                        <a
                          href={vol.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#0A66C2] hover:text-[#004182] transition-colors p-0.5 rounded"
                          title={`${vol.name} on LinkedIn`}
                        >
                          <LinkedinIcon size={14} />
                        </a>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 font-mono block">
                      {vol.role}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3 h-3 text-google-blue" />
                      {vol.yearsInvolved} Years with GDG Cloud Toronto
                    </span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-gray-200 mb-3 text-xs text-gray-700 italic leading-relaxed">
                  "{vol.quote}"
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">Contribution:</strong> {vol.contribution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer Call to Action */}
        <div className="bg-gradient-to-r from-google-blue/10 via-google-green/10 to-google-yellow/10 rounded-3xl p-8 border border-gray-200 text-center max-w-3xl mx-auto">
          <HeartHandshake className="w-10 h-10 text-google-blue mx-auto mb-3" />
          <h4 className="text-xl font-bold text-gray-900">
            Want to Join the 100+ Volunteers Team?
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto mt-2 leading-relaxed">
            Gain invaluable event leadership experience, network with speakers and Google engineers, receive exclusive DevFest 2026 swag, and earn a verified Volunteer Leadership Certificate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
            <a
              href="mailto:gdgcloudtoronto@gmail.com?subject=DevFest%202026%20Volunteer%20Interest"
              className="bg-gray-900 hover:bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-xs transition-colors inline-flex items-center gap-2"
            >
              <Heart className="w-3.5 h-3.5 text-google-red fill-google-red" />
              <span>Apply to Volunteer (gdgcloudtoronto@gmail.com)</span>
            </a>
            <a
              href={EVENT_DATA.socials.bevy}
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-gray-50 text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-xl border border-gray-300 transition-colors inline-flex items-center gap-1.5"
            >
              <span>Join Chapter on Bevy</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
