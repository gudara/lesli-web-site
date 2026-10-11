export interface DestinationItem {
  id: string;
  name: Record<string, string>;
  category: Record<string, string>;
  distanceFromPinnawala: string;
  description: Record<string, string>;
  highlights: Record<string, string[]>;
  image: string;
}

export const destinationsData: DestinationItem[] = [
  {
    id: "pinnawala-river-falls",
    name: {
      en: "Pinnawala River & Pinnawala Falls",
      ru: "Река Пиннавела и Водопад Пиннавела",
      de: "Flusslandschaft & Wasserfall Pinnawala",
    },
    category: {
      en: "Local Attraction",
      ru: "Местная достопримечательность",
      de: "Lokale Naturkulisse",
    },
    distanceFromPinnawala: "Right on doorstep (5-10 min walk)",
    description: {
      en: "The heart of our valley. The rocky bends of Maha Oya river create natural bathing pools for the gentle giants, while nearby Pinnawala Falls offers serene freshwater cascades and tranquil jungle photography.",
      ru: "Сердце нашей долины. Каменистые берега реки Маха Оя создают природные заводи для купания слонов, а близлежащий водопад Пиннавела восхищает каскадами чистейшей воды среди зелени.",
      de: "Das Herz unseres Tals: Die felsigen Mäander des Maha Oya Flusses bilden natürliche Badebecken für die Elefanten, während die nahen Pinnawala Falls für Ruhe und Erfrischung sorgen.",
    },
    highlights: {
      en: ["Daily herd bathing observation", "Scenic riverbank cafes", "Natural freshwater falls"],
      ru: ["Ежедневное купание стада слонов", "Кафе с видом на реку", "Живописный водопад"],
      de: ["Tägliches Elefantenbad", "Ufercafés mit Ausblick", "Natürlicher Wasserfall"],
    },
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kandy-kingdom",
    name: {
      en: "Royal City of Kandy & Temple of the Tooth",
      ru: "Королевский Канди и Храм Зуба Будды",
      de: "Königsstadt Kandy & Zahntempel",
    },
    category: {
      en: "UNESCO Cultural Heritage",
      ru: "Всемирное наследие ЮНЕСКО",
      de: "UNESCO Weltkulturerbe",
    },
    distanceFromPinnawala: "38 km (approx. 1 hour drive)",
    description: {
      en: "Sri Lanka's last royal kingdom. Sheltered by misty hills, Kandy is famed for the sacred Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), the tranquil Kandy Lake, and the royal botanical gardens.",
      ru: "Последняя королевская столица Шри-Ланки. Окруженный туманными холмами, Канди знаменит священным Храмом Зуба Будды, живописным озером и королевским ботаническим садом.",
      de: "Die letzte Königsresidenz Sri Lankas: Berühmt für den goldenen Tempel des heiligen Zahns, den malerischen Kandy-See und die riesigen botanischen Gärten.",
    },
    highlights: {
      en: ["Sacred Temple of the Tooth", "Peradeniya Royal Botanical Gardens", "Kandyan Cultural Dance"],
      ru: ["Священный Храм Зуба Будды", "Королевский сад Перадения", "Традиционные ланкийские танцы"],
      de: ["Heiliger Zahntempel", "Botanischer Garten Peradeniya", "Kandy-Tanztheater"],
    },
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sigiriya-dambulla",
    name: {
      en: "Sigiriya Lion Rock & Dambulla Caves",
      ru: "Скала Сигирия и Пещеры Дамбулла",
      de: "Felsenfestung Sigiriya & Höhlen von Dambulla",
    },
    category: {
      en: "Ancient Wonder",
      ru: "Древнее чудо света",
      de: "Antikes Weltwunder",
    },
    distanceFromPinnawala: "95 km (approx. 2.5 hours drive)",
    description: {
      en: "The world-renowned 5th-century palace fortress perched atop a 200m vertical monolith, paired with Dambulla's cave monastery adorned with over 150 golden Buddha statues and ceiling frescoes.",
      ru: "Знаменитая скальная крепость царя Кашьяпы V века на 200-метровом монолите и пещерный храмовый комплекс Дамбулла с 150 статуями Будды и древней настенной росписью.",
      de: "Die spektakuläre Felsenburg aus dem 5. Jahrhundert auf einem 200 m hohen Monolithen, kombiniert mit den 2.000 Jahre alten buddhistischen Höhlentempeln von Dambulla.",
    },
    highlights: {
      en: ["Climb King Kashyapa's sky citadel", "Ancient mirror wall & maiden frescoes", "Golden Buddha cave temples"],
      ru: ["Подъем на царскую цитадель", "Фрески «Девы облаков»", "Золотые пещерные храмы"],
      de: ["Besteigung der Himmelsfestung", "Antike Wandfresken", "Höhlentempel mit Gold-Buddhas"],
    },
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "nuwara-eliya-tea",
    name: {
      en: "Nuwara Eliya & Emerald Tea Plantations",
      ru: "Нувара-Элия и Чайные Плантации",
      de: "Nuwara Eliya & Teehochland",
    },
    category: {
      en: "Cool Highlands",
      ru: "Горная прохлада",
      de: "Kühles Hochland",
    },
    distanceFromPinnawala: "105 km (approx. 3 hours drive)",
    description: {
      en: "Known as 'Little England', Nuwara Eliya sits at 1,868m altitude amidst rolling emerald carpet tea hills, colonial architecture, cool alpine breezes, and roaring waterfalls.",
      ru: "«Маленькая Англия» на высоте 1868 метров: бескрайние изумрудные ковры чайных плантаций, колониальные усадьбы, горный воздух и водопады Рамбода.",
      de: "Bekannt als 'Little England' auf knapp 1.900 m Höhe: Sanfte smaragdgrüne Teetäler, britische Kolonialarchitektur, frische Bergluft und Wasserfälle.",
    },
    highlights: {
      en: ["Fresh Ceylon tea tasting at vintage factory", "Ramboda & Devon waterfalls", "Colonial post office & Gregory Lake"],
      ru: ["Дегустация свежего чая на фабрике", "Водопады Рамбода и Девон", "Озеро Грегори и колониальный почтамт"],
      de: ["Verkostung in historischer Teefabrik", "Ramboda-Wasserfälle", "Gregory-See & Kolonialflair"],
    },
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ella-nine-arch",
    name: {
      en: "Ella & Nine Arch Viaduct Bridge",
      ru: "Элла и Мост Девяти Арок",
      de: "Ella & Nine Arch Bridge",
    },
    category: {
      en: "Mountain Adventure",
      ru: "Горное приключение",
      de: "Bergpanorama & Bahn",
    },
    distanceFromPinnawala: "160 km (scenic train or private car)",
    description: {
      en: "A bohemian mountain town surrounded by peaks and deep cloud forests. Famed for the stone Nine Arch railway bridge, Little Adam's Peak hikes, and trendy organic cafes.",
      ru: "Атмосферный горный поселок среди ущелий: легендарный каменный мост Девяти арок, панорамный подъем на Малый пик Адама и водопад Равана.",
      de: "Beliebter Bergort mit spektakulären Ausblicken: Das weltberühmte koloniale Eisenbahnviadukt 'Nine Arch Bridge', Wanderwege und entspannte Cafés.",
    },
    highlights: {
      en: ["Watch trains cross the 1921 stone viaduct", "Sunrise hike at Little Adam’s Peak", "Spectacular Ravana waterfall"],
      ru: ["Прохождение поезда по старинному виадуку", "Рассвет на Малом пике Адама", "Мощный водопад Равана"],
      de: ["Zugüberquerung des Steinviadukts", "Leichte Wanderung Little Adam's Peak", "Ravana-Wasserfälle"],
    },
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "south-coast-galle",
    name: {
      en: "South Coast & Historic Galle Dutch Fort",
      ru: "Южное побережье и Форт Галле (ЮНЕСКО)",
      de: "Südküste & Historisches Galle Fort",
    },
    category: {
      en: "Coastal Heritage",
      ru: "Океан и история",
      de: "Küste & Kolonialfestung",
    },
    distanceFromPinnawala: "165 km (via Southern expressway)",
    description: {
      en: "A living 17th-century European fortified town jutting into the Indian Ocean. Cobblestone lanes lined with artisan jewelry shops, gelato parlors, old churches, and ocean bastions.",
      ru: "Живой форт XVII века на берегу Индийского океана под охраной ЮНЕСКО: мощеные улочки, старинный маяк, ювелирные мастерские, уютные террасы и золотые пляжи.",
      de: "Europäische Kolonialfestung aus dem 17. Jahrhundert am Indischen Ozean: Kopfsteinpflastergassen, Boutiquen, Leuchtturm und goldene Sandstrände.",
    },
    highlights: {
      en: ["UNESCO World Heritage fortified ramparts", "Iconic maritime lighthouse", "Idyllic palm-fringed tropical beaches"],
      ru: ["Крепостные стены с видом на океан", "Знаменитый маяк Галле", "Тропические пляжи юга"],
      de: ["UNESCO Festungsmauern am Meer", "Historischer Leuchtturm", "Wunderschöne Tropenstrände"],
    },
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
  },
];
