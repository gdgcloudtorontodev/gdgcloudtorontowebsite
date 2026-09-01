import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  Clock, 
  Users, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Code2
} from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import { WORKSHOPS } from '../../data/workshops';
import { Workshop } from '../../types';

export const WorkshopLab: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>('ALL');
  const [expandedWorkshop, setExpandedWorkshop] = useState<string>(WORKSHOPS[0].id);

  const tracks = [
    'ALL',
    'AI & Agents',
    'Cloud & Kubernetes',
    'Quantum Computing',
  ];

  const filteredWorkshops = selectedTrack === 'ALL'
    ? WORKSHOPS
    : WORKSHOPS.filter((w) => w.track === selectedTrack);

  return (
    <section id="workshops" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-green/10 border border-google-green/20 mb-3">
              <Cpu className="w-3.5 h-3.5 text-google-green" />
              <span className="text-xs font-mono font-bold tracking-widest text-google-green-dark uppercase">
                HANDS-ON CODING LABS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              DEVFEST LAB
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed">
              Don’t just listen to theory — open your laptop and build. Provision real GPU clusters, wire up MCP servers, and run quantum circuits.
            </p>
          </div>

          {/* Track Filter */}
          <div className="flex flex-wrap items-center gap-2">
            {tracks.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTrack(t)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedTrack === t
                    ? 'bg-google-green text-white shadow-sm'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Stage Methodology Banner */}
        <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-3xl mb-10 border border-neutral-800 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <span className="text-xs font-mono font-bold text-google-green uppercase block mb-1">
                OUR LAB PEDAGOGY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                BUILD → EXPERIMENT → DEPLOY
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Every workshop provides verified starter repos, free cloud sandbox credits, and dedicated mentor TAs in the room.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full md:w-auto text-center font-mono text-xs">
              <div className="bg-white/10 p-3 rounded-2xl border border-white/10">
                <span className="text-google-blue-light font-bold block text-sm">01. BUILD</span>
                <span className="text-[10px] text-gray-400">Scaffold code</span>
              </div>
              <div className="bg-white/10 p-3 rounded-2xl border border-white/10">
                <span className="text-google-yellow font-bold block text-sm">02. EXPERIMENT</span>
                <span className="text-[10px] text-gray-400">Tune parameters</span>
              </div>
              <div className="bg-white/10 p-3 rounded-2xl border border-white/10">
                <span className="text-google-green font-bold block text-sm">03. DEPLOY</span>
                <span className="text-[10px] text-gray-400">Ship to cloud</span>
              </div>
            </div>
          </div>
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredWorkshops.map((ws) => {
            const isExpanded = expandedWorkshop === ws.id;

            return (
              <div
                key={ws.id}
                className="bg-[#F8F9FA] rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between space-y-5"
              >
                <div>
                  {/* Top tags row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-google-blue-dark">
                      {ws.track}
                    </span>
                    <div className="flex items-center gap-2 text-[10px] font-mono font-bold">
                      <span className={`px-2 py-0.5 rounded-full ${
                        ws.difficulty === 'BEGINNER' ? 'bg-green-100 text-green-800' :
                        ws.difficulty === 'INTERMEDIATE' ? 'bg-amber-100 text-amber-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {ws.difficulty}
                      </span>
                      <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                        {ws.duration}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                    {ws.title}
                  </h3>

                  {/* Instructor */}
                  <div className="flex items-center gap-3 my-3">
                    <img
                      src={ws.instructor.avatar}
                      alt={ws.instructor.name}
                      className="w-10 h-10 rounded-full object-cover border border-white shadow-xs"
                    />
                    <div>
                      <span className="text-xs font-bold text-gray-900 block">
                        {ws.instructor.name}
                      </span>
                      <span className="text-[11px] text-gray-500 font-mono">
                        {ws.instructor.role} • {ws.instructor.organization}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {ws.description}
                  </p>

                  {/* Capacity Bar */}
                  <div className="bg-white p-3 rounded-2xl border border-gray-200 mb-4 space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-500">SEAT CAPACITY</span>
                      <span className="font-bold text-gray-900">{ws.enrolled} / {ws.capacity} Seats Filled</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-google-green h-full rounded-full transition-all"
                        style={{ width: `${(ws.enrolled / ws.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Prerequisites Checklist */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block">
                      PREREQUISITES
                    </span>
                    {ws.prerequisites.map((pre, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-google-green shrink-0 mt-0.5" />
                        <span>{pre}</span>
                      </div>
                    ))}
                  </div>

                  {/* 3-Step Mini Workflow Inside Card */}
                  <div className="space-y-2 pt-2 border-t border-gray-200">
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider block">
                      WHAT YOU WILL BUILD
                    </span>
                    <div className="space-y-2">
                      {ws.workflowSteps.map((stp, idx) => (
                        <div key={idx} className="bg-white p-2.5 rounded-xl border border-gray-200 text-xs">
                          <span className="font-mono text-[10px] font-bold text-google-blue-dark block">
                            {stp.stage}: {stp.title}
                          </span>
                          <span className="text-gray-600 text-[11px] leading-snug block mt-0.5">
                            {stp.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs font-mono text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-google-red" />
                    <span>{ws.location} ({ws.timeSlot})</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {ws.githubRepoUrl && (
                      <a
                        href={ws.githubRepoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white hover:bg-gray-100 text-gray-800 p-2 rounded-xl border border-gray-300 text-xs font-medium flex items-center gap-1"
                        title="GitHub Starter Code"
                      >
                        <GithubIcon size={14} />
                        <span className="hidden sm:inline">Repo</span>
                      </a>
                    )}
                    <a
                      href="#register"
                      className="bg-google-green hover:bg-google-green-dark text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all flex items-center gap-1"
                    >
                      <span>Reserve Lab Seat</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
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
