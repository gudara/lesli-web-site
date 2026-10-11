export interface PackageTier {
  id: string;
  name: Record<string, string>;
  tier: "comfort" | "premium" | "luxury";
  tag: Record<string, string>;
  summary: Record<string, string>;
  propertyChoice: Record<string, string>;
  included: Record<string, string[]>;
  optionalAddons: Record<string, string[]>;
  coupleHighlights: Record<string, string>;
  familyHighlights: Record<string, string>;
}

export const packageTiers: PackageTier[] = [
  {
    id: "comfort",
    tier: "comfort",
    name: {
      en: "Comfort Tier",
      ru: "Категория «Комфорт»",
      de: "Comfort Kategorie",
    },
    tag: {
      en: "Essential Authenticity",
      ru: "Доступная аутентичность",
      de: "Authentisch & Bewährt",
    },
    summary: {
      en: "Ideal for mindful travellers seeking warm local hospitality, comfortable air-conditioned rooms at Pinnawala Reach, and core elephant river routines without unnecessary frills.",
      ru: "Идеально для самостоятельных гостей: уютный номер в Pinnawala Reach с кондиционером, наблюдение за слонами на реке и искреннее гостеприимство.",
      de: "Ideal für Reisende, die Wert auf ehrliche Gastfreundschaft, saubere Zimmer im Pinnawala Reach und die Elefantenbeobachtung legen.",
    },
    propertyChoice: {
      en: "Pinnawala Reach Deluxe Room (Balcony & AC)",
      ru: "Номер Делюкс в отеле Pinnawala Reach (Балкон, кондиционер)",
      de: "Pinnawala Reach Deluxe-Zimmer (Balkon & Klimaanlage)",
    },
    included: {
      en: [
        "Deluxe room accommodation with private ensuite",
        "Daily authentic Ceylon breakfast with fresh fruits",
        "Riverbank viewing access for morning & afternoon elephant baths",
        "Guided walkthrough of the Ayurveda Herbal Medicine Garden",
        "24/7 WhatsApp host assistance for local transport",
      ],
      ru: [
        "Проживание в номере с отдельной ванной и кондиционером",
        "Ежедневный ланкийский завтрак со свежими фруктами",
        "Доступ к наблюдению за купанием слонов утром и днем",
        "Экскурсия по саду лекарственных трав Аюрведы",
        "Круглосуточная поддержка хозяев в WhatsApp",
      ],
      de: [
        "Übernachtung im Deluxe-Zimmer mit privatem Bad",
        "Tägliches reichhaltiges Ceylon-Frühstück mit Früchten",
        "Zugang zur Elefantenbeobachtung am Flusslauf",
        "Führung durch den Ayurveda-Heilkräutergarten",
        "24/7 WhatsApp-Support des Gastgebers",
      ],
    },
    optionalAddons: {
      en: [
        "Clay-pot 3-course dinner set",
        "Airport private pickup / drop-off",
        "Kandy day excursion car hire",
      ],
      ru: [
        "Традиционный ужин в глиняных горшочках",
        "Индивидуальный трансфер в/из аэропорта",
        "Аренда авто с водителем в Канди на день",
      ],
      de: [
        "Traditionelles 3-Gänge-Abendessen",
        "Flughafentransfer im klimatisierten PKW",
        "Tagesausflug nach Kandy mit privatem Fahrer",
      ],
    },
    coupleHighlights: {
      en: "Quiet double room with scenic river valley balcony.",
      ru: "Уютный двухместный номер с балконом на долину.",
      de: "Ruhiges Doppelzimmer mit Balkon zum Tal.",
    },
    familyHighlights: {
      en: "Connecting or triple bed configuration suitable for 3-4 persons.",
      ru: "Смежные номера или 3-местное размещение для родителей с ребенком.",
      de: "Zimmer mit Verbindungstür oder Zustellbett für Familien.",
    },
  },
  {
    id: "premium",
    tier: "premium",
    name: {
      en: "Premium Tier",
      ru: "Категория «Премиум»",
      de: "Premium Kategorie",
    },
    tag: {
      en: "Most Popular Choice",
      ru: "Самый популярный выбор",
      de: "Sehr beliebt",
    },
    summary: {
      en: "Our signature blend of secluded cabana living at Luck Uyana, inclusive half-board dining, in-depth mahout talks, and personal chauffeur day trips.",
      ru: "Фирменный формат: уединенная кабана в саду Luck Uyana, полупансион (завтрак + ужин), подробные беседы с махаутами и персональный водитель.",
      de: "Die perfekte Kombination aus privater Luck Uyana Cabana, Halbpension, Einblicken in die Mahout-Tradition und Tagesausflügen.",
    },
    propertyChoice: {
      en: "Luck Uyana Private Luxury Cabana (Garden Deck)",
      ru: "Приватная кабана Luck Uyana Cabana с деревянной верандой",
      de: "Luck Uyana Freistehende Luxus-Cabana (Holzterrasse)",
    },
    included: {
      en: [
        "Private detached luxury cabana with garden deck",
        "Half-board: Tropical breakfast & candlelit garden dinner",
        "Full elephant daily routine: river bath, fruit nutrition session",
        "Personal master herbalist tour & herbal tea tasting session",
        "Pinnawala Falls guided nature walk",
        "Complimentary king coconut on arrival",
      ],
      ru: [
        "Отдельно стоящая кабана с частной верандой",
        "Полупансион: тропический завтрак и ужин при свечах",
        "Полный распорядок слонов: река, купание, кормление",
        "Индивидуальная экскурсия с травником и дегустация чая",
        "Прогулка к водопаду Пиннавела",
        "Приветственный королевский кокос при заезде",
      ],
      de: [
        "Freistehende Holz-Cabana mit privatem Sonnendeck",
        "Halbpension: Tropenfrühstück & Abendessen im Garten",
        "Vollständiges Elefantenprogramm (Flussbad & Fütterung)",
        "Exklusive Kräutergarten-Führung mit Teeverkostung",
        "Geführter Spaziergang zum Pinnawala-Wasserfall",
        "Erfrischende Begrüßungskokosnuss bei Ankunft",
      ],
    },
    optionalAddons: {
      en: [
        "Sigiriya & Dambulla day tour with private van",
        "Traditional Sri Lankan village cooking masterclass",
        "Ayurvedic relaxing herbal massage arrangement",
      ],
      ru: [
        "Тур в Сигирию и Дамбуллу на индивидуальном авто",
        "Кулинарный мастер-класс традиционной кухни",
        "Организация расслабляющего аюрведического массажа",
      ],
      de: [
        "Tagestour Sigiriya & Dambulla mit Chauffeur",
        "Sri-lankischer Kochkurs im Lehmofendorf",
        "Organisation traditioneller Ayurveda-Kräutermassagen",
      ],
    },
    coupleHighlights: {
      en: "Romantic veranda candle setup & private riverbank moments.",
      ru: "Романтический ужин при свечах на веранде кабаны.",
      de: "Romantische Beleuchtung auf der Veranda & Zweisamkeit.",
    },
    familyHighlights: {
      en: "Spacious cabana grounds for children to explore safely.",
      ru: "Безопасный зеленый сад для игр детей на свежем воздухе.",
      de: "Großer, sicherer Gartenbereich für Kinder zum Entdecken.",
    },
  },
  {
    id: "luxury",
    tier: "luxury",
    name: {
      en: "Luxury Bespoke Tier",
      ru: "Категория «Люкс Эксклюзив»",
      de: "Luxus Maßgeschneidert",
    },
    tag: {
      en: "All-Inclusive Signature Experience",
      ru: "Всё включено: персональный комфорт",
      de: "All-Inclusive Premium",
    },
    summary: {
      en: "The definitive VIP Sri Lanka escape: premier cabana suite, full board gourmet cuisine, private English/Russian/German driver-guide throughout your stay, and bespoke island routing.",
      ru: "Премиальный VIP-отдых: лучшая кабана комплекса, трехразовое питание, персональный гид-водитель на авто бизнес-класса и индивидуальный маршрут по острову.",
      de: "Das ultimative Reiseerlebnis: Beste Cabana-Suite, Vollpension, persönlicher Fahrer/Guide für die gesamte Reisedauer und individuelle Route.",
    },
    propertyChoice: {
      en: "VIP Luck Uyana Cabana or Executive Pinnawala Suite",
      ru: "VIP кабана Luck Uyana или представительский сьют",
      de: "VIP Luck Uyana Cabana oder Executive Suite",
    },
    included: {
      en: [
        "Premium accommodation with personalized welcome gifts",
        "Full board: breakfast, chef's lunch, and private 4-course dinners",
        "Dedicated air-conditioned luxury vehicle & chauffeur at your disposal",
        "VIP river vantage points for undisturbed elephant observation",
        "Private consultation with registered Ayurvedic physician",
        "Flexible itineraries across Kandy, Sigiriya, or Tea Hills",
        "Roundtrip airport luxury transfer included",
      ],
      ru: [
        "Лучшая кабана с персональными подарками от хозяев",
        "Полный пансион: завтраки, авторские обеды и ужины из 4 блюд",
        "Персональный авто бизнес-класса с водителем на всё время",
        "VIP терраса для наблюдения за слонами без посторонних",
        "Персональная консультация с потомственным аюрведистом",
        "Свободные поездки в Канди, Сигирию или чайные горы",
        "Индивидуальный трансфер в аэропорт и обратно",
      ],
      de: [
        "Beste Unterkunftskategorie mit Willkommenspräsent",
        "Vollpension: Frühstück, Mittagessen & 4-Gänge-Abendessen",
        "Persönliches Luxusfahrzeug mit Chauffeur zur freien Verfügung",
        "VIP-Aussichtspunkt für ungestörte Elefantenbeobachtung",
        "Privatberatung mit erfahrenem Ayurveda-Heiler",
        "Flexible Tagesausflüge nach Kandy, Sigiriya oder ins Teeland",
        "Inklusive Hin- und Rücktransfer zum Flughafen",
      ],
    },
    optionalAddons: {
      en: [
        "Helicopter scenic transfer to Nuwara Eliya or South Coast",
        "Private wildlife safari jeep charter in Minneriya/Yala",
      ],
      ru: [
        "Вертолетный трансфер в Нувара-Элию или на южное побережье",
        "Индивидуальный джип-чартер на сафари в нацпарках",
      ],
      de: [
        "Helikopter-Flug ins Hochland oder an die Südküste",
        "Privater Safari-Jeep für Tierbeobachtungen in Nationalparks",
      ],
    },
    coupleHighlights: {
      en: "Private champagne sundowner by the Maha Oya river.",
      ru: "Шампанское на закате у реки Маха Оя только для двоих.",
      de: "Champagner-Sonnenuntergang am Fluss exklusiv für zwei.",
    },
    familyHighlights: {
      en: "Comprehensive family suite arrangement with child-friendly menu & baby cot.",
      ru: "Семейный сьют, детское меню и заботливая помощь няни по запросу.",
      de: "Familien-Komfortpaket mit Kindermenü und individueller Betreuung.",
    },
  },
];
