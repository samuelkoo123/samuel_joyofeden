import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Globe, Archive } from 'lucide-react';
import { sacredAudio } from '../utils/audioSoundscape';

interface HeaderNavProps {
  lang: 'ko' | 'en';
  onToggleLang: () => void;
  onOpenMeditation: () => void;
  onOpenZipDownload: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  lang,
  onToggleLang,
  onOpenMeditation,
  onOpenZipDownload,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleAudioToggle = () => {
    const active = sacredAudio.toggle();
    setIsPlayingAudio(active);
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-950/85 backdrop-blur-md border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element brand wordmark */}
        <a
          href="#"
          className="font-cinzel text-base sm:text-lg tracking-widest font-semibold text-amber-100 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
        >
          {lang === 'ko' ? '사무엘과 거룩한 인류' : 'SAMUEL & SACRED HUMANITY'}
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs tracking-wider uppercase text-stone-300 font-sans-modern">
          <a
            href="#masterpiece"
            className="hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            {lang === 'ko' ? '주요성상' : 'Masterpiece'}
          </a>
          <a
            href="#gallery"
            className="hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            {lang === 'ko' ? '예술회랑' : 'Gallery'}
          </a>
          <a
            href="#meditation"
            className="hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            {lang === 'ko' ? '영적묵상' : 'Meditation'}
          </a>
          <a
            href="#manifesto"
            className="hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            {lang === 'ko' ? '도록해설' : 'Curatorial Essay'}
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleAudioToggle}
            type="button"
            className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-sans-modern tracking-wide transition-all border ${
              isPlayingAudio
                ? 'bg-amber-950/60 text-amber-200 border-amber-600/60 shadow-[0_0_12px_rgba(217,119,6,0.25)]'
                : 'bg-stone-900/80 text-stone-300 border-stone-800 hover:border-stone-700 hover:text-stone-100'
            }`}
            title={isPlayingAudio ? '천상의 음향 멈추기' : '천상의 성스러운 음향 재생'}
            aria-label="Toggle sacred soundscape"
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span className="hidden sm:inline">{lang === 'ko' ? '천상음향 켜짐' : 'Sacred Ambient'}</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                <span className="hidden sm:inline">{lang === 'ko' ? '성소음향 묵상' : 'Soundscape'}</span>
              </>
            )}
          </button>

          <button
            onClick={onToggleLang}
            type="button"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs text-stone-300 border border-stone-800 bg-stone-900/80 hover:text-stone-100 hover:border-stone-700 transition-colors"
            title="언어 전환 / Switch Language"
            aria-label="Language switch"
          >
            <Globe className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-medium uppercase">{lang === 'ko' ? 'EN' : '한국어'}</span>
          </button>

          <button
            onClick={onOpenZipDownload}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-sans-modern font-medium text-amber-200 border border-amber-600/50 bg-amber-950/40 hover:bg-amber-900/60 hover:border-amber-500 transition-colors whitespace-nowrap shadow-sm"
            title="ZIP 파일 다운로드"
          >
            <Archive className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ko' ? 'ZIP 다운로드' : 'ZIP Download'}</span>
          </button>

          <button
            onClick={onOpenMeditation}
            type="button"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-950 font-medium bg-amber-400 hover:bg-amber-300 rounded transition-colors whitespace-nowrap shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '기도의 촛불' : 'Light Candle'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
