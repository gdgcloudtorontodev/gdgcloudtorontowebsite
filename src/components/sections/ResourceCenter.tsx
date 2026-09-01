import React, { useState } from 'react';
import { 
  BookOpen, 
  GitBranch, 
  FileText, 
  Terminal, 
  Presentation, 
  Code, 
  ExternalLink,
  Download
} from 'lucide-react';
import { DEVELOPER_RESOURCES } from '../../data/resources';

export const ResourceCenter: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>('ALL');

  const tracks = ['ALL', 'AI & Agents', 'Cloud & Kubernetes', 'Quantum & Compute', 'Infrastructure'];

  const filteredResources = selectedTrack === 'ALL'
    ? DEVELOPER_RESOURCES
    : DEVELOPER_RESOURCES.filter((r) => r.track === selectedTrack);

  return (
    <section id="resources" className="py-24 bg-[#F8F9FA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-google-blue" />
              <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase">
                OPEN LEARNING MATERIALS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              DEVELOPER RESOURCE CENTER
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed">
              Open-source starter codebases, presentation slide decks, Jupyter/Colab notebooks, and architecture whitepapers from DevFest 2026.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {tracks.map((tr) => (
              <button
                key={tr}
                onClick={() => setSelectedTrack(tr)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedTrack === tr
                    ? 'bg-google-blue text-white shadow-sm'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                }`}
              >
                {tr}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-google-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-50 text-google-blue-dark">
                    {res.category}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    {res.track}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 group-hover:text-google-blue transition-colors">
                  {res.title}
                </h3>

                <span className="text-xs text-gray-500 font-mono block mt-1">
                  Author: {res.author}
                </span>

                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  {res.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between">
                <a
                  href={res.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-google-blue hover:underline flex items-center gap-1"
                >
                  <span>Open Resource</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
