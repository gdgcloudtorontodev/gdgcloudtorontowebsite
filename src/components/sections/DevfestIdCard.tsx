import React from 'react';
import { 
  CreditCard, 
  QrCode, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Wifi,
  MapPin
} from 'lucide-react';
import { EVENT_DATA } from '../../data/event';

export const DevfestIdCard: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8F9FA] border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-green/10 border border-google-green/20 mb-3">
            <CreditCard className="w-3.5 h-3.5 text-google-green" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-green-dark uppercase">
              ATTENDEE DIGITAL PASSPORT
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            DEVFEST DIGITAL ID
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Every registered builder receives an interactive DevFest ID card for fast check-in kiosks, lab access, and sponsor booth badge taps.
          </p>
        </div>

        {/* Digital ID Pass Card Mockup */}
        <div className="bg-gradient-to-r from-gray-900 via-neutral-900 to-black text-white p-6 sm:p-8 rounded-3xl border-2 border-google-green/60 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
          <div className="absolute top-0 right-0 w-48 h-48 bg-google-green/15 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Left side info */}
            <div className="space-y-4 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <div className="flex items-center gap-1 bg-neutral-800 p-1.5 rounded-lg border border-neutral-700">
                  <span className="w-2 h-2 rounded-full bg-google-blue"></span>
                  <span className="w-2 h-2 rounded-full bg-google-red"></span>
                  <span className="w-2 h-2 rounded-full bg-google-yellow"></span>
                  <span className="w-2 h-2 rounded-full bg-google-green"></span>
                </div>
                <span className="font-bold text-xs font-mono">GDG CLOUD TORONTO • DEVFEST 2026</span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                  OFFICIAL DELEGATE PASS
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Alex Mercer
                </h3>
                <p className="text-xs text-google-blue-light font-mono">
                  Fullstack AI Engineer • Toronto Builders
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start text-[10px] font-mono">
                <span className="bg-white/10 text-gray-200 px-2 py-0.5 rounded border border-white/10">
                  ALL-ACCESS LABS
                </span>
                <span className="bg-google-green/20 text-google-green px-2 py-0.5 rounded border border-google-green/30">
                  FAST-PASS KIOSK
                </span>
              </div>
            </div>

            {/* Right side QR Code representation */}
            <div className="bg-white text-gray-900 p-4 rounded-2xl shadow-xl text-center shrink-0 space-y-1">
              <div className="w-28 h-28 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                <QrCode className="w-20 h-20 text-gray-900" />
              </div>
              <span className="text-[10px] font-mono font-bold block text-gray-700">
                DF26-12345
              </span>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono text-gray-400">
            <span className="flex items-center gap-1">
              <Wifi className="w-3.5 h-3.5 text-google-green" /> NFC Tap Enabled
            </span>
            <span>VALID: OCTOBER 24, 2026 • MTCC NORTH</span>
          </div>
        </div>

      </div>
    </section>
  );
};
