import React from 'react';
import { 
  Newspaper, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { COMMUNITY_STORIES } from '../../data/communityStories';

export const CommunityStories: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-yellow/20 border border-google-yellow/40 mb-3">
            <Newspaper className="w-3.5 h-3.5 text-google-yellow-dark" />
            <span className="text-xs font-mono font-bold tracking-widest text-gray-900 uppercase">
              EDITORIAL PERSPECTIVES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            FROM THE COMMUNITY
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed mx-auto">
            Dispatches, architectural announcements, and interviews from organizers and speakers leading GDG Cloud Toronto.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMMUNITY_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-[#F8F9FA] rounded-3xl border border-gray-200 shadow-xs hover:shadow-google-card transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 w-full overflow-hidden relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 shadow-xs">
                    {story.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-mono text-gray-400 mb-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {story.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {story.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 group-hover:text-google-blue transition-colors leading-snug">
                    {story.title}
                  </h3>

                  <span className="text-[11px] text-gray-500 font-mono block mt-1">
                    By {story.author}
                  </span>

                  <p className="text-xs text-gray-600 leading-relaxed mt-2 line-clamp-3">
                    {story.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <span className="text-xs font-semibold text-google-blue group-hover:underline flex items-center gap-1">
                  <span>Read Full Dispatch</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
