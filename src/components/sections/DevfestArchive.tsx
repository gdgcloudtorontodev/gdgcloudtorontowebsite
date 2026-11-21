import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Video, 
  BookOpen,
  Image as ImageIcon,
  Play,
  ExternalLink,
  X
} from 'lucide-react';
import { YoutubeIcon } from '../ui/BrandIcons';
import { PAST_DEVFESTS } from '../../data/pastDevfests';
import { PastDevfestYear } from '../../types';

export const DevfestArchive: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2025');
  const [modalVideo, setModalVideo] = useState<{ title: string; youtubeId: string } | null>(null);

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

          {/* Official Video Highlight Spotlight (if available) */}
          {currentArchive.videoHighlight && (
            <div className="bg-gradient-to-r from-neutral-900 via-gray-900 to-black text-white p-6 rounded-3xl border border-neutral-800 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-red-600/20 border border-red-500/40 text-[10px] font-mono font-bold text-red-400 uppercase">
                  <YoutubeIcon size={12} />
                  <span>OFFICIAL {currentArchive.year} HIGHLIGHTS</span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-white">
                  {currentArchive.videoHighlight.title}
                </h4>
                <p className="text-xs text-gray-300 max-w-xl">
                  Relive the keynotes, hands-on workshop codelabs, sponsor expo, and community excitement from DevFest {currentArchive.year}.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setModalVideo({
                    title: currentArchive.videoHighlight!.title,
                    youtubeId: currentArchive.videoHighlight!.youtubeId
                  })}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl transition-all shadow-md flex items-center gap-2 group"
                >
                  <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                  <span>Watch Highlights</span>
                </button>
                <a
                  href={currentArchive.videoHighlight.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-3 rounded-2xl transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          )}

          {/* Official DevFest YouTube Videos & Recordings (by Published Year) */}
          {currentArchive.youtubeVideos && currentArchive.youtubeVideos.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-google-blue-dark font-bold block">
                    OFFICIAL YOUTUBE RECORDINGS & BROADCASTS ({currentArchive.year})
                  </span>
                  <span className="text-xs text-gray-500">
                    Sourced directly from official channel @gdgcloudtoronto1898
                  </span>
                </div>
                <a
                  href="https://www.youtube.com/@gdgcloudtoronto1898"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5"
                >
                  <YoutubeIcon size={14} className="text-red-600" />
                  <span>Channel Videos</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentArchive.youtubeVideos.map((vid) => (
                  <div
                    key={vid.id}
                    className="bg-white rounded-2xl border border-gray-200 shadow-xs hover:shadow-google-card hover:border-red-400 transition-all flex flex-col justify-between overflow-hidden group cursor-pointer"
                    onClick={() => setModalVideo({ title: vid.title, youtubeId: vid.youtubeId })}
                  >
                    <div>
                      {/* Video Thumbnail with Play Overlay */}
                      <div className="relative aspect-video bg-black overflow-hidden">
                        <img
                          src={`https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                          alt={vid.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 fill-white ml-0.5" />
                          </div>
                        </div>

                        {/* Category Pill */}
                        <div className="absolute top-2 left-2">
                          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-black/70 text-white backdrop-blur-xs">
                            {vid.category}
                          </span>
                        </div>

                        {/* Duration Pill */}
                        {vid.duration && (
                          <div className="absolute bottom-2 right-2">
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-black/80 text-white">
                              {vid.duration}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Video Metadata */}
                      <div className="p-3.5 space-y-1">
                        <h4 className="font-bold text-xs text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                          {vid.title}
                        </h4>
                        <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                          {vid.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="p-3.5 pt-0">
                      <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-gray-400">
                        <span className="text-red-600 font-semibold flex items-center gap-1">
                          <Play className="w-3 h-3 fill-red-600" />
                          <span>Watch</span>
                        </span>
                        <a
                          href={vid.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="hover:text-gray-700 flex items-center gap-1"
                        >
                          <span>Open</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Video Modal Player */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div 
            className="bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-700 w-full max-w-4xl overflow-hidden transition-all transform animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 bg-black flex items-center justify-between border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-red-600 text-white">
                  <YoutubeIcon size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-red-400 uppercase">
                    OFFICIAL YOUTUBE ARCHIVE • GDG CLOUD TORONTO
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-white">
                    {modalVideo.title}
                  </h4>
                </div>
              </div>

              <button
                onClick={() => setModalVideo(null)}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${modalVideo.youtubeId}?autoplay=1`}
                title={modalVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </div>

            <div className="p-4 sm:p-5 flex items-center justify-between border-t border-neutral-800 bg-neutral-900">
              <span className="text-xs font-mono text-gray-400">
                Official Chapter Recordings • @gdgcloudtoronto1898
              </span>
              <button
                onClick={() => setModalVideo(null)}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
