import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/layout/CommandPalette';
import { Hero } from './components/sections/Hero';
import { AiObservatory } from './components/sections/AiObservatory/AiObservatory';
import { Speakers } from './components/sections/Speakers';
import { Agenda } from './components/sections/Agenda';
import { EvolutionOfComputing } from './components/sections/EvolutionOfComputing/EvolutionOfComputing';
import { YouTubeVideoCarousel } from './components/sections/YouTubeVideoCarousel';
import { AwardsHonors } from './components/sections/AwardsHonors';
import { VolunteerRecognition } from './components/sections/VolunteerRecognition';
import { TeamSection } from './components/sections/TeamSection';
import { CommunityConstellation } from './components/sections/CommunityConstellation';
import { DigitalCredential } from './components/sections/DigitalCredential';
import { CertificateCenter } from './components/sections/CertificateCenter';
import { DevfestArchive } from './components/sections/DevfestArchive';
import { HallOfImpact } from './components/sections/HallOfImpact';
import { EcosystemPartners } from './components/sections/EcosystemPartners';
import { ResourceCenter } from './components/sections/ResourceCenter';
import { RegistrationModal } from './components/sections/RegistrationModal';
import { ContactModal } from './components/sections/ContactModal';
import { CommunityGrowthInsights } from './components/sections/CommunityGrowthInsights';
import { Sparkles, ArrowRight, MapPin, Calendar, Ticket, Globe, ExternalLink, Users } from 'lucide-react';
import { EVENT_DATA } from './data/event';

export const App: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleSelectCommandAction = (targetHref: string) => {
    const element = document.querySelector(targetHref);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCertificate = () => {
    const certEl = document.querySelector('#my-certificate') || document.querySelector('#certificate-center');
    if (certEl) {
      certEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#202124] selection:bg-google-blue selection:text-white">
      {/* Global Navigation Header */}
      <Header
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenRegisterModal={() => setRegisterModalOpen(true)}
        onOpenCertificatePortal={handleOpenCertificate}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Main Homepage Flow */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero onRegisterClick={() => setRegisterModalOpen(true)} />

        {/* 2. GDG Cloud Toronto ON YOUTUBE Section */}
        <YouTubeVideoCarousel />

        {/* 3. Community Growth Insights (Daily dynamic refresh from official social handles) */}
        <CommunityGrowthInsights />

        {/* 4. 2026 Agenda & Sponsorship & Community Partnership */}
        <Agenda />

        {/* 5. Sponsorship & Ecosystem Partners */}
        <EcosystemPartners />

        {/* 6. Your DEVFEST CREDENTIAL Section */}
        <DigitalCredential />

        {/* 8. Certificate Center (Eventbrite Verified & Vector PDF Download) */}
        <CertificateCenter />

        {/* 11. DevFest Archive (Historical Legacy) */}
        <DevfestArchive />

        {/* 12. Awards & Recognitions Showcase */}
        <AwardsHonors />

        {/* 13. Volunteer Recognition & Awards (100+ Volunteers) */}
        <VolunteerRecognition />

        {/* 14. Meet the Team (Core Organizers, Volunteer Leads) */}
        <TeamSection />

        {/* 15. Confirmed & Featured Speakers */}
        <Speakers />

        {/* 16. Flagship Signature Experience: AI Product Observatory */}
        <AiObservatory />

        {/* 17. Flagship Signature Experience: The Evolution of Computing */}
        <EvolutionOfComputing />

        {/* 18. Community Constellation & Global Chapters */}
        <CommunityConstellation />

        {/* 19. Hall of Impact */}
        <HallOfImpact />

        {/* 20. Developer Resource Center */}
        <ResourceCenter />

        {/* 27. Final Call to Action Section */}
        <section id="register" className="py-24 bg-gradient-to-br from-google-blue via-google-blue-dark to-indigo-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-google-yellow" />
              JOIN CANADA'S PREMIER DEVELOPER EXPERIENCE
            </span>

            <h2 className="text-3xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              The Future of Computing Starts in Toronto.
            </h2>

            <p className="text-sm sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Get your tickets for DevFest 2026 on Eventbrite or join our community on Meetup for upcoming events, workshops, and discounted ticket access.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={EVENT_DATA.registration.eventbriteUrl || 'https://www.eventbrite.ca/e/google-developer-group-devfest-toronto-2026-tickets-2004248355785'}
                target="_blank"
                rel="noreferrer"
                className="bg-[#D1410C] hover:bg-[#b8380a] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5 animate-ticket-flash"
              >
                <Ticket className="w-5 h-5" />
                <span>Get Tickets on Eventbrite</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={EVENT_DATA.socials.meetup}
                target="_blank"
                rel="noreferrer"
                className="bg-[#E0393E] hover:bg-[#c93136] text-white font-bold text-sm sm:text-base px-7 py-4 rounded-2xl shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <Users className="w-5 h-5" />
                <span>Join Meetup for Future Events & Discounts</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={EVENT_DATA.socials.bevy}
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-2xl border border-white/30 transition-all flex items-center gap-2"
              >
                <Globe className="w-4 h-4 text-google-green" />
                <span>Join Bevy Chapter</span>
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200 font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-google-yellow" />
                {EVENT_DATA.dates.display}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-google-red" />
                {EVENT_DATA.location.venue}
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Command Palette (⌘K) Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectAction={handleSelectCommandAction}
      />

      {/* Registration Modal Dialog */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />

      {/* Contact Organizers Modal Dialog */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
};
