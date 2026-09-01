import React from 'react';
import { 
  Sparkles, 
  Camera, 
  Heart, 
  MessageCircle, 
  Share2 
} from 'lucide-react';

export const CommunityWall: React.FC = () => {
  const wallMoments = [
    {
      title: 'Over 800+ developers in the AI Lab',
      tag: '#DevFestToronto',
      author: '@toronto_coder',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
      likes: 142,
    },
    {
      title: 'Dr. Elena Vance keynote packed Grand Ballroom',
      tag: '#MultimodalAI',
      author: '@cloud_architect_ca',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80',
      likes: 215,
    },
    {
      title: 'First quantum circuit simulated with Google Cirq',
      tag: '#QuantumComputing',
      author: '@quantum_builder',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
      likes: 98,
    },
    {
      title: 'Hands-on MCP agent hackathon winners on stage!',
      tag: '#AgenticAI',
      author: '@gdg_volunteer',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
      likes: 189,
    },
  ];

  return (
    <section className="py-24 bg-[#F8F9FA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-red/10 border border-google-red/20 mb-3">
            <Camera className="w-3.5 h-3.5 text-google-red" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-red-dark uppercase">
              COMMUNITY EXHIBITION
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            THE COMMUNITY WALL
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed mx-auto">
            Live moments, social posts, hackathon highlights, and workshop breakthroughs shared by DevFest attendees.
          </p>
        </div>

        {/* Masonry / Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wallMoments.map((moment, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-google-card transition-all flex flex-col justify-between group"
            >
              <div className="h-52 w-full overflow-hidden relative">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-3 left-3 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-white">
                  {moment.tag}
                </span>
              </div>

              <div className="p-4 space-y-2">
                <h4 className="font-bold text-xs text-gray-900 line-clamp-2">
                  {moment.title}
                </h4>
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 pt-1 border-t border-gray-100">
                  <span>{moment.author}</span>
                  <span className="flex items-center gap-1 text-google-red font-bold">
                    <Heart className="w-3 h-3 fill-google-red" /> {moment.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
