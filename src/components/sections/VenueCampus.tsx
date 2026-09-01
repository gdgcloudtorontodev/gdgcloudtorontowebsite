import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Users, 
  Radio, 
  Cpu, 
  ExternalLink,
  Info
} from 'lucide-react';
import { VENUE_ZONES } from '../../data/venueMap';
import { VenueZone } from '../../data/venueMap';
import { EVENT_DATA } from '../../data/event';

export const VenueCampus: React.FC = () => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>(VENUE_ZONES[0].id);

  const selectedZone = VENUE_ZONES.find((z) => z.id === selectedZoneId) || VENUE_ZONES[0];

  return (
    <section id="campus-venue" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-red/10 border border-google-red/20 mb-3">
            <MapPin className="w-3.5 h-3.5 text-google-red" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-red-dark uppercase">
              INTERACTIVE DIGITAL CAMPUS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            VENUE & CAMPUS MAP
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed mx-auto">
            {EVENT_DATA.location.venue} • Downtown Toronto Financial District. Click any stage or lab room below to inspect live room schedules.
          </p>
        </div>

        {/* 2 Column Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive SVG Campus Schematic */}
          <div className="lg:col-span-7 bg-[#F8F9FA] rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
              <span className="text-xs font-mono font-bold text-gray-500 uppercase">
                NORTH BUILDING • LEVEL 100 & 200 SCHEMATIC
              </span>
              <span className="text-xs font-mono text-google-green flex items-center gap-1 font-bold">
                <span className="w-2 h-2 rounded-full bg-google-green animate-pulse"></span>
                CAMPUS ACTIVE
              </span>
            </div>

            {/* Simulated Interactive SVG Floor Plan */}
            <div className="relative w-full h-[360px] bg-white rounded-2xl border border-gray-300 p-4 overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>

              {VENUE_ZONES.map((zone) => {
                const isSelected = selectedZoneId === zone.id;

                return (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZoneId(zone.id)}
                    style={{
                      left: `${zone.coordinates.x}%`,
                      top: `${zone.coordinates.y}%`,
                      width: `${zone.coordinates.width}%`,
                      height: `${zone.coordinates.height}%`,
                    }}
                    className={`absolute rounded-xl border p-2 text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-gray-900 text-white border-gray-900 shadow-xl scale-105 z-20 ring-2 ring-google-blue'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300'
                    }`}
                  >
                    <div>
                      <span className="text-[9px] font-mono uppercase font-bold block" style={{ color: isSelected ? '#8AB4F8' : zone.color }}>
                        {zone.floor.split('—')[0]}
                      </span>
                      <h4 className="font-bold text-[11px] leading-tight line-clamp-2 mt-0.5">
                        {zone.name}
                      </h4>
                    </div>

                    <span className="text-[9px] font-mono opacity-80 block">
                      {zone.capacity}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Legend button pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {VENUE_ZONES.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZoneId(zone.id)}
                  className={`text-xs px-3 py-1 rounded-xl font-mono transition-all ${
                    selectedZoneId === zone.id
                      ? 'bg-google-blue text-white font-bold'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Find {zone.name.split('(')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Selected Zone Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-google-card space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedZone.color }}></span>
                <span className="text-xs font-mono font-bold uppercase text-gray-500">
                  {selectedZone.floor}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {selectedZone.name}
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                {selectedZone.description}
              </p>
            </div>

            <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 space-y-1">
              <span className="text-[10px] font-mono font-bold text-google-blue-dark uppercase block">
                CURRENT / UPCOMING ACTIVITY:
              </span>
              <p className="text-xs font-bold text-gray-900">
                {selectedZone.currentActivity}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-gray-500 border-t border-gray-100 pt-3">
              <span>Seating Capacity: {selectedZone.capacity}</span>
              <span className="text-google-blue font-bold">WiFi: GDG-DevFest-5G</span>
            </div>

            <div className="pt-2">
              <a
                href="https://www.mtccc.com/attendees/getting-here/"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Transit & Parking Directions (MTCC North)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
