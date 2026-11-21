import React, { useState, useEffect } from 'react';
import { 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Clock, 
  Eye, 
  Sparkles, 
  X, 
  Tv,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { YoutubeIcon } from '../ui/BrandIcons';
import { YOUTUBE_VIDEOS, YouTubeVideo, VideoCategory } from '../../data/youtubeVideos';

export const YouTubeVideoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [activeModalVideo, setActiveModalVideo] = useState<YouTubeVideo | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  const channelUrl = 'https://www.youtube.com/@gdgcloudtoronto1898';

  const filterCategories: Array<'ALL' | VideoCategory> = [
    'ALL',
    'DevFest Highlights',
    'Google IO Extended',
    'Women in Technology',
    'Speakers Videos',
    'Young Minds',
    'Keynote Speakers',
    'Panel Discussion',
  ];

  const filteredVideos = selectedFilter === 'ALL'
    ? YOUTUBE_VIDEOS
    : YOUTUBE_VIDEOS.filter((v) => v.category === selectedFilter);

  // Auto-advance carousel if autoplay is enabled
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, filteredVideos.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : Math.max(0, filteredVideos.length - 1)));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < filteredVideos.length - 1 ? prev + 1 : 0));
  };

  // Safe index in case filter changes
  const activeVideo = filteredVideos[currentIndex] || filteredVideos[0] || YOUTUBE_VIDEOS[0];

  return (
    <section id="youtube-media" className="py-24 bg-gray-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-google-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/20 border border-red-500/40 mb-3">
              <YoutubeIcon size={16} className="text-red-500" />
              <span className="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                OFFICIAL RECORDINGS & MEDIA ARCHIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              GDG CLOUD TORONTO ON YOUTUBE
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-2 leading-relaxed">
              Explore official DevFest Highlights, Google I/O Extended, Women in Technology, Keynotes, Speaker Sessions, and Panel Discussions.
            </p>
          </div>

          {/* YouTube Channel Subscribe Link Banner */}
          <div className="flex items-center gap-3">
            <a
              href={channelUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl transition-all shadow-lg flex items-center gap-2 transform hover:scale-105"
            >
              <YoutubeIcon size={18} />
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800 pb-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedFilter(cat);
                  setCurrentIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedFilter === cat
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                isAutoPlaying ? 'bg-green-500/20 text-green-400 border border-green-500/40' : 'bg-white/5 text-gray-400 border border-white/10'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-ping' : 'bg-gray-500'}`}></span>
              <span>{isAutoPlaying ? 'Autoplay Active' : 'Enable Autoplay'}</span>
            </button>
          </div>
        </div>

        {/* Featured Video Spotlight Carousel Frame */}
        <div className="bg-neutral-900 rounded-3xl border border-neutral-800 shadow-2xl p-6 sm:p-8 mb-10 overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: High-Res Interactive Video Player Preview */}
            <div className="lg:col-span-7 relative group cursor-pointer" onClick={() => setActiveModalVideo(activeVideo)}>
              <div className="relative rounded-2xl overflow-hidden border border-neutral-700 aspect-video shadow-2xl bg-black">
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Big Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/95 text-white flex items-center justify-center shadow-glow-blue group-hover:scale-110 group-hover:bg-red-600 transition-all">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1" />
                  </div>
                </div>

                {/* Video Badges Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-red-600 text-white uppercase shadow-md flex items-center gap-1">
                    <YoutubeIcon size={12} />
                    {activeVideo.category}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-3 text-xs font-mono text-white bg-black/70 px-3 py-1.5 rounded-xl backdrop-blur-sm">
                  {activeVideo.duration && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-300" />
                      {activeVideo.duration}
                    </span>
                  )}
                  {activeVideo.views && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-gray-300" />
                        {activeVideo.views}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Col: Video Details & Carousel Navigation */}
            <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                  <span className="bg-red-500/10 text-red-400 font-bold px-2 py-0.5 rounded border border-red-500/20">
                    {activeVideo.category}
                  </span>
                  <span className="text-gray-400 font-mono">@gdgcloudtoronto1898</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                  {activeVideo.title}
                </h3>

                <p className="text-xs font-mono text-google-blue-light mt-2">
                  {activeVideo.speaker} • <strong className="text-white">{activeVideo.organization}</strong>
                </p>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-3">
                  {activeVideo.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {activeVideo.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono bg-white/10 text-gray-300 px-2.5 py-0.5 rounded-md border border-white/10">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Slider Controls */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalVideo(activeVideo)}
                    className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 shadow"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Watch Video</span>
                  </button>

                  <a
                    href={activeVideo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>YouTube URL</span>
                  </a>
                </div>

                {/* Carousel Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Previous Video"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-gray-400">
                    {currentIndex + 1} / {filteredVideos.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Next Video"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Thumbnail Carousel Track */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400">
            <span>SHOWING {filteredVideos.length} VIDEOS IN {selectedFilter.toUpperCase()}</span>
            <span>Click any card to play or select</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredVideos.map((video, index) => {
              const isSelected = currentIndex === index;

              return (
                <div
                  key={video.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`bg-neutral-900 rounded-2xl overflow-hidden border transition-all cursor-pointer group flex flex-col justify-between ${
                    isSelected
                      ? 'border-red-500 ring-2 ring-red-500/50 scale-[1.02] shadow-xl'
                      : 'border-neutral-800 hover:border-neutral-600 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    {video.duration && (
                      <span className="absolute bottom-2 right-2 text-[9px] font-mono bg-black/80 text-white px-1.5 py-0.5 rounded">
                        {video.duration}
                      </span>
                    )}
                    {isSelected && (
                      <div className="absolute inset-0 bg-red-600/20 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                      </div>
                    )}
                  </div>

                  <div className="p-3.5 space-y-1">
                    <span className="text-[9px] font-mono text-red-400 font-bold uppercase block">
                      {video.category}
                    </span>
                    <h4 className="font-bold text-xs text-white line-clamp-2 leading-snug group-hover:text-red-400 transition-colors">
                      {video.title}
                    </h4>
                    <span className="text-[10px] text-gray-400 font-mono block line-clamp-1">
                      {video.speaker}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Embedded Video Player Modal */}
      {activeModalVideo && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div 
            className="bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-700 w-full max-w-4xl overflow-hidden transition-all transform animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-black flex items-center justify-between border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-red-600 text-white">
                  <YoutubeIcon size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-red-400 uppercase">
                    {activeModalVideo.category} • GDG CLOUD TORONTO
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-white line-clamp-1">
                    {activeModalVideo.title}
                  </h4>
                </div>
              </div>

              <button
                onClick={() => setActiveModalVideo(null)}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeModalVideo.youtubeId}?autoplay=1`}
                title={activeModalVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </div>

            {/* Modal Body Info */}
            <div className="p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                <div>
                  <h3 className="font-bold text-lg text-white">
                    {activeModalVideo.title}
                  </h3>
                  <p className="text-xs font-mono text-google-blue-light mt-0.5">
                    {activeModalVideo.speaker} ({activeModalVideo.organization})
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                  {activeModalVideo.views && <span>{activeModalVideo.views}</span>}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {activeModalVideo.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {activeModalVideo.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono bg-white/10 text-gray-300 px-2.5 py-0.5 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={activeModalVideo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <YoutubeIcon size={14} />
                    <span>Open on YouTube</span>
                  </a>
                  <button
                    onClick={() => setActiveModalVideo(null)}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-xl"
                  >
                    Close Player
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
