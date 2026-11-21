import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  Sparkles, 
  Coffee, 
  Cpu, 
  Users, 
  Award, 
  PartyPopper,
  Radio,
  Tv,
  HelpCircle,
  Mail,
  ExternalLink,
  ChevronRight,
  Layers,
  Laptop
} from 'lucide-react';
import { EVENT_DATA } from '../../data/event';

export const Agenda: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'TRACK1' | 'TRACK2'>('ALL');

  const track1Schedule = [
    {
      time: '09:30 AM – 10:00 AM',
      title: 'Registration & Networking',
      type: 'Check-In',
      tagColor: 'bg-gray-100 text-gray-700',
      desc: 'Badge pick-up, morning networking coffee, swag bags, and digital credential registration.',
      icon: Coffee,
    },
    {
      time: '10:00 AM – 10:15 AM',
      title: 'Introduction to GDG Cloud Toronto & Women in Tech',
      type: 'Welcome',
      tagColor: 'bg-pink-100 text-pink-700 border border-pink-200',
      desc: 'Community opening remarks, chapter milestones, and Women in Tech initiative highlights.',
      icon: Users,
    },
    {
      time: '10:15 AM – 10:50 AM',
      title: 'Keynote Speaker, Google: Naveen Nigam',
      type: 'Google Keynote',
      tagColor: 'bg-blue-100 text-google-blue-dark font-bold border border-blue-200',
      desc: 'The Human Edge: Leveraging AI and Leading Your Career Forward — Naveen Nigam (Head of Americas - Developer Ecosystem, Google).',
      icon: Sparkles,
      highlight: true,
    },
    {
      time: '10:50 AM – 11:00 AM',
      title: 'Live Knowledge Quiz and Prizes',
      type: 'Live Quiz 🏆',
      tagColor: 'bg-amber-100 text-amber-800 font-bold border border-amber-300',
      desc: 'Interactive live community quiz on mobile with instant DevFest swag and hardware prizes.',
      icon: HelpCircle,
      quiz: true,
    },
    {
      time: '11:00 AM – 11:35 AM',
      title: 'Keynote Speaker – Industry Leaders: Punit Solanki',
      type: 'Industry Keynote',
      tagColor: 'bg-indigo-100 text-indigo-700 font-semibold border border-indigo-200',
      desc: 'From Prompts to Production: Build, Tool Up & Deploy AI Agents — Punit Solanki (Lead, AI Solutions Engineer, OMERS).',
      icon: Cpu,
    },
    {
      time: '11:35 AM – 11:45 AM',
      title: 'Live Knowledge Quiz and Prizes',
      type: 'Live Quiz 🏆',
      tagColor: 'bg-amber-100 text-amber-800 font-bold border border-amber-300',
      desc: 'Round 2 live quiz: Cloud & AI trivia with premium partner prizes.',
      icon: HelpCircle,
      quiz: true,
    },
    {
      time: '11:45 AM – 12:30 PM',
      title: 'Mini Workshop – Google Antigravity: Mohammad Al-Ansari',
      type: 'Mini Workshop',
      tagColor: 'bg-purple-100 text-purple-700 font-bold border border-purple-200',
      desc: 'Collaborate with your agents: Connect Antigravity to Gmail and Google Drive with MCP — Mohammad Al-Ansari (Developer Advocate, Google).',
      icon: Laptop,
      highlight: true,
    },
    {
      time: '12:30 PM – 01:20 PM',
      title: 'Lunch & Networking: Sponsor Videos',
      type: 'Lunch & Media',
      tagColor: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
      desc: 'Catered networking lunch, sponsor video presentations, and partner demo kiosks.',
      icon: Coffee,
    },
    {
      time: '01:30 PM – 02:10 PM',
      title: 'AI and Cloud Visionary: Gleb Otochkin',
      type: 'Tech Deep Dive',
      tagColor: 'bg-blue-100 text-google-blue-dark font-semibold border border-blue-200',
      desc: 'From Data to Action - Building AI Agents with Google ADK, MCP, and Cloud Databases — Gleb Otochkin (Cloud Advocate, Google).',
      icon: Sparkles,
    },
    {
      time: '02:10 PM – 02:20 PM',
      title: 'Live Knowledge Quiz and Prizes',
      type: 'Live Quiz 🏆',
      tagColor: 'bg-amber-100 text-amber-800 font-bold border border-amber-300',
      desc: 'Afternoon lightning quiz with exciting tech gadgets and vouchers.',
      icon: HelpCircle,
      quiz: true,
    },
    {
      time: '02:20 PM – 03:00 PM',
      title: 'Panel Discussion – with Niru, the AI panelist',
      type: 'Signature Panel',
      tagColor: 'bg-red-100 text-red-700 font-bold border border-red-200',
      desc: 'Groundbreaking live panel featuring human tech executives and Niru, an autonomous synthetic AI co-panelist, debating the future of engineering.',
      icon: Users,
      highlight: true,
    },
    {
      time: '03:00 PM – 03:15 PM',
      title: 'Live Knowledge Quiz and Prizes',
      type: 'Grand Quiz 🏆',
      tagColor: 'bg-amber-100 text-amber-800 font-bold border border-amber-300',
      desc: 'Grand finale quiz competition with top-tier community developer awards and swag kits.',
      icon: HelpCircle,
      quiz: true,
    },
    {
      time: '03:15 PM – 04:00 PM',
      title: 'Certificates, Group Photo, & Final Networking Session',
      type: 'Closing & Honors',
      tagColor: 'bg-green-100 text-green-800 font-bold border border-green-300',
      desc: 'Issuance of DevFest 2026 Participation Certificates, official group photo, volunteer recognition, and closing community reception.',
      icon: Award,
    },
  ];

  const track2Schedule = [
    {
      time: '09:30 AM – 10:00 AM',
      title: 'Registration & Networking',
      type: 'Check-In',
      tagColor: 'bg-gray-100 text-gray-700',
      desc: 'Badge pick-up, morning coffee, and lab environment setup check.',
      icon: Coffee,
    },
    {
      time: '10:00 AM – 10:15 AM',
      title: 'Introduction to GDG Cloud Toronto & Women in Tech',
      type: 'Welcome',
      tagColor: 'bg-pink-100 text-pink-700 border border-pink-200',
      desc: 'Welcome remarks from the organizing leadership team and Women in Tech champions.',
      icon: Users,
    },
    {
      time: '10:15 AM – 10:50 AM',
      title: 'Keynote Speaker – Workshop Track',
      type: 'Workshop Keynote',
      tagColor: 'bg-blue-100 text-google-blue-dark font-bold border border-blue-200',
      desc: 'Setting the foundation for modern AI software craftsmanship, model tool-use, and builder workflows.',
      icon: Sparkles,
      highlight: true,
    },
    {
      time: '10:50 AM – 01:00 PM',
      title: 'Hands-on Workshop 1 – Build AI Applications using Vibe Coding',
      type: 'Hands-On Lab 1',
      tagColor: 'bg-green-100 text-green-800 font-bold border border-green-300',
      desc: 'Intensive 2-hour interactive code lab: Build and deploy fullstack AI applications using natural-language "vibe coding" paradigms with modern AI pair programmers.',
      icon: Laptop,
      highlight: true,
      badge: '2h 10m LAB',
    },
    {
      time: '01:00 PM – 01:30 PM',
      title: 'Lunch & Networking: Sponsor Videos',
      type: 'Lunch & Media',
      tagColor: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
      desc: 'Networking lunch, developer discussions, and sponsor showcases.',
      icon: Coffee,
    },
    {
      time: '01:30 PM – 03:30 PM',
      title: 'Hands-on Workshop 2 – Generative AI using Gemini',
      type: 'Hands-On Lab 2',
      tagColor: 'bg-blue-100 text-google-blue-dark font-bold border border-blue-300',
      desc: '2-hour deep-dive lab: Build enterprise-grade multimodal AI applications with Gemini 2.0 / 1.5 Pro, function calling, multimodal RAG, and Vertex AI.',
      icon: Cpu,
      highlight: true,
      badge: '2h 00m LAB',
    },
    {
      time: '03:30 PM – 04:00 PM',
      title: 'Certificates, Thanking Notes, Group Photos, and Networking',
      type: 'Closing & Honors',
      tagColor: 'bg-green-100 text-green-800 font-bold border border-green-300',
      desc: 'Hands-on lab completion certificates, instructor thanking notes, panoramic group photo, and community networking.',
      icon: Award,
    },
  ];

  return (
    <section id="schedule" className="py-20 bg-[#F8F9FA] border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-green/10 border border-google-green/20 mb-3">
            <Clock className="w-3.5 h-3.5 text-google-green" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-green-dark uppercase">
              OFFICIAL EVENT SCHEDULE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Google DevFest 2026 Agenda
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 font-medium">
            {EVENT_DATA.dates.display} • {EVENT_DATA.location.venue} ({EVENT_DATA.dates.startTime} – {EVENT_DATA.dates.endTime})
          </p>

          {/* View Toggle Tabs */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('ALL')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'ALL'
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Tracks (Side-by-Side)
            </button>
            <button
              onClick={() => setActiveTab('TRACK1')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'TRACK1'
                  ? 'bg-[#2E7D32] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#4CAF50]"></span>
              <span>Track 1: Conference</span>
            </button>
            <button
              onClick={() => setActiveTab('TRACK2')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'TRACK2'
                  ? 'bg-[#1565C0] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
              <span>Track 2: Hands-On Workshops</span>
            </button>
          </div>
        </div>

        {/* Dual Track Grid matching Slide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* TRACK 1 COLUMN */}
          {(activeTab === 'ALL' || activeTab === 'TRACK1') && (
            <div className={`space-y-4 ${activeTab === 'TRACK1' ? 'lg:col-span-2 max-w-4xl mx-auto w-full' : ''}`}>
              {/* Green Header Banner */}
              <div className="bg-[#2E7D32] text-white py-4 px-6 rounded-2xl shadow-md flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono tracking-widest uppercase opacity-90 block">
                    AUDITORIUM MAIN STAGE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    Track 1 - Conference Experience
                  </h3>
                </div>
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-mono font-semibold">
                  13 Sessions
                </span>
              </div>

              {/* Items List */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5 space-y-3">
                {track1Schedule.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx}
                      className={`p-3.5 rounded-xl border transition-all ${
                        item.highlight 
                          ? 'bg-blue-50/50 border-blue-200' 
                          : item.quiz 
                          ? 'bg-amber-50/50 border-amber-200' 
                          : 'bg-gray-50/50 border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-mono text-xs font-bold text-gray-700 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-google-green shrink-0" />
                          {item.time}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${item.tagColor}`}>
                          {item.type}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm sm:text-base text-gray-900 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TRACK 2 COLUMN */}
          {(activeTab === 'ALL' || activeTab === 'TRACK2') && (
            <div className={`space-y-4 ${activeTab === 'TRACK2' ? 'lg:col-span-2 max-w-4xl mx-auto w-full' : ''}`}>
              {/* Green Header Banner */}
              <div className="bg-[#2E7D32] text-white py-4 px-6 rounded-2xl shadow-md flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono tracking-widest uppercase opacity-90 block">
                    HANDS-ON LAB HALL
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                    Track 2 - Hands-On Workshop Experience
                  </h3>
                </div>
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-mono font-semibold">
                  2 Flagship Labs
                </span>
              </div>

              {/* Items List */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5 space-y-3">
                {track2Schedule.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx}
                      className={`p-3.5 rounded-xl border transition-all ${
                        item.highlight 
                          ? 'bg-green-50/60 border-green-200 ring-1 ring-green-100' 
                          : 'bg-gray-50/50 border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-mono text-xs font-bold text-gray-700 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-google-blue shrink-0" />
                          {item.time}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {item.badge && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-google-green text-white font-bold">
                              {item.badge}
                            </span>
                          )}
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${item.tagColor}`}>
                            {item.type}
                          </span>
                        </div>
                      </div>
                      <h4 className="font-bold text-sm sm:text-base text-gray-900 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Additional Special Experience Banners (Orange from Slide) */}
              <div className="space-y-3 pt-2">
                {/* Banner 1: Podcast/Creative Studio */}
                <div className="bg-[#EF6C00] text-white p-5 rounded-2xl shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <Radio className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg">
                        Podcast/Creative Studio Sessions
                      </h4>
                      <p className="text-xs text-amber-100 mt-0.5">
                        Live attendee interviews, technical creator studio, and speaker discussions running throughout the day.
                      </p>
                    </div>
                  </div>
                  <a 
                    href="#podcast-studio" 
                    className="hidden sm:inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <span>View Studio</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Banner 2: Exhibits, Tech Demo, Sponsors Arena */}
                <div className="bg-[#EF6C00] text-white p-5 rounded-2xl shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <Layers className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg">
                        Exhibits, Tech Demo, Sponsors Arena
                      </h4>
                      <p className="text-xs text-amber-100 mt-0.5">
                        Interactive partner technology booths, live cloud demos, hardware prototypes, and community swag arena.
                      </p>
                    </div>
                  </div>
                  <a 
                    href="#sponsors" 
                    className="hidden sm:inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <span>Explore Arena</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Sponsorship Contact Notice (From Slide Footer) */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-6 text-center max-w-2xl mx-auto shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-2 text-google-blue">
            <Mail className="w-5 h-5" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider">
              SPONSORSHIP & COMMUNITY PARTNERSHIP
            </span>
          </div>
          <h4 className="text-lg font-bold text-gray-900">
            Interested in the Sponsorship Opportunities?
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Partner with GDG Cloud Toronto to showcase your brand, recruit top engineering talent, and support 1,500+ builders.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <a
              href="mailto:gdgcloudtoronto@gmail.com"
              className="bg-google-blue hover:bg-google-blue-dark text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Contact gdgcloudtoronto@gmail.com</span>
            </a>
            <a
              href="https://forms.gle/GP9ZNc3w8dLoTB1G8"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors inline-flex items-center gap-1.5"
            >
              <span>Sponsorship Form</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
