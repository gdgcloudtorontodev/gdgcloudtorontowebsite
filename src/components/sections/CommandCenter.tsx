import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  MapPin, 
  Calendar, 
  Users, 
  Cpu, 
  Sparkles, 
  HeartHandshake, 
  Radio, 
  Award, 
  Clock,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { EVENT_DATA } from '../../data/event';

export const CommandCenter: React.FC = () => {
  // Countdown Timer calculation
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 58, hours: 14, minutes: 22, seconds: 45 });

  useEffect(() => {
    const target = new Date(EVENT_DATA.dates.startDate).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const metricCards = [
    { label: 'EXPECTED BUILDERS', value: `${EVENT_DATA.metrics.expectedDevelopers}+`, subtext: 'Developers, researchers & creators', icon: Users, color: 'text-google-blue', bg: 'bg-google-blue/10' },
    { label: 'KEYNOTE & TECH SPEAKERS', value: `${EVENT_DATA.metrics.speakersCount}`, subtext: 'DeepMind, GCP & Vector leaders', icon: Sparkles, color: 'text-google-red', bg: 'bg-google-red/10' },
    { label: 'HANDS-ON LABS & WORKSHOPS', value: `${EVENT_DATA.metrics.workshopsCount}`, subtext: 'MCP, Gemini, vLLM & Cirq', icon: Cpu, color: 'text-google-green', bg: 'bg-google-green/10' },
    { label: 'COMMUNITY VOLUNTEERS', value: `${EVENT_DATA.metrics.volunteersCount}`, subtext: 'Across 8 functional tracks', icon: HeartHandshake, color: 'text-google-yellow-dark', bg: 'bg-google-yellow/10' },
    { label: 'PODCAST RECORDINGS', value: `${EVENT_DATA.metrics.podcastEpisodes}`, subtext: 'Live digital studio interviews', icon: Radio, color: 'text-google-blue', bg: 'bg-google-blue/10' },
    { label: 'COMMUNITY HONORS AWARDS', value: `${EVENT_DATA.metrics.awardsCategories}`, subtext: 'Ecosystem Hall of Fame', icon: Award, color: 'text-google-red', bg: 'bg-google-red/10' },
  ];

  return (
    <section id="command-center" className="py-16 bg-[#F8F9FA] border-y border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-gray-900 text-white">
                <Terminal className="w-4 h-4 text-google-blue-light" />
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase">
                SYSTEM DASHBOARD
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              DEVFEST COMMAND CENTER
            </h2>
            <p className="text-sm text-gray-600 max-w-xl mt-1">
              Live operational telemetry, event metrics, venue coordinates, and mission countdown for DevFest 2026.
            </p>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-gray-200 shadow-sm">
            <Activity className="w-5 h-5 text-google-green animate-pulse" />
            <div>
              <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none">REGISTRATION STATUS</span>
              <span className="text-xs font-bold text-gray-900 flex items-center gap-1">
                PASSES OPEN <CheckCircle2 className="w-3.5 h-3.5 text-google-green" />
              </span>
            </div>
          </div>
        </div>

        {/* Top telemetry grid: Countdown & Venue Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* Mission Countdown */}
          <div className="lg:col-span-6 bg-gray-900 text-white p-6 sm:p-8 rounded-3xl border border-gray-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-google-blue/15 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-google-blue-light tracking-wider uppercase flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  COUNTDOWN TO OPENING KEYNOTE
                </span>
                <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-gray-300">
                  T-MINUS
                </span>
              </div>

              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                  <span className="block text-2xl sm:text-4xl font-extrabold font-mono text-white">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">DAYS</span>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                  <span className="block text-2xl sm:text-4xl font-extrabold font-mono text-google-blue-light">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">HOURS</span>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                  <span className="block text-2xl sm:text-4xl font-extrabold font-mono text-google-yellow">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">MINS</span>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                  <span className="block text-2xl sm:text-4xl font-extrabold font-mono text-google-green">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">SECS</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                <span>EVENT: {EVENT_DATA.dates.display}</span>
                <span className="text-google-green">DOORS OPEN 08:30 AM EDT</span>
              </div>
            </div>
          </div>

          {/* Venue & Location Specs */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-google-red tracking-wider uppercase flex items-center gap-1.5 font-bold">
                  <MapPin className="w-4 h-4" />
                  PHYSICAL HEADQUARTERS
                </span>
                <span className="text-xs font-mono bg-gray-100 px-2.5 py-1 rounded-full text-gray-700">
                  TORONTO, ON
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                {EVENT_DATA.location.venue}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {EVENT_DATA.location.address} • Downtown Toronto Financial District
              </p>
              <div className="mt-3 p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-700">
                <span className="font-semibold text-gray-900">Rooms:</span> Grand Ballroom A (Main Stage), Lab 201 (AI Sandbox), Lab 202 (Cloud Engine), Digital Podcast Studio & Networking Lounge.
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <a href="#campus-venue" className="text-google-blue font-semibold hover:underline flex items-center gap-1">
                <span>View Interactive Floor Map</span>
              </a>
              <span className="text-gray-500 font-mono">Capacity: 1,500+</span>
            </div>
          </div>
        </div>

        {/* 6 Configurable Event Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metricCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-google-subtle hover:border-google-blue/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`p-2 rounded-xl w-fit ${card.bg} mb-3`}>
                    <Icon className={`w-4 h-4 ${card.color}`} />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 font-bold uppercase block leading-tight tracking-wider">
                    {card.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-mono block mt-1">
                    {card.value}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mt-2 line-clamp-1">
                  {card.subtext}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
