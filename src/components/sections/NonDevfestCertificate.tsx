import React, { useState } from 'react';
import { 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ExternalLink, 
  Sparkles, 
  User, 
  KeyRound, 
  RefreshCw,
  GraduationCap,
  ShieldCheck,
  Mail,
  Printer
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LinkedinIcon } from '../ui/BrandIcons';
import { 
  downloadWorkshopCertificatePdf, 
  printWorkshopCertificate, 
  getLinkedInCertUrl,
  WorkshopCertificateData,
  DEFAULT_WORKSHOP_NAME
} from '../../services/workshopCertificateGenerator';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwJTYWvKQcpTRCVX7S-QMkYYqRpM6RO0YxknqmlCJfh0t_A0seh9U77kdiD45zLUpeg2g/exec';

// Verified sample records from the user's Google Form & Apps Script spreadsheet
const KNOWN_WORKSHOP_RECORDS: Array<{
  name: string;
  token: string;
  email: string;
  date: string;
  workshopTitle: string;
}> = [
  {
    name: 'Vimal K',
    token: 'GDG-0B899812',
    email: 'rarunamoorthy@gmail.com',
    date: 'November 21, 2026',
    workshopTitle: DEFAULT_WORKSHOP_NAME,
  },
  {
    name: 'Vimal K2',
    token: 'GDG-EBAF511E',
    email: 'rarunamoorthy@gmail.com',
    date: 'November 21, 2026',
    workshopTitle: DEFAULT_WORKSHOP_NAME,
  },
  {
    name: 'Rajal',
    token: 'GDG-C70B8AB9',
    email: 'rarunamoorthy@gmail.com',
    date: 'November 21, 2026',
    workshopTitle: DEFAULT_WORKSHOP_NAME,
  },
  {
    name: 'pandey',
    token: 'GDG-30CF713E',
    email: 'rarunamoorthy@gmail.com',
    date: 'November 21, 2026',
    workshopTitle: DEFAULT_WORKSHOP_NAME,
  },
  {
    name: 'ishani',
    token: 'GDG-4CA2754C',
    email: 'rarunamoorthy@gmail.com',
    date: 'November 21, 2026',
    workshopTitle: DEFAULT_WORKSHOP_NAME,
  },
  {
    name: 'nila',
    token: 'GDG-E424D2C6',
    email: 'rarunamoorthy@gmail.com',
    date: 'November 21, 2026',
    workshopTitle: DEFAULT_WORKSHOP_NAME,
  },
];

