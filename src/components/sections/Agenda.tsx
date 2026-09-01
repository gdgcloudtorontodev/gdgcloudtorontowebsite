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
  Filter
} from 'lucide-react';

export const Agenda: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>('ALL');

  const schedule = [
    {
      time: '08:30 AM – 09:30 AM',
      title: 'Doors Open, Registration & Morning Networking Coffee',
      type: 'General',
      room: 'Grand Promenade & Check-in Kiosks',
      speaker: 'GDG Cloud Toronto Registration Team',
      desc: 'Badge pick-up, swag collection, breakfast pastries, and live demo stations.',
      icon: Coffee,
      color: '#FBBC04',
    },
    {
      time: '09:30 AM – 10:30 AM',
      title: 'Opening Ceremony & DevFest 2026 Keynote: The Architecture of Agency',
      type: 'Keynote',
      room: 'Grand Ballroom A (Main Stage)',
      speaker: 'Dr. Elena Vance (Google DeepMind) & Chapter Leads',
      desc: 'How foundation models transition from generative chatbots into multi-agent systems.',
      icon: Sparkles,
      color: '#4285F4',
    },
    {
      time: '10:45 AM – 12:45 PM',
      title: 'Technical Track Sessions & Hands-on Lab Block 1',
      type: 'Lab / Tech Deep Dive',
      room: 'Lab Rooms 201, 202, 203 & Hall B1',
      speaker: 'Marcus Chen (GCP) & Aisha Al-Mansoor (Agentic Lab)',
      desc: 'Workshops on MCP with LangGraph, vLLM on GKE, and Multi-Region Resiliency.',
      icon: Cpu,
      color: '#34A853',
    },
    {
      time: '12:45 PM – 02:00 PM',
      title: 'Community Networking Lunch & Ecosystem Demo Showcase',
      type: 'Networking',
      room: 'Community Lounge & Partner Pavilion',
      speaker: 'All Attendees, Mentors & Partners',
      desc: 'Catered hot lunch, sponsor lounge demos, and mentor match sessions.',
      icon: Users,
      color: '#FBBC04',
    },
    {
      time: '02:00 PM – 03:00 PM',
      title: 'The Forum: The Agentic Paradigm Panel Discussion',
      type: 'Panel',
      room: 'Grand Ballroom A (Main Stage)',
      speaker: 'Panelists from DeepMind, GCP, NextGen Silicon & Vector Institute',
      desc: 'Unscripted debate on autonomous agents, coding economics, and safety gates.',
      icon: Users,
      color: '#EA4335',
    },
    {
      time: '03:15 PM – 05:00 PM',
      title: 'Quantum Computing & Multimodal AI Hands-on Lab Block 2',
      type: 'Lab / Tech Deep Dive',
      room: 'Lab 201 & Lab 204 (Frontier Pavilion)',
      speaker: 'Dr. Julian Trent (Cirq) & Priya Sharma (TPU Infra)',
      desc: 'Writing quantum circuits with Cirq and Multimodal RAG with Gemini 1.5 Pro.',
      icon: Cpu,
      color: '#A142F4',
    },
    {
      time: '05:15 PM – 06:15 PM',
      title: 'Community Honors, Hackathon Winners Podium & Closing Address',
      type: 'Awards',
      room: 'Grand Ballroom A (Main Stage)',
      speaker: 'GDG Organizers & Ecosystem Judges',
      desc: 'Awarding the Developer of the Year, Volunteer of the Year, and Hackathon Prizes ($17.5k+).',
      icon: Award,
      color: '#FBBC04',
    },
    {
      time: '06:15 PM – 07:30 PM',
      title: 'DevFest 2026 Community After-Party & Celebration',
      type: 'Celebration',
      room: 'Grand Promenade Lounge',
      speaker: 'Music, Refreshments & Photo Wall',
      desc: 'Closing reception celebrating another milestone year for Canadian developers.',
      icon: PartyPopper,
      color: '#34A853',
    },
  ];

  return (
    <section id="schedule" className="py-20 bg-[#F8F9FA] border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 mb-3">
            <Clock className="w-3.5 h-3.5 text-google-blue" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase">
              DEVFEST 2026 TIMELINE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            YOUR DAY AT DEVFEST
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Saturday, October 24, 2026 • Metro Toronto Convention Centre (MTCC)
          </p>
        </div>

        {/* Schedule List */}
        <div className="space-y-4">
          {schedule.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm hover:shadow-google-subtle transition-all flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group"
              >
                {/* Time badge */}
                <div className="sm:w-44 shrink-0 font-mono text-xs text-gray-500 font-bold flex items-center gap-2 bg-gray-50 sm:bg-transparent p-2 sm:p-0 rounded-lg w-full sm:w-auto">
                  <Clock className="w-3.5 h-3.5 text-google-blue shrink-0" />
                  <span>{item.time}</span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span 
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-google-red" />
                      {item.room}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-gray-900 group-hover:text-google-blue transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="text-xs font-mono text-google-blue-dark font-medium pt-1">
                    Host / Presenter: {item.speaker}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
