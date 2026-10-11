export interface GalleryPhoto {
  id: string;
  category: "stays" | "elephants" | "ayurveda" | "dining" | "surroundings";
  title: Record<string, string>;
  caption: Record<string, string>;
  src: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "g1",
    category: "elephants",
    title: {
      en: "Gentle River Bathing",
      ru: "Купание слонов в реке",
      de: "Elefantenbad im Fluss",
    },
    caption: {
      en: "Elephant herd splashing and cooling down in the fresh waters of Maha Oya river.",
      ru: "Стадо слонов наслаждается прохладными водами реки Маха Оя.",
      de: "Die Herde erfrischt sich im klaren Wasser des Flusses Maha Oya.",
    },
    src: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g2",
    category: "stays",
    title: {
      en: "Luck Uyana Private Cabana",
      ru: "Кабана Luck Uyana в саду",
      de: "Luck Uyana Naturcabana",
    },
    caption: {
      en: "Detached timber cabana with private wooden veranda nestled in tropical palm grove.",
      ru: "Деревянная кабана с верандой среди тропической зелени и пальм.",
      de: "Freistehende Holzcabana mit privater Veranda im Palmenhain.",
    },
    src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g3",
    category: "elephants",
    title: {
      en: "Riverbank Play & Socializing",
      ru: "Игры слонов у берега",
      de: "Soziales Miteinander am Ufer",
    },
    caption: {
      en: "Younger elephants playing with river stones and water sprays under warm morning sun.",
      ru: "Молодые слонята резвятся у берега под теплым утренним солнцем.",
      de: "Junge Elefanten spielen im Flusslauf unter der Morgensonne.",
    },
    src: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g4",
    category: "stays",
    title: {
      en: "Pinnawala Reach Deluxe Room",
      ru: "Номер Делюкс Pinnawala Reach",
      de: "Pinnawala Reach Deluxe-Zimmer",
    },
    caption: {
      en: "Bright, airy boutique guest room with premium bedding and panoramic nature balcony.",
      ru: "Светлый номер бутик-отеля с большой кроватью и балконом на природу.",
      de: "Helles Boutique-Zimmer mit großem Bett und Panoramabalkon.",
    },
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g5",
    category: "ayurveda",
    title: {
      en: "Herbal Medicine Garden Walk",
      ru: "Сад лекарственных трав Аюрведы",
      de: "Rundgang durch den Heilkräutergarten",
    },
    caption: {
      en: "Indigenous medicinal plants, healing foliage, and Ceylon spice flora in rich organic soil.",
      ru: "Целебные травы, цейлонская корица и лекарственные растения нашего сада.",
      de: "Heilpflanzen, Ceylon-Gewürze und Heilkräuter auf biologischem Boden.",
    },
    src: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g6",
    category: "dining",
    title: {
      en: "Authentic Clay-Pot Curries",
      ru: "Традиционные карри в глиняных горшках",
      de: "Traditionelle Tontopf-Currys",
    },
    caption: {
      en: "Fresh organic local vegetables, dhal, and jackfruit simmered in coconut milk.",
      ru: "Свежие овощи, дал и джекфрут, томленые на углях с кокосовым молоком.",
      de: "Frisches Gemüse, Linsen und Jackfrucht, sanft in Kokosmilch gegart.",
    },
    src: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g7",
    category: "surroundings",
    title: {
      en: "Pinnawala Falls Cascade",
      ru: "Каскад водопада Пиннавела",
      de: "Pinnawala Wasserfallkaskade",
    },
    caption: {
      en: "Tranquil freshwater waterfall located within a short forest stroll from the cabanas.",
      ru: "Живописный водопад с кристальной водой в нескольких минутах ходьбы от отеля.",
      de: "Idyllischer Naturwasserfall, nur einen kurzen Waldspaziergang entfernt.",
    },
    src: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g8",
    category: "elephants",
    title: {
      en: "Respectful Feeding Routine",
      ru: "Ежедневное кормление фруктами",
      de: "Respektvolle Fütterungsroutine",
    },
    caption: {
      en: "Nutritious seasonal fruits and palm shoots provided with expert mahout oversight.",
      ru: "Сезонные фрукты и пальмовые побеги под заботливым присмотром махаутов.",
      de: "Nahrhafte Früchte und Palmzweige unter Anleitung erfahrener Mahouts.",
    },
    src: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g9",
    category: "dining",
    title: {
      en: "Fresh Tropical Sunrise Breakfast",
      ru: "Тропический завтрак на свежем воздухе",
      de: "Frisches Tropenfrühstück im Freien",
    },
    caption: {
      en: "Sweet papayas, pineapples, bananas, and freshly brewed Ceylon black tea.",
      ru: "Свежая папайя, ананасы, бананы и ароматный высокогорный цейлонский чай.",
      de: "Reife Papayas, Ananas und frisch aufgebrühter Hochland-Ceylontee.",
    },
    src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g10",
    category: "ayurveda",
    title: {
      en: "Traditional Herbal Teas & Oils",
      ru: "Травяные масла и настои",
      de: "Kräutertees und Heilsame Öle",
    },
    caption: {
      en: "Handmade botanical extracts and calming herbal blends prepared on property.",
      ru: "Натуральные растительные экстракты и успокаивающие травяные сборы.",
      de: "Handgefertigte Pflanzenextrakte und beruhigende Teemischungen.",
    },
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g11",
    category: "stays",
    title: {
      en: "Veranda Evening Lights",
      ru: "Вечерняя подсветка веранды",
      de: "Abendstimmung auf der Veranda",
    },
    caption: {
      en: "Warm atmospheric lanterns welcoming guests home after an adventurous day.",
      ru: "Теплые вечерние фонари на террасе создают атмосферу уюта и покоя.",
      de: "Warme Laternen auf der Holzterrasse für stimmungsvolle Abende.",
    },
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "g12",
    category: "surroundings",
    title: {
      en: "Misty Central Foothills",
      ru: "Холмы и джунгли предгорий",
      de: "Nebelverhangene Berge Sri Lankas",
    },
    caption: {
      en: "Verdant tropical greenery framing the Maha Oya river valley and surrounding hills.",
      ru: "Изумрудные джунгли вокруг долины реки Маха Оя и холмов Кегалле.",
      de: "Üppiges Grün umgibt das Flusstal und die Ausläufer des Hochlands.",
    },
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
  },
];
