import React, { useState } from 'react';
import { Maximize2, Sparkles, BookOpen, ChevronRight, Eye } from 'lucide-react';
import { Artwork } from '../data/artworks';
import { sacredAudio } from '../utils/audioSoundscape';

interface HeroArtworkProps {
  artwork: Artwork;
  companionArtwork: Artwork;
  lang: 'ko' | 'en';
  onInspect: (art: Artwork) => void;
  onSwitchToCompanion: () => void;
}

export const HeroArtwork: React.FC<HeroArtworkProps> = ({
  artwork,
  companionArtwork,
  lang,
  onInspect,
  onSwitchToCompanion,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="masterpiece" className="relative pt-8 pb-16 lg:py-20 border-b border-stone-800/80 overflow-hidden">
      {/* Subtle radial backdrop warmth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-amber-400/90 font-sans-modern mb-3">
            <span>{lang === 'ko' ? '주제 대작' : 'CENTRAL SACRED MONOGRAPH'}</span>
            <span aria-hidden="true">·</span>
            <span>{artwork.year}</span>
            <span aria-hidden="true">·</span>
            <span>{artwork.dimensions}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-kr font-normal text-stone-100 leading-tight tracking-tight text-balance">
            {lang === 'ko' ? artwork.titleKo : artwork.titleEn}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-amber-200/80 font-cormorant italic tracking-wide">
            {lang === 'ko' ? artwork.subtitleKo : artwork.subtitleEn}
          </p>
        </div>

        {/* Masterpiece Canvas Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Visual Box (8 cols) */}
          <div className="lg:col-span-8 group relative bg-stone-900 rounded-lg overflow-hidden border border-stone-800 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="relative aspect-video w-full overflow-hidden bg-stone-950 flex items-center justify-center">
              {!imageLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-500 animate-pulse">
                  <Sparkles className="w-8 h-8 text-amber-500/50 mb-2" />
                  <span className="text-xs tracking-widest uppercase">
                    {lang === 'ko' ? '성스러운 형상 불러오는 중...' : 'Illuminating Sacred Presence...'}
                  </span>
                </div>
              )}

              <img
                src={artwork.imageSrc}
                alt={lang === 'ko' ? artwork.titleKo : artwork.titleEn}
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.015] ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Subtle top/bottom gradient scrim for focus */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-stone-950/80 via-transparent to-black/30" />

              {/* Floating Action Affordance */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <button
                  onClick={() => {
                    sacredAudio.playChime(720);
                    onInspect(artwork);
                  }}
                  type="button"
                  className="flex items-center gap-2 px-3.5 py-2 text-xs font-sans-modern tracking-wide bg-stone-950/90 text-amber-200 border border-amber-500/30 hover:border-amber-400/80 rounded backdrop-blur-md transition-all shadow-lg hover:shadow-amber-500/20"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{lang === 'ko' ? '초고해상도 세부 관조' : 'Ultra HD Inspection & Zoom'}</span>
                </button>
              </div>

              {/* Floating scripture strip on bottom left */}
              <div className="absolute bottom-4 left-4 max-w-md hidden sm:block">
                <p className="text-xs text-amber-100/90 font-serif-kr line-clamp-1 italic drop-shadow">
                  {lang === 'ko' ? artwork.verseKo : artwork.verseEn}
                </p>
                <span className="text-[10px] text-amber-400/80 tracking-wider font-sans-modern">
                  {artwork.verseRef}
                </span>
              </div>
            </div>

            {/* Sub-bar below image */}
            <div className="px-5 py-3.5 bg-stone-950/95 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <span className="text-amber-400/90 font-medium">{lang === 'ko' ? '기법' : 'Medium'}</span>
                <span aria-hidden="true">·</span>
                <span>{lang === 'ko' ? artwork.mediumKo : artwork.mediumEn}</span>
              </div>
              <button
                onClick={() => onInspect(artwork)}
                className="text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-1"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{lang === 'ko' ? '도슨트 해설 열기' : 'Curator Commentary'}</span>
              </button>
            </div>
          </div>

          {/* Curatorial Context & Sister Artwork Teaser (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span className="tracking-wider uppercase font-sans-modern">
                  {lang === 'ko' ? '거룩한 묵상록' : 'Sacred Meditation'}
                </span>
              </div>

              <blockquote className="border-l-2 border-amber-500/60 pl-4 py-1">
                <p className="text-sm font-serif-kr text-stone-200 leading-relaxed italic">
                  {lang === 'ko' ? artwork.verseKo : artwork.verseEn}
                </p>
                <cite className="block mt-2 text-xs text-amber-400/80 font-sans-modern not-italic">
                  — {artwork.verseRef}
                </cite>
              </blockquote>

              <p className="text-sm text-stone-300 font-sans-modern leading-relaxed">
                {lang === 'ko' ? artwork.descriptionKo : artwork.descriptionEn}
              </p>

              {/* Attributes list */}
              <div className="pt-2 border-t border-stone-800/80 space-y-2">
                {artwork.attributes.map((attr, idx) => (
                  <div key={idx} className="flex items-start justify-between text-xs py-1 border-b border-stone-800/40">
                    <span className="text-stone-400 font-sans-modern">
                      {lang === 'ko' ? attr.labelKo : attr.labelEn}
                    </span>
                    <span className="text-stone-200 font-medium text-right max-w-[200px]">
                      {lang === 'ko' ? attr.valueKo : attr.valueEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sister Artwork Switcher Card */}
            <div className="p-4 rounded-lg bg-stone-900/60 border border-stone-800 hover:border-amber-700/50 transition-all">
              <div className="text-[11px] uppercase tracking-wider text-amber-400/90 font-sans-modern mb-2">
                {lang === 'ko' ? '연계 대작 둘러보기' : 'Companion Masterwork'}
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={companionArtwork.imageSrc}
                  alt={companionArtwork.titleKo}
                  referrerPolicy="no-referrer"
                  className="w-16 h-12 rounded object-cover border border-stone-700"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-serif-kr font-medium text-stone-100 truncate">
                    {lang === 'ko' ? companionArtwork.titleKo : companionArtwork.titleEn}
                  </h4>
                  <p className="text-[11px] text-stone-400 truncate">
                    {lang === 'ko' ? companionArtwork.subtitleKo : companionArtwork.subtitleEn}
                  </p>
                </div>
                <button
                  onClick={() => {
                    sacredAudio.playChime(640);
                    onSwitchToCompanion();
                  }}
                  type="button"
                  className="p-2 text-stone-300 hover:text-amber-300 hover:bg-stone-800 rounded transition-colors"
                  title="작품 전환"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
