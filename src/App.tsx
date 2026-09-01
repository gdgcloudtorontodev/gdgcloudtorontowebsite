import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/layout/CommandPalette';
import { Hero } from './components/sections/Hero';
import { CommandCenter } from './components/sections/CommandCenter';
import { TechnologyUniverse } from './components/sections/TechnologyUniverse';
import { AiObservatory } from './components/sections/AiObservatory/AiObservatory';
import { Speakers } from './components/sections/Speakers';
import { Agenda } from './components/sections/Agenda';
import { WorkshopLab } from './components/sections/WorkshopLab';
import { PanelForum } from './components/sections/PanelForum';
import { EvolutionOfComputing } from './components/sections/EvolutionOfComputing/EvolutionOfComputing';
import { PodcastStudio } from './components/sections/PodcastStudio';
import { YouTubeVideoCarousel } from './components/sections/YouTubeVideoCarousel';
import { AwardsHonors } from './components/sections/AwardsHonors';
import { WinnersPodium } from './components/sections/WinnersPodium';
import { VolunteerRecognition } from './components/sections/VolunteerRecognition';
import { TechRadar } from './components/sections/TechRadar';
import { CommunityConstellation } from './components/sections/CommunityConstellation';
import { VenueCampus } from './components/sections/VenueCampus';
import { DigitalCredential } from './components/sections/DigitalCredential';
import { CertificateCenter } from './components/sections/CertificateCenter';
import { DevfestIdCard } from './components/sections/DevfestIdCard';
import { DevfestArchive } from './components/sections/DevfestArchive';
import { HallOfImpact } from './components/sections/HallOfImpact';
import { EcosystemPartners } from './components/sections/EcosystemPartners';
import { ResourceCenter } from './components/sections/ResourceCenter';
import { CommunityStories } from './components/sections/CommunityStories';
import { CommunityWall } from './components/sections/CommunityWall';
import { RegistrationModal } from './components/sections/RegistrationModal';
import { Sparkles, ArrowRight, MapPin, Calendar } from 'lucide-react';
import { EVENT_DATA } from './data/event';

export const App: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const handleSelectCommandAction = (targetHref: string) => {
    const element = document.querySelector(targetHref);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCertificate = () => {
    const certEl = document.querySelector('#certificate-center');
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
      />

      {/* Main Homepage Flow */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero onRegisterClick={() => setRegisterModalOpen(true)} />

        {/* 2. Live Command Center */}
        <CommandCenter />

        {/* 3. Technology Universe */}
        <TechnologyUniverse />

        {/* 4. Flagship Signature Experience: AI Product Observatory */}
        <AiObservatory />

        {/* 5. Featured Speakers */}
        <Speakers />

        {/* 6. Agenda / Timeline */}
        <Agenda />

        {/* 7. Workshops / DevFest Lab */}
        <WorkshopLab />

        {/* 8. Panel Discussions / The Forum */}
        <PanelForum />

        {/* 9. Flagship Signature Experience: The Evolution of Computing */}
        <EvolutionOfComputing />

        {/* 10. Podcast Studio */}
        <PodcastStudio />

        {/* 11. YouTube Video Broadcast Carousel */}
        <YouTubeVideoCarousel />

        {/* 12. Awards & Honors */}
        <AwardsHonors />

        {/* 13. Challenge Winners */}
        <WinnersPodium />

        {/* 14. Volunteer Recognition */}
        <VolunteerRecognition />

        {/* 15. Technology Radar 2026 */}
        <TechRadar />

        {/* 16. Community Constellation */}
        <CommunityConstellation />

        {/* 17. Venue & Digital Campus Map */}
        <VenueCampus />

        {/* 18. Participant Digital Credentials */}
        <DigitalCredential />

        {/* 19. Certificate Center */}
        <CertificateCenter />

        {/* 20. DevFest ID Card */}
        <DevfestIdCard />

        {/* 21. DevFest Historical Archive */}
        <DevfestArchive />

        {/* 22. Hall of Impact */}
        <HallOfImpact />

        {/* 23. Ecosystem Partners & Sponsors */}
        <EcosystemPartners />

        {/* 24. Developer Resource Center */}
        <ResourceCenter />

        {/* 25. From the Community Stories */}
        <CommunityStories />

        {/* 26. The Community Wall */}
        <CommunityWall />

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
              Reserve your free pass for DevFest 2026. Explore hands-on labs, discover the AI Product Observatory, and connect with 1,500+ developers.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setRegisterModalOpen(true)}
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-google-yellow" />
                <span>Claim Developer Pass (Free)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={EVENT_DATA.socials.meetup}
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-2xl border border-white/30 transition-all"
              >
                Join Meetup Chapter
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
    </div>
  );
};
