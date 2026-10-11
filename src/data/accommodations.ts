export interface AccommodationItem {
  id: string;
  name: string;
  propertyName: string;
  category: "cabana" | "room";
  inventory: string;
  headline: Record<string, string>;
  description: Record<string, string>;
  image: string;
  secondaryImages: string[];
  specs: {
    capacity: string;
    bed: string;
    view: string;
    size: string;
  };
  highlights: Record<string, string[]>;
  amenities: string[];
}

export const accommodationsData: AccommodationItem[] = [
  {
    id: "luck-uyana-cabana",
    name: "Luck Uyana Cabana",
    propertyName: "Luck Uyana Cabana",
    category: "cabana",
    inventory: "4 Private Luxury Cabanas",
    headline: {
      en: "Eco-Luxury Wooden Cabanas Nestled in Lush Tropical Palms",
      ru: "Уединенные деревянные эко-кабаны среди тропического сада",
      de: "Öko-Luxus Holzcabanas inmitten tropischer Palmenhaine",
    },
    description: {
      en: "Designed for discerning travellers who crave seclusion, natural immersion, and authentic Sri Lankan craftsmanship. Each detached cabana is built from native timber and polished teak, featuring a large private veranda, tropical garden shower, and serene forest views.",
      ru: "Созданы для ценителей уединения, природы и аутентичной ланкийской эстетики. Отдельно стоящие кабаны из тикового дерева с просторной верандой, ванной комнатой в саду и шелестом пальм.",
      de: "Für Reisende, die Ruhe, Natur und sri-lankische Baukunst schätzen. Freistehende Cabanas aus Teakholz mit privater Veranda, halboffenem Gartenbad und Blick ins Grüne.",
    },
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      capacity: "Up to 2-3 Guests (Couple / Small Family)",
      bed: "Custom Teak King-Size Bed with Luxury Netting",
      view: "Lush Ayurvedic Garden & Forest Canopy",
      size: "48 sq.m (516 sq.ft) including private deck",
    },
    highlights: {
      en: [
        "100% Private detached cabana structure",
        "Spacious wooden outdoor lounging deck",
        "Open-air tropical stone garden bathroom",
        "Footsteps from the Ayurveda medicinal herb sanctuary",
        "Ambient night lighting & soothing nature acoustics",
      ],
      ru: [
        "Полностью приватная отдельно стоящая кабана",
        "Просторная терраса из дерева для отдыха",
        "Ванная комната в тропическом стиле под открытым небом",
        "В шаге от сада лекарственных трав Аюрведы",
        "Пение птиц и шелест тропической листвы по утрам",
      ],
      de: [
        "Völlig freistehende, private Cabana",
        "Großzügiges Sonnendeck aus Naturholz",
        "Tropisches Natursteinbad im Freiluft-Stil",
        "Direkter Zugang zum Ayurveda-Heilkräutergarten",
        "Beruhigende Naturklänge und Vogelgesang",
      ],
    },
    amenities: [
      "High-Speed Wi-Fi",
      "Silent Ceiling Fan & Eco-Cooling Air Conditioning",
      "Organic Herbal Toiletries from our Garden",
      "Complimentary Tropical Ceylon Breakfast",
      "Tea & Coffee Kettle with Pure Ceylon Leaves",
      "24/7 Mahout & Host Concierge Assistance",
    ],
  },
  {
    id: "pinnawala-reach-room",
    name: "Pinnawala Reach",
    propertyName: "Pinnawala Reach",
    category: "room",
    inventory: "7 Boutique Luxury Rooms",
    headline: {
      en: "Contemporary Boutique River-View Comfort & Refined Elegance",
      ru: "Современный бутик-комфорт с террасой и видом на реку",
      de: "Zeitgenössische Boutique-Zimmer mit Flussblick & Eleganz",
    },
    description: {
      en: "A refined boutique sanctuary located mere minutes from the Maha Oya river bank. Featuring modern architecture, plush orthopedic king beds, high-definition cooling, floor-to-ceiling glass doors, and private balconies framing picturesque tropical vistas.",
      ru: "Стильный бутик-отель всего в нескольких минутах от берега реки Маха Оя. Современная архитектура, панорамные окна, кондиционер, балкон с видом на природу и комфортные ванные комнаты.",
      de: "Stilvolles Boutique-Haus nur wenige Minuten vom Ufer des Maha Oya entfernt. Zeitlose Architektur, Panoramafenster, Klimaanlage, private Balkone und geschmackvolle Bäder.",
    },
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      capacity: "2-4 Guests (Double or Twin / Connecting Available)",
      bed: "Premium Orthopedic King / Twin Configuration",
      view: "River Vicinity & Verdant Valley Horizon",
      size: "42 sq.m (452 sq.ft) with private balcony",
    },
    highlights: {
      en: [
        "Modern air-conditioned suites with private balcony",
        "En-suite designer rain shower with solar hot water",
        "Rapid walking access to the morning elephant river path",
        "Ideal for families, couples, and small travel parties",
        "On-site dining lounge and travel concierge desk",
      ],
      ru: [
        "Современные номера с кондиционером и балконом",
        "Дизайнерский тропический душ с горячей водой",
        "Быстрый пеший доступ к месту купания слонов",
        "Идеально для семей, пар и небольших групп",
        "Уютная лаундж-зона и помощь с экскурсиями",
      ],
      de: [
        "Moderne klimatisierte Zimmer mit eigenem Balkon",
        "Design-Regendusche mit Solarenergie-Warmwasser",
        "Kurzer Fußweg zum morgendlichen Elefantenbad",
        "Ideal für Paare, Familien und kleine Reisegruppen",
        "Gemütliche Dining-Lounge und Tour-Desk",
      ],
    },
    amenities: [
      "Dual Inverter Whisper-Quiet AC",
      "High-Speed Fiber-Optic Wi-Fi",
      "Private Balcony with Outdoor Seating",
      "Smart Flat-Screen Satellite Television",
      "In-Room Safe & Mini Fridge",
      "Complimentary Ceylon Breakfast Spread",
    ],
  },
];
