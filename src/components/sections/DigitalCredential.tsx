import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Share2, 
  CheckCircle2, 
  QrCode, 
  Sparkles,
  ExternalLink,
  Copy
} from 'lucide-react';
import { LinkedinIcon } from '../ui/BrandIcons';
import { EVENT_DATA } from '../../data/event';

export const DigitalCredential: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [attendeeName, setAttendeeName] = useState('Alex Mercer');
  const [credentialId, setCredentialId] = useState('GDG-TOR-2026-A8F2K');

  const credentialUrl = `https://devfest.gdgcloudtoronto.com/credential/${credentialId}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(credentialUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareLinkedIn = () => {
    const text = encodeURIComponent(`I am proud to showcase my official DevFest 2026 Digital Credential from GDG Cloud Toronto! Verified knowledge across Multimodal AI, Agentic Systems, and Google Cloud.`);
    const url = encodeURIComponent(credentialUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${text}`, '_blank');
  };

  return (
    <section id="digital-credential" className="py-24 bg-[#F8F9FA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 mb-3">
            <Award className="w-3.5 h-3.5 text-google-blue" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase">
              VERIFIABLE DIGITAL CREDENTIALS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            YOUR DEVFEST CREDENTIAL
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed mx-auto">
            Publicly showcase your DevFest 2026 participation, completed hands-on workshops, and technology competency on LinkedIn and personal portfolios.
          </p>
        </div>

        {/* 2 Column Layout: Interactive Credential Preview + Sharing Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left: Professional Credential Badge Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-neutral-900 via-[#181A20] to-neutral-950 text-white rounded-3xl p-6 sm:p-8 border-2 border-google-blue shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-google-blue/15 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6">
              {/* Header inside credential */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-neutral-800 p-1.5 rounded-lg border border-neutral-700">
                    <span className="w-2 h-2 rounded-full bg-google-blue"></span>
                    <span className="w-2 h-2 rounded-full bg-google-red"></span>
                    <span className="w-2 h-2 rounded-full bg-google-yellow"></span>
                    <span className="w-2 h-2 rounded-full bg-google-green"></span>
                  </div>
                  <div>
                    <span className="font-bold text-xs block">GDG Cloud Toronto</span>
                    <span className="text-[10px] text-gray-400 font-mono">Official Chapter Badge</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-google-green/20 text-google-green border border-google-green/30 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  VERIFIED DELEGATE
                </span>
              </div>

              {/* Recipient & Event */}
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">
                  DELEGATE CREDENTIAL ISSUED TO:
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {attendeeName}
                </h3>
                <p className="text-xs text-google-blue-light font-mono mt-1">
                  GDG Cloud Toronto DevFest 2026 • Toronto, Canada
                </p>
              </div>

              {/* Tracks Badges */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  VERIFIED COMPETENCY TRACKS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Multimodal AI & Agents', 'Cloud Kubernetes & GKE', 'Model Context Protocol (MCP)', 'Quantum Virtual Compute'].map((tr, i) => (
                    <span key={i} className="text-[10px] bg-white/10 text-gray-200 px-2.5 py-1 rounded-lg border border-white/10 font-mono">
                      ✓ {tr}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential ID & SHA Hash */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono text-gray-400">
                <div>
                  <span className="block text-gray-500">CREDENTIAL ID:</span>
                  <span className="text-white font-bold">{credentialId}</span>
                </div>
                <div className="text-right">
                  <span className="block text-gray-500">ISSUE DATE:</span>
                  <span className="text-white">{EVENT_DATA.dates.display}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Customization & LinkedIn Actions */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-5">
            <div>
              <h4 className="font-bold text-lg text-gray-900">
                Claim & Share Your Credential
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                Customize your name or credential ID to generate a verifiable share link.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                  Participant Display Name
                </label>
                <input
                  type="text"
                  value={attendeeName}
                  onChange={(e) => setAttendeeName(e.target.value)}
                  className="w-full bg-gray-50 text-gray-900 text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-blue font-medium"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                  Public Verification URL
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={credentialUrl}
                    className="w-full bg-gray-100 text-gray-600 text-[11px] font-mono px-3 py-2 rounded-xl border border-gray-200"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors shrink-0"
                    title="Copy URL"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                {copied && (
                  <span className="text-[10px] text-google-green font-mono block mt-1">
                    ✓ Credential link copied to clipboard!
                  </span>
                )}
              </div>
            </div>

            {/* Sharing CTAs */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleShareLinkedIn}
                className="w-full bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <LinkedinIcon size={16} />
                <span>Add to LinkedIn Profile</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Public Credential Link</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
