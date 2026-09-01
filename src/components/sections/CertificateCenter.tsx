import React, { useState } from 'react';
import { 
  FileCheck, 
  Sparkles, 
  ShieldCheck, 
  Download, 
  AlertCircle, 
  CheckCircle2, 
  Loader2, 
  Lock, 
  ArrowRight, 
  Printer
} from 'lucide-react';
import { LinkedinIcon } from '../ui/BrandIcons';
import { verifyCertificate, VerifiedCertificate } from '../../services/certificateService';
import { EVENT_DATA } from '../../data/event';

export const CertificateCenter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [verifiedRecord, setVerifiedRecord] = useState<VerifiedCertificate | null>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setVerifiedRecord(null);
    setLoading(true);

    try {
      const response = await verifyCertificate(email, ticketNumber);
      if (response.success && response.data) {
        setVerifiedRecord(response.data);
      } else {
        setErrorMessage(response.message || 'Verification failed. Please check your credentials.');
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred during verification. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fillSample = (sampleEmail: string, sampleTicket: string) => {
    setEmail(sampleEmail);
    setTicketNumber(sampleTicket);
    setErrorMessage('');
  };

  const handleDownload = () => {
    alert(`Downloading Official DevFest 2026 Certificate PDF for ${verifiedRecord?.participantName} (Ticket: ${verifiedRecord?.ticketNumber})...`);
  };

  return (
    <section id="certificate-center" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-yellow/20 border border-google-yellow/40 mb-3">
            <FileCheck className="w-3.5 h-3.5 text-google-yellow-dark" />
            <span className="text-xs font-mono font-bold tracking-widest text-gray-900 uppercase">
              DEVFEST VERIFICATION API
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            CERTIFICATE CENTER
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed mx-auto">
            Verify official attendance and download high-resolution certificates. Secured through our backend verification API.
          </p>
        </div>

        {/* 2-Column Verification Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Form: Input credentials */}
          <div className="lg:col-span-5 bg-[#F8F9FA] p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-5">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-google-blue-dark flex items-center gap-1 mb-1">
                <Lock className="w-3.5 h-3.5" /> SECURE ATTENDEE LOOKUP
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Verify Your Participation
              </h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Enter your registered DevFest email address and ticket code from your event confirmation.
              </p>
            </div>

            {/* Quick Demo Pre-fill helper */}
            <div className="bg-blue-50/70 p-3.5 rounded-2xl border border-blue-100 space-y-2 text-xs">
              <span className="text-[10px] font-mono font-bold text-google-blue-dark uppercase block">
                TEST DEMO SHORTCUTS:
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => fillSample('participant@example.com', 'DF26-12345')}
                  className="bg-white hover:bg-blue-100 text-google-blue-dark px-2.5 py-1 rounded-lg border border-blue-200 text-[11px] font-mono font-semibold transition-colors"
                >
                  Alex Mercer (DF26-12345)
                </button>
                <button
                  type="button"
                  onClick={() => fillSample('builder@toronto.dev', 'DF26-88990')}
                  className="bg-white hover:bg-blue-100 text-google-blue-dark px-2.5 py-1 rounded-lg border border-blue-200 text-[11px] font-mono font-semibold transition-colors"
                >
                  Samantha Chen (DF26-88990)
                </button>
              </div>
            </div>

            <form onSubmit={handleVerify} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                  Registered Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. participant@example.com"
                  className="w-full bg-white text-gray-900 text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-blue"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                  Participant Ticket Number
                </label>
                <input
                  type="text"
                  required
                  value={ticketNumber}
                  onChange={(e) => setTicketNumber(e.target.value)}
                  placeholder="e.g. DF26-12345"
                  className="w-full bg-white text-gray-900 text-xs font-mono px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-blue"
                />
              </div>

              {errorMessage && (
                <div className="bg-red-50 text-google-red p-3 rounded-xl border border-red-200 text-xs flex items-start gap-2 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-google-blue hover:bg-google-blue-dark text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying against DevFest 2026 Registry...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verify & Download Certificate</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Certificate Preview Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-gray-200 shadow-google-card p-6 sm:p-8 min-h-[420px] flex flex-col justify-between">
            {verifiedRecord ? (
              <div className="space-y-6 animate-in fade-in zoom-in-95">
                {/* Certificate Frame */}
                <div className="border-4 border-double border-google-blue/40 p-6 rounded-2xl bg-gradient-to-br from-white via-blue-50/20 to-white relative text-center space-y-4">
                  
                  {/* Top Logos */}
                  <div className="flex items-center justify-center gap-1.5 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-google-blue"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-google-red"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-google-yellow"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-google-green"></span>
                    <span className="font-bold text-xs text-gray-900 ml-1">GDG Cloud Toronto</span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-google-blue-dark font-extrabold block">
                    CERTIFICATE OF PARTICIPATION & COMPLETION
                  </span>

                  <p className="text-xs text-gray-500 italic">
                    This certifies that
                  </p>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    {verifiedRecord.participantName}
                  </h3>

                  <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                    has successfully participated in <strong>{verifiedRecord.event}</strong> on {verifiedRecord.issueDate} in Toronto, Canada.
                  </p>

                  {/* Completed Workshops */}
                  <div className="bg-white p-3 rounded-xl border border-gray-200 text-left text-xs space-y-1">
                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase block">
                      HANDS-ON WORKSHOPS COMPLETED:
                    </span>
                    {verifiedRecord.workshopsCompleted.map((ws, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-gray-800 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-google-green shrink-0" />
                        <span className="line-clamp-1">{ws}</span>
                      </div>
                    ))}
                  </div>

                  {/* Signatures & Verification Hash */}
                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-[9px] font-mono text-gray-400">
                    <div>
                      <span className="block text-gray-900 font-bold">Sarah Jenkins</span>
                      <span>Community Director, GDG Cloud Toronto</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-gray-900 font-bold">{verifiedRecord.credentialId}</span>
                      <span className="line-clamp-1">{verifiedRecord.verificationHash.slice(0, 16)}...</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-xs font-mono text-google-green flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    Verified Authenticity Hash
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleDownload}
                      className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                    <a
                      href="#digital-credential"
                      className="bg-google-blue hover:bg-google-blue-dark text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow"
                    >
                      <LinkedinIcon size={14} />
                      <span>Share on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-8 space-y-3 my-auto">
                <div className="p-4 bg-gray-100 rounded-full text-gray-400">
                  <FileCheck className="w-10 h-10" />
                </div>
                <h4 className="font-bold text-base text-gray-800">
                  No Certificate Loaded Yet
                </h4>
                <p className="text-xs text-gray-500 max-w-sm">
                  Enter your registered email address and ticket code on the left (or click a test shortcut) to verify and render your official certificate.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
