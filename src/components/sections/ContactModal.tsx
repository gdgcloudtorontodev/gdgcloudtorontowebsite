import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  Mail, 
  Send, 
  X, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { EVENT_DATA } from '../../data/event';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('General Inquiry & DevFest 2026');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const contactEmail = EVENT_DATA.sponsorship?.contactEmail || 'gdgcloudtoronto@gmail.com';

  const categories = [
    'General Inquiry & DevFest 2026',
    'Sponsorship & Corporate Partnership',
    'Speaking & Presentation Proposal',
    'Volunteering & Event Crew',
    'Tickets & Registration Support',
    'Media, Press & Interview Requests',
  ];

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleResetAndClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getSubjectText = () => `[DevFest 2026] ${category} - ${name.trim() || 'Inquiry'}`;

  const getBodyText = () => 
    `Hello GDG Cloud Toronto Organizing Team,\n\n` +
    `Sender Name: ${name.trim()}\n` +
    `Sender Email: ${email.trim()}\n` +
    `Inquiry Category: ${category}\n\n` +
    `Message Details:\n${message.trim()}\n\n` +
    `---\nSent from GDG Cloud Toronto DevFest 2026 Website`;

  const getMailtoUrl = () => 
    `mailto:${contactEmail}?subject=${encodeURIComponent(getSubjectText())}&body=${encodeURIComponent(getBodyText())}`;

  const getGmailWebUrl = () => 
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent(getSubjectText())}&body=${encodeURIComponent(getBodyText())}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger user mailto client
    window.location.href = getMailtoUrl();
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyFullMessage = () => {
    const fullText = `To: ${contactEmail}\nSubject: ${getSubjectText()}\n\n${getBodyText()}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      onClick={handleResetAndClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* Scrollable Container with Top-Safe Padding */}
      <div className="min-h-full flex items-start sm:items-center justify-center p-3 sm:p-6 text-center">
        <div 
          className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all my-4 sm:my-8 w-full max-w-lg border border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-gray-900 via-neutral-900 to-gray-800 text-white p-5 sm:p-6 relative">
            <div className="flex items-start justify-between relative z-10 gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-white/10 text-white border border-white/20 shrink-0">
                  <Mail className="w-5 h-5 text-google-yellow" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-300 block">
                    GDG CLOUD TORONTO • DEVFEST 2026
                  </span>
                  <h3 id="contact-modal-title" className="text-xl font-extrabold text-white">
                    Contact Organizers
                  </h3>
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                aria-label="Close contact modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-5 sm:p-6 max-h-[calc(85vh-120px)] overflow-y-auto">
            {submitted ? (
              /* Success / Sent State */
              <div className="text-center py-4 space-y-4">
                <div className="w-14 h-14 bg-green-50 text-google-green rounded-full flex items-center justify-center mx-auto border border-green-200 shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-xl font-bold text-gray-900">
                    Message Prepared for Sending!
                  </h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Your message is prepared and addressed directly to <strong className="text-gray-900">{contactEmail}</strong>.
                  </p>
                </div>

                {/* Direct Action Options */}
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-left space-y-3">
                  <span className="text-[11px] font-mono font-bold uppercase text-gray-500 tracking-wider block">
                    Choose How to Send:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a
                      href={getGmailWebUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in Gmail (Web)</span>
                    </a>

                    <a
                      href={getMailtoUrl()}
                      className="bg-gray-900 hover:bg-black text-white font-semibold text-xs py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Mail className="w-3.5 h-3.5 text-google-yellow" />
                      <span>Open in Mail App</span>
                    </a>
                  </div>

                  <div className="pt-2 border-t border-gray-200/80 flex items-center justify-between text-xs">
                    <span className="font-mono text-gray-600 truncate">{contactEmail}</span>
                    <button
                      type="button"
                      onClick={handleCopyFullMessage}
                      className="text-google-blue hover:underline flex items-center gap-1 font-semibold text-xs shrink-0 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-google-green" />
                          <span className="text-google-green">Copied Message!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Full Text</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 cursor-pointer"
                  >
                    Edit Message
                  </button>
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="bg-google-blue hover:bg-google-blue-dark text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              /* Form State */
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-gray-600 leading-relaxed">
                  Have a question about DevFest 2026, speaking, sponsorship, or community partnerships? Fill out the form below to email the organizers directly at <strong className="text-gray-900 font-mono">{contactEmail}</strong>.
                </p>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono font-bold text-gray-700 block mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Chen"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-google-blue focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-gray-700 block mb-1">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-google-blue focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Inquiry Category */}
                <div>
                  <label className="text-xs font-mono font-bold text-gray-700 block mb-1">
                    Inquiry Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-google-blue focus:bg-white transition-all cursor-pointer"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-mono font-bold text-gray-700 block mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can our organizing team help you? Please provide any relevant details..."
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-google-blue focus:bg-white transition-all"
                  />
                </div>

                {/* Destination Notification Box */}
                <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-200/80 flex items-center justify-between text-[11px] text-google-blue-dark">
                  <span className="flex items-center gap-1.5 font-medium truncate">
                    <Mail className="w-3.5 h-3.5 text-google-blue shrink-0" />
                    <span>Recipient: <strong className="font-mono">{contactEmail}</strong></span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-xs font-mono font-semibold underline hover:text-blue-900 ml-2 shrink-0 cursor-pointer"
                  >
                    {copied ? 'Copied' : 'Copy Email'}
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="px-4 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-gray-900 hover:bg-black text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2 group cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-google-yellow group-hover:translate-x-0.5 transition-transform" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Modal Footer */}
          <div className="bg-gray-50 px-5 sm:px-6 py-3 border-t border-gray-200 flex items-center justify-between text-[11px] font-mono text-gray-500">
            <span>GDG Cloud Toronto • DevFest 2026</span>
            <span className="text-google-green font-semibold">Team responds in 24–48h</span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
