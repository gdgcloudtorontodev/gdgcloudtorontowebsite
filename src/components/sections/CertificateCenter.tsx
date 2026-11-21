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
  Printer,
  Ticket,
  ExternalLink,
  Laptop,
  Users,
  Award,
  Heart,
  Calendar,
  Clock,
  Briefcase,
  KeyRound,
  Eye,
  EyeOff
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LinkedinIcon } from '../ui/BrandIcons';
import { 
  verifyConferenceCertificate, 
  verifyWorkshopCertificate,
  verifyVolunteerCertificate, 
  VerifiedCertificate, 
  CertificateCategory,
  DEVFEST_2026_EVENTBRITE_ID 
} from '../../services/certificateService';
import { downloadCertificatePdf, printCertificate } from '../../services/pdfGenerator';
import { EVENT_DATA } from '../../data/event';

export const CertificateCenter: React.FC = () => {
  const [certificateCategory, setCertificateCategory] = useState<CertificateCategory>('CONFERENCE');

  // Conference form state
  const [conferenceEmail, setConferenceEmail] = useState('');
  const [conferenceOrder, setConferenceOrder] = useState('');

  // Workshop form state
  const [workshopEmail, setWorkshopEmail] = useState('');
  const [workshopOrder, setWorkshopOrder] = useState('');
  const [selectedWorkshop, setSelectedWorkshop] = useState('Workshop 1: Build AI Applications using Vibe Coding');

  // Volunteer form state
  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerEmail, setVolunteerEmail] = useState('');
  const [volunteerPassphrase, setVolunteerPassphrase] = useState('');
  const [showPassphrase, setShowPassphrase] = useState(false);
  const [volunteerRole, setVolunteerRole] = useState('Volunteer Lead — Attendee Experience & Registration');

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [verifiedRecord, setVerifiedRecord] = useState<VerifiedCertificate | null>(null);

  const handleVerifyConference = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setVerifiedRecord(null);
    setLoading(true);

    try {
      const response = await verifyConferenceCertificate(conferenceEmail, conferenceOrder);
      if (response.success && response.data) {
        setVerifiedRecord(response.data);
        triggerCelebration();
      } else {
        setErrorMessage(response.message || 'Verification failed. Please check your credentials.');
      }
    } catch {
      setErrorMessage('An unexpected error occurred during verification. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyWorkshop = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setVerifiedRecord(null);
    setLoading(true);

    try {
      const response = await verifyWorkshopCertificate(workshopEmail, workshopOrder, selectedWorkshop);
      if (response.success && response.data) {
        setVerifiedRecord(response.data);
        triggerCelebration();
      } else {
        setErrorMessage(response.message || 'Workshop verification failed. Please check your Eventbrite credentials.');
      }
    } catch {
      setErrorMessage('An error occurred verifying workshop record. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyVolunteer = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setVerifiedRecord(null);
    setLoading(true);

    try {
      const response = await verifyVolunteerCertificate(
        volunteerName,
        volunteerPassphrase,
        volunteerRole,
        volunteerEmail
      );
      if (response.success && response.data) {
        setVerifiedRecord(response.data);
        triggerCelebration();
      } else {
        setErrorMessage(response.message || 'Volunteer verification failed. Please check your credentials.');
      }
    } catch {
      setErrorMessage('An error occurred verifying volunteer credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4285F4', '#EA4335', '#FBBC04', '#34A853'],
      });
    } catch {
      // Non-critical
    }
  };

  const handleDownloadPdf = () => {
    if (verifiedRecord) {
      downloadCertificatePdf(verifiedRecord);
    }
  };

  const handlePrintPdf = () => {
    if (verifiedRecord) {
      printCertificate(verifiedRecord);
    }
  };

  const getCategoryTitle = (cat?: CertificateCategory) => {
    switch (cat) {
      case 'WORKSHOP':
        return 'CERTIFICATE OF HANDS-ON WORKSHOP EXCELLENCE';
      case 'VOLUNTEER':
        return 'CERTIFICATE OF VOLUNTEER EXCELLENCE & LEADERSHIP';
      default:
        return 'CERTIFICATE OF CONFERENCE PARTICIPATION';
    }
  };

  const getCategoryTheme = (cat?: CertificateCategory) => {
    switch (cat) {
      case 'WORKSHOP':
        return {
          border: 'border-google-green/40',
          gradient: 'bg-gradient-to-br from-white via-green-50/20 to-blue-50/20',
          textColor: 'text-google-green-dark',
          badgeText: 'VERIFIED HANDS-ON WORKSHOP PRACTITIONER',
          buttonBg: 'bg-google-green hover:bg-green-700',
        };
      case 'VOLUNTEER':
        return {
          border: 'border-google-red/40',
          gradient: 'bg-gradient-to-br from-white via-red-50/20 to-amber-50/20',
          textColor: 'text-google-red',
          badgeText: 'OFFICIAL VOLUNTEER LEADERSHIP CREDENTIAL',
          buttonBg: 'bg-google-red hover:bg-red-700',
        };
      default:
        return {
          border: 'border-google-blue/40',
          gradient: 'bg-gradient-to-br from-white via-blue-50/20 to-white',
          textColor: 'text-google-blue-dark',
          badgeText: 'EVENTBRITE VERIFIED CONFERENCE DELEGATE',
          buttonBg: 'bg-google-blue hover:bg-google-blue-dark',
        };
    }
  };

  const theme = getCategoryTheme(verifiedRecord?.recipientType);

  return (
    <section id="my-certificate" className="py-24 bg-white relative border-t border-gray-200">
      {/* Anchor alias for backwards compatibility */}
      <div id="certificate-center" className="absolute -top-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 mb-3">
            <FileCheck className="w-3.5 h-3.5 text-google-blue" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase">
              OFFICIAL DEVFEST CREDENTIALS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            MY CERTIFICATE
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed mx-auto">
            Download your verified DevFest 2026 Certificate in authentic vector PDF format. Choose your certificate category below: <strong>Conference Participant Certificate</strong>, <strong>Hands-on Workshop Certificate</strong>, or <strong>Volunteer Certificate</strong>.
          </p>

          {/* 3 Certificate Category Tabs */}
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-gray-100 rounded-2xl mt-6 border border-gray-200 shadow-xs gap-1">
            {/* Tab 1: Conference Participant Certificate */}
            <button
              onClick={() => {
                setCertificateCategory('CONFERENCE');
                setErrorMessage('');
                setVerifiedRecord(null);
              }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                certificateCategory === 'CONFERENCE'
                  ? 'bg-white text-google-blue-dark shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Ticket className="w-4 h-4 text-google-blue" />
              <span>Conference Participant Certificate</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-google-blue hidden md:inline">
                Eventbrite
              </span>
            </button>

            {/* Tab 2: Hands-on Workshop Certificate */}
            <button
              onClick={() => {
                setCertificateCategory('WORKSHOP');
                setErrorMessage('');
                setVerifiedRecord(null);
              }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                certificateCategory === 'WORKSHOP'
                  ? 'bg-white text-google-green-dark shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Laptop className="w-4 h-4 text-google-green" />
              <span>Hands-on Workshop Certificate</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-green-50 text-google-green hidden md:inline">
                Code Labs
              </span>
            </button>

            {/* Tab 3: Volunteer Certificate */}
            <button
              onClick={() => {
                setCertificateCategory('VOLUNTEER');
                setErrorMessage('');
                setVerifiedRecord(null);
              }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                certificateCategory === 'VOLUNTEER'
                  ? 'bg-white text-google-red-dark shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Heart className="w-4 h-4 text-google-red fill-google-red" />
              <span>Volunteer Certificate</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-50 text-google-red hidden md:inline">
                100+ Volunteers
              </span>
            </button>
          </div>
        </div>

        {/* 2-Column Verification Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Form: Input credentials based on category */}
          <div className="lg:col-span-5 bg-[#F8F9FA] p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-5">
            
            {/* 1. CONFERENCE PARTICIPANT FORM */}
            {certificateCategory === 'CONFERENCE' && (
              <>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold uppercase text-google-blue-dark flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5" /> EVENTBRITE ATTENDEE LOOKUP
                    </span>
                    <span className="text-[10px] font-mono bg-orange-100 text-orange-800 font-bold px-2 py-0.5 rounded-full">
                      EVENT #{DEVFEST_2026_EVENTBRITE_ID}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Conference Participant Certificate
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Enter the email address and Order Number from your Eventbrite DevFest ticket confirmation.
                  </p>
                </div>

                <form onSubmit={handleVerifyConference} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                      Registered Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={conferenceEmail}
                      onChange={(e) => setConferenceEmail(e.target.value)}
                      placeholder="e.g. alex.mercer@gmail.com"
                      className="w-full bg-white text-gray-900 text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-blue"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                      Eventbrite Order # or Ticket ID *
                    </label>
                    <input
                      type="text"
                      required
                      value={conferenceOrder}
                      onChange={(e) => setConferenceOrder(e.target.value)}
                      placeholder="e.g. 2004248355785"
                      className="w-full bg-white text-gray-900 text-xs font-mono px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-blue"
                    />
                    <span className="text-[10px] text-gray-500 font-mono mt-1 block">
                      Found on your Eventbrite receipt or ticket confirmation email.
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="bg-red-50 text-google-red p-3 rounded-xl border border-red-200 text-xs flex items-start gap-2">
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
                        <span>Verifying with Eventbrite Account...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        <span>Verify & Load Conference Certificate</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="pt-2 text-center border-t border-gray-200/80">
                  <a
                    href={EVENT_DATA.registration.eventbriteUrl || 'https://www.eventbrite.ca/e/google-developer-group-devfest-toronto-2026-tickets-2004248355785'}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-gray-500 hover:text-google-blue flex items-center justify-center gap-1 font-mono transition-colors"
                  >
                    <span>Need tickets? Get Tickets on Eventbrite</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </>
            )}

            {/* 2. HANDS-ON WORKSHOP CERTIFICATE FORM */}
            {certificateCategory === 'WORKSHOP' && (
              <>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold uppercase text-google-green-dark flex items-center gap-1">
                      <Laptop className="w-3.5 h-3.5" /> WORKSHOP LAB CREDENTIAL
                    </span>
                    <span className="text-[10px] font-mono bg-green-100 text-google-green-dark font-bold px-2 py-0.5 rounded-full">
                      TRACK 2
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Hands-on Workshop Certificate
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Select your completed hands-on workshop code lab and enter your Eventbrite credentials to generate your certificate.
                  </p>
                </div>

                <form onSubmit={handleVerifyWorkshop} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                      Completed Workshop Lab *
                    </label>
                    <select
                      value={selectedWorkshop}
                      onChange={(e) => setSelectedWorkshop(e.target.value)}
                      className="w-full bg-white text-gray-900 text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-green"
                    >
                      <option value="Workshop 1: Build AI Applications using Vibe Coding">
                        Workshop 1: Build AI Applications using Vibe Coding
                      </option>
                      <option value="Workshop 2: Generative AI using Gemini">
                        Workshop 2: Generative AI using Gemini
                      </option>
                      <option value="Workshop 3: Collaborate with Agents - Connect Antigravity to Gmail & Drive with MCP">
                        Workshop 3: Collaborate with Agents - Connect Antigravity to Gmail & Drive with MCP
                      </option>
                      <option value="Workshop 4: From Data to Action - Building AI Agents with Google ADK, MCP & Cloud Databases">
                        Workshop 4: From Data to Action - Building AI Agents with Google ADK, MCP & Cloud Databases
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                      Registered Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={workshopEmail}
                      onChange={(e) => setWorkshopEmail(e.target.value)}
                      placeholder="e.g. alex.mercer@gmail.com"
                      className="w-full bg-white text-gray-900 text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-green"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                      Eventbrite Order # or Ticket ID *
                    </label>
                    <input
                      type="text"
                      required
                      value={workshopOrder}
                      onChange={(e) => setWorkshopOrder(e.target.value)}
                      placeholder="e.g. 2004248355785"
                      className="w-full bg-white text-gray-900 text-xs font-mono px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-green"
                    />
                  </div>

                  {errorMessage && (
                    <div className="bg-red-50 text-google-red p-3 rounded-xl border border-red-200 text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-google-green hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Verifying Workshop Attendance...</span>
                      </>
                    ) : (
                      <>
                        <Laptop className="w-4 h-4" />
                        <span>Verify & Load Workshop Certificate</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}

            {/* 3. VOLUNTEER CERTIFICATE FORM */}
            {certificateCategory === 'VOLUNTEER' && (
              <>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold uppercase text-google-red-dark flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-google-red" /> VOLUNTEER CREW VERIFICATION
                    </span>
                    <span className="text-[10px] font-mono bg-red-100 text-google-red-dark font-bold px-2 py-0.5 rounded-full">
                      EVENT DAY ONLY • DEC 11, 2026
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Volunteer Certificate Download
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Enter your full name and the secret Volunteer Crew Passphrase provided by your Volunteer Lead on event day to download your official Certificate of Volunteer Excellence & Leadership.
                  </p>
                </div>

                <form onSubmit={handleVerifyVolunteer} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                      Volunteer Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={volunteerName}
                      onChange={(e) => setVolunteerName(e.target.value)}
                      placeholder="e.g. Anastasia Annin"
                      className="w-full bg-white text-gray-900 text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-red"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                      Volunteer Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={volunteerEmail}
                      onChange={(e) => setVolunteerEmail(e.target.value)}
                      placeholder="e.g. anastasia.annin@gdgcloudtoronto.com"
                      className="w-full bg-white text-gray-900 text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-red"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-mono text-gray-700 font-semibold flex items-center gap-1">
                        <KeyRound className="w-3.5 h-3.5 text-google-red" />
                        <span>Volunteer Crew Passphrase *</span>
                      </label>
                      <span className="text-[10px] font-mono text-gray-400">
                        Hashed SHA-256
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassphrase ? 'text' : 'password'}
                        required
                        value={volunteerPassphrase}
                        onChange={(e) => setVolunteerPassphrase(e.target.value)}
                        placeholder="Enter secret crew passphrase"
                        className="w-full bg-white text-gray-900 text-xs font-mono px-3.5 py-2.5 pr-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-red"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassphrase(!showPassphrase)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label={showPassphrase ? 'Hide passphrase' : 'Show passphrase'}
                      >
                        {showPassphrase ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono mt-1 block">
                      Provided to verified crew members on event day (December 11, 2026).
                    </span>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                      Volunteer Team / Role *
                    </label>
                    <select
                      value={volunteerRole}
                      onChange={(e) => setVolunteerRole(e.target.value)}
                      className="w-full bg-white text-gray-900 text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-red"
                    >
                      <option value="Volunteer Lead — Attendee Experience & Registration">
                        Volunteer Lead — Attendee Experience & Registration
                      </option>
                      <option value="Volunteer Lead — Technical Operations & AV">
                        Volunteer Lead — Technical Operations & AV
                      </option>
                      <option value="Volunteer Lead — Workshop Labs & Developer Showcase">
                        Volunteer Lead — Workshop Labs & Developer Showcase
                      </option>
                      <option value="Speaker Coordination & Stage Hospitality Crew">
                        Speaker Coordination & Stage Hospitality Crew
                      </option>
                      <option value="Community & Digital Media Production Crew">
                        Community & Digital Media Production Crew
                      </option>
                      <option value="DevFest 2026 Core Volunteer Crew">
                        DevFest 2026 Core Volunteer Crew
                      </option>
                    </select>
                  </div>

                  {errorMessage && (
                    <div className="bg-red-50 text-google-red p-3 rounded-xl border border-red-200 text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-google-red hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Verifying Crew Passphrase...</span>
                      </>
                    ) : (
                      <>
                        <KeyRound className="w-4 h-4" />
                        <span>Verify Passphrase & Load Volunteer Certificate</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="pt-2 text-center border-t border-gray-200/80">
                  <a
                    href="mailto:gdgcloudtoronto@gmail.com?subject=Volunteer%20Certificate%20Inquiry"
                    className="text-xs text-gray-500 hover:text-google-red flex items-center justify-center gap-1 font-mono transition-colors"
                  >
                    <span>Question about volunteer hours? Contact Organizer Team</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </>
            )}

          </div>

          {/* Right: Certificate Preview Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-gray-200 shadow-google-card p-6 sm:p-8 min-h-[460px] flex flex-col justify-between">
            {verifiedRecord ? (
              <div className="space-y-6 animate-in fade-in zoom-in-95">
                {/* Certificate Frame */}
                <div className={`border-4 border-double p-6 rounded-2xl relative text-center space-y-4 shadow-sm ${theme.border} ${theme.gradient}`}>
                  
                  {/* Top Logos */}
                  <div className="flex items-center justify-center gap-1.5 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-google-blue"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-google-red"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-google-yellow"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-google-green"></span>
                    <span className="font-bold text-xs text-gray-900 ml-1">GDG Cloud Toronto</span>
                  </div>

                  <span className={`text-[11px] font-mono uppercase tracking-widest font-extrabold block ${theme.textColor}`}>
                    {getCategoryTitle(verifiedRecord.recipientType)}
                  </span>

                  <p className="text-xs text-gray-500 italic">
                    This is proudly presented to
                  </p>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    {verifiedRecord.participantName}
                  </h3>

                  <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                    {verifiedRecord.recipientType === 'VOLUNTEER' && (
                      <>in recognition of outstanding volunteer leadership, community dedication, and selfless service at <strong>{verifiedRecord.event}</strong> on {verifiedRecord.issueDate} at {verifiedRecord.venue}.</>
                    )}
                    {verifiedRecord.recipientType === 'WORKSHOP' && (
                      <>has successfully completed the intensive hands-on technical code lab <strong>{verifiedRecord.selectedWorkshop || verifiedRecord.workshopsCompleted[0]}</strong> at <strong>{verifiedRecord.event}</strong> on {verifiedRecord.issueDate} at {verifiedRecord.venue}.</>
                    )}
                    {verifiedRecord.recipientType === 'CONFERENCE' && (
                      <>has actively attended and participated in premier keynote sessions, technical talks, and developer tracks at <strong>{verifiedRecord.event}</strong> on {verifiedRecord.issueDate} at {verifiedRecord.venue}.</>
                    )}
                  </p>

                  {/* Verification Badge Box */}
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-left text-xs space-y-1 font-mono">
                    <div className="flex items-center justify-between text-[10px] text-google-green font-bold uppercase">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {theme.badgeText}
                      </span>
                      <span className="text-gray-500">
                        {verifiedRecord.recipientType === 'VOLUNTEER' 
                          ? `${verifiedRecord.hoursContributed || 35}+ Hours` 
                          : `Event #${verifiedRecord.eventbriteEventId}`}
                      </span>
                    </div>

                    <div className="text-[11px] text-gray-700">
                      {verifiedRecord.recipientType === 'VOLUNTEER' ? (
                        <>Role: <strong className="text-gray-900">{verifiedRecord.volunteerRole}</strong> &nbsp;|&nbsp; Badge: <strong>{verifiedRecord.volunteerBadge}</strong></>
                      ) : verifiedRecord.recipientType === 'WORKSHOP' ? (
                        <>Completed Lab: <strong className="text-gray-900">{verifiedRecord.selectedWorkshop || verifiedRecord.workshopsCompleted[0]}</strong> &nbsp;|&nbsp; Order: <strong>{verifiedRecord.eventbriteOrderNumber}</strong></>
                      ) : (
                        <>Attendee: <strong>{verifiedRecord.email}</strong> &nbsp;|&nbsp; Order #: <strong>{verifiedRecord.eventbriteOrderNumber}</strong></>
                      )}
                    </div>
                  </div>

                  {/* Signatures & Hash */}
                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-[9px] font-mono text-gray-400">
                    <div>
                      <span className="block text-gray-900 font-bold">Ramkumar Arun</span>
                      <span>Organizer, GDG Cloud Toronto</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-gray-900 font-bold">{verifiedRecord.credentialId}</span>
                      <span className="line-clamp-1">{verifiedRecord.verificationHash.slice(0, 16)}...</span>
                    </div>
                  </div>
                </div>

                {/* Actions: Download PDF, Print, LinkedIn */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-xs font-mono text-google-green flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    Verified Authenticity
                  </span>

                  <div className="flex flex-wrap items-center gap-2">
                    {/* 1. Download PDF */}
                    <button
                      onClick={handleDownloadPdf}
                      className="bg-google-blue hover:bg-google-blue-dark text-white px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow transition-all transform hover:scale-105"
                      title="Download Vector PDF Certificate"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF Certificate</span>
                    </button>

                    {/* 2. Print */}
                    <button
                      onClick={handlePrintPdf}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-gray-300 transition-all"
                      title="Print Official Certificate"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Empty state placeholder before verification */
              <div className="flex flex-col items-center justify-center text-center p-8 space-y-3 my-auto">
                <div className="p-4 bg-gray-100 rounded-full text-gray-400">
                  <FileCheck className="w-10 h-10" />
                </div>
                <h4 className="font-bold text-base text-gray-800">
                  {certificateCategory === 'CONFERENCE' && 'Conference Participant Certificate Generator'}
                  {certificateCategory === 'WORKSHOP' && 'Hands-on Workshop Certificate Generator'}
                  {certificateCategory === 'VOLUNTEER' && 'Volunteer Leadership Certificate Generator'}
                </h4>
                <p className="text-xs text-gray-500 max-w-sm">
                  {certificateCategory === 'CONFERENCE' && 'Enter your registered Eventbrite email address and Order Number on the left to verify attendance and generate your official Certificate PDF.'}
                  {certificateCategory === 'WORKSHOP' && 'Select your completed code lab and enter your Eventbrite credentials to verify and unlock your hands-on practitioner certificate.'}
                  {certificateCategory === 'VOLUNTEER' && 'Enter your volunteer email or full name and select your operational role on the left to generate your verified Volunteer Leadership Certificate.'}
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
