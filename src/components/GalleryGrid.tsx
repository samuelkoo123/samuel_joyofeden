import React, { useState } from 'react';
import { Maximize2, Sparkles, Heart, Archive, Download } from 'lucide-react';
import { Artwork, ARTWORKS } from '../data/artworks';
import { sacredAudio } from '../utils/audioSoundscape';

interface GalleryGridProps {
  lang: 'ko' | 'en';
  onSelectArtwork: (artwork: Artwork) => void;
  onOpenZipDownload?: () => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  lang,
  onSelectArtwork,
  onOpenZipDownload,
}) => {
  const [filter, setFilter] = useState<'all' | 'samuel' | 'humanity' | 'communion'>('all');
  const [savedFavorites, setSavedFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sacredAudio.playChime(800);
    setSavedFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredArtworks = ARTWORKS.filter((art) => {
    if (filter === 'all') return true;
    return art.category === filter;
  });

  return (
    <section id="gallery" className="py-16 lg:py-24 border-b border-stone-800/80 bg-stone-950/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-amber-400 font-sans-modern mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ko' ? '신성한 예술 전시장' : 'SACRED ART GALLERY'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-kr text-stone-100 font-normal">
              {lang === 'ko' ? '영광의 형상과 거룩한 인류 회랑' : 'Gallery of Divine Likeness & Holy Humanity'}
            </h2>
            <p className="mt-2 text-sm text-stone-400 max-w-2xl font-sans-modern">
              {lang === 'ko'
                ? '하늘의 영광을 입은 선지자 사무엘의 거룩한 위엄과, 그 은혜의 빛을 덧입어 화평과 사랑으로 하나 된 온 인류의 숭고한 모습을 조망합니다.'
                : 'Contemplate Prophet Samuel in divine majesty alongside all humankind transfigured in holy peace, harmony, and celestial light.'}
            </p>
          </div>

          {/* Interactive Filter Tabs (functional buttons with click handlers) */}
          <div className="flex items-center gap-1 p-1 bg-stone-900 border border-stone-800 rounded-lg shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              type="button"
              className={`px-3 py-1.5 text-xs font-sans-modern whitespace-nowrap rounded transition-colors ${
                filter === 'all'
                  ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {lang === 'ko' ? '전체 성화' : 'All Works'}
            </button>
            <button
              onClick={() => setFilter('samuel')}
              type="button"
              className={`px-3 py-1.5 text-xs font-sans-modern whitespace-nowrap rounded transition-colors ${
                filter === 'samuel'
                  ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {lang === 'ko' ? '선지자 사무엘' : 'Prophet Samuel'}
            </button>
            <button
              onClick={() => setFilter('humanity')}
              type="button"
              className={`px-3 py-1.5 text-xs font-sans-modern whitespace-nowrap rounded transition-colors ${
                filter === 'humanity'
                  ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {lang === 'ko' ? '변모된 온 인류' : 'Holy Humanity'}
            </button>
            <button
              onClick={() => setFilter('communion')}
              type="button"
              className={`px-3 py-1.5 text-xs font-sans-modern whitespace-nowrap rounded transition-colors ${
                filter === 'communion'
                  ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {lang === 'ko' ? '성도의 교제' : 'Living Communion'}
            </button>
          </div>
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredArtworks.map((art) => {
            const isFaved = !!savedFavorites[art.id];

            return (
              <article
                key={art.id}
                onClick={() => {
                  sacredAudio.playChime(680);
                  onSelectArtwork(art);
                }}
                className="group cursor-pointer rounded-lg bg-stone-900/60 border border-stone-800/90 hover:border-amber-600/60 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(217,119,6,0.12)]"
              >
                {/* Visual Image Viewport */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                  <img
                    src={art.imageSrc}
                    alt={lang === 'ko' ? art.titleKo : art.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top actions: Favorite & Zoom Icon */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <button
                      onClick={(e) => toggleFavorite(art.id, e)}
                      type="button"
                      aria-label="Add to contemplative favorites"
                      className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                        isFaved
                          ? 'bg-amber-500/30 text-amber-300 border-amber-400'
                          : 'bg-stone-950/70 text-stone-400 border-stone-700/60 hover:text-stone-200'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isFaved ? 'fill-amber-400' : ''}`} />
                    </button>
                    <div className="p-2 rounded-full bg-stone-950/70 text-amber-200 border border-stone-700/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Clean unboxed category kicker over bottom image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-[11px] uppercase tracking-wider text-amber-400/90 font-sans-modern drop-shadow">
                      {art.verseRef}
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Zero-Pill unboxed metadata */}
                    <div className="flex items-center gap-2 text-xs text-stone-400 mb-2">
                      <span>{art.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{art.dimensions}</span>
                      <span aria-hidden="true">·</span>
                      <span>{lang === 'ko' ? art.mediumKo : art.mediumEn}</span>
                    </div>

                    <h3 className="text-xl font-serif-kr font-medium text-stone-100 group-hover:text-amber-200 transition-colors">
                      {lang === 'ko' ? art.titleKo : art.titleEn}
                    </h3>

                    <p className="mt-2 text-xs text-amber-300/80 font-cormorant italic line-clamp-1">
                      {lang === 'ko' ? art.subtitleKo : art.subtitleEn}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-stone-300 font-sans-modern leading-relaxed line-clamp-3">
                      {lang === 'ko' ? art.descriptionKo : art.descriptionEn}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs">
                    <span className="text-stone-400 font-serif-kr italic">
                      {art.attributes[0]?.valueKo}
                    </span>
                    <span className="text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium font-sans-modern">
                      {lang === 'ko' ? '세부 관조하기' : 'Inspect Artwork'} →
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom ZIP Download Banner */}
        <div className="mt-12 p-6 rounded-xl bg-stone-900/50 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-600/30 text-amber-400 shrink-0">
              <Archive className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-serif-kr font-medium text-stone-100">
                {lang === 'ko' ? '사무엘 성화 및 프로젝트 전체 ZIP 아카이브' : 'Download Complete Masterworks & Project Archive (ZIP)'}
              </h4>
              <p className="text-xs text-stone-400 mt-0.5 font-sans-modern">
                {lang === 'ko'
                  ? '모든 고화질 성화 파일(3.5MB)과 전체 소스 코드(3.6MB)가 포함된 압축 파일을 내려받으실 수 있습니다.'
                  : 'Download packaged high-res artwork files and full application source code.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenZipDownload && onOpenZipDownload()}
            type="button"
            className="px-4 py-2.5 rounded-lg text-xs font-sans-modern font-medium text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-2 shrink-0 shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>{lang === 'ko' ? 'ZIP 파일 내려받기' : 'Download ZIP'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
