import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Video, 
  BookOpen,
  Image as ImageIcon
} from 'lucide-react';
import { PAST_DEVFESTS } from '../../data/pastDevfests';
import { PastDevfestYear } from '../../types';

export const DevfestArchive: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2026');

  const currentArchive = PAST_DEVFESTS.find((y) => y.year === selectedYear) || PAST_DEVFESTS[0];

  return (
    <section id="archive" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 mb-3">
            <Calendar className="w-3.5 h-3.5 text-google-blue" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase">
              COMMUNITY HISTORICAL ARCHIVE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            THE DEVFEST ARCHIVE
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed mx-auto">
            Voices and milestones that shaped GDG Cloud Toronto. Explore past DevFest chapters from 2023 to 2026.
          </p>
        </div>

        {/* Year Selector Ribbon */}
        <div className="flex items-center justify-center gap-3 mb-10 overflow-x-auto pb-2">
          {PAST_DEVFESTS.map((chapter) => (
            <button
              key={chapter.year}
              onClick={() => setSelectedYear(chapter.year)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-mono font-bold transition-all ${
                selectedYear === chapter.year
                  ? 'bg-gray-900 text-white shadow-md scale-105'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              DevFest {chapter.year}
            </button>
          ))}
        </div>

        {/* Selected Year Archive Showcase */}
        <div className="bg-[#F8F9FA] rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6">
            <div>
              <span className="text-xs font-mono font-bold text-google-blue uppercase">
                DEVFEST {currentArchive.year} CHAPTER
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-0.5">
                {currentArchive.theme}
              </h3>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="bg-white px-3 py-1.5 rounded-xl border border-gray-200 font-bold text-gray-800">
                {currentArchive.attendees}
              </span>
              <span className="bg-white px-3 py-1.5 rounded-xl border border-gray-200 font-bold text-google-blue-dark">
                {currentArchive.speakersCount} Speakers
              </span>
            </div>
          </div>

          {/* Keynote Highlight Box */}
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-1">
            <span className="text-[10px] font-mono font-bold text-google-blue-dark uppercase block">
              FLAGSHIP KEYNOTE:
            </span>
            <p className="text-sm font-bold text-gray-900">
              {currentArchive.keynote}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              {currentArchive.highlight}
            </p>
          </div>

          {/* Featured Speakers Grid */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold block mb-3">
              FEATURED SPEAKERS IN {currentArchive.year}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentArchive.featuredSpeakers.map((spk, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-200 flex items-center gap-3">
                  <img
                    src={spk.photo}
                    alt={spk.name}
                    className="w-12 h-12 rounded-full object-cover border border-white shadow-xs"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-gray-900">{spk.name}</h4>
                    <span className="text-[10px] text-gray-500 font-mono block">{spk.organization}</span>
                    <span className="text-[11px] text-google-blue-dark line-clamp-1 mt-0.5">{spk.topic}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold block mb-3">
              EVENT MOMENTS & ARCHIVE PHOTOS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentArchive.photoGallery.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-gray-200 shadow-xs h-44 group">
                  <img
                    src={img}
                    alt={`DevFest ${currentArchive.year} Moment`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
