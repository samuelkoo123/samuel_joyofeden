import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

interface FooterProps {
  lang: 'ko' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-500 py-12 text-xs font-sans-modern">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-amber-500/80" />
          <span className="text-stone-300 font-serif-kr">
            {lang === 'ko'
              ? '사무엘의 영광과 온 인류의 거룩한 형상'
              : 'Samuel’s Glory & Transfigured Humanity'}
          </span>
          <span aria-hidden="true">·</span>
          <span>Archival Collection 2026</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#masterpiece" className="hover:text-stone-300 transition-colors">
            {lang === 'ko' ? '대작관' : 'Masterpiece'}
          </a>
          <a href="#gallery" className="hover:text-stone-300 transition-colors">
            {lang === 'ko' ? '성화회랑' : 'Gallery'}
          </a>
          <a href="#meditation" className="hover:text-stone-300 transition-colors">
            {lang === 'ko' ? '기도성소' : 'Sanctuary'}
          </a>
          <a href="#manifesto" className="hover:text-stone-300 transition-colors">
            {lang === 'ko' ? '도록비평' : 'Monograph'}
          </a>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1 text-stone-400 hover:text-amber-300 transition-colors"
            title="맨 위로 이동"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-6 pt-6 border-t border-stone-900 text-center sm:text-left text-[11px] text-stone-600">
        {lang === 'ko'
          ? '“오직 정의를 물 같이, 공의를 마르지 않는 강 같이 흐르게 할지어다” — 모든 인류에게 평화와 거룩함의 은총이 함께하기를 소망합니다.'
          : '"Let justice roll on like a river, righteousness like a never-failing stream." — Peace, holiness, and grace to all humanity.'}
      </div>
    </footer>
  );
};
