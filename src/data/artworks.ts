export interface Artwork {
  id: string;
  titleKo: string;
  titleEn: string;
  subtitleKo: string;
  subtitleEn: string;
  aspectRatio: string;
  imageSrc: string;
  category: 'samuel' | 'humanity' | 'communion';
  year: string;
  mediumKo: string;
  mediumEn: string;
  dimensions: string;
  verseKo: string;
  verseRef: string;
  verseEn: string;
  descriptionKo: string;
  descriptionEn: string;
  curatorNotesKo: string[];
  curatorNotesEn: string[];
  attributes: {
    labelKo: string;
    labelEn: string;
    valueKo: string;
    valueEn: string;
  }[];
}

export const ARTWORKS: Artwork[] = [
  {
    id: 'samuel-glorious-presence',
    titleKo: '영광의 보좌와 선지자 사무엘의 성스러운 형상',
    titleEn: 'The Celestial Manifestation of Samuel the Prophet',
    subtitleKo: '어둠을 밝히는 하늘의 거룩한 기름부음과 영원한 빛',
    subtitleEn: 'The Eternal Holy Anointing and Divine Radiance Piercing the Firmament',
    aspectRatio: '16:9',
    imageSrc: '/src/assets/images/samuel_glorious_presence_1790996921978.jpg',
    category: 'samuel',
    year: '2026',
    mediumKo: '디지털 캔버스 위의 거룩한 빛의 유화 기법',
    mediumEn: 'Divine Luminescence & Oil on Digital Linen Canvas',
    dimensions: '3840 × 2160 px (UHD Masterwork)',
    verseKo: '“사무엘이 자라매 여호와께서 그와 함께 계셔서 그의 말이 하나도 땅에 떨어지지 않게 하시니”',
    verseRef: '사무엘상 3:19 / 1 Samuel 3:19',
    verseEn: '"The Lord was with Samuel as he grew up, and he let none of Samuel’s words fall to the ground."',
    descriptionKo: '태초의 거룩한 빛이 쏟아져 내리는 성산의 정상에 선 선지자 사무엘의 장엄하고 찬란한 모습입니다. 순결한 흰 옷과 정금으로 짠 예복 위로 하늘의 영광이 감돌며, 그의 손에 들린 뿔에서는 생명과 성별의 기름이 황금빛으로 흘러내려 세상을 정화합니다. 그의 시선은 시공을 초월하여 온 인류를 축복하며, 진리와 거룩함의 영원한 길을 비추고 있습니다.',
    descriptionEn: 'Prophet Samuel stands in celestial grandeur atop the holy mountain sanctuary. Cloaked in garments of spun gold and pure luminescence, his presence embodies divine righteousness and serene holiness. From the sacred horn of anointing flows ethereal amber light that sanctifies the earth, with a transcendent gaze of boundless wisdom gazing out upon the horizon of mankind.',
    curatorNotesKo: [
      '렘브란트식 명암 대비(Chiaroscuro)를 승화시켜, 어둠 속에서 태동하는 천상의 순수한 황금빛 광채를 구현했습니다.',
      '예복의 푸른 라피스 라줄리 문양은 천상의 진리를, 흰 세마포는 흠 없는 거룩함과 순결을 상징합니다.',
      '손에 들린 성스러운 기름의 뿔은 온 인류에게 부어질 은혜와 구원의 상속을 예표합니다.'
    ],
    curatorNotesEn: [
      'Elevates classical chiaroscuro to depict pure, self-luminous celestial amber gold cutting through earthly shadows.',
      'Deep lapis accents symbolize divine fidelity, while immaculate white linens represent unblemished sanctity.',
      'The sacred horn of oil signifies anointing, inheritance, and blessing poured out upon all generations.'
    ],
    attributes: [
      { labelKo: '주요 상징', labelEn: 'Key Motif', valueKo: '기름부음의 뿔, 황금 광배, 성스러운 산', valueEn: 'Horn of Anointing, Golden Halo, Mount of Vision' },
      { labelKo: '지배적 색채', labelEn: 'Color Palette', valueKo: '천상의 정금(Pure Gold), 성결의 백색, 라피스 블루', valueEn: 'Celestial Amber Gold, Alabaster White, Sacred Lapis' },
      { labelKo: '영적 의미', labelEn: 'Spiritual Theme', valueKo: '부르심의 신실함과 하늘의 권위', valueEn: 'Faithfulness of Calling & Divine Majesty' },
    ]
  },
  {
    id: 'humanity-radiant-harmony',
    titleKo: '그의 형상을 닮은 온 인류의 대화합과 거룩한 광채',
    titleEn: 'Humanity Transfigured in Holy Likeness & Harmony',
    subtitleKo: '사무엘의 거룩한 빛을 입고 화평 중에 하나 된 모든 민족과 세대',
    subtitleEn: 'All Nations and Generations Gathered in Sacred Peace & Radiant Grace',
    aspectRatio: '16:9',
    imageSrc: '/src/assets/images/humanity_radiant_harmony_1790996934912.jpg',
    category: 'humanity',
    year: '2026',
    mediumKo: '네오 클래식 프레스코 & 빛의 질감 화법',
    mediumEn: 'Neoclassical Celestial Fresco & Atmospheric Realism',
    dimensions: '3840 × 2160 px (Panoramic Archival)',
    verseKo: '“보라 형제가 연합하여 동거함이 어찌 그리 선하고 어찌 그리 아름다운고”',
    verseRef: '시편 133:1 / Psalm 133:1',
    verseEn: '"How good and pleasant it is when God’s people live together in unity!"',
    descriptionKo: '사무엘에게 부어진 하늘의 거룩함과 평화의 영이 마침내 온 인류 가운데 흘러넘쳐, 모든 족속과 언어, 남녀노소가 서로를 사랑과 온유함으로 마주하는 감격의 파노라마입니다. 갈등과 슬픔의 흔적은 사라지고, 각 영혼의 얼굴마다 숭고한 은혜와 형언할 수 없는 평온의 미소가 번져 나옵니다. 온 지구가 황금빛 여명 아래 안식하는 천상의 평화를 보여줍니다.',
    descriptionEn: 'The holy grace and spirit of peace bestowed upon Samuel radiates outward to encompass all of humanity. Peoples of every land, culture, and age gather upon the terrace of the dawn, transformed into living icons of gentleness, mutual honor, and boundless fraternity. Fear and discord have dissolved into radiant unity under heaven’s gentle light.',
    curatorNotesKo: [
      '르네상스 대성당 프레스코화의 장엄한 구성을 계승하여 전 세계 인류의 평등한 존엄과 신성한 연대를 시각화했습니다.',
      '인물들의 손짓과 온화한 시선 교환은 용서와 화해, 영원한 형제애의 완성을 웅변합니다.',
      '배경의 잔잔한 대지와 여명은 정화된 피조세계의 참된 안식(샬롬)을 표상합니다.'
    ],
    curatorNotesEn: [
      'Draws upon the expansive spatial majesty of Renaissance cathedral frescoes to articulate the shared sacred dignity of all humankind.',
      'Gestures of open hands and gentle embrace convey the reconciliation and fraternity of once-divided peoples.',
      'The tranquil horizon beneath the rising sun signifies the ultimate Shalom—peace over all creation.'
    ],
    attributes: [
      { labelKo: '주요 상징', labelEn: 'Key Motif', valueKo: '연합의 제단, 일출의 지평선, 빛의 예복', valueEn: 'Terrace of Unity, Dawn Horizon, Robes of Grace' },
      { labelKo: '지배적 색채', labelEn: 'Color Palette', valueKo: '새벽의 오로라, 온화한 린넨, 로즈 골드', valueEn: 'Aurora Sunrise, Warm Linen, Rose Gold' },
      { labelKo: '영적 의미', labelEn: 'Spiritual Theme', valueKo: '인류의 화해와 거룩한 형상의 회복', valueEn: 'Reconciliation of Humanity & Image Restored' },
    ]
  },
  {
    id: 'samuel-sacred-portrait',
    titleKo: '성상 초상: 영원을 관조하는 거룩한 지혜의 눈동자',
    titleEn: 'Sacred Gaze: The Contemplative Wisdom of Samuel',
    subtitleKo: '일생을 온전한 순종과 기도로 바친 성자의 깊고 온유한 시선',
    subtitleEn: 'The Venerable Countenance of Pure Prayer, Devotion, and Eternal Love',
    aspectRatio: '3:4',
    imageSrc: '/src/assets/images/samuel_sacred_portrait_1790996954029.jpg',
    category: 'samuel',
    year: '2026',
    mediumKo: '뮤지엄 마스터피스 고전 템페라 & 유채 질감',
    mediumEn: 'Museum Fine Art Tempera & Glazed Impasto',
    dimensions: '2400 × 3200 px (Portrait Icon)',
    verseKo: '“나는 너희를 위하여 기도하기를 쉬는 죄를 여호와 앞에 결단코 범하지 아니하고”',
    verseRef: '사무엘상 12:23 / 1 Samuel 12:23',
    verseEn: '"As for me, far be it from me that I should sin against the Lord by failing to pray for you."',
    descriptionKo: '가까이 마주할수록 숙연한 경외감을 자아내는 사무엘의 얼굴 초상입니다. 깊은 묵상과 쉬지 않는 기도로 다져진 그의 이마와 눈매에는 백성을 향한 무한한 긍휼과 하나님의 거룩한 법이 깃들어 있습니다. 은빛과 금빛이 어우러진 수염과 별빛을 닮은 은은한 후광은 성결한 생애의 완성을 웅변하며, 보는 이의 영혼을 고요한 정화로 이끕니다.',
    descriptionEn: 'A breathtakingly intimate portrait capturing the profound soul of Samuel. Weathered with decades of ceaseless intercession for the people, his eyes hold an ocean of mercy, clarity, and uncompromising truth. The subtle starlight halo hovering above his brow reflects a life completely surrendered to divine listening and righteous guidance.',
    curatorNotesKo: [
      '카라바조와 벨라스케스의 초상 기법을 연상시키는 섬세한 피부 질감과 빛의 반사광 처리가 돋보입니다.',
      '눈동자 속에 맺힌 부드러운 빛방울은 기도의 눈물과 구원의 확신을 동시에 머금고 있습니다.',
      '정면을 바라보지 않고 약간 비껴선 시선은 인간의 연약함을 품어 하늘로 올리는 중보기도자의 태도를 반영합니다.'
    ],
    curatorNotesEn: [
      'Evokes the psychological intensity of Caravaggio and Velázquez with microscopic detail in skin texture and gentle specular reflections.',
      'The moisture captured within the irises suggests both tears of intercession and unshakable conviction.',
      'The slightly inclined posture symbolizes humble intercession on behalf of all broken and searching souls.'
    ],
    attributes: [
      { labelKo: '주요 상징', labelEn: 'Key Motif', valueKo: '중보의 눈물, 별빛 후광, 수놓인 제사장 견대', valueEn: 'Intercessory Tears, Star-Halo, Embroidered Vestment' },
      { labelKo: '지배적 색채', labelEn: 'Color Palette', valueKo: '앤티크 차콜, 앰버 엠버 골드, 따뜻한 촛불 톤', valueEn: 'Antique Charcoal, Amber Glaze, Candlelight Ochre' },
      { labelKo: '영적 의미', labelEn: 'Spiritual Theme', valueKo: '쉬지 않는 중보기도와 온유한 긍휼', valueEn: 'Ceaseless Intercession & Boundless Compassion' },
    ]
  },
  {
    id: 'humanity-holy-communion',
    titleKo: '지상에 임한 거룩한 성도의 교제와 평화의 낙원',
    titleEn: 'The Blessed Communion of Peace & Virtue on Earth',
    subtitleKo: '선지자의 가르침을 따라 사랑을 나누며 번영하는 복된 인류의 가정들',
    subtitleEn: 'Families and Souls United in Generosity, Olive Branches, and Pure Light',
    aspectRatio: '4:3',
    imageSrc: '/src/assets/images/humanity_holy_communion_1790996964200.jpg',
    category: 'communion',
    year: '2026',
    mediumKo: '빛의 서정성(Luminism)과 성스러운 사실주의',
    mediumEn: 'Sacred Luminism & Lyric Realism on Panel',
    dimensions: '2800 × 2100 px (Cabinet Masterpiece)',
    verseKo: '“오직 정의를 물 같이, 공의를 마르지 않는 강 같이 흐르게 할지어다”',
    verseRef: '아모스 5:24 / Amos 5:24',
    verseEn: '"Let justice roll on like a river, righteousness like a never-failing stream!"',
    descriptionKo: '일상의 모든 순간이 성화된 인류의 복락을 담은 따스한 풍경입니다. 어른들은 빵과 잔을 기쁨으로 나누고, 아이들은 평화의 비둘기와 올리브 나무 그늘 아래서 순진무구하게 뛰놀며 웃음 짓습니다. 거룩함이란 멀리 있는 것이 아니라, 서로를 향한 환대와 돌봄, 신뢰와 사랑 속에서 피어나는 것임을 감동적으로 증언합니다.',
    descriptionEn: 'An intimate, radiant portrayal of humanity living out holiness in daily communion. Under the shade of fruitful olive boughs and flying white doves, families break bread, share radiant light, and look upon one another with untroubled tenderness. Holiness is revealed not as distant isolation, but as love made tangible in joyful community.',
    curatorNotesKo: [
      '자연광과 초자연적 은혜의 빛이 완벽하게 융합되어 평범한 삶이 성스러운 제단이 되는 기적을 묘사했습니다.',
      '올리브 나뭇가지와 날아오르는 흰 비둘기는 지상에 정착된 영구한 평화와 성령의 임재를 드러냅니다.',
      '아이들의 해맑은 표정은 회복된 낙원의 순수성을 상징합니다.'
    ],
    curatorNotesEn: [
      'Seamlessly marries natural atmospheric sunlight with supernatural grace, showing daily life transformed into a sacred sanctuary.',
      'Olive branches and soaring white doves embody abiding peace and the continuous presence of the Spirit.',
      'The pure joy of children represents the restored innocence of an redeemed humanity.'
    ],
    attributes: [
      { labelKo: '주요 상징', labelEn: 'Key Motif', valueKo: '올리브 나무, 나눔의 빵, 평화의 흰 비둘기', valueEn: 'Olive Bough, Shared Loaf, Doves of Peace' },
      { labelKo: '지배적 색채', labelEn: 'Color Palette', valueKo: '올리브 그린, 따스한 밀짚 베이지, 진주빛 크림', valueEn: 'Sacred Olive Green, Wheat Ochre, Pearl Cream' },
      { labelKo: '영적 의미', labelEn: 'Spiritual Theme', valueKo: '일상의 성화와 참된 평화(Shalom)', valueEn: 'Sanctification of Daily Life & Living Peace' },
    ]
  }
];