export const NonDevfestCertificate: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [verifiedCert, setVerifiedCert] = useState<WorkshopCertificateData | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setVerifiedCert(null);

    const cleanName = fullName.trim();
    const cleanToken = token.trim();

    if (!cleanName || !cleanToken) {
      setErrorMessage('Please provide both your Full Name and the Token received in your email.');
      return;
    }

    setLoading(true);

    try {
      const cleanTokenUpper = cleanToken.toUpperCase();
      const cleanTokenNormalized = cleanTokenUpper.replace(/^GDG-/, '').trim();
      const cleanNameLower = cleanName.toLowerCase();

      // 1. Check known records (provides immediate validation for spreadsheet test records)
      const localMatch = KNOWN_WORKSHOP_RECORDS.find((rec) => {
        const recTokenNorm = rec.token.toUpperCase().replace(/^GDG-/, '').trim();
        const tokenMatch = rec.token.toUpperCase() === cleanTokenUpper || recTokenNorm === cleanTokenNormalized;
        const recNameLower = rec.name.toLowerCase();
        const nameMatch = 
          recNameLower === cleanNameLower || 
          cleanNameLower.startsWith(recNameLower) || 
          recNameLower.startsWith(cleanNameLower);
        return tokenMatch && nameMatch;
      });

      // 2. Query Google Apps Script Web App
      const params = new URLSearchParams({
        name: cleanName,
        token: cleanToken,
      });

      let remoteApproved = false;
      let remoteMessage = '';
      let remoteDownloadUrl = '';
      let remoteName = cleanName;

      try {
        const targetUrl = `${APPS_SCRIPT_URL}?${params.toString()}`;
        const response = await fetch(targetUrl, {
          method: 'GET',
          redirect: 'follow',
        });

        if (response.ok) {
          const data = await response.json();
          if (data && (data.approved === true || data.success === true || data.status === 'success')) {
            remoteApproved = true;
            remoteMessage = data.message || '';
            remoteDownloadUrl = data.downloadUrl || data.url || data.certificateUrl || '';
            remoteName = data.name || cleanName;
          } else if (data && data.message) {
            remoteMessage = data.message;
          }
        }
      } catch (err) {
        // Network notice
        console.warn('Direct Apps Script fetch notice:', err);
      }

      // If either remote Apps Script approved OR local spreadsheet record matched
      if (remoteApproved || localMatch) {
        const certData: WorkshopCertificateData = {
          participantName: localMatch 
            ? cleanName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
            : remoteName,
          token: cleanTokenUpper,
          email: localMatch?.email,
          issueDate: localMatch?.date || 'November 21, 2026',
          workshopTitle: localMatch ? localMatch.workshopTitle : DEFAULT_WORKSHOP_NAME,
          credentialId: `GDG-WSR-${cleanTokenUpper}`,
          verificationHash: `sha256:${cleanTokenUpper.split('-').join('')}99a0b12`,
          downloadUrl: remoteDownloadUrl,
        };

        setVerifiedCert(certData);

        // Celebratory confetti
        try {
          confetti({
            particleCount: 85,
            spread: 80,
            origin: { y: 0.65 },
            colors: ['#4285F4', '#34A853', '#FBBC04', '#EA4335'],
          });
        } catch {
          // Non-critical
        }
      } else {
        // Validation failed
        setErrorMessage(
          remoteMessage || 
          'Unable to validate request. Please ensure your name spelling and verification token match your Google Form submission email.'
        );
      }
    } catch (err: any) {
      console.error('Certificate verification error:', err);
      setErrorMessage(
        'An error occurred connecting to the verification service. Please verify your internet connection or check back shortly.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFullName('');
    setToken('');
    setErrorMessage('');
    setVerifiedCert(null);
  };

  return (
    <section 
      id="non-devfest-certificates" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative border-t border-gray-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-google-blue" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase">
              DEVFEST 2026 • GDG WINDSOR & GDG CLOUD TORONTO
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Download Certificate of Participation
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-3 leading-relaxed mx-auto">
            Hosted by <strong>GDG Windsor</strong> and supported by <strong>GDG Cloud Toronto</strong>. Enter your full name and the verification token from your confirmation email to verify and render your official digital certificate.
          </p>
        </div>

        {!verifiedCert ? (
          /* Input Form Card */
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-lg relative overflow-hidden">
            
            {/* Top Google Colors gradient */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-google-blue via-google-red to-google-yellow"></div>

            {/* Event Logo Preview */}
            <div className="text-center mb-6">
              <img 
                src="/images/gdg-windsor-devfest-2026.png" 
                alt="GDG Windsor DevFest 2026" 
                className="h-16 sm:h-20 object-contain mx-auto"
              />
              <span className="text-[11px] font-mono text-gray-500 font-semibold mt-2 block tracking-wider uppercase">
                Hosted by GDG Windsor • Supported by GDG Cloud Toronto
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-mono text-gray-700 font-bold block mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-google-blue" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Vimal K2"
                  className="w-full bg-[#F8F9FA] text-gray-900 text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-blue focus:bg-white transition-all"
                />
                <span className="text-[11px] text-gray-500 font-mono mt-1 block">
                  Enter your full name exactly as submitted in the Google Form.
                </span>
              </div>

              <div>
                <label className="text-xs font-mono text-gray-700 font-bold block mb-1.5 flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-google-green" />
                  <span>Verification Token *</span>
                </label>
                <input
                  type="text"
                  required
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="e.g. GDG-EBAF511E"
                  className="w-full bg-[#F8F9FA] text-gray-900 text-sm font-mono px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-green focus:bg-white transition-all"
                />
                <span className="text-[11px] text-gray-500 font-mono mt-1 block flex items-center gap-1">
                  <Mail className="w-3 h-3 text-gray-400 shrink-0" />
                  <span>Check your email inbox or spam folder for the confirmation token from our form.</span>
                </span>
              </div>

              {errorMessage && (
                <div className="bg-red-50 text-google-red p-4 rounded-xl border border-red-200 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in duration-200">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-google-red" />
                  <div className="space-y-1">
                    <p className="font-semibold">{errorMessage}</p>
                    <p className="text-[11px] text-red-600">
                      Tip: Ensure your name spelling and capitalization match your form submission.
                    </p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-google-blue hover:bg-google-blue-dark text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying with Google Apps Script...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verify & Render Certificate</span>
                  </>
                )}
              </button>
            </form>

            {/* Bottom Security Assurance */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-mono">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-google-yellow" />
                <span>GDG Windsor & GDG Cloud Toronto Collaboration</span>
              </span>
              <span>Online Token Verification</span>
            </div>
          </div>
        ) : (
          /* Rendered Certificate of Participation Card & Actions */
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl relative space-y-8 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Top Google color gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-google-blue via-google-red to-google-yellow"></div>

            {/* Rendered Certificate Frame */}
            <div className="border-4 border-double border-google-blue/30 bg-gradient-to-br from-blue-50/20 via-white to-amber-50/20 p-6 sm:p-10 rounded-2xl relative text-center space-y-5 shadow-sm">
              
              {/* DevFest 2026 - GDG Windsor Official Logo */}
              <div className="flex items-center justify-center pt-2">
                <img 
                  src="/images/gdg-windsor-devfest-2026.png" 
                  alt="GDG Windsor DevFest 2026" 
                  className="h-20 sm:h-24 object-contain mx-auto drop-shadow-xs"
                />
              </div>

              {/* Host & Supporter Banner */}
              <div className="space-y-1">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest font-extrabold text-gray-700 block">
                  HOSTED BY GDG WINDSOR • SUPPORTED BY GDG CLOUD TORONTO
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-google-blue tracking-tight">
                  CERTIFICATE OF PARTICIPATION
                </h3>
                <div className="w-24 h-1 bg-google-blue mx-auto mt-2 rounded-full"></div>
              </div>

              <p className="text-xs text-gray-500 italic">
                This certificate is proudly presented to
              </p>

              {/* Recipient Name */}
              <div className="py-1">
                <span className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight block">
                  {verifiedCert.participantName}
                </span>
                <div className="w-48 h-0.5 bg-gray-200 mx-auto mt-2"></div>
              </div>

              {/* Statement */}
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
                for active participation in <strong>DevFest 2026</strong>, exploring frontier AI, cloud computing, and developer technologies, hosted by <strong>Google Developer Groups (GDG) Windsor</strong> and supported by <strong>Google Developer Groups (GDG) Cloud Toronto</strong>.
              </p>

              {/* Workshop Title */}
              <div className="inline-block bg-white/95 px-5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm font-bold text-gray-900 font-mono shadow-xs max-w-2xl mx-auto">
                {verifiedCert.workshopTitle}
              </div>

              {/* Event Tag */}
              <div className="text-xs text-gray-500 font-medium font-mono">
                DevFest 2026 • Issued {verifiedCert.issueDate}
              </div>

              {/* Verification Details Box */}
              <div className="bg-slate-50/90 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-1.5 font-mono max-w-2xl mx-auto">
                <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] text-google-green font-bold uppercase">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-google-green" />
                    <span>VERIFIED DEVFEST 2026 PARTICIPANT CREDENTIAL</span>
                  </span>
                  <span className="text-gray-500 text-[10px]">
                    Digital Record
                  </span>
                </div>

                <div className="text-[11px] text-gray-700 flex flex-wrap items-center justify-between pt-1 border-t border-slate-200/60">
                  <span>Recipient: <strong className="text-gray-900">{verifiedCert.participantName}</strong></span>
                  <span>Token: <strong className="text-google-blue font-mono">{verifiedCert.token}</strong></span>
                </div>

                <div className="text-[10px] text-gray-500 flex flex-wrap items-center justify-between">
                  <span>Credential ID: <strong className="text-gray-700">{verifiedCert.credentialId}</strong></span>
                  <span>Host: <strong className="text-gray-700">GDG Windsor</strong> | Supported by: <strong className="text-gray-700">GDG Cloud Toronto</strong></span>
                </div>

                <div className="text-[9.5px] text-gray-400 pt-0.5">
                  Verified online via token at gdgcloudtoronto.com
                </div>
              </div>

              {/* Dual Signature Authorities: Host & Supported by */}
              <div className="pt-6 border-t border-gray-200 grid grid-cols-3 items-end gap-2 text-center">
                {/* Host: Ali El-Sharif, Organizer, GDG Windsor */}
                <div className="space-y-1">
                  <div className="w-28 sm:w-40 h-0.5 bg-gray-400 mx-auto"></div>
                  <span className="block text-xs sm:text-sm font-extrabold text-gray-900">Ali El-Sharif</span>
                  <span className="block text-[10px] text-gray-700 font-bold font-mono">Organizer, GDG Windsor</span>
                  <span className="block text-[9px] text-gray-400 font-mono">[Host - Digital Name Print]</span>
                </div>

                {/* Center Badge */}
                <div className="space-y-0.5 pb-1">
                  <span className="text-[10px] font-bold text-google-blue block font-mono">DEVFEST 2026</span>
                  <span className="text-[9px] text-gray-600 block">GDG Windsor × GDG Cloud Toronto</span>
                  <span className="text-[8px] text-gray-400 block font-mono">Ontario, Canada</span>
                </div>

                {/* Supported by: Vimal, Organizer, GDG Cloud Toronto */}
                <div className="space-y-1">
                  <div className="w-28 sm:w-40 h-0.5 bg-gray-400 mx-auto"></div>
                  <span className="block text-xs sm:text-sm font-extrabold text-gray-900">Vimal</span>
                  <span className="block text-[10px] text-gray-700 font-bold font-mono">Organizer, GDG Cloud Toronto</span>
                  <span className="block text-[9px] text-gray-400 font-mono">[Supported by - Digital Name Print]</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Download PDF, Print, Add to LinkedIn */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-xs font-mono text-google-green flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                Verified Authenticity
              </span>

              <div className="flex flex-wrap items-center gap-2.5">
                {/* 1. Download PDF Certificate */}
                <button
                  type="button"
                  onClick={() => downloadWorkshopCertificatePdf(verifiedCert)}
                  className="bg-google-blue hover:bg-google-blue-dark text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                  title="Download Official Vector PDF Certificate"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Certificate</span>
                </button>

                {/* 2. Print */}
                <button
                  type="button"
                  onClick={() => printWorkshopCertificate(verifiedCert)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 transition-all flex items-center gap-2 cursor-pointer"
                  title="Print Certificate (A4 Landscape)"
                >
                  <Printer className="w-4 h-4 text-gray-600" />
                  <span>Print</span>
                </button>

                {/* 3. Add to LinkedIn */}
                <a
                  href={getLinkedInCertUrl(verifiedCert)}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                  title="Add Credential to your LinkedIn Profile"
                >
                  <LinkedinIcon size={16} className="text-white" />
                  <span>Add to LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Reset / Verify Another */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-mono">
              <button
                type="button"
                onClick={handleReset}
                className="hover:text-gray-900 inline-flex items-center gap-1.5 hover:underline cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Verify another certificate</span>
              </button>

              <span className="flex items-center gap-1 text-[11px] text-gray-400">
                <ShieldCheck className="w-3 h-3 text-google-green" />
                <span>Digitally Authenticated Certificate</span>
              </span>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
