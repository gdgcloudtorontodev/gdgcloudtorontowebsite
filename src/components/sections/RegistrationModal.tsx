import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Loader2, 
  QrCode, 
  Ticket,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { submitRegistration, RegistrationFormData } from '../../services/registrationService';
import { EVENT_DATA } from '../../data/event';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    organization: '',
    role: '',
    interests: ['AI & Agentic Systems', 'Google Cloud Platform'],
    trackPreference: 'AI & Agents',
  });
  const [loading, setLoading] = useState(false);
  const [successTicket, setSuccessTicket] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const res = await submitRegistration(formData);
      if (res.success && res.ticketNumber) {
        setSuccessTicket(res.ticketNumber);
      } else {
        setErrorMsg(res.message);
      }
    } catch (err) {
      setErrorMsg('Failed to process registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-gray-200 w-full max-w-xl overflow-hidden transition-all transform animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-google-blue via-google-blue-dark to-indigo-900 text-white p-6 sm:p-8 relative overflow-hidden">
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-white/20 text-white">
                  DEVFEST 2026 PASS
                </span>
                <span className="text-xs font-mono text-blue-100">
                  {EVENT_DATA.dates.display}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Claim Your Developer Pass
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-1">
                Full access to 8+ keynote talks, 2 hands-on workshops, exhibits arena, and community networking.
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Eventbrite Official Pass Banner */}
          <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 rounded-2xl p-4 sm:p-5 border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-mono font-bold uppercase">
                <Ticket className="w-3 h-3 text-orange-600" />
                <span>OFFICIAL TICKETING PORTAL</span>
              </div>
              <h4 className="text-base font-extrabold text-gray-900">
                Get Tickets on Eventbrite
              </h4>
              <p className="text-xs text-gray-600">
                Reserve your verified seat, access workshop tracks, and get automated calendar invites.
              </p>
            </div>

            <a
              href={EVENT_DATA.registration.eventbriteUrl || 'https://www.eventbrite.ca/e/google-developer-group-devfest-toronto-2026-tickets-2004248355785'}
              target="_blank"
              rel="noreferrer"
              className="bg-[#D1410C] hover:bg-[#b8380a] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-md flex items-center gap-2 shrink-0 group transform hover:scale-105 animate-ticket-flash"
            >
              <Ticket className="w-4 h-4" />
              <span>Purchase on Eventbrite</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-gray-200 w-full"></div>
            <span className="bg-white px-3 text-[11px] font-mono text-gray-400 uppercase tracking-wider shrink-0">
              OR REGISTER DIGITAL HQ BADGE
            </span>
            <div className="border-t border-gray-200 w-full"></div>
          </div>

          {successTicket ? (
            <div className="text-center space-y-4 py-4 animate-in fade-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-green-100 text-google-green flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-2xl font-extrabold text-gray-900">
                You're In! Developer Pass Confirmed
              </h4>

              <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto">
                Your ticket has been officially generated. We've recorded your registration in the DevFest 2026 Digital HQ database.
              </p>

              {/* Ticket Card preview */}
              <div className="bg-gray-50 border-2 border-dashed border-google-green p-4 rounded-2xl max-w-xs mx-auto text-center space-y-1">
                <span className="text-[10px] font-mono text-gray-400 uppercase block">TICKET NUMBER:</span>
                <span className="text-2xl font-extrabold font-mono text-google-green block">
                  {successTicket}
                </span>
                <span className="text-xs font-mono text-gray-700 block">
                  {formData.fullName} ({formData.email})
                </span>
              </div>

              <div className="pt-2 flex items-center justify-center gap-3">
                <a
                  href="#certificate-center"
                  onClick={onClose}
                  className="bg-gray-900 hover:bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all"
                >
                  View in Certificate Center
                </a>
                <button
                  onClick={onClose}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-xl"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Alex Mercer"
                    className="w-full bg-gray-50 text-gray-900 text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-blue"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                    Work / Personal Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@toronto.dev"
                    className="w-full bg-gray-50 text-gray-900 text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                    Organization / University
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Toronto AI Lab / U of T"
                    className="w-full bg-gray-50 text-gray-900 text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-blue"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-700 font-semibold block mb-1">
                    Primary Track Preference
                  </label>
                  <select
                    value={formData.trackPreference}
                    onChange={(e) => setFormData({ ...formData, trackPreference: e.target.value })}
                    className="w-full bg-gray-50 text-gray-900 text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-google-blue"
                  >
                    <option value="AI & Agents">AI & Agentic Systems</option>
                    <option value="Cloud & Kubernetes">Cloud Architecture & GKE</option>
                    <option value="Quantum Computing">Quantum Computing (Cirq)</option>
                    <option value="Infrastructure">Inference & TPU Infrastructure</option>
                  </select>
                </div>
              </div>

              {errorMsg && (
                <div className="bg-red-50 text-google-red p-3 rounded-xl border border-red-200 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-google-blue hover:bg-google-blue-dark text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Generating Verified Pass...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-google-yellow" />
                      <span>Complete Free Registration</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center">
                <span className="text-[10px] font-mono text-gray-400">
                  Community subsidized by GDG Cloud Toronto & Partners. 100% Free.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
