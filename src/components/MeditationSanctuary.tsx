import React, { useState } from 'react';
import { Sparkles, Flame, Heart, Send, Check, Volume2 } from 'lucide-react';
import { MEDITATION_PILLARS, MeditationPillar } from '../data/artworks';
import { sacredAudio } from '../utils/audioSoundscape';

interface MeditationSanctuaryProps {
  lang: 'ko' | 'en';
}

interface UserPrayer {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  candleLit: boolean;
}

const INITIAL_PRAYERS: UserPrayer[] = [
  {
    id: 'p-1',
    name: '사무엘 (Samuel)',
    message: '어두운 세상 속에 거룩한 빛의 통로가 되게 하시고, 온 인류가 평화와 사랑 안에서 하나 되게 하옵소서.',
    timestamp: '방금 전',
    candleLit: true,
  },
  {
    id: 'p-2',
    name: '평화의 순례자',
    message: '갈등과 상처가 있는 모든 곳에 주의 샬롬이 임하여, 아이들의 웃음소리가 온 땅을 채우기를 소망합니다.',
    timestamp: '오늘',
    candleLit: true,
  },
  {
    id: 'p-3',
    name: 'Grace & Truth',
    message: 'May the holy countenance of divine righteousness restore dignity, peace, and hope to all nations.',
    timestamp: 'Today',
    candleLit: true,
  }
];

