import React from 'react';
import { 
  Building2, 
  ExternalLink, 
  CheckCircle2, 
  FileText, 
  Mail, 
  HeartHandshake
} from 'lucide-react';
import { PARTNERS } from '../../data/partners';
import { EVENT_DATA } from '../../data/event';

export const EcosystemPartners: React.FC = () => {
  const interestFormUrl = EVENT_DATA.sponsorship?.interestFormUrl || 'https://forms.gle/GP9ZNc3w8dLoTB1G8';
  const contactEmail = EVENT_DATA.sponsorship?.contactEmail || 'gdgcloudtoronto@gmail.com';

  return (
    <section id="sponsors" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 mb-3">
            <Building2 className="w-3.5 h-3.5 text-google-blue" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase">
              ECOSYSTEM ALLIANCE & SPONSORS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            PARTNER WITH DEVFEST TORONTO
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Position your organization at the epicentre of Canada's developer ecosystem. DevFest 2026 brings together 1,500+ engineers, architects, founders, and students.
          </p>
        </div>

        {/* Sponsor Callout Card with Direct Sponsorship Form Links */}
        <div className="bg-gradient-to-br from-gray-900 to-[#1e293b] rounded-3xl p-8 sm:p-10 text-white shadow-xl mb-16 border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-google-yellow">
                <HeartHandshake className="w-4 h-4" />
                OFFICIAL SPONSORSHIP ENROLLMENT
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Support Canada's Tech Innovation & Community
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                Partner with GDG Cloud Toronto to showcase your brand, recruit top engineering talent, and support 1,500+ builders. Connect directly with our lead organizing committee or submit your partnership proposal via the official form.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-300 font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-google-green" />
                  1,500+ Attendees
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-google-green" />
                  Official Tax Receipt & Invoicing
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-google-green" />
                  Custom Workshop Integration
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              {/* Action 1: Google Form */}
              <a
                href={interestFormUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-google-blue hover:bg-google-blue-dark text-white font-bold text-sm px-6 py-4 rounded-2xl shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-white" />
                  <div className="text-left">
                    <span className="block leading-tight font-extrabold">Sponsorship Interest Form</span>
                    <span className="text-[11px] font-normal text-blue-100">Submit company details & partnership request</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Action 2: Direct Contact */}
              <a
                href={`mailto:${contactEmail}?subject=GDG%20Cloud%20Toronto%20DevFest%202026%20Sponsorship%20Inquiry`}
                className="bg-gray-800 hover:bg-black text-white font-bold text-sm px-6 py-4 rounded-2xl shadow-md transition-all flex items-center justify-between group border border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-google-yellow" />
                  <div className="text-left">
                    <span className="block leading-tight font-extrabold">Contact Sponsorship Team</span>
                    <span className="text-[11px] font-normal text-gray-300">Inquire via {contactEmail}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Sponsors & Collaborators Grid */}
        <div className="pt-8 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold text-google-blue-dark uppercase tracking-widest block">
              SPONSORS & COLLABORATORS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Sponsors & Collaborators
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1.5 max-w-xl mx-auto">
              Proud organizations, global talent solution partners, research institutes, and university networks driving developer excellence across Canada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNERS.map((p, idx) => (
              <a
                key={idx}
                href={p.website}
                target="_blank"
                rel="noreferrer"
                className="bg-[#F8F9FA] hover:bg-white p-6 rounded-3xl border border-gray-200 shadow-xs hover:shadow-google-card hover:border-google-blue/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: p.accentColor }}
                    >
                      {p.category.toUpperCase()}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-google-blue transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-google-blue transition-colors">
                    {p.name}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mt-2">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60 mt-4 text-[11px] font-mono text-google-blue-dark font-semibold flex items-center justify-between">
                  <span>Visit Partner</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
