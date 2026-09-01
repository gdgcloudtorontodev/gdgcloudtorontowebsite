import React, { useState } from 'react';
import { 
  Radio, 
  Play, 
  Pause, 
  Volume2, 
  FileText, 
  Sparkles, 
  Clock, 
  Headphones, 
  Mic,
  Share2,
  ExternalLink
} from 'lucide-react';
import { YoutubeIcon } from '../ui/BrandIcons';
import { PODCAST_EPISODES } from '../../data/podcasts';
import { PodcastEpisode } from '../../types';

export const PodcastStudio: React.FC = () => {
  const [activeEpisode, setActiveEpisode] = useState<PodcastEpisode>(PODCAST_EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);

  return (
    <section id="podcast-studio" className="py-24 bg-gray-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-google-red/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-google-red/20 border border-google-red/40 mb-3">
            <Radio className="w-4 h-4 text-google-red animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-red uppercase">
              LIVE DIGITAL BROADCAST STUDIO
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            DEVFEST PODCAST STUDIO
          </h2>
          <p className="text-base text-gray-400 mt-2">
            In-depth conversations with AI researchers, cloud architects, and quantum software pioneers recorded live on stage at DevFest.
          </p>
        </div>

        {/* Digital Recording Console Interface */}
        <div className="bg-neutral-900 rounded-3xl border border-neutral-800 shadow-2xl p-6 sm:p-10 mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Console: Currently Selected Player View */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-google-red text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                  NOW PLAYING • {activeEpisode.episodeNumber}
                </span>
                <span className="text-xs font-mono text-gray-400">
                  Recorded: {activeEpisode.recordedDate}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {activeEpisode.title}
                </h3>
                <p className="text-xs font-mono text-google-blue-light mt-1">
                  Guest: {activeEpisode.guest} ({activeEpisode.guestRole}, {activeEpisode.guestOrg})
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-black/40 p-4 rounded-2xl border border-neutral-800">
                {activeEpisode.summary}
              </p>

              {/* Soundwave Simulation */}
              <div className="bg-black/60 p-4 rounded-2xl border border-neutral-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="flex items-center gap-1.5 text-google-green">
                    <Mic className="w-3.5 h-3.5" /> 48kHz Broadcast Master
                  </span>
                  <span>{activeEpisode.duration}</span>
                </div>

                <div className="flex items-center gap-1 h-10 px-2 justify-between">
                  {[40, 65, 80, 45, 90, 75, 30, 85, 95, 60, 40, 70, 85, 90, 50, 65, 80, 95, 45, 70, 85, 60, 90, 40, 75, 55, 85, 95, 70, 50].map((h, i) => (
                    <div
                      key={i}
                      className={`w-1.5 rounded-full transition-all duration-300 ${
                        isPlaying ? 'bg-google-red animate-pulse' : 'bg-neutral-700'
                      }`}
                      style={{ height: isPlaying ? `${Math.max(20, Math.floor(h * (0.5 + Math.random() * 0.5)))}%` : `${h * 0.4}%` }}
                    ></div>
                  ))}
                </div>

                {/* Player Controls */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="bg-google-red hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
                    </button>
                    <span className="text-xs font-mono text-gray-300">
                      {isPlaying ? 'Streaming Audio Feed...' : 'Click to Listen'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowTranscript(!showTranscript)}
                      className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{showTranscript ? 'Hide Transcript' : 'Transcript'}</span>
                    </button>

                    <a
                      href="https://youtube.com/@gdgcloudtoronto"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-red-600/30 hover:bg-red-600/50 text-red-300 border border-red-500/40 px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 transition-colors"
                    >
                      <YoutubeIcon size={14} />
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Transcript Drawer */}
              {showTranscript && (
                <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-700 text-xs text-gray-300 font-mono space-y-2 animate-in fade-in">
                  <span className="text-google-yellow font-bold block">VERBATIM TRANSCRIPT SNIPPET:</span>
                  <p className="italic leading-relaxed">{activeEpisode.transcriptSnippet}</p>
                </div>
              )}
            </div>

            {/* Right Console: Episode Playlist */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold block">
                AVAILABLE EPISODES
              </span>

              <div className="space-y-2.5">
                {PODCAST_EPISODES.map((ep) => {
                  const isSelected = activeEpisode.id === ep.id;

                  return (
                    <button
                      key={ep.id}
                      onClick={() => {
                        setActiveEpisode(ep);
                        setIsPlaying(true);
                      }}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'bg-white/10 border-google-red shadow-md scale-[1.02]'
                          : 'bg-black/40 hover:bg-white/5 border-neutral-800 text-gray-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono font-bold text-google-red">
                            {ep.episodeNumber}
                          </span>
                          <span className="text-[10px] font-mono text-gray-400">
                            • {ep.duration}
                          </span>
                        </div>
                        <h4 className="font-bold text-xs sm:text-sm text-white line-clamp-1">
                          {ep.title}
                        </h4>
                        <span className="text-[11px] text-gray-400 font-mono block mt-0.5">
                          {ep.guest} • {ep.guestOrg}
                        </span>
                      </div>

                      <div className={`p-2 rounded-xl mt-1 shrink-0 ${
                        isSelected ? 'bg-google-red text-white' : 'bg-white/10 text-gray-400'
                      }`}>
                        <Headphones className="w-4 h-4" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
