import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, Sparkles, BookOpen, Layers } from 'lucide-react';
import { Artwork } from '../data/artworks';

interface ArtworkDetailModalProps {
  artwork: Artwork | null;
  lang: 'ko' | 'en';
  onClose: () => void;
}

export const ArtworkDetailModal: React.FC<ArtworkDetailModalProps> = ({
  artwork,
  lang,
  onClose,
}) => {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Reset zoom and pan on new artwork
    setZoom(1);
    setPan({ x: 0, y: 0 });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [artwork, onClose]);

  if (!artwork) return null;

  const handleZoomIn = () => setZoom((z) => Math.min(3, z + 0.35));
  const handleZoomOut = () => setZoom((z) => Math.max(1, z - 0.35));
  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = artwork.imageSrc;
    a.download = `${artwork.id}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-6xl max-h-[94vh] bg-stone-950 border border-stone-800 rounded-xl overflow-hidden flex flex-col shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
        {/* Top Control Bar */}
        <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between bg-stone-900/90 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-sans-modern">
              {lang === 'ko' ? '뮤지엄 고해상도 세부 관조' : 'MUSEUM ULTRA-HD INSPECTION'}
            </span>
            <span className="text-stone-500" aria-hidden="true">·</span>
            <span className="text-xs text-stone-300 font-serif-kr truncate max-w-xs sm:max-w-md">
              {lang === 'ko' ? artwork.titleKo : artwork.titleEn}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-300 border border-stone-700 bg-stone-800 hover:text-amber-200 hover:border-amber-500/50 rounded transition-colors"
              title="성화 다운로드"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'ko' ? '성화 보관' : 'Save Image'}</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden min-h-[500px]">
          {/* Zoomable Image Viewer (7 cols) */}
          <div
            className="lg:col-span-7 relative bg-black flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-800 select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
          >
            <div
              className="relative transition-transform duration-100 ease-out max-h-full max-w-full flex items-center justify-center p-4"
              style={{
                transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
              }}
            >
              <img
                src={artwork.imageSrc}
                alt={lang === 'ko' ? artwork.titleKo : artwork.titleEn}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain rounded shadow-2xl pointer-events-none"
              />
            </div>

            {/* Floating Zoom Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1 rounded-lg bg-stone-900/90 border border-stone-700/80 backdrop-blur-md text-stone-200 text-xs shadow-lg">
              <button
                onClick={handleZoomIn}
                type="button"
                className="p-2 hover:bg-stone-800 rounded hover:text-amber-300 transition-colors"
                title="확대 (Zoom In)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <span className="px-2 tabular-nums font-mono text-[11px] text-amber-200">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={handleZoomOut}
                type="button"
                className="p-2 hover:bg-stone-800 rounded hover:text-amber-300 transition-colors"
                title="축소 (Zoom Out)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                type="button"
                className="p-2 hover:bg-stone-800 rounded hover:text-amber-300 transition-colors"
                title="원래 크기 (Reset)"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Curatorial Monograph & Details (5 cols) */}
          <div className="lg:col-span-5 p-6 lg:p-8 overflow-y-auto space-y-6 bg-stone-950">
            <div>
              {/* Unboxed clean metadata */}
              <div className="flex items-center gap-2 text-xs text-stone-400 font-sans-modern mb-2">
                <span>{artwork.year}</span>
                <span aria-hidden="true">·</span>
                <span>{artwork.dimensions}</span>
                <span aria-hidden="true">·</span>
                <span>{lang === 'ko' ? artwork.mediumKo : artwork.mediumEn}</span>
              </div>

              <h2 className="text-2xl font-serif-kr font-medium text-stone-100">
                {lang === 'ko' ? artwork.titleKo : artwork.titleEn}
              </h2>
              <p className="mt-1 text-sm text-amber-300/80 font-cormorant italic">
                {lang === 'ko' ? artwork.subtitleKo : artwork.subtitleEn}
              </p>
            </div>

            {/* Scripture Callout */}
            <div className="p-4 rounded-lg bg-stone-900/80 border border-stone-800 space-y-2">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-sans-modern">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{lang === 'ko' ? '성경 묵상 구절' : 'Scriptural Meditation'}</span>
              </div>
              <p className="text-sm font-serif-kr italic text-stone-200 leading-relaxed">
                {lang === 'ko' ? artwork.verseKo : artwork.verseEn}
              </p>
              <span className="block text-right text-xs text-amber-400 font-sans-modern">
                {artwork.verseRef}
              </span>
            </div>

            {/* Full Monograph description */}
            <div className="space-y-3 text-sm text-stone-300 font-sans-modern leading-relaxed">
              <h3 className="text-xs uppercase tracking-wider text-stone-400 font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {lang === 'ko' ? '작품 상세 해설' : 'Curatorial Monograph'}
              </h3>
              <p>{lang === 'ko' ? artwork.descriptionKo : artwork.descriptionEn}</p>
            </div>

            {/* Curatorial Notes Bullet Points */}
            <div className="space-y-3 pt-4 border-t border-stone-800">
              <h3 className="text-xs uppercase tracking-wider text-stone-400 font-semibold flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                {lang === 'ko' ? '도슨트 심층 관람 포인트' : 'Key Curatorial Insights'}
              </h3>
              <ul className="space-y-2 text-xs text-stone-300 font-sans-modern">
                {(lang === 'ko' ? artwork.curatorNotesKo : artwork.curatorNotesEn).map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-amber-400 mt-1 font-mono">0{idx + 1}.</span>
                    <span className="leading-relaxed">{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Attributes table */}
            <div className="pt-4 border-t border-stone-800 space-y-2">
              {artwork.attributes.map((attr, idx) => (
                <div key={idx} className="flex items-start justify-between text-xs py-1.5 border-b border-stone-900">
                  <span className="text-stone-400">{lang === 'ko' ? attr.labelKo : attr.labelEn}</span>
                  <span className="text-stone-200 font-medium text-right">{lang === 'ko' ? attr.valueKo : attr.valueEn}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
