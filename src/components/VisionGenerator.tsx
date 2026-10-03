import React, { useState } from 'react';
import { Sparkles, Compass, CheckCircle, RefreshCw, Feather } from 'lucide-react';
import { sacredAudio } from '../utils/audioSoundscape';

interface VisionGeneratorProps {
  lang: 'ko' | 'en';
}

interface VisionCard {
  title: string;
  scripture: string;
  reflection: string;
  blessing: string;
  themeColor: string;
}

const PRESET_VISIONS: Record<string, VisionCard> = {
  'anointing-unity': {
    title: '성산의 기름과 온 인류의 연합 (Anointing of Unity)',
    scripture: '“머리에 있는 보배로운 기름이 수염 곧 아론의 수염에 흘러서 그의 옷깃까지 내림 같고” (시편 133:2)',
    reflection: '사무엘의 뿔에 담긴 거룩한 기름은 시공간을 넘어 오늘 이 땅의 모든 상처받은 영혼에게 닿습니다. 어떤 분열도 이 사랑의 기름 앞에서는 녹아내리며, 인류는 서로의 눈에서 하늘의 형상을 발견합니다.',
    blessing: '“당신의 걸음마다 성령의 평강이 넘쳐나고, 당신을 만나는 모든 이가 거룩한 온기와 참된 평안을 얻게 되기를 축복합니다.”',
    themeColor: 'from-amber-500/20 to-stone-900',
  },
  'wisdom-peace': {
    title: '영원한 지혜의 눈동자와 화평 (Wisdom of Shalom)',
    scripture: '“여호와는 그의 얼굴을 네게 비추사 은혜 베푸시기를 원하며 그의 얼굴을 네게로 향하여 드사 평강 주시기를 원하노라” (민수기 6:25-26)',
    reflection: '사무엘이 바라보던 지평선은 단순한 흙과 바위가 아닌, 영원한 평화로 물든 새 하늘과 새 땅이었습니다. 그의 깊고 맑은 눈빛을 닮아, 우리 역시 혼란한 세상 속에서 영원한 선과 공의를 굳건히 바라봅니다.',
    blessing: '“어둠이 당신의 시야를 가릴 때에도 하늘의 별빛 같은 지혜가 당신을 인도하시고, 두려움 없는 온유함이 당신의 방패가 되기를 빕니다.”',
    themeColor: 'from-blue-900/30 to-stone-900',
  },
  'listening-renewal': {
    title: '순종의 귀와 새로워지는 인류 (The Attentive Heart)',
    scripture: '“말씀하옵소서 주의 종이 듣겠나이다” (사무엘상 3:10)',
    reflection: '가장 위대한 역사는 화려한 군대의 행진이 아닌, 어린 사무엘의 무릎 꿇음에서 시작되었습니다. 온 인류가 탐욕의 소리를 멈추고 생명의 세미한 음성을 들을 때, 굳어진 마음이 부드러운 살처럼 소생합니다.',
    blessing: '“오늘 당신의 마음속에 세미한 은혜의 음성이 울려 퍼지며, 그 순종의 한 걸음이 온 세상에 생명수를 흐르게 하는 첫 물결이 될 것입니다.”',
    themeColor: 'from-emerald-900/25 to-stone-900',
  },
  'communion-love': {
    title: '성도의 식탁과 형제애의 완성 (Communion of Eternal Love)',
    scripture: '“우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라” (요한일서 4:19)',
    reflection: '사무엘의 형상을 닮은 인류의 궁극적 모습은, 닫힌 문을 열고 빵을 나누며 눈물을 닦아주는 성도의 교제입니다. 서로를 섬기는 그 작은 식탁이 곧 하늘나라의 영광스러운 잔치입니다.',
    blessing: '“당신의 가정이 거룩한 안식처가 되고, 당신의 손길을 통해 외로운 자들이 품에 안기며 거룩한 형제의 사랑이 온 누리에 가득하기를 기원합니다.”',
    themeColor: 'from-amber-700/20 to-stone-900',
  },
};

