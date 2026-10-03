import React, { useState } from 'react';
import { ARTWORKS, Artwork } from './data/artworks';
import { CelestialCanvas } from './components/CelestialCanvas';
import { HeaderNav } from './components/HeaderNav';
import { HeroArtwork } from './components/HeroArtwork';
import { GalleryGrid } from './components/GalleryGrid';
import { VisionGenerator } from './components/VisionGenerator';
import { MeditationSanctuary } from './components/MeditationSanctuary';
import { CuratorialManifesto } from './components/CuratorialManifesto';
import { Footer } from './components/Footer';
import { ArtworkDetailModal } from './components/ArtworkDetailModal';
import { ZipDownloadModal } from './components/ZipDownloadModal';

export default function App() {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const [heroIndex, setHeroIndex] = useState<number>(0);
  const [modalArtwork, setModalArtwork] = useState<Artwork | null>(null);
  const [isZipModalOpen, setIsZipModalOpen] = useState<boolean>(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  const handleSwitchHeroCompanion = () => {
    // Switch between Samuel's glory (index 0) and Humanity's glory (index 1)
    setHeroIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const currentHero = ARTWORKS[heroIndex];
  const companionHero = ARTWORKS[heroIndex === 0 ? 1 : 0];

  const handleOpenMeditation = () => {
    const el = document.getElementById('meditation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 relative selection:bg-amber-500/30 selection:text-amber-200">
      {/* Dynamic Starlight Particles Background */}
      <CelestialCanvas />

      {/* Structured Layout Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <HeaderNav
          lang={lang}
          onToggleLang={toggleLanguage}
          onOpenMeditation={handleOpenMeditation}
          onOpenZipDownload={() => setIsZipModalOpen(true)}
        />

        <main className="flex-1">
          {/* Main Masterpiece Hero Section */}
          <HeroArtwork
            artwork={currentHero}
            companionArtwork={companionHero}
            lang={lang}
            onInspect={(art) => setModalArtwork(art)}
            onSwitchToCompanion={handleSwitchHeroCompanion}
          />

          {/* Complete Sacred Gallery Grid */}
          <GalleryGrid
            lang={lang}
            onSelectArtwork={(art) => setModalArtwork(art)}
            onOpenZipDownload={() => setIsZipModalOpen(true)}
          />

          {/* Spiritual Vision Compass */}
          <VisionGenerator lang={lang} />

          {/* Interactive Prayer Sanctuary & Candle Wall */}
          <MeditationSanctuary lang={lang} />

          {/* Curatorial Academic & Theological Essay */}
          <CuratorialManifesto lang={lang} />
        </main>

        <Footer lang={lang} />
      </div>

      {/* Ultra-HD Inspection Modal */}
      {modalArtwork && (
        <ArtworkDetailModal
          artwork={modalArtwork}
          lang={lang}
          onClose={() => setModalArtwork(null)}
        />
      )}

      {/* Zip Download Modal */}
      <ZipDownloadModal
        isOpen={isZipModalOpen}
        lang={lang}
        onClose={() => setIsZipModalOpen(false)}
      />
    </div>
  );
}
