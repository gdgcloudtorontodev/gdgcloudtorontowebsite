import React from 'react';
import { 
  HeartHandshake, 
  Heart, 
  Sparkles, 
  Users, 
  Award, 
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { VOLUNTEERS } from '../../data/volunteers';

export const VolunteerRecognition: React.FC = () => {
  return (
    <section id="volunteers" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-red/10 border border-google-red/20 mb-3">
            <Heart className="w-3.5 h-3.5 text-google-red fill-google-red" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-red-dark uppercase">
              THE PEOPLE BEHIND DEVFEST
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            COMMUNITY CHAMPIONS
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-medium max-w-2xl mt-2 italic mx-auto">
            "Great communities are built by people who give their time, share knowledge, and lift each other up."
          </p>
        </div>

        {/* Volunteers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {VOLUNTEERS.map((vol) => (
            <div
              key={vol.id}
              className="bg-[#F8F9FA] rounded-3xl border border-gray-200 shadow-sm hover:shadow-google-card transition-all p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={vol.photo}
                    alt={vol.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white border border-gray-200 text-google-blue-dark inline-block mb-1">
                      {vol.badge}
                    </span>
                    <h3 className="font-bold text-base text-gray-900">
                      {vol.name}
                    </h3>
                    <span className="text-xs text-gray-500 font-mono block">
                      {vol.role}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3 h-3 text-google-blue" />
                      {vol.yearsInvolved} Years with GDG Cloud Toronto
                    </span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-gray-200 mb-3 text-xs text-gray-700 italic leading-relaxed">
                  "{vol.quote}"
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">Contribution:</strong> {vol.contribution}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
