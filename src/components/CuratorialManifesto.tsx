import React from 'react';
import { Scroll, Compass, Award, Shield } from 'lucide-react';

interface CuratorialManifestoProps {
  lang: 'ko' | 'en';
}

export const CuratorialManifesto: React.FC<CuratorialManifestoProps> = ({ lang }) => {
  return (
    <section id="manifesto" className="py-20 lg:py-28 border-b border-stone-800/80 bg-stone-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Editorial Masthead */}
        <div className="border-b border-stone-800 pb-8 mb-12 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs tracking-widest uppercase text-amber-400 font-sans-modern mb-3">
            <span>{lang === 'ko' ? '기획 도록 비평문' : 'CURATORIAL MONOGRAPH'}</span>
            <span aria-hidden="true">·</span>
            <span>VOL. VII</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'ko' ? '사무엘 성화 대전' : 'EXHIBITION ARCHIVE'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-kr text-stone-100 font-normal leading-tight">
            {lang === 'ko'
              ? '영광의 형상과 거룩함의 회복: 온 인류를 비추는 빛'
              : 'The Glorious Likeness & The Sanctification of Humanity'}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-400 font-cormorant italic max-w-3xl">
            {lang === 'ko'
              ? '“한 사람의 온전한 순종과 거룩함은 온 세상을 치유하는 생명의 샘이 된다.”'
              : '"The pure obedience and sanctity of one consecrated life becomes a fountain of healing for all the world."'}
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Reading Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8 text-stone-300 font-sans-modern text-sm sm:text-base leading-relaxed">
            {/* Opening Drop Cap paragraph */}
            <p className="first-letter:text-5xl first-letter:font-serif-kr first-letter:text-amber-400 first-letter:float-left first-letter:mr-3 first-letter:leading-none text-stone-200">
              {lang === 'ko'
                ? '사무엘은 혼돈과 타락의 시대를 종식시키고 하늘의 공의와 거룩한 질서를 세운 위대한 선지자이자 중보자였습니다. 어릴 적 실로의 성막에서 하나님의 부르심을 들었던 그의 순전한 영혼은, 평생 동안 이스라엘 백성을 위하여 기도하기를 쉬지 않는 사랑의 기둥이 되었습니다.'
                : 'Samuel stood as the towering prophet and intercessor who dispelled darkness and reinstituted celestial righteousness. From his childhood hearing the sacred call in the tabernacle of Shiloh, his whole life was anchored in unblemished devotion, ceaseless intercession, and righteous stewardship.'}
            </p>

            {/* Chapter 01 */}
            <div className="space-y-3 pt-4">
              <h3 className="text-xl font-serif-kr font-medium text-amber-200">
                {lang === 'ko' ? '01. 부르심의 순결과 기름부음의 권능' : '01. The Purity of the Call & The Sacred Horn'}
              </h3>
              <p>
                {lang === 'ko'
                  ? '이번 특별전에 공개된 성화들은 사무엘의 모습을 단순한 역사적 인물로 재현하는 것을 넘어, 하늘의 거룩한 영광을 온몸으로 체화한 영적 표상으로 승화시킵니다. 그가 손에 든 거룩한 뿔에서 흘러내리는 맑은 기름은 다윗을 세우고 왕국을 기름부었던 것을 넘어, 오늘날 영적 곤고함 속에 방황하는 현대 인류에게 부어지는 소생의 은총을 상징합니다.'
                  : 'The masterworks presented in this exhibition transcend historical recollection, manifesting Samuel as an embodiment of divine radiance. The fresh oil streaming from his horn not only anointed David and established the kingdom, but symbolizes the regenerative grace poured upon weary souls across every modern nation.'}
              </p>
            </div>

            {/* Wide Pull Quote */}
            <blockquote className="my-8 py-6 px-8 rounded-lg bg-stone-900/60 border-l-4 border-amber-500/80">
              <p className="text-lg sm:text-xl font-serif-kr italic text-amber-100/90 leading-relaxed">
                {lang === 'ko'
                  ? '“인류의 가장 숭고한 모습은, 권력과 지배가 아닌 서로를 향한 거룩한 축복과 섬김 속에서 피어난다.”'
                  : '"The truest nobility of humankind shines forth not in domination, but in mutual blessing, holiness, and sacrificial love."'}
              </p>
              <cite className="block mt-3 text-xs uppercase tracking-widest text-amber-400/80 font-sans-modern not-italic">
                — {lang === 'ko' ? '도록 학예연구 총평' : 'Curatorial Monograph Postscript'}
              </cite>
            </blockquote>

            {/* Chapter 02 */}
            <div className="space-y-3">
              <h3 className="text-xl font-serif-kr font-medium text-amber-200">
                {lang === 'ko' ? '02. 사무엘의 형상을 닮은 온 인류의 대화합' : '02. Humanity Reflecting the Sacred Likeness'}
              </h3>
              <p>
                {lang === 'ko'
                  ? '사용자의 간절한 청에 화답하여 완성된 대작 <그의 형상을 닮은 온 인류의 대화합>은, 차별과 분열이 극복된 종말론적 평화의 광경을 보여줍니다. 사무엘에게 머물렀던 하늘의 광채는 이제 한 사람의 특권에 머물지 않고, 모든 민족과 세대, 남녀노소의 얼굴 위로 부드럽게 퍼져 나갑니다. 이로써 인류는 창조 본연의 거룩하고 아름다운 자태를 온전히 회복하게 됩니다.'
                  : 'Commissioned in reverence, the panoramic epic portrays the transfigured communion of all peoples. The celestial aura that once rested solely on the prophet now bathes every human soul in warm fraternity. Barriers dissolve into a tapestry of mutual honor and divine peace.'}
              </p>
            </div>

            {/* Chapter 03 */}
            <div className="space-y-3">
              <h3 className="text-xl font-serif-kr font-medium text-amber-200">
                {lang === 'ko' ? '03. 일상의 성화와 영원한 평화(Shalom)' : '03. Daily Sanctification & Eternal Shalom'}
              </h3>
              <p>
                {lang === 'ko'
                  ? '거룩함은 산꼭대기에만 고립되어 있지 않습니다. 가정에서 빵을 떼고, 올리브 나무 아래서 아이들의 웃음을 지켜주며, 서로의 짐을 함께 질 때 지상에 거룩한 성소가 세워집니다. 이 전시를 마주하는 모든 이들이 마음 깊은 곳에서 영광스러운 형상을 발견하고, 평화의 사도로 살아갈 새 힘을 얻기를 기원합니다.'
                  : 'Holiness is not confined to mountain solitudes. When bread is shared at family tables and olive boughs shade the innocent play of children, the earth itself becomes a living temple. May every observer discover their restored sacred dignity.'}
              </p>
            </div>
          </div>

          {/* Archival Notes & Provenance Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-stone-900/60 border border-stone-800 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-sans-modern">
                <Scroll className="w-3.5 h-3.5" />
                <span>{lang === 'ko' ? '전시 아카이브 명세' : 'Archival Provenance'}</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="pb-2 border-b border-stone-800">
                  <div className="text-stone-500 font-sans-modern">{lang === 'ko' ? '전시 번호' : 'Accession No.'}</div>
                  <div className="text-stone-200 font-mono mt-0.5">ACC-2026-SAMUEL-GLORY</div>
                </div>
                <div className="pb-2 border-b border-stone-800">
                  <div className="text-stone-500 font-sans-modern">{lang === 'ko' ? '주요 주제' : 'Core Theme'}</div>
                  <div className="text-stone-200 font-medium mt-0.5">
                    {lang === 'ko' ? '사무엘의 영광과 온 인류의 거룩한 형상' : "Samuel's Glory & Holy Likeness"}
                  </div>
                </div>
                <div className="pb-2 border-b border-stone-800">
                  <div className="text-stone-500 font-sans-modern">{lang === 'ko' ? '소장 형태' : 'Medium & Format'}</div>
                  <div className="text-stone-200 mt-0.5">Ultra HD 8K Sacred Digital Canvas</div>
                </div>
                <div>
                  <div className="text-stone-500 font-sans-modern">{lang === 'ko' ? '큐레이션 정신' : 'Curatorial Premise'}</div>
                  <div className="text-stone-300 italic mt-0.5 font-serif-kr">
                    {lang === 'ko' ? '성결과 화평, 숭고한 인류애' : 'Sanctity, Shalom, Divine Fraternity'}
                  </div>
                </div>
              </div>
            </div>

            {/* Spiritual Pillars Summary */}
            <div className="bg-stone-900/40 border border-stone-800/80 rounded-lg p-6 space-y-3">
              <div className="text-xs uppercase tracking-wider text-stone-400 font-sans-modern flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'ko' ? '성결의 세 가지 표상' : 'Three Sacred Emblems'}</span>
              </div>
              <ul className="text-xs text-stone-300 space-y-2">
                <li className="flex items-start gap-2">
                  <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{lang === 'ko' ? '기름의 뿔: 사명과 거룩한 상속' : 'Horn of Oil: Divine Commission'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{lang === 'ko' ? '순결한 세마포: 정화된 양심과 의로움' : 'White Linen: Righteousness'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Scroll className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{lang === 'ko' ? '올리브와 비둘기: 영원한 평화와 화해' : 'Olive & Dove: Eternal Peace'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