export const VisionGenerator: React.FC<VisionGeneratorProps> = ({ lang }) => {
  const [selectedKey, setSelectedKey] = useState<string>('anointing-unity');
  const [isGenerating, setIsGenerating] = useState(false);
  const currentVision = PRESET_VISIONS[selectedKey];

  const handleSelect = (key: string) => {
    setIsGenerating(true);
    sacredAudio.playChime(660);
    setTimeout(() => {
      setSelectedKey(key);
      setIsGenerating(false);
    }, 250);
  };

  return (
    <section className="py-16 lg:py-20 border-b border-stone-800/80 bg-stone-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-amber-400 font-sans-modern mb-2">
            <Feather className="w-3.5 h-3.5" />
            <span>{lang === 'ko' ? '빛의 묵상과 축복 나침반' : 'CONTEMPLATIVE BLESSING COMPASS'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif-kr text-stone-100">
            {lang === 'ko' ? '오늘 나에게 임하는 거룩한 비전' : 'A Divine Word of Grace for You'}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-400 font-sans-modern">
            {lang === 'ko'
              ? '묵상하고자 하는 영적 주제를 선택하여 선지자의 축복과 영적 은총을 마음에 새겨보세요.'
              : 'Select a theme of spiritual contemplation to receive a dedicated blessing and biblical reflection.'}
          </p>
        </div>

        {/* Theme Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => handleSelect('anointing-unity')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-sans-modern transition-all border ${
              selectedKey === 'anointing-unity'
                ? 'bg-amber-500/20 text-amber-200 border-amber-500/50 shadow-sm'
                : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-200'
            }`}
          >
            {lang === 'ko' ? '기름부음과 연합' : 'Anointing & Unity'}
          </button>
          <button
            onClick={() => handleSelect('wisdom-peace')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-sans-modern transition-all border ${
              selectedKey === 'wisdom-peace'
                ? 'bg-amber-500/20 text-amber-200 border-amber-500/50 shadow-sm'
                : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-200'
            }`}
          >
            {lang === 'ko' ? '지혜와 영원한 샬롬' : 'Wisdom & Shalom'}
          </button>
          <button
            onClick={() => handleSelect('listening-renewal')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-sans-modern transition-all border ${
              selectedKey === 'listening-renewal'
                ? 'bg-amber-500/20 text-amber-200 border-amber-500/50 shadow-sm'
                : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-200'
            }`}
          >
            {lang === 'ko' ? '순종과 영혼의 소생' : 'Listening & Renewal'}
          </button>
          <button
            onClick={() => handleSelect('communion-love')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-sans-modern transition-all border ${
              selectedKey === 'communion-love'
                ? 'bg-amber-500/20 text-amber-200 border-amber-500/50 shadow-sm'
                : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-stone-200'
            }`}
          >
            {lang === 'ko' ? '식탁의 교제와 사랑' : 'Communion & Love'}
          </button>
        </div>

        {/* Card View */}
        <div
          className={`p-8 rounded-xl bg-gradient-to-b ${currentVision.themeColor} border border-stone-800 shadow-2xl relative overflow-hidden transition-opacity duration-300 ${
            isGenerating ? 'opacity-40' : 'opacity-100'
          }`}
        >
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <div className="flex items-center justify-center gap-2 text-xs tracking-widest uppercase text-amber-400 font-sans-modern">
              <Compass className="w-3.5 h-3.5" />
              <span>{currentVision.title}</span>
            </div>

            <blockquote className="text-sm font-serif-kr italic text-amber-100/90 leading-relaxed bg-stone-950/60 p-4 rounded-lg border border-amber-900/30">
              {currentVision.scripture}
            </blockquote>

            <p className="text-stone-300 font-sans-modern text-xs sm:text-sm leading-relaxed">
              {currentVision.reflection}
            </p>

            <div className="pt-4 border-t border-stone-800/80">
              <div className="text-[11px] uppercase tracking-wider text-amber-400/90 font-mono mb-1">
                {lang === 'ko' ? '당신과 온 인류를 위한 축복' : 'Benediction of Peace'}
              </div>
              <p className="text-base sm:text-lg font-serif-kr font-medium text-stone-100 italic leading-relaxed">
                {currentVision.blessing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