export interface MeditationPillar {
  id: string;
  themeKo: string;
  themeEn: string;
  focusKo: string;
  focusEn: string;
  prayerKo: string;
  prayerEn: string;
  contemplationVerse: string;
}

export const MEDITATION_PILLARS: MeditationPillar[] = [
  {
    id: 'pillar-holiness',
    themeKo: '거룩함의 형상 회복',
    themeEn: 'Restoration of the Holy Image',
    focusKo: '사무엘이 입었던 거룩한 빛의 옷을 닮아 우리 마음의 순결을 회복합니다.',
    focusEn: 'Clothed in the luminous righteousness reflected in Samuel, we renew inner purity.',
    prayerKo: '“거룩하신 주여, 선지자 사무엘에게 비추셨던 하늘의 영광스러운 빛을 우리에게도 부어 주소서. 우리의 마음에 어두운 그림자를 거두시고, 순전한 세마포 예복처럼 흠 없는 거룩함으로 우리 삶을 빚어 주소서.”',
    prayerEn: '"O Holy Lord, bestow upon us the glorious light of heaven that shone through Samuel. Dispel every shadow in our hearts and fashion our lives into unblemished holiness like pure linen robes."',
    contemplationVerse: '“내가 거룩하니 너희도 거룩할지어다” (벧전 1:16)'
  },
  {
    id: 'pillar-unity',
    themeKo: '온 인류의 화평과 한 몸 됨',
    themeEn: 'Universal Peace & Communion',
    focusKo: '모든 민족과 이웃이 서로를 존귀히 여기며 형제자매로 끌어안는 대화합의 비전입니다.',
    focusEn: 'All nations honoring one another as brothers and sisters in sacred harmony.',
    prayerKo: '“평화의 주여, 모든 장벽과 미움을 허무시고, 온 인류가 한 지체로서 서로의 눈물을 닦아 주며 사랑의 빛 가운데 거하게 하소서. 사무엘의 중보기도처럼 온 세상을 품는 넓은 마음을 우리에게 허락하소서.”',
    prayerEn: '"Lord of Peace, tear down every wall of division and hatred. May all humanity abide in the light of love, drying one another’s tears, blessed with a heart that embraces the world."',
    contemplationVerse: '“평화의 매는 줄로 성령이 하나 되게 하신 것을 힘써 지키라” (엡 4:3)'
  },
  {
    id: 'pillar-anointing',
    themeKo: '성령의 기름부으심과 생명',
    themeEn: 'The Anointing of Living Grace',
    focusKo: '사무엘의 뿔에서 흘러넘친 신선한 기름이 온 대지에 생명수를 공급합니다.',
    focusEn: 'The fresh oil pouring from Samuel’s horn infuses all creation with living grace.',
    prayerKo: '“생명의 원천이시여, 사무엘의 뿔에 담겼던 신선하고 존귀한 기름으로 우리 영혼의 잔을 넘치게 하소서. 상한 심령을 치유하시고, 지친 영혼에 영원한 기쁨과 소망의 샘이 솟아나게 하소서.”',
    prayerEn: '"Fountain of Life, overflow our cups with the fragrant and honorable oil of the sanctuary. Heal the brokenhearted and let springs of eternal joy bubble up within every weary soul."',
    contemplationVerse: '“주께서 내 머리에 기름을 부으셨으니 내 잔이 넘치나이다” (시 23:5)'
  },
  {
    id: 'pillar-wisdom',
    themeKo: '순종의 귀와 영원한 지혜',
    themeEn: 'Listening Ear & Eternal Wisdom',
    focusKo: '‘말씀하옵소서 주의 종이 듣겠나이다’ 하던 사무엘의 겸손한 청종을 배웁니다.',
    focusEn: '"Speak, Lord, for your servant is listening"—learning humble obedience and wisdom.',
    prayerKo: '“지혜의 근원이신 주여, 세상의 소란 속에서도 당신의 세미한 음성에 귀 기울이게 하소서. 나의 뜻보다 높은 주의 뜻을 분별하게 하시고, 평생토록 진리를 따르는 지혜로운 발걸음이 되게 하소서.”',
    prayerEn: '"Source of Wisdom, grant us ears to hear your still small voice amid worldly noise. Help us discern your higher will, walking steadfastly in the paths of uprightness and peace."',
    contemplationVerse: '“말씀하옵소서 주의 종이 듣겠나이다” (삼상 3:10)'
  }
];
