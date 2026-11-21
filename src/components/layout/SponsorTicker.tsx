import React from 'react';
import { Sparkles, Building2, ExternalLink } from 'lucide-react';
import { PARTNERS } from '../../data/partners';
import { EVENT_DATA } from '../../data/event';

export const SponsorTicker: React.FC = () => {
  // Duplicate list to achieve continuous seamless loop
  const marqueePartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <div className="bg-[#1A1A1A] text-white border-b border-gray-800 text-xs py-2 overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
        
        {/* Fixed Label on Left */}
        <div className="shrink-0 flex items-center gap-2 bg-gradient-to-r from-google-blue to-google-green text-white px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs">
          <Sparkles className="w-3 h-3 text-google-yellow" />
          <span>Proud Sponsors</span>
        </div>

        {/* Scrolling Marquee Container */}
        <div className="overflow-hidden relative flex-1 whitespace-nowrap">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10 pointer-events-none"></div>

          <div className="inline-flex items-center gap-8 animate-marquee hover:[animation-play-state:paused]">
            {marqueePartners.map((partner, idx) => (
              <a
                key={`${partner.name}-${idx}`}
                href={partner.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group cursor-pointer"
              >
                <span 
                  className="w-2 h-2 rounded-full shrink-0" 
                  style={{ backgroundColor: partner.accentColor }}
                ></span>
                <span className="font-semibold text-xs tracking-tight group-hover:underline">
                  {partner.name}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-gray-400 group-hover:text-google-yellow">
                  {partner.category}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Sponsor Callout on Right */}
        <div className="shrink-0 hidden md:flex items-center gap-2">
          <a
            href={EVENT_DATA.sponsorship?.interestFormUrl || 'https://forms.gle/GP9ZNc3w8dLoTB1G8'}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-mono text-google-yellow hover:text-yellow-300 flex items-center gap-1 font-semibold transition-colors"
          >
            <span>Become a Sponsor</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
};
