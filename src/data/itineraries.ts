export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface TravelPlan {
  id: string;
  duration: string;
  title: Record<string, string>;
  summary: Record<string, string>;
  highlights: string[];
  days: Array<{
    dayNumber: number;
    title: Record<string, string>;
    details: Record<string, string>;
  }>;
  included: Record<string, string[]>;
  recommendedFor: Record<string, string>;
}

export const travelPlans: TravelPlan[] = [
  {
    id: "1-day",
    duration: "1 Day",
    title: {
      en: "1-Day Pinnawala Elephant & Herbal Immersion",
      ru: "1-дневный тур: Слоны Пиннавелы и Сад Трав",
      de: "1-Tages-Tour: Pinnawala Elefanten & Kräutergarten",
    },
    summary: {
      en: "A perfect one-day journey from Colombo or Kandy featuring morning elephant river bathing, educational feeding, Ayurveda herbal tour, and authentic village lunch.",
      ru: "Идеальная однодневная поездка из Коломбо или Канди: утреннее купание слонов в реке, кормление, экскурсия по саду трав и традиционный обед.",
      de: "Perfekter Tagesausflug ab Colombo oder Kandy mit Elefantenbad im Fluss, Fütterung, Ayurveda-Gartenführung und traditionellem Mittagessen.",
    },
    highlights: [
      "Watch morning herd river bathing at Maha Oya",
      "Educational fruit feeding & mahout interaction",
      "Guided walk through the Ayurveda Herbal Medicine Garden",
      "Authentic clay-pot rice & curry lunch",
      "Visit to scenic Pinnawala Falls & local craft workshops",
    ],
    days: [
      {
        dayNumber: 1,
        title: {
          en: "Morning River Majesty & Afternoon Heritage",
          ru: "Утреннее величие реки и дневное наследие",
          de: "Morgendliche Flussidylle & Nachmittags-Kultur",
        },
        details: {
          en: "09:00 AM Arrival & welcome king coconut. 10:00 AM Observation of the elephant herd bathing in Maha Oya river. 12:30 PM Organic Sri Lankan lunch at riverside. 02:00 PM Guided tour of the living Ayurveda Herbal Medicine Garden with tea tasting. 03:30 PM Gentle walk to Pinnawala Falls before departure.",
          ru: "09:00 Встреча с освежающим кокосом. 10:00 Наблюдение за купанием слонов в реке Маха Оя. 12:30 Традиционный обед у реки. 14:00 Экскурсия по саду Аюрведы с дегустацией травяного чая. 15:30 Прогулка к водопаду Пиннавела.",
          de: "09:00 Ankunft mit Begrüßungskokosnuss. 10:00 Beobachtung des Elefantenbads im Maha Oya. 12:30 Traditionelles Mittagessen am Fluss. 14:00 Führung durch den Ayurveda-Heilkräutergarten mit Teeprobe. 15:30 Spaziergang zu den Pinnawala-Wasserfällen.",
        },
      },
    ],
    included: {
      en: [
        "Private round-trip local transport option",
        "Entry & host accompaniment",
        "Ayurveda garden guided walkthrough",
        "Traditional 6-curry Sri Lankan lunch",
      ],
      ru: [
        "Трансфер на комфортном авто (по запросу)",
        "Сопровождение персонального гида",
        "Экскурсия по саду Аюрведы",
        "Традиционный обед из 6 видов карри",
      ],
      de: [
        "Privater Transfer auf Wunsch",
        "Persönliche Begleitung & Führung",
        "Führung durch den Ayurveda-Garten",
        "Authentisches Mittagessen mit 6 Currys",
      ],
    },
    recommendedFor: {
      en: "Transit travellers, day-trippers from Colombo or Kandy, cruise stopovers.",
      ru: "Путешественники на 1 день из Коломбо или Канди, остановки круизов.",
      de: "Tagesausflügler ab Colombo/Kandy oder Kreuzfahrtgäste.",
    },
  },
  {
    id: "2-days",
    duration: "2 Days / 1 Night",
    title: {
      en: "2 Days / 1 Night: River Serenity & Cabana Retreat",
      ru: "2 Дня / 1 Ночь: Безмятежность реки и отдых в кабане",
      de: "2 Tage / 1 Nacht: Flussidylle & Cabana-Auszeit",
    },
    summary: {
      en: "Unwind at Luck Uyana Cabana or Pinnawala Reach. Experience evening tranquility after daytime tourists leave, sunrise river walks, and intimate mahout discussions.",
      ru: "Расслабьтесь в Luck Uyana Cabana или Pinnawala Reach. Ощутите вечернюю тишину без туристов, рассвет над рекой и неспешное общение с хозяевами.",
      de: "Erholen Sie sich im Luck Uyana Cabana oder Pinnawala Reach. Genießen Sie die abendliche Ruhe, Sonnenaufgänge am Fluss und persönliche Betreuung.",
    },
    highlights: [
      "1 Night stay in private luxury Cabana or boutique Room",
      "Golden hour river walk & sunset bird watching",
      "Candlelit riverside dinner with traditional spices",
      "Early morning peaceful elephant routine observation",
      "Exclusive herbal oil and wellness demonstration",
    ],
    days: [
      {
        dayNumber: 1,
        title: {
          en: "Check-in, Herbal Sanctuary & Candlelit Dinner",
          ru: "Заселение, сад Аюрведы и ужин при свечах",
          de: "Check-in, Kräutergarten & Kerzenschein-Dinner",
        },
        details: {
          en: "Check-in at Luck Uyana Cabana / Pinnawala Reach. Welcome herbal refreshment. Afternoon tour of the medicinal herb sanctuary. Sunset walk by the banks of Maha Oya river. Traditional 3-course dinner under ambient lanterns.",
          ru: "Заселение в кабану или номер. Освежающий травяной напиток. Дневная прогулка по саду Аюрведы. Закат на берегу реки Маха Оя. Ужин при свечах в саду.",
          de: "Check-in im Luck Uyana Cabana / Pinnawala Reach. Willkommensdrink. Nachmittags Kräutergarten-Rundgang. Sonnenuntergang am Maha Oya Fluss. Stilvolles Abendessen im Garten.",
        },
      },
      {
        dayNumber: 2,
        title: {
          en: "Dawn Elephant Routine & Village Excursion",
          ru: "Рассветный распорядок слонов и прогулка по окрестностям",
          de: "Morgendlicher Elefantenalltag & Ausflug ins Grüne",
        },
        details: {
          en: "Wake up to tropical birdsong and fresh tropical fruit breakfast. Private morning viewpoint of the elephants splashing in the river. Visit to local pottery or woodcarving artisans. Leisurely check-out.",
          ru: "Пробуждение под пение птиц, тропический завтрак со свежими фруктами. Утреннее наблюдение за купанием слонов с лучшей точки. Визит к местным ремесленникам. Выезд.",
          de: "Frühstück mit Tropenfrüchten und Ceylon-Tee. Exklusiver morgendlicher Blick auf das Elefantenbad. Besuch traditioneller Handwerker. Entspannter Check-out.",
        },
      },
    ],
    included: {
      en: [
        "1 Night accommodation (Luck Uyana or Pinnawala Reach)",
        "Breakfast & candlelit dinner included",
        "Both morning & afternoon elephant sessions",
        "Ayurveda garden tour & personal host",
      ],
      ru: [
        "1 ночь в кабане Luck Uyana или номере Pinnawala Reach",
        "Тропический завтрак и ужин при свечах",
        "Утреннее и дневное наблюдение за слонами",
        "Экскурсия по саду Аюрведы с травником",
      ],
      de: [
        "1 Übernachtung (Luck Uyana oder Pinnawala Reach)",
        "Inklusive Frühstück und Dinner bei Kerzenschein",
        "Morgendliches & nachmittägliches Elefantenbad",
        "Führung durch den Ayurveda-Kräutergarten",
      ],
    },
    recommendedFor: {
      en: "Couples looking for romantic eco-luxury, wildlife enthusiasts seeking quiet mornings.",
      ru: "Пары для романтического отдыха, любители природы без спешки.",
      de: "Paare für Romantikurlaub, Naturliebhaber auf der Suche nach Ruhe.",
    },
  },
  {
    id: "3-days",
    duration: "3 Days / 2 Nights",
    title: {
      en: "3 Days: Central Hills & Sacred Cultural Gateway",
      ru: "3 Дня: Предгорья, Канди и Священное Наследие",
      de: "3 Tage: Zentralland, Kandy & Kulturelle Schätze",
    },
    summary: {
      en: "Combine your immersive Pinnawala elephant experience with the UNESCO World Heritage royal city of Kandy, Temple of the Sacred Tooth Relic, and scenic spice valleys.",
      ru: "Объедините отдых со слонами в Пиннавеле с поездкой в королевский город Канди (ЮНЕСКО), Храм Зуба Будды и живописные ботанические сады Перадении.",
      de: "Kombinieren Sie Pinnawala mit der UNESCO-Königsstadt Kandy, dem berühmten Zahntempel und den Königlichen Botanischen Gärten von Peradeniya.",
    },
    highlights: [
      "2 Nights base at Luck Uyana Cabana / Pinnawala Reach",
      "Full elephant daily routine & river care session",
      "Excursion to Kandy: Temple of the Sacred Tooth Relic & Kandy Lake",
      "Peradeniya Royal Botanical Gardens giant trees & orchid house",
      "Traditional Kandyan cultural dance & drum performance",
    ],
    days: [
      {
        dayNumber: 1,
        title: {
          en: "Pinnawala Sanctuary & Ayurvedic Heritage",
          ru: "Погружение в Пиннавелу и сад трав",
          de: "Pinnawala Ankunft & Ayurveda-Erlebnis",
        },
        details: {
          en: "Arrival, private cabana check-in, afternoon elephant river observation, herbal medicine garden exploration, and welcome dinner.",
          ru: "Прибытие, заселение в кабану, наблюдение за слонами на реке, экскурсия по саду целебных трав, приветственный ужин.",
          de: "Ankunft, Check-in in der Cabana, nachmittägliches Elefantenbad, Heilkräutergarten und Begrüßungsdinner.",
        },
      },
      {
        dayNumber: 2,
        title: {
          en: "Royal City of Kandy Excursion",
          ru: "Однодневный тур в королевский город Канди",
          de: "Tagesausflug in die Königsstadt Kandy",
        },
        details: {
          en: "Scenic drive to Kandy (1 hour). Visit the sacred Temple of the Tooth Relic, stroll around Kandy Lake, explore Peradeniya Botanical Gardens, and witness traditional Kandyan cultural dance before returning to your peaceful cabana.",
          ru: "Живописная поездка в Канди (1 час). Посещение Храма Зуба Будды, прогулка вокруг озера, королевский ботанический сад Перадения и вечерние танцы Канди.",
          de: "Fahrt nach Kandy (1 Std.). Besuch des heiligen Zahntempels, Spaziergang am Kandy-See, Botanischer Garten Peradeniya und traditionelle Kandy-Tanzshow.",
        },
      },
      {
        dayNumber: 3,
        title: {
          en: "Pinnawala Falls, Village Walk & Departure",
          ru: "Водопад Пиннавела, деревенский колорит и отъезд",
          de: "Pinnawala Wasserfall, Dorferlebnis & Abreise",
        },
        details: {
          en: "Early morning gentle walk to Pinnawala Falls, Sri Lankan breakfast hoppers cooking experience, final elephant river farewell, and onward transfer.",
          ru: "Утренняя прогулка к водопаду, кулинарный мастер-класс по приготовлению хопперсов, прощание со слонами и трансфер дальше.",
          de: "Morgendlicher Spaziergang zum Wasserfall, sri-lankischer Kochkurs (Hoppers), Abschied von den Elefanten und Transfer.",
        },
      },
    ],
    included: {
      en: [
        "2 Nights boutique accommodation",
        "Daily gourmet breakfasts and selected dinners",
        "Private AC vehicle with English/Russian/German speaking driver for Kandy day trip",
        "All elephant activities and Ayurveda garden entry",
      ],
      ru: [
        "2 ночи в выбранном отеле (Luck Uyana или Pinnawala Reach)",
        "Ежедневные завтраки и ужины",
        "Индивидуальный авто с кондиционером и водителем для поездки в Канди",
        "Все активности со слонами и вход в сад трав",
      ],
      de: [
        "2 Übernachtungen im gewählten Haus",
        "Tägliches Frühstück und ausgewählte Abendessen",
        "Klimatisiertes Fahrzeug mit Fahrer für den Kandy-Ausflug",
        "Alle Elefantenaktivitäten & Eintritt Kräutergarten",
      ],
    },
    recommendedFor: {
      en: "Travellers wanting the perfect balance of relaxation, wildlife, and ancient culture.",
      ru: "Путешественники, ищущие идеальный баланс природы, слонов и древней культуры.",
      de: "Reisende, die Entspannung, Natur und Hochlandkultur verbinden möchten.",
    },
  },
  {
    id: "4-days",
    duration: "4 Days / 3 Nights",
    title: {
      en: "4 Days: Cultural Triangle, Sigiriya Citadel & Pinnawala",
      ru: "4 Дня: Культурный Треугольник, Скала Сигирия и Пиннавела",
      de: "4 Tage: Kulturelles Dreieck, Sigiriya & Pinnawala",
    },
    summary: {
      en: "An iconic combination: Pinnawala elephant river sanctuary, the awe-inspiring 5th-century Sigiriya Lion Rock Fortress, Dambulla Cave Temple, and misty hill country.",
      ru: "Легендарный маршрут: речной заповедник слонов в Пиннавеле, неприступная крепость Львиная скала Сигирия (V век), золотой пещерный храм Дамбулла и Канди.",
      de: "Ein Klassiker: Elefantenidylle in Pinnawala, die UNESCO-Felsenfestung Sigiriya, der Höhlentempel von Dambulla und die Bergwelt von Kandy.",
    },
    highlights: [
      "Elephant river bathing & Ayurveda herbal immersion in Pinnawala",
      "Climb UNESCO Lion Rock of Sigiriya at sunrise/golden hour",
      "Ancient painted caverns of Dambulla Cave Temple",
      "Kandy Temple of the Tooth & spice gardens",
      "Private luxury chauffeured air-conditioned vehicle throughout",
    ],
    days: [
      {
        dayNumber: 1,
        title: {
          en: "Welcome to Pinnawala & Luck Uyana Cabana",
          ru: "Прибытие в Пиннавелу и отдых в кабане",
          de: "Willkommen in Pinnawala & Luck Uyana",
        },
        details: {
          en: "Airport / Colombo pickup to Pinnawala. Check-in to your private cabana. Afternoon river bath observation and Ayurveda medicine tour.",
          ru: "Встреча в аэропорту или Коломбо, трансфер в Пиннавелу. Заселение в кабану, наблюдение за купанием слонов и экскурсия по саду трав.",
          de: "Abholung und Transfer nach Pinnawala. Check-in in die Cabana. Elefantenbad am Nachmittag und Kräutergartenführung.",
        },
      },
      {
        dayNumber: 2,
        title: {
          en: "Sigiriya Lion Rock & Dambulla Golden Cave Temple",
          ru: "Крепость Сигирия и Золотой пещерный храм Дамбулла",
          de: "Felsenfestung Sigiriya & Höhlentempel Dambulla",
        },
        details: {
          en: "Early departure to Sigiriya. Climb the 1,200 steps to King Kashyapa's sky fortress with ancient frescoes. Traditional Sri Lankan village lunch. Explore Dambulla's 2,000-year-old rock monastery before returning.",
          ru: "Ранний выезд в Сигирию. Подъем на Львиную скалу к древним фрескам. Традиционный деревенский обед. Посещение пещерного храма Дамбулла с золотыми Буддами.",
          de: "Fahrt nach Sigiriya. Aufstieg auf den 200 m hohen Felsen mit weltberühmten Fresken. Mittagessen im Lehmofen-Dorf. Besichtigung des Höhlentempels Dambulla.",
        },
      },
      {
        dayNumber: 3,
        title: {
          en: "Kandy Cultural Highlights & High Ceylon Tea",
          ru: "Культура Канди и высокогорный цейлонский чай",
          de: "Kulturerbe Kandy & Hochland-Tee",
        },
        details: {
          en: "Day trip to Kandy: visit the Temple of the Tooth, stroll around the Royal Botanical Gardens, taste world-renowned pure Ceylon tea at a mountain factory.",
          ru: "Поездка в Канди: Храм Зуба Будды, королевский ботанический сад, дегустация настоящего высокогорного чая на чайной фабрике.",
          de: "Ausflug nach Kandy: Zahntempel, königlicher Park Peradeniya und Verkostung erstklassigen Ceylon-Tees in einer Teefabrik.",
        },
      },
      {
        dayNumber: 4,
        title: {
          en: "Farewell River Walk & Coastal/Airport Transfer",
          ru: "Финальная прогулка у реки и трансфер на побережье / в аэропорт",
          de: "Flussspaziergang & Transfer zum Strand oder Flughafen",
        },
        details: {
          en: "Final morning with the elephants, traditional breakfast, check-out, and comfortable transfer to your beach resort or Colombo airport.",
          ru: "Утреннее прощание со слонами, вкусный завтрак, выселение и трансфер на океанское побережье или в аэропорт.",
          de: "Letzter Vormittag am Fluss, ausgiebiges Frühstück und bequemer Transfer zu Ihrem Strandresort oder zum Flughafen.",
        },
      },
    ],
    included: {
      en: [
        "3 Nights luxury boutique accommodation",
        "Dedicated private air-conditioned vehicle and chauffeur throughout",
        "All breakfast and dinner meals",
        "Comprehensive site management and entrance planning",
      ],
      ru: [
        "3 ночи комфортного проживания",
        "Индивидуальный автомобиль с кондиционером и водителем на весь тур",
        "Завтраки и ужины",
        "Организация всех экскурсий и билетов",
      ],
      de: [
        "3 Übernachtungen mit Luxus-Komfort",
        "Privates klimatisiertes Fahrzeug mit Fahrer für alle 4 Tage",
        "Halbpension (Frühstück & Abendessen)",
        "Vollständige Reiseorganisation und Betreuung",
      ],
    },
    recommendedFor: {
      en: "Active vacationers, first-time Sri Lanka visitors seeking a rich short itinerary.",
      ru: "Активные путешественники, гости, впервые посещающие Шри-Ланку.",
      de: "Erstbesucher Sri Lankas mit Sinn für Kultur und Natur.",
    },
  },
  {
    id: "5-7-days",
    duration: "5–7 Days",
    title: {
      en: "5–7 Days: The Grand Sri Lanka Island Odyssey",
      ru: "5–7 Дней: Гранд-тур по Шри-Ланке: Горы, Сафари и Пляж",
      de: "5–7 Tage: Die Große Sri Lanka Insel-Rundreise",
    },
    summary: {
      en: "The ultimate Sri Lankan voyage: Pinnawala elephant base, Sigiriya citadel, Kandy, mist-covered Nuwara Eliya tea hills, scenic Ella train ride, Yala safari, and colonial Galle Fort.",
      ru: "Флагманский маршрут по острову: слоны в Пиннавеле, скала Сигирия, Канди, чайные плантации Нувара-Элии, знаменитый поезд в Эллу, сафари и крепость Галле.",
      de: "Die ultimative Sri-Lanka-Reise: Elefanten in Pinnawala, Sigiriya-Felsen, Kandy, Teefelder in Nuwara Eliya, die berühmte Bahnreise nach Ella, Safari und UNESCO-Galle-Fort.",
    },
    highlights: [
      "Serene base at Luck Uyana Cabana with authentic elephant routines",
      "Sigiriya Lion Rock & Dambulla Cave Monasteries",
      "Temple of the Tooth Relic & Royal Botanical Gardens Kandy",
      "Nuwara Eliya 'Little England' & misty waterfalls (Ramboda / Devon)",
      "Iconic scenic blue train through mountain valleys to Ella & Nine Arch Bridge",
      "Wildlife jeep safari (Yala or Udawalawe) & historic Galle Dutch Fort",
    ],
    days: [
      {
        dayNumber: 1,
        title: {
          en: "Day 1: Arrival & Pinnawala River Haven",
          ru: "День 1: Прибытие и речной оазис Пиннавелы",
          de: "Tag 1: Ankunft & Oase Pinnawala",
        },
        details: {
          en: "Airport reception, transfer to Luck Uyana Cabana / Pinnawala Reach. Settle in, witness the afternoon elephant river bath, and enjoy an Ayurvedic welcome tea.",
          ru: "Встреча в аэропорту, трансфер в отель. Размещение, купание слонов на реке Маха Оя, аюрведический чай.",
          de: "Empfang am Flughafen, Transfer nach Pinnawala. Elefantenbad am Nachmittag, Willkommenstee im Ayurveda-Garten.",
        },
      },
      {
        dayNumber: 2,
        title: {
          en: "Day 2: Sigiriya Lion Rock & Dambulla Heritage",
          ru: "День 2: Древняя Сигирия и храмы Дамбуллы",
          de: "Tag 2: Königsfelsen Sigiriya & Dambulla",
        },
        details: {
          en: "Sunrise climb at Sigiriya fortress, ancient water gardens, and Dambulla golden cave temples. Overnight in Pinnawala or Sigiriya foothills.",
          ru: "Рассветное восхождение на Сигирию, королевские водные сады, золотые пещеры Дамбуллы.",
          de: "Frühmorgendlicher Aufstieg auf Sigiriya, königliche Gärten und Höhlentempel von Dambulla.",
        },
      },
      {
        dayNumber: 3,
        title: {
          en: "Day 3: Kandy Royal City & Sacred Tooth Temple",
          ru: "День 3: Королевский Канди и Храм Зуба Будды",
          de: "Tag 3: Kulturhauptstadt Kandy & Zahntempel",
        },
        details: {
          en: "Discover the Sacred Temple of the Tooth Relic, stroll Peradeniya botanical gardens, and take in panoramic viewpoints above Kandy lake.",
          ru: "Священный Храм Зуба Будды, ботанический сад Перадения с гигантскими пальмами, смотровая площадка над озером.",
          de: "Zahntempel von Kandy, Peradeniya-Gärten mit exotischen Orchideen und Panoramablick auf den Kandy-See.",
        },
      },
      {
        dayNumber: 4,
        title: {
          en: "Day 4: Nuwara Eliya Highlands & Tea Country",
          ru: "День 4: Высокогорная Нувара-Элия и чайные плантации",
          de: "Tag 4: Hochland Nuwara Eliya & Teegärten",
        },
        details: {
          en: "Ascend into cool emerald hills, past cascading Ramboda waterfalls, tour colonial tea plantations and enjoy pure Ceylon high tea.",
          ru: "Подъем в изумрудные горы к водопадам Рамбода, прогулка по чайным плантациям, колониальная архитектура «Маленькой Англии».",
          de: "Fahrt durch nebelverhangene Berge, Ramboda-Wasserfälle, Besichtigung historischer Teefabriken.",
        },
      },
      {
        dayNumber: 5,
        title: {
          en: "Day 5: Iconic Blue Train to Ella & Nine Arch Bridge",
          ru: "День 5: Живописный поезд в Эллу и Девятиарочный мост",
          de: "Tag 5: Berühmte Zugfahrt nach Ella & Nine Arch Bridge",
        },
        details: {
          en: "Board the world-famous scenic mountain railway to Ella. Walk along the colonial Nine Arch Bridge and hike Little Adam’s Peak for breathtaking panoramas.",
          ru: "Поездка на знаменитом синем горном поезде в Эллу. Фотосессия у моста Девяти арок и легкий подъем на Малый пик Адама.",
          de: "Panoramazugfahrt durch die Teetäler nach Ella. Spaziergang zur weltberühmten Nine Arch Bridge und Sonnenuntergang am Little Adam's Peak.",
        },
      },
      {
        dayNumber: 6,
        title: {
          en: "Day 6: Wildlife Jeep Safari & South Coast Arrival",
          ru: "День 6: Джип-сафари на диких животных и выезд к океану",
          de: "Tag 6: Jeep-Safari & Weiterreise an die Südküste",
        },
        details: {
          en: "Morning 4x4 open-top safari to see wild elephants, leopards, and crocodiles. Proceed to the golden beaches of Mirissa or Tangalle.",
          ru: "Утреннее сафари на джипе в национальном парке (дикие слоны, леопарды, птицы). Переезд на золотые пляжи Мириссы или Тангалле.",
          de: "Morgendliche Jeep-Safari im Nationalpark (wilde Elefanten, Leoparden). Fahrt an die tropischen Sandstrände der Südküste.",
        },
      },
      {
        dayNumber: 7,
        title: {
          en: "Day 7: UNESCO Galle Fort & Ocean Relaxation / Departure",
          ru: "День 7: Голландский форт Галле (ЮНЕСКО) и отдых / вылет",
          de: "Tag 7: Festungsstadt Galle (UNESCO) & Abreise",
        },
        details: {
          en: "Explore the cobblestone ramparts, boutique cafes, and lighthouse of Galle Dutch Fort before beach extension or luxury airport transfer.",
          ru: "Прогулка по старинным бастионам форта Галле, маяк, бутики и рестораны с морепродуктами. Трансфер в аэропорт или продление пляжного отдыха.",
          de: "Erkundung der historischen Festung Galle mit Leuchtturm und Cafés. Anschließend Strandurlaub oder Flughafentransfer.",
        },
      },
    ],
    included: {
      en: [
        "Full 5–7 day private chauffeured itinerary with flexible pace",
        "Dedicated English/Russian/German guide throughout",
        "All boutique & cabana accommodations",
        "Scenic mountain train tickets reserved",
        "Custom start and end points anywhere in Sri Lanka",
      ],
      ru: [
        "Индивидуальный маршрут на 5–7 дней в комфортном темпе",
        "Личный русскоговорящий гид-водитель на авто бизнес-класса",
        "Все отели и кабаны по маршруту",
        "Билеты на панорамный горный поезд",
        "Старт и финиш в любой точке острова (аэропорт, пляжи)",
      ],
      de: [
        "Vollständige 5–7 tägige Rundreise mit persönlichem Chauffeur",
        "Deutsch/Englischsprachige Betreuung auf Wunsch",
        "Sorgfältig ausgewählte Unterkünfte & Cabanas",
        "Reservierte Panoramazug-Tickets",
        "Individuelle Anpassung von Start- und Endpunkt",
      ],
    },
    recommendedFor: {
      en: "Families, couples, and travellers wanting the definitive all-in-one Sri Lanka experience.",
      ru: "Семьи и пары, мечтающие увидеть всё самое лучшее на Шри-Ланке за одну поездку.",
      de: "Familien, Paare und Entdecker für das vollständige Sri-Lanka-Erlebnis.",
    },
  },
];
