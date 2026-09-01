import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  MessageSquare, 
  HelpCircle, 
  ArrowRight, 
  MapPin, 
  Clock,
  CheckCircle2
} from 'lucide-react';
import { PANELS } from '../../data/panels';

export const PanelForum: React.FC = () => {
  const [activePanelId, setActivePanelId] = useState<string>(PANELS[0].id);

  const activePanel = PANELS.find((p) => p.id === activePanelId) || PANELS[0];

  return (
    <section id="forum-panels" className="py-24 bg-[#F8F9FA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-red/10 border border-google-red/20 mb-3">
            <Users className="w-3.5 h-3.5 text-google-red" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-red-dark uppercase">
              EDITORIAL DEBATES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            THE FORUM
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed mx-auto">
            Unscripted panel discussions tackling the most pressing questions in software engineering, multi-agent economics, and the reality of quantum acceleration.
          </p>
        </div>

        {/* Panel Selector Tabs */}
        <div className="flex items-center justify-center gap-3 mb-8 overflow-x-auto pb-2">
          {PANELS.map((panel) => (
            <button
              key={panel.id}
              onClick={() => setActivePanelId(panel.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activePanelId === panel.id
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-google-red" />
              <span>{panel.theme}</span>
            </button>
          ))}
        </div>

        {/* Active Panel Showcase Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-google-card p-6 sm:p-10 space-y-8">
          
          {/* Title & Metadata */}
          <div className="border-b border-gray-100 pb-6 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-gray-500">
              <span className="bg-red-50 text-google-red-dark font-bold px-2.5 py-0.5 rounded-full">
                {activePanel.theme}
              </span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-google-blue" /> {activePanel.timeSlot}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-google-red" /> {activePanel.room}</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {activePanel.title}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              {activePanel.description}
            </p>

            <div className="pt-2 text-xs font-mono text-gray-700">
              <strong>Moderator:</strong> {activePanel.moderator.name} ({activePanel.moderator.role}, {activePanel.moderator.organization})
            </div>
          </div>

          {/* Panelists Grid */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold block mb-4">
              FEATURED PANELISTS & PERSPECTIVES
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {activePanel.panelists.map((panelist, idx) => (
                <div 
                  key={idx}
                  className="bg-gray-50 p-4 rounded-2xl border border-gray-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={panelist.photo}
                        alt={panelist.name}
                        className="w-12 h-12 rounded-full object-cover border border-white shadow-xs"
                      />
                      <div>
                        <h4 className="font-bold text-xs text-gray-900">
                          {panelist.name}
                        </h4>
                        <span className="text-[10px] font-mono text-gray-500 block leading-tight">
                          {panelist.role} • {panelist.organization}
                        </span>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-gray-200/80 text-xs text-gray-700 leading-snug">
                      <span className="font-bold text-google-blue-dark block text-[10px] font-mono mb-0.5">CORE STANCE:</span>
                      "{panelist.stance}"
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Debate Questions Constellation */}
          <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100 space-y-3">
            <span className="text-xs font-mono font-bold uppercase text-google-blue-dark flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-google-blue" />
              KEY QUESTIONS ON THE AGENDA
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activePanel.keyQuestions.map((q, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-gray-800 bg-white p-3 rounded-xl border border-blue-100/80 shadow-xs">
                  <span className="font-mono text-google-blue font-bold shrink-0">Q{i + 1}:</span>
                  <span className="leading-snug">{q}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