export const MeditationSanctuary: React.FC<MeditationSanctuaryProps> = ({ lang }) => {
  const [selectedPillar, setSelectedPillar] = useState<MeditationPillar>(MEDITATION_PILLARS[0]);
  const [prayers, setPrayers] = useState<UserPrayer[]>(INITIAL_PRAYERS);
  const [prayerName, setPrayerName] = useState('');
  const [prayerText, setPrayerText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [candleCount, setCandleCount] = useState(482);
  const [hasLitUserCandle, setHasLitUserCandle] = useState(false);

  const handleLightCandle = () => {
    sacredAudio.playChime(880);
    setCandleCount((prev) => prev + 1);
    setHasLitUserCandle(true);
  };

  const handlePillarChange = (pillar: MeditationPillar) => {
    sacredAudio.playChime(600);
    setSelectedPillar(pillar);
  };

  const handleSubmitPrayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prayerText.trim()) return;

    sacredAudio.playChime(760);
    const newPrayer: UserPrayer = {
      id: `p-${Date.now()}`,
      name: prayerName.trim() || (lang === 'ko' ? '익명의 기도자' : 'Humble Pilgrim'),
      message: prayerText.trim(),
      timestamp: lang === 'ko' ? '방금 전' : 'Just now',
      candleLit: true,
    };

    setPrayers([newPrayer, ...prayers]);
    setPrayerText('');
    setPrayerName('');
    setSubmitted(true);
    setCandleCount((c) => c + 1);
    setHasLitUserCandle(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="meditation" className="py-16 lg:py-24 border-b border-stone-800/80 bg-stone-900/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-amber-400 font-sans-modern mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>{lang === 'ko' ? '성스러운 묵상과 기도의 성소' : 'SANCTUARY OF PRAYER & CONTEMPLATION'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-kr text-stone-100 font-normal">
            {lang === 'ko' ? '사무엘의 영광을 품는 묵상' : 'Contemplating Samuel’s Holy Legacy'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400 font-sans-modern leading-relaxed">
            {lang === 'ko'
              ? '선지자 사무엘의 거룩한 생애와 기도를 묵상하며, 온 인류를 향한 평화와 축복의 마음을 모읍니다.'
              : 'Enter a tranquil space of intercession, reflecting on devotion, righteousness, and universal harmony.'}
          </p>
        </div>

        {/* 4 Pillars Segmented Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {MEDITATION_PILLARS.map((pillar) => {
            const isSelected = selectedPillar.id === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => handlePillarChange(pillar)}
                type="button"
                className={`p-4 rounded-lg text-left transition-all border ${
                  isSelected
                    ? 'bg-amber-950/40 border-amber-500/80 shadow-[0_0_20px_rgba(217,119,6,0.15)] text-amber-100'
                    : 'bg-stone-900/70 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider font-mono text-amber-400">
                    {pillar.contemplationVerse}
                  </span>
                  {isSelected && <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
                </div>
                <h4 className="text-sm font-serif-kr font-medium text-stone-100 mb-1">
                  {lang === 'ko' ? pillar.themeKo : pillar.themeEn}
                </h4>
                <p className="text-xs text-stone-400 line-clamp-2">
                  {lang === 'ko' ? pillar.focusKo : pillar.focusEn}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card + Prayer Interactive Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Active Pillar Prayer & Reflection (7 cols) */}
          <div className="lg:col-span-7 bg-stone-900/80 border border-stone-800 rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div>
                <span className="text-xs tracking-wider text-amber-400 uppercase font-sans-modern">
                  {selectedPillar.contemplationVerse}
                </span>
                <h3 className="text-2xl font-serif-kr text-stone-100 mt-1">
                  {lang === 'ko' ? selectedPillar.themeKo : selectedPillar.themeEn}
                </h3>
              </div>
              <button
                onClick={() => sacredAudio.playChime(620)}
                className="p-2 text-stone-400 hover:text-amber-300 transition-colors"
                title="종소리 울리기"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 rounded-lg bg-stone-950/70 border border-amber-900/30">
              <p className="text-xs uppercase tracking-wider text-amber-400/90 font-mono mb-2">
                {lang === 'ko' ? '사무엘의 성결한 기도문' : 'Sacred Intercessory Prayer'}
              </p>
              <p className="text-base sm:text-lg font-serif-kr italic text-amber-100/90 leading-relaxed">
                {lang === 'ko' ? selectedPillar.prayerKo : selectedPillar.prayerEn}
              </p>
            </div>

            <p className="text-sm text-stone-300 font-sans-modern leading-relaxed">
              {lang === 'ko' ? selectedPillar.focusKo : selectedPillar.focusEn}
            </p>

            {/* Candle Lighting Action */}
            <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    hasLitUserCandle
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                      : 'bg-stone-800 text-stone-400 border border-stone-700'
                  }`}
                >
                  <Flame className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs text-stone-400 font-sans-modern">
                    {lang === 'ko' ? '성소에 밝혀진 기도의 촛불' : 'Candles of Grace Lit'}
                  </span>
                  <div className="text-sm font-semibold font-mono text-amber-200 tabular-nums">
                    {candleCount.toLocaleString()} {lang === 'ko' ? '개의 등불' : 'Altar Flames'}
                  </div>
                </div>
              </div>

              <button
                onClick={handleLightCandle}
                type="button"
                className="px-4 py-2 text-xs font-sans-modern font-medium text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors flex items-center gap-1.5 shadow-md"
              >
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>{hasLitUserCandle ? (lang === 'ko' ? '촛불 다시 봉헌하기' : 'Add Another Candle') : (lang === 'ko' ? '기도의 촛불 밝히기' : 'Light Prayer Candle')}</span>
              </button>
            </div>
          </div>

          {/* User Prayer Wall & Offering Form (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Input Form */}
            <form
              onSubmit={handleSubmitPrayer}
              className="bg-stone-900/80 border border-stone-800 rounded-xl p-6 space-y-4"
            >
              <div className="flex items-center gap-2 text-xs text-amber-400 uppercase tracking-wider font-sans-modern">
                <Heart className="w-3.5 h-3.5" />
                <span>{lang === 'ko' ? '평화와 거룩의 기도 올리기' : 'Offer a Prayer of Peace'}</span>
              </div>

              <div>
                <input
                  type="text"
                  value={prayerName}
                  onChange={(e) => setPrayerName(e.target.value)}
                  placeholder={lang === 'ko' ? '이름 또는 세례명 (선택사항)' : 'Name or Pilgrim Title (Optional)'}
                  className="w-full px-3.5 py-2 text-xs bg-stone-950 border border-stone-800 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500/80 font-sans-modern"
                />
              </div>

              <div>
                <textarea
                  rows={3}
                  value={prayerText}
                  onChange={(e) => setPrayerText(e.target.value)}
                  placeholder={
                    lang === 'ko'
                      ? '온 인류의 평화와 사랑, 거룩함을 소망하는 한 줄의 기도를 남겨주세요...'
                      : 'Share a prayer for the peace, sanctity, and unity of all humanity...'
                  }
                  className="w-full px-3.5 py-2 text-xs bg-stone-950 border border-stone-800 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500/80 font-sans-modern resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-sans-modern font-medium text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-950" />
                    <span>{lang === 'ko' ? '기도가 봉헌되었습니다' : 'Prayer Offered in Light'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'ko' ? '성소에 기도 올리기' : 'Offer Prayer & Light Candle'}</span>
                  </>
                )}
              </button>
            </form>

            {/* Prayer Stream */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider text-stone-400 font-sans-modern flex items-center justify-between">
                <span>{lang === 'ko' ? '봉헌된 기도와 축복들' : 'Voices of Communion'}</span>
                <span className="font-mono text-stone-500">{prayers.length} prayers</span>
              </div>

              <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
                {prayers.map((p) => (
                  <div
                    key={p.id}
                    className="p-3.5 rounded-lg bg-stone-900/50 border border-stone-800 text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-stone-400">
                      <span className="font-medium text-amber-300/90 font-serif-kr">{p.name}</span>
                      <span className="text-[10px] font-mono text-stone-500">{p.timestamp}</span>
                    </div>
                    <p className="text-stone-300 font-sans-modern leading-relaxed">{p.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
