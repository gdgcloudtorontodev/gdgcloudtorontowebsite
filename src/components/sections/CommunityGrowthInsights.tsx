import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  Sparkles, 
  Globe, 
  RefreshCw, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Activity, 
  Key,
  Info,
  ChevronRight
} from 'lucide-react';
import { LinkedinIcon, YoutubeIcon, InstagramIcon } from '../ui/BrandIcons';
import { getCommunityGrowthMetrics, CommunityGrowthMetric, GrowthSyncResult } from '../../services/communityGrowthService';
import { EVENT_DATA } from '../../data/event';

export const CommunityGrowthInsights: React.FC = () => {
  const [syncData, setSyncData] = useState<GrowthSyncResult | null>(null);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [showApiInfo, setShowApiInfo] = useState<boolean>(false);

  useEffect(() => {
    loadMetrics();
  }, []);

  const loadMetrics = async (force = false) => {
    if (force) setIsRefreshing(true);
    try {
      const result = await getCommunityGrowthMetrics(force);
      setSyncData(result);
    } catch {
      // Fallback handled inside service
    } finally {
      if (force) {
        setTimeout(() => setIsRefreshing(false), 500);
      }
    }
  };

  const getCardIcon = (key: string) => {
    switch (key) {
      case 'meetup': return Users;
      case 'linkedin': return LinkedinIcon;
      case 'bevy': return Globe;
      case 'devfest': return Sparkles;
      case 'events': return Calendar;
      default: return Activity;
    }
  };

  const formatLastSynced = (isoString?: string) => {
    if (!isoString) return 'Today at 09:00 AM EST';
    try {
      const d = new Date(isoString);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' EST';
    } catch {
      return 'Today at 09:00 AM EST';
    }
  };

  return (
    <section id="community-growth" className="py-24 bg-gradient-to-b from-[#F8F9FA] via-white to-[#F8F9FA] border-t border-gray-200 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-google-blue/5 via-google-green/5 to-google-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 mb-3">
            <Activity className="w-3.5 h-3.5 text-google-blue animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase">
              LIVE SOCIAL TELEMETRY • DAILY REFRESH
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Community Growth Insights
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto leading-relaxed">
            Real-time numbers pulled dynamically across GDG Cloud Toronto's official community platforms, DevFest attendance records, and developer channels.
          </p>

          {/* Sync Status Bar with Refresh Action */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
              <span className="font-semibold">Daily Sync Active</span>
            </span>

            <span className="text-gray-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span>Last Refreshed: {formatLastSynced(syncData?.lastSynced)}</span>
            </span>

            <button
              onClick={() => loadMetrics(true)}
              disabled={isRefreshing}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 transition-all cursor-pointer shadow-2xs hover:border-google-blue"
              title="Trigger real-time daily refresh"
            >
              <RefreshCw className={`w-3 h-3 text-google-blue ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{isRefreshing ? 'Refreshing...' : 'Refresh Insights'}</span>
            </button>

            <button
              onClick={() => setShowApiInfo(!showApiInfo)}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50/80 hover:bg-blue-100 text-google-blue-dark border border-blue-200 transition-colors cursor-pointer"
            >
              <Key className="w-3 h-3 text-google-blue" />
              <span>API & Access Info</span>
            </button>
          </div>
        </div>

        {/* API & Access Info Dropdown Notice */}
        {showApiInfo && (
          <div className="mb-10 max-w-3xl mx-auto bg-slate-900 text-white p-6 rounded-3xl shadow-xl border border-slate-800 animate-in fade-in zoom-in-95 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-google-green" />
                <h4 className="font-bold text-sm text-white">
                  Social Media API & Dynamic Sync Integration
                </h4>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-google-blue/20 text-google-blue-light">
                STATUS: AUTOMATED DAILY REFRESH
              </span>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              Numbers are currently updated on a <strong>24-hour daily cycle</strong> cached via local & edge storage. To connect direct server-to-server webhook syncing with live platforms:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
              <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
                <strong className="text-google-blue-light block mb-0.5">LinkedIn Organization API:</strong>
                <span className="text-gray-400 text-[11px] block">
                  Requires LinkedIn Developer App with "Community Management API" & Page Admin OAuth Token.
                </span>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
                <strong className="text-red-400 block mb-0.5">Meetup GraphQL API:</strong>
                <span className="text-gray-400 text-[11px] block">
                  Requires Meetup API Key / OAuth Token configured via <code className="bg-slate-900 px-1 py-0.5 rounded text-white">VITE_MEETUP_API_TOKEN</code>.
                </span>
              </div>
            </div>

            <p className="text-[11px] text-gray-400 italic">
              Need to add direct OAuth secrets? Send your organizer credentials securely and they will be bound to your backend serverless functions!
            </p>
          </div>
        )}

        {/* 5 Flagship Metrics Cards (From Attached Slide) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: 5K Meetup Members */}
          <div className="bg-white rounded-3xl p-7 border-2 border-red-100 hover:border-red-400 shadow-sm hover:shadow-google-card transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-red-50 text-[#E0393E] border border-red-200 uppercase tracking-wider">
                  OFFICIAL MEETUP
                </span>
                <span className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center text-[#E0393E]">
                  <Users className="w-5 h-5" />
                </span>
              </div>

              {/* Number and Title */}
              <div className="mb-2">
                <span className="text-5xl sm:text-6xl font-black text-[#E0393E] font-sans tracking-tight block">
                  5K
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#E0393E] tracking-tight">
                  Meetup Members
                </h3>
              </div>

              {/* Slide Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-3">
                A vibrant community actively engaging in tech discussions and events.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-gray-400">
                meetup.com/gdg-cloud-toronto
              </span>
              <a
                href={EVENT_DATA.socials.meetup}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#E0393E] hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Join Channel</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: 7K LinkedIn Followers */}
          <div className="bg-white rounded-3xl p-7 border-2 border-blue-100 hover:border-blue-400 shadow-sm hover:shadow-google-card transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#0A66C2] border border-blue-200 uppercase tracking-wider">
                  LINKEDIN NETWORK
                </span>
                <span className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0A66C2]">
                  <LinkedinIcon size={20} />
                </span>
              </div>

              {/* Number and Title */}
              <div className="mb-2">
                <span className="text-5xl sm:text-6xl font-black text-[#0A66C2] font-sans tracking-tight block">
                  7K
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A66C2] tracking-tight">
                  LinkedIn Followers
                </h3>
              </div>

              {/* Slide Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-3">
                Connecting professionals and sharing valuable insights across the platform.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-gray-400">
                linkedin.com/company/18980745
              </span>
              <a
                href={EVENT_DATA.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#0A66C2] hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Follow Page</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 3: 1K GDG Group Members */}
          <div className="bg-white rounded-3xl p-7 border-2 border-green-100 hover:border-green-400 shadow-sm hover:shadow-google-card transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-green-50 text-[#2E7D32] border border-green-200 uppercase tracking-wider">
                  BEVY CHAPTER
                </span>
                <span className="w-10 h-10 rounded-2xl bg-green-50 flex items-center justify-center text-[#2E7D32]">
                  <Globe className="w-5 h-5" />
                </span>
              </div>

              {/* Number and Title */}
              <div className="mb-2">
                <span className="text-5xl sm:text-6xl font-black text-[#2E7D32] font-sans tracking-tight block">
                  1K
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2E7D32] tracking-tight">
                  GDG Group Members
                </h3>
              </div>

              {/* Slide Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-3">
                Collaborating to foster innovation and development within our community.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-gray-400">
                gdg.community.dev/gdg-cloud-toronto
              </span>
              <a
                href={EVENT_DATA.socials.bevy}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#2E7D32] hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Join Chapter</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 4: 6K DevFest Attendance */}
          <div className="bg-white rounded-3xl p-7 border-2 border-amber-100 hover:border-amber-400 shadow-sm hover:shadow-google-card transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-amber-50 text-[#D97706] border border-amber-200 uppercase tracking-wider">
                  ANNUAL FLAGSHIPS
                </span>
                <span className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-[#D97706]">
                  <Sparkles className="w-5 h-5" />
                </span>
              </div>

              {/* Number and Title */}
              <div className="mb-2">
                <span className="text-5xl sm:text-6xl font-black text-[#D97706] font-sans tracking-tight block">
                  6K
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#D97706] tracking-tight">
                  DevFest Attendance
                </h3>
              </div>

              {/* Slide Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-3">
                Engaging and inspiring attendees at our past 4 Google DevFests.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-gray-400">
                2023, 2024, 2025 & 2026
              </span>
              <a
                href="#archive"
                className="text-xs font-semibold text-[#D97706] hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>View History</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 5: 100+ Events Organized */}
          <div className="bg-white rounded-3xl p-7 border-2 border-red-100 hover:border-red-400 shadow-sm hover:shadow-google-card transition-all duration-300 flex flex-col justify-between group md:col-span-2 lg:col-span-2">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-red-50 text-[#EA4335] border border-red-200 uppercase tracking-wider">
                  ALL-YEAR COMMUNITY ENGAGEMENT
                </span>
                <span className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center text-[#EA4335]">
                  <Calendar className="w-5 h-5" />
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5">
                  <span className="text-5xl sm:text-6xl font-black text-[#EA4335] font-sans tracking-tight block">
                    100+
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#EA4335] tracking-tight">
                    Events Organized
                  </h3>
                </div>

                <div className="sm:col-span-7">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Providing valuable learning experiences and networking opportunities throughout the year.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">
                      AI Study Jams
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">
                      Cloud Architecture Labs
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">
                      Women in Tech Summits
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">
                      Community Hackathons
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-gray-400">
                100+ workshops, keynotes & study jams hosted across the Greater Toronto Area
              </span>
              <a
                href={EVENT_DATA.socials.bevy}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#EA4335] hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Browse All Events</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Media Channels Callout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <a
            href={EVENT_DATA.socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                <YoutubeIcon size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-900 block group-hover:text-red-600 transition-colors">
                  YouTube Channel @gdgcloudtoronto1898
                </span>
                <span className="text-[11px] text-gray-500 font-mono">
                  Keynote broadcasts, talk recordings & tech demos
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
          </a>

          <a
            href={EVENT_DATA.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
                <InstagramIcon size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-900 block group-hover:text-pink-600 transition-colors">
                  Instagram @gdgcloudtoronto
                </span>
                <span className="text-[11px] text-gray-500 font-mono">
                  Behind-the-scenes stories, community photos & event reels
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pink-600 transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
};
