import React from 'react';
import { X, Archive, Image, Code2, Download, CheckCircle, FileText } from 'lucide-react';
import { sacredAudio } from '../utils/audioSoundscape';

interface ZipDownloadModalProps {
  isOpen: boolean;
  lang: 'ko' | 'en';
  onClose: () => void;
}

export const ZipDownloadModal: React.FC<ZipDownloadModalProps> = ({
  isOpen,
  lang,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleDownload = (type: 'artworks' | 'project') => {
    sacredAudio.playChime(750);
    const link = document.createElement('a');
    if (type === 'artworks') {
      link.href = '/samuel_sacred_artworks.zip';
      link.download = 'samuel_sacred_artworks.zip';
    } else {
      link.href = '/samuel_complete_project.zip';
      link.download = 'samuel_complete_project.zip';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg bg-stone-950 border border-stone-800 rounded-xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between bg-stone-900/90">
          <div className="flex items-center gap-2">
            <Archive className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-serif-kr font-medium text-stone-100">
              {lang === 'ko' ? 'ZIP 압축 파일 다운로드 센터' : 'Download ZIP Archives'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-100 rounded transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Options */}
        <div className="p-6 space-y-4">
          <p className="text-xs text-stone-300 font-sans-modern leading-relaxed">
            {lang === 'ko'
              ? '생성된 대작 성화 원본과 전체 프로젝트 파일이 각각 ZIP 압축 파일로 준비되었습니다. 원하시는 패키지를 선택해 내려받으세요.'
              : 'Both the original ultra-HD sacred artworks and the complete project source code are packaged into ZIP archives for direct download.'}
          </p>

          {/* Option 1: Artworks Archive */}
          <div className="p-4 rounded-lg bg-stone-900/60 border border-stone-800 hover:border-amber-600/60 transition-all space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded bg-amber-950/50 border border-amber-500/30 text-amber-400 shrink-0">
                  <Image className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-stone-100 font-serif-kr">
                    {lang === 'ko' ? '사무엘 성화 고해상도 원본 ZIP' : 'Sacred Artworks Ultra-HD ZIP'}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-stone-400 mt-1 font-sans-modern">
                    <span>3.5 MB</span>
                    <span aria-hidden="true">·</span>
                    <span>{lang === 'ko' ? '고화질 성화 4종 + 도록 해설' : '4 Masterworks + README'}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleDownload('artworks')}
                type="button"
                className="px-3.5 py-1.5 text-xs font-sans-modern font-medium text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors flex items-center gap-1.5 shrink-0 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'ko' ? '다운로드' : 'Download'}</span>
              </button>
            </div>

            <div className="text-[11px] text-stone-400 border-t border-stone-800/80 pt-2 space-y-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-amber-400" />
                <span>선지자 사무엘의 성스러운 형상 (16:9)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-amber-400" />
                <span>그의 형상을 닮은 온 인류의 대화합 (16:9)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-amber-400" />
                <span>성상 초상화 (3:4) & 성도의 교제 낙원 (4:3)</span>
              </div>
            </div>
          </div>

          {/* Option 2: Entire Project Code Archive */}
          <div className="p-4 rounded-lg bg-stone-900/60 border border-stone-800 hover:border-amber-600/60 transition-all space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded bg-stone-800 border border-stone-700 text-stone-300 shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-stone-100 font-serif-kr">
                    {lang === 'ko' ? '프로젝트 전체 소스코드 ZIP' : 'Complete Project Source Code ZIP'}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-stone-400 mt-1 font-sans-modern">
                    <span>3.6 MB</span>
                    <span aria-hidden="true">·</span>
                    <span>{lang === 'ko' ? '전체 React + Vite + TS + 에셋' : 'Full React/TS Codebase & Assets'}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleDownload('project')}
                type="button"
                className="px-3.5 py-1.5 text-xs font-sans-modern font-medium text-stone-200 bg-stone-800 hover:bg-stone-700 border border-stone-700 hover:border-stone-600 rounded transition-colors flex items-center gap-1.5 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'ko' ? '다운로드' : 'Download'}</span>
              </button>
            </div>

            <p className="text-[11px] text-stone-400 border-t border-stone-800/80 pt-2 font-sans-modern">
              {lang === 'ko'
                ? '웹 애플리케이션의 모든 소스 코드와 설정 파일, 오디오 엔진, 성화 이미지가 완전하게 패키징되어 있습니다.'
                : 'Contains all application components, styling, audio synthesizer, and asset archives ready for deployment.'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-stone-900/90 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ko' ? 'ZIP 규격: 표준 무손실 압축 (Deflate)' : 'Format: Standard ZIP Archive'}</span>
          </span>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-stone-100 transition-colors"
          >
            {lang === 'ko' ? '닫기' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
