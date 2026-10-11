export type Language = 'en' | 'ru' | 'de';

export interface TranslationData {
  siteTitle: string;
  siteSubtitle: string;
  nav: {
    experiences: string;
    stays: string;
    dining: string;
    itineraries: string;
    gallery: string;
    contact: string;
    bookNow: string;
    whatsapp: string;
  };
  hero: {
    kicker: string;
    mainTitle: string;
    subtitle: string;
    description: string;
    planTrip: string;
    whatsappUs: string;
    exploreExperiences: string;
    featureCabanas: string;
    featureRooms: string;
    featureRestaurant: string;
    featureMahaOya: string;
  };
  elephants: {
    kicker: string;
    title: string;
    subtitle: string;
    charterTitle: string;
    charterText: string;
    experiences: Array<{
      id: string;
      title: string;
      time: string;
      description: string;
      highlight: string;
    }>;
  };
  stays: {
    kicker: string;
    title: string;
    subtitle: string;
    cabanaTab: string;
    roomTab: string;
    cabanaTitle: string;
    cabanaDesc: string;
    roomTitle: string;
    roomDesc: string;
    bookCabana: string;
    bookRoom: string;
    restaurantNote: string;
  };
  ayurveda: {
    kicker: string;
    title: string;
    subtitle: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    botanicalsTitle: string;
    botanicals: string[];
  };
  plans: {
    kicker: string;
    title: string;
    subtitle: string;
    tagline: string;
    ctaEnquire: string;
  };
  dining: {
    kicker: string;
    title: string;
    subtitle: string;
    intro: string;
    luckUyanaDining: {
      title: string;
      desc: string;
    };
    pinnawalaReachDining: {
      title: string;
      desc: string;
    };
    authenticFlavors: {
      title: string;
      desc: string;
    };
    note: string;
  };
  gallery: {
    kicker: string;
    title: string;
    subtitle: string;
    all: string;
    stays: string;
    elephants: string;
    ayurveda: string;
    dining: string;
    surroundings: string;
  };
  packages: {
    kicker: string;
    title: string;
    subtitle: string;
    tagline: string;
    couple: string;
    family: string;
    includes: string;
    inquirePrice: string;
  };
  booking: {
    kicker: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    countryLabel: string;
    countryPlaceholder: string;
    checkInLabel: string;
    checkOutLabel: string;
    guestsLabel: string;
    propertyLabel: string;
    propertySelectOption: string;
    propertyCabanas: string;
    propertyRooms: string;
    propertyUndecided: string;
    experienceLabel: string;
    experienceSelectOption: string;
    messageLabel: string;
    messagePlaceholder: string;
    consentText: string;
    submitForm: string;
    sendWhatsapp: string;
    whatsappDirectTip: string;
    successTitle: string;
    successMessage: string;
    closeModal: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    contactInfo: string;
    address: string;
    phone: string;
    whatsapp: string;
    rights: string;
    disclaimer: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  en: {
    siteTitle: "PINNAWALA ELEPHANT TOUR",
    siteSubtitle: "Luck Uyana Cabana & Pinnawala Reach • Accommodations & Restaurant",
    nav: {
      experiences: "Experiences",
      stays: "Accommodations",
      dining: "Restaurant",
      itineraries: "Travel Plans",
      gallery: "Gallery",
      contact: "Contact & Book",
      bookNow: "Plan My Stay",
      whatsapp: "WhatsApp",
    },
    hero: {
      kicker: "Pinnawala, Sri Lanka",
      mainTitle: "PINNAWALA ELEPHANT TOUR",
      subtitle: "Authentic Elephant Routines • Serene Riverfront Stays & Dining",
      description:
        "Welcome to Pinnawala's premier elephant sanctuary base. Enjoy peaceful daily river routines along the Maha Oya, secluded private cabanas at Luck Uyana, river-facing rooms at Pinnawala Reach, our authentic Sri Lankan restaurant, and ancient Ayurvedic wellness.",
      planTrip: "Plan Your Visit",
      whatsappUs: "Chat on WhatsApp",
      exploreExperiences: "Explore Experiences",
      featureCabanas: "4 Luxury Cabanas",
      featureRooms: "7 Boutique Rooms",
      featureRestaurant: "Authentic Restaurant",
      featureMahaOya: "Maha Oya Riverfront",
    },
    elephants: {
      kicker: "Gentle Giants & Nature",
      title: "The Elephants' Daily Routine",
      subtitle: "Observe peaceful, respectful daily rhythms in harmony with nature along the sacred Maha Oya river.",
      charterTitle: "Responsible Wildlife Philosophy",
      charterText: "We honor the natural dignity of Pinnawala's elephants. No forced tricks or commercial shows. We focus on ethical observation during morning and afternoon river baths, wholesome nutrition, and the heritage of their dedicated mahouts.",
      experiences: [
        {
          id: "river-bath",
          title: "Maha Oya River Bathing",
          time: "10:00 AM & 02:00 PM",
          description: "Watch herds of gentle giants bathe, splash, and cool down in the refreshing river waters from scenic riverbanks.",
          highlight: "Scenic natural riverfront vantage points",
        },
        {
          id: "daily-nutrition",
          title: "Wholesome Fruit Feeding",
          time: "09:00 AM & 01:00 PM",
          description: "Learn about the elephants' immense nutritional needs with seasonal fruits, kitul palms, and natural herbal care.",
          highlight: "Educational insights with experienced mahouts",
        },
        {
          id: "gentle-walk",
          title: "Forest & Grassland Stroll",
          time: "Early Morning & Late Afternoon",
          description: "Peaceful nature walks observing elephants foraging along lush tropical pathways without disruption.",
          highlight: "Quiet and restorative natural setting",
        },
        {
          id: "care-vet",
          title: "Mahout Heritage & Wellness",
          time: "Daily Scheduled Sessions",
          description: "Discover generations of traditional care, coconut-husk grooming, and ancient veterinary wisdom.",
          highlight: "Deep cultural respect and elephant welfare",
        },
      ],
    },
    stays: {
      kicker: "Pinnawala's Main Accommodations",
      title: "Luck Uyana Cabana & Pinnawala Reach",
      subtitle: "Two distinct boutique stay experiences operated by the same company, offering private cabanas, luxury rooms, and on-site dining.",
      cabanaTab: "Luck Uyana Cabana (4 Cabanas)",
      roomTab: "Pinnawala Reach (7 Rooms)",
      cabanaTitle: "Luck Uyana Cabana — Secluded Garden Living",
      cabanaDesc: "Four private detached wooden cabanas nestled within lush tropical palm gardens. Hand-crafted teak interiors, expansive private veranda, open stone garden shower, and serene nature sounds.",
      roomTitle: "Pinnawala Reach — Boutique River Elegance",
      roomDesc: "Seven deluxe boutique guest rooms located moments from the Maha Oya river. Whisper-quiet air conditioning, private balconies with nature outlooks, modern ensuite rain showers, and refined comfort.",
      bookCabana: "Book Luck Uyana Cabana",
      bookRoom: "Book Pinnawala Reach",
      restaurantNote: "Both properties feature our authentic Sri Lankan restaurant serving farm-to-table cuisine, fresh tropical breakfasts, and candlelit dinners.",
    },
    ayurveda: {
      kicker: "Botanical Wellness",
      title: "Ayurveda Herbal Medicine Garden",
      subtitle: "Sri Lanka's 5,000-year healing heritage preserved in our living on-site medicinal flora sanctuary.",
      description: "Surrounded by rich fertile soil and gentle river mist, our garden nurtures over 100 indigenous medicinal plants, spices, and healing herbs cultivated according to traditional Ayurvedic wisdom.",
      features: [
        {
          title: "Botanical Walkthrough",
          description: "Learn how roots, barks, and leaves are cultivated and harvested for natural restorative teas and therapeutic herbal oils.",
        },
        {
          title: "Ceylon Spice Heritage",
          description: "Smell and touch authentic Ceylon cinnamon, wild cardamom, lemongrass, neem, and fresh gotu kola.",
        },
        {
          title: "Rejuvenating Herbal Teas",
          description: "Enjoy freshly brewed herbal infusions of coriander, ginger, and belimal flowers known to restore vitality and calm.",
        },
        {
          title: "Traditional Practitioners",
          description: "Personal insights on herbal balance and natural remedies. Guided in English, Russian, and German.",
        },
      ],
      botanicalsTitle: "Featured Healing Flora in Our Garden",
      botanicals: [
        "Ceylon Cinnamon (Cinnamomum verum)",
        "Medicinal Sandalwood (Santalum album)",
        "Gotu Kola (Centella asiatica)",
        "Wild Turmeric & Ginger Roots",
        "Neem & Kohomba Tree",
        "Aloe Vera & Herbal Balms",
      ],
    },
    plans: {
      kicker: "Tailored Journeys",
      title: "Travel Plans & Sri Lanka Itineraries",
      subtitle: "From single-day elephant encounters to comprehensive 7-day journeys across tea highlands and coastal heritage.",
      tagline: "YOUR SRI LANKA. YOUR WAY.",
      ctaEnquire: "Inquire About This Plan",
    },
    dining: {
      kicker: "Restaurant & Culinary Heritage",
      title: "Food & Authentic Sri Lankan Dining",
      subtitle: "Experience authentic Ceylon dining at Luck Uyana Cabana and Pinnawala Reach restaurants.",
      intro: "Our chefs prepare wholesome Sri Lankan meals using fresh garden ingredients, organic vegetables, coconut milk, and aromatic spices grown in our own soil.",
      luckUyanaDining: {
        title: "Luck Uyana Garden Restaurant",
        desc: "Relaxed dining set amid tropical greenery. Enjoy clay-pot curries, crisp hoppers, and candlelit dinners under palm canopies.",
      },
      pinnawalaReachDining: {
        title: "Pinnawala Reach Dining Lounge",
        desc: "Boutique river-breeze dining with scenic vantage points, tropical fruit breakfasts, and custom international dishes.",
      },
      authenticFlavors: {
        title: "Clay-Pot Curries & Tropical Breakfast",
        desc: "Slow-simmered dhal, jackfruit curry, coconut sambols, fresh papaya, and premium pure Ceylon black tea.",
      },
      note: "Vegetarian, vegan, and Russian-friendly continental dishes prepared on request. Transparent seasonal pricing confirmed directly with your host.",
    },
    gallery: {
      kicker: "Visual Journey",
      title: "Moments of Serenity",
      subtitle: "Photographs of our cabanas, boutique rooms, elephant river routines, herbal garden, and restaurant.",
      all: "All",
      stays: "Accommodations",
      elephants: "Elephants",
      ayurveda: "Herbal Garden",
      dining: "Restaurant & Food",
      surroundings: "Surroundings",
    },
    packages: {
      kicker: "Transparent Options",
      title: "Curated Travel Packages",
      subtitle: "Comfort, Premium, and Luxury options tailored for couples and families.",
      tagline: "YOUR SRI LANKA. YOUR WAY.",
      couple: "Couple Experience",
      family: "Family & Group",
      includes: "Inclusions:",
      inquirePrice: "Get Quote",
    },
    booking: {
      kicker: "Reserve Your Stay",
      title: "Plan Your Visit & Direct Enquiry",
      subtitle: "Send us your dates and preferences. We respond promptly with verified details and direct confirmation.",
      nameLabel: "Full Name",
      namePlaceholder: "e.g. Elena Rostova / Thomas Müller",
      emailLabel: "Email or WhatsApp / Phone",
      emailPlaceholder: "e.g. elena@example.com or +49 170 1234567",
      countryLabel: "Country of Residence",
      countryPlaceholder: "e.g. Germany, Russia, United Kingdom",
      checkInLabel: "Arrival Date",
      checkOutLabel: "Departure Date",
      guestsLabel: "Number of Guests",
      propertyLabel: "Preferred Property",
      propertySelectOption: "Select accommodation...",
      propertyCabanas: "Luck Uyana Cabana (4 Luxury Cabanas)",
      propertyRooms: "Pinnawala Reach (7 Luxury Rooms)",
      propertyUndecided: "Not sure — Please advise me",
      experienceLabel: "Preferred Tour or Experience",
      experienceSelectOption: "Select itinerary or experience...",
      messageLabel: "Special Requests / Notes",
      messagePlaceholder: "Flight details, dietary preferences, or specific sights you wish to see...",
      consentText: "I consent to being contacted by Pinnawala Elephant Tour regarding this enquiry.",
      submitForm: "Send Booking Enquiry",
      sendWhatsapp: "Chat on WhatsApp Instantly",
      whatsappDirectTip: "Direct WhatsApp support: +94 77 190 8272",
      successTitle: "Enquiry Received",
      successMessage: "Ayubowan! We have received your booking details and will contact you promptly. You can also send this summary directly via WhatsApp for instant reply.",
      closeModal: "Close",
    },
    footer: {
      desc: "PINNAWALA ELEPHANT TOUR is your trusted gateway to Pinnawala, Sri Lanka. Featuring Luck Uyana Cabana (4 luxury cabanas), Pinnawala Reach (7 luxury rooms), and our authentic restaurant and Ayurvedic herbal garden.",
      quickLinks: "Navigation",
      contactInfo: "Contact",
      address: "Pinnawala, Rambukkana 71100, Kegalle, Sri Lanka",
      phone: "+94 77 190 8272",
      whatsapp: "+94 77 190 8272",
      rights: "All Rights Reserved. PINNAWALA ELEPHANT TOUR.",
      disclaimer: "All elephant encounters are conducted with strict respect for animal welfare. Accommodation, dining, and travel packages are managed directly by the property owners.",
    },
  },
  ru: {
    siteTitle: "PINNAWALA ELEPHANT TOUR",
    siteSubtitle: "Luck Uyana Cabana & Pinnawala Reach • Проживание и Ресторан",
    nav: {
      experiences: "Слоны и Природа",
      stays: "Проживание",
      dining: "Ресторан",
      itineraries: "Маршруты",
      gallery: "Галерея",
      contact: "Контакты",
      bookNow: "Забронировать",
      whatsapp: "WhatsApp",
    },
    hero: {
      kicker: "Пиннавела, Шри-Ланка",
      mainTitle: "PINNAWALA ELEPHANT TOUR",
      subtitle: "Этичный распорядок слонов • Умиротворенный отдых у реки и ресторан",
      description:
        "Главный комплекс для отдыха в Пиннавеле. Наблюдение за купанием слонов в реке Маха Оя, уединенные эко-кабаны Luck Uyana, стильные номера Pinnawala Reach, ресторан аутентичной кухни и сад Аюрведы.",
      planTrip: "Спланировать отдых",
      whatsappUs: "Написать в WhatsApp",
      exploreExperiences: "Программа впечатлений",
      featureCabanas: "4 Кабаны в саду",
      featureRooms: "7 Номеров у реки",
      featureRestaurant: "Аутентичный Ресторан",
      featureMahaOya: "Берег реки Маха Оя",
    },
    elephants: {
      kicker: "В гармонии со слонами",
      title: "Ежедневный распорядок слонов",
      subtitle: "Спокойное, уважительное наблюдение за естественной жизнью слонов на священной реке Маха Оя.",
      charterTitle: "Этическая хартия благополучия животных",
      charterText: "Мы уважаем достоинство слонов Пиннавелы. Без неестественных трюков и коммерческих шоу. Только бережное наблюдение во время утренних и дневных купаний в реке, правильное питание и опыт махаутов.",
      experiences: [
        {
          id: "river-bath",
          title: "Купание слонов в реке Маха Оя",
          time: "10:00 и 14:00",
          description: "Наблюдайте за стадами слонов в чистых прохладных водах реки с живописных террас на берегу.",
          highlight: "Лучшие панорамные точки обзора на реке",
        },
        {
          id: "daily-nutrition",
          title: "Кормление фруктами и рацион",
          time: "09:00 и 13:00",
          description: "Узнайте о правильном питании слонов: ветви китул, спелые фрукты и растительные витамины.",
          highlight: "Образовательные беседы с опытными махаутами",
        },
        {
          id: "gentle-walk",
          title: "Прогулка по лесным тропам",
          time: "Раннее утро и вечер",
          description: "Неспешные прогулки на природе, где слоны мирно пасутся среди тропической зелени.",
          highlight: "Тишина и единение с природой",
        },
        {
          id: "care-vet",
          title: "Традиция махаутов и уход",
          time: "Ежедневно по расписанию",
          description: "Многовековые традиции ухода за слонами, травяные компрессы и древняя ветеринария.",
          highlight: "Уважение к культурному наследию",
        },
      ],
    },
    stays: {
      kicker: "Главные объекты размещения в Пиннавеле",
      title: "Luck Uyana Cabana и Pinnawala Reach",
      subtitle: "Два уникальных формата отдыха под единым управлением: уединенные кабаны, номера отеля и собственный ресторан.",
      cabanaTab: "Luck Uyana Cabana (4 кабаны)",
      roomTab: "Pinnawala Reach (7 номеров)",
      cabanaTitle: "Luck Uyana Cabana — Уединенные эко-кабаны",
      cabanaDesc: "Четыре отдельные деревянные кабаны среди пальмового сада. Отделка из тика, просторная терраса, тропический душ в саду и шелест листвы.",
      roomTitle: "Pinnawala Reach — Стильный отель у реки",
      roomDesc: "Семь комфортабельных номеров в шаговой доступности от реки Маха Оя. Кондиционер, балконы с видом на природу и современные ванные комнаты.",
      bookCabana: "Забронировать кабану",
      bookRoom: "Забронировать номер",
      restaurantNote: "При комплексе работает ресторан традиционной кухни со свежими органическими блюдами, завтраками и романтическими ужинами.",
    },
    ayurveda: {
      kicker: "Натуральное здоровье",
      title: "Сад лекарственных трав Аюрведы",
      subtitle: "5000-летнее наследие оздоровления Шри-Ланки в нашем живом ботаническом саду.",
      description: "На плодородной почве у реки растут более 100 видов лекарственных растений и специй, собранных по традициям древней медицины.",
      features: [
        {
          title: "Экскурсия с травником",
          description: "Узнайте, как из корней, коры и трав готовят традиционные масла и восстанавливающие настои.",
        },
        {
          title: "Цейлонские специи",
          description: "Настоящая корица, дикий кардамон, лемонграсс, сандал, ним и свежая готу-кола.",
        },
        {
          title: "Целебный чай",
          description: "Натуральный свежий чай из имбиря, кориандра и цветков белимал для бодрости и спокойствия.",
        },
        {
          title: "Консультации",
          description: "Советы по природному балансу. Экскурсии с переводом на русский язык.",
        },
      ],
      botanicalsTitle: "Растения нашего сада",
      botanicals: [
        "Цейлонская корица (Cinnamomum verum)",
        "Лекарственный сандал (Santalum album)",
        "Готу Кола (Centella asiatica)",
        "Дикая куркума и корни имбиря",
        "Дерево Ним / Кохомба",
        "Алоэ Вера и травяные бальзамы",
      ],
    },
    plans: {
      kicker: "Маршруты по острову",
      title: "Индивидуальные туры по Шри-Ланке",
      subtitle: "От 1 дня в Пиннавеле со слонами до 7-дневного путешествия в Канди, Сигирию, Нувара-Элию и на юг острова.",
      tagline: "YOUR SRI LANKA. YOUR WAY.",
      ctaEnquire: "Запросить программу",
    },
    dining: {
      kicker: "Ресторан и Традиции",
      title: "Питание и Аутентичный Ресторан",
      subtitle: "Традиционная ланкийская кухня в ресторанах Luck Uyana Cabana и Pinnawala Reach.",
      intro: "Наши повара готовят домашние блюда из свежих овощей, кокосового молока и пряностей, выращенных на нашей земле.",
      luckUyanaDining: {
        title: "Садовый ресторан Luck Uyana",
        desc: "Уютный ресторан среди тропических пальм: карри в глиняных горшках, рисовые хопперсы и ужины при свечах.",
      },
      pinnawalaReachDining: {
        title: "Ресторан-лаундж Pinnawala Reach",
        desc: "Светлая терраса у реки с панорамными видами, свежими тропическими завтраками и европейскими блюдами.",
      },
      authenticFlavors: {
        title: "Карри в горшочках и свежие фрукты",
        desc: "Нежный дал, карри из джекфрута, самболы, спелая папайя и настоящий цейлонский черный чай.",
      },
      note: "Доступны вегетарианские, веганские и европейские блюда. Цены согласовываются напрямую с хозяевами.",
    },
    gallery: {
      kicker: "Фотографии",
      title: "Моменты красоты и покоя",
      subtitle: "Фото наших кабан, номеров, слонов на реке, сада трав и ресторана.",
      all: "Все",
      stays: "Проживание",
      elephants: "Слоны",
      ayurveda: "Сад трав",
      dining: "Ресторан",
      surroundings: "Окрестности",
    },
    packages: {
      kicker: "Пакеты отдыха",
      title: "Категории комфорта",
      subtitle: "Варианты «Комфорт», «Премиум» и «Люкс» для пар и семейных поездок.",
      tagline: "YOUR SRI LANKA. YOUR WAY.",
      couple: "Для пар",
      family: "Для семей",
      includes: "Включено:",
      inquirePrice: "Узнать цену",
    },
    booking: {
      kicker: "Бронирование",
      title: "Прямой запрос на отдых",
      subtitle: "Укажите ваши даты и пожелания — мы быстро ответим вам в WhatsApp или по почте.",
      nameLabel: "Имя и Фамилия",
      namePlaceholder: "например, Елена Ростова",
      emailLabel: "Email или WhatsApp / Телефон",
      emailPlaceholder: "например, elena@mail.ru или +7 999 123-45-67",
      countryLabel: "Страна проживания",
      countryPlaceholder: "например, Россия, Казахстан, Беларусь",
      checkInLabel: "Дата заезда",
      checkOutLabel: "Дата выезда",
      guestsLabel: "Количество гостей",
      propertyLabel: "Вариант проживания",
      propertySelectOption: "Выберите проживание...",
      propertyCabanas: "Luck Uyana Cabana (4 кабаны в саду)",
      propertyRooms: "Pinnawala Reach (7 номеров у реки)",
      propertyUndecided: "Пока не знаю — посоветуйте",
      experienceLabel: "Интересующий маршрут",
      experienceSelectOption: "Выберите программу...",
      messageLabel: "Пожелания к отдыху",
      messagePlaceholder: "Время прилета, предпочтения в питании, достопримечательности...",
      consentText: "Я согласен на связь со мной касательно этого бронирования.",
      submitForm: "Отправить запрос",
      sendWhatsapp: "Написать сразу в WhatsApp",
      whatsappDirectTip: "Быстрая связь в WhatsApp: +94 77 190 8272",
      successTitle: "Запрос отправлен",
      successMessage: "Аюбован! Мы получили ваши данные и свяжемся с вами. Вы также можете отправить заявку напрямую в WhatsApp для мгновенного ответа.",
      closeModal: "Закрыть",
    },
    footer: {
      desc: "PINNAWALA ELEPHANT TOUR — ваш надежный проводник в Пиннавеле на Шри-Ланке. Объединяет уединенные кабаны Luck Uyana, отель Pinnawala Reach, аутентичный ресторан и сад Аюрведы.",
      quickLinks: "Навигация",
      contactInfo: "Контакты",
      address: "Pinnawala, Rambukkana 71100, Кегалле, Шри-Ланка",
      phone: "+94 77 190 8272",
      whatsapp: "+94 77 190 8272",
      rights: "Все права защищены. PINNAWALA ELEPHANT TOUR.",
      disclaimer: "Все встречи со слонами проводятся со строгим уважением к животным. Проживание, ресторан и экскурсии подтверждаются напрямую администрацией.",
    },
  },
  de: {
    siteTitle: "PINNAWALA ELEPHANT TOUR",
    siteSubtitle: "Luck Uyana Cabana & Pinnawala Reach • Unterkünfte & Restaurant",
    nav: {
      experiences: "Elefanten",
      stays: "Unterkünfte",
      dining: "Restaurant",
      itineraries: "Reiserouten",
      gallery: "Galerie",
      contact: "Kontakt",
      bookNow: "Aufenthalt planen",
      whatsapp: "WhatsApp",
    },
    hero: {
      kicker: "Pinnawala, Sri Lanka",
      mainTitle: "PINNAWALA ELEPHANT TOUR",
      subtitle: "Artgerechter Elefantenalltag • Ruhiger Aufenthalt am Fluss & Restaurant",
      description:
        "Pinnawalas erste Adresse für achtsame Elefantenbegegnungen am Fluss Maha Oya. Wohnen Sie in den privaten Natur-Cabanas von Luck Uyana oder modernen Zimmern im Pinnawala Reach mit authentischem Restaurant und Ayurveda-Garten.",
      planTrip: "Besuch planen",
      whatsappUs: "Per WhatsApp anfragen",
      exploreExperiences: "Erlebnisse entdecken",
      featureCabanas: "4 Luxus-Cabanas",
      featureRooms: "7 Boutique-Zimmer",
      featureRestaurant: "Traditionelles Restaurant",
      featureMahaOya: "Maha Oya Flusslage",
    },
    elephants: {
      kicker: "Sanfte Riesen & Natur",
      title: "Der Tagesablauf der Elefanten",
      subtitle: "Respektvolle Beobachtung im natürlichen Rhythmus am idyllischen Flusslauf des Maha Oya.",
      charterTitle: "Verantwortungsvoller Tierschutz",
      charterText: "Wir achten die Würde der Elefanten von Pinnawala. Keine Kunststücke oder touristische Zwangsshows. Reine Beobachtung beim Baden im Fluss, ausgewogene Fütterung und jahrhundertealtes Wissen der Mahouts.",
      experiences: [
        {
          id: "river-bath",
          title: "Elefantenbad im Maha Oya",
          time: "10:00 Uhr & 14:00 Uhr",
          description: "Erleben Sie die Herden beim erfrischenden Bad im Flusslauf von ruhigen Aussichtsterrassen aus.",
          highlight: "Spektakuläre Aussichtspunkte am Flussufer",
        },
        {
          id: "daily-nutrition",
          title: "Artgerechte Fütterung",
          time: "09:00 Uhr & 13:00 Uhr",
          description: "Wissenswertes über die Ernährung mit Palmwedeln, frischen Früchten und Kräutern.",
          highlight: "Erfahrene Einblicke durch Mahouts",
        },
        {
          id: "gentle-walk",
          title: "Spaziergang im Grünen",
          time: "Morgens & Nachmittags",
          description: "Ruhige Waldwege, auf denen Elefanten ungestört grasen und die Natur genießen.",
          highlight: "Friedliche und erholsame Umgebung",
        },
        {
          id: "care-vet",
          title: "Mahout-Tradition & Tierwohl",
          time: "Täglich nach Plan",
          description: "Traditionelle Fell- und Fußpflege mit Kokosschalen und pflanzlicher Naturheilkunde.",
          highlight: "Gelebte Kultur und artgerechte Haltung",
        },
      ],
    },
    stays: {
      kicker: "Pinnawalas Hauptunterkünfte",
      title: "Luck Uyana Cabana & Pinnawala Reach",
      subtitle: "Zwei Boutique-Unterkünfte unter einer Leitung: Natur-Cabanas, moderne Zimmer und hauseigenes Restaurant.",
      cabanaTab: "Luck Uyana Cabana (4 Cabanas)",
      roomTab: "Pinnawala Reach (7 Zimmer)",
      cabanaTitle: "Luck Uyana Cabana — Private Naturidylle",
      cabanaDesc: "Vier freistehende Holzcabanas im tropischen Palmengarten. Edles Teakholz, großzügige Holzveranda, Freiluft-Natursteinbad und beruhigende Naturgeräusche.",
      roomTitle: "Pinnawala Reach — Boutique-Eleganz am Fluss",
      roomDesc: "Sieben geschmackvolle Boutique-Zimmer nur wenige Schritte vom Maha Oya entfernt. Flüsterleise Klimaanlage, Balkone mit Grünblick und moderne Bäder.",
      bookCabana: "Cabana anfragen",
      bookRoom: "Zimmer anfragen",
      restaurantNote: "Beide Häuser bieten unser traditionelles Restaurant mit regionalen Spezialitäten, frischem Tropenfrühstück und Abendessen bei Kerzenschein.",
    },
    ayurveda: {
      kicker: "Traditionelle Heilkunde",
      title: "Ayurveda Heilkräutergarten",
      subtitle: "5.000 Jahre sri-lankische Naturheilkunde in unserem lebendigen Kräutergarten.",
      description: "Auf fruchtbarem Boden am Fluss gedeihen über 100 heimische Heilpflanzen, Gewürze und Heilbäume nach alter ayurvedischer Tradition.",
      features: [
        {
          title: "Botanischer Rundgang",
          description: "Erfahren Sie, wie aus Blättern, Wurzeln und Rinden heilsame Tees und Öle gewonnen werden.",
        },
        {
          title: "Ceylon-Gewürze",
          description: "Echter Ceylon-Zimt, wilder Kardamom, Zitronengras, Sandelholz, Neem und Gotu Kola.",
        },
        {
          title: "Heilsame Kräutertees",
          description: "Genießen Sie frisch aufgebrühten Tee aus Koriander, Ingwer und Belimal-Blüten.",
        },
        {
          title: "Traditionelle Beratung",
          description: "Einblicke in natürliche Balance und Kräuteranwendung. Auf Deutsch und Englisch erklärt.",
        },
      ],
      botanicalsTitle: "Heilpflanzen unseres Gartens",
      botanicals: [
        "Ceylon-Zimt (Cinnamomum verum)",
        "Weißes Sandelholz (Santalum album)",
        "Gotu Kola (Centella asiatica)",
        "Wilde Kurkuma & Ingwer",
        "Neem-Baum (Azadirachta indica)",
        "Aloe Vera & Kräuterbalsame",
      ],
    },
    plans: {
      kicker: "Reiserouten",
      title: "Sri Lanka Reiserouten",
      subtitle: "Vom Tagesausflug nach Pinnawala bis zur 7-tägigen Rundreise durchs Hochland und an die Südküste.",
      tagline: "YOUR SRI LANKA. YOUR WAY.",
      ctaEnquire: "Route anfragen",
    },
    dining: {
      kicker: "Restaurant & Kulinarik",
      title: "Essen & Traditionelle Kulinarik",
      subtitle: "Echte sri-lankische Küche in den Restaurants von Luck Uyana Cabana und Pinnawala Reach.",
      intro: "Unsere Köche verwenden frische Bio-Zutaten, Kokosmilch und aromatische Gewürze aus unserem eigenen Garten.",
      luckUyanaDining: {
        title: "Luck Uyana Garten-Restaurant",
        desc: "Entspanntes Essen mitten im Grünen: Tontopf-Currys, knusprige Hoppers und Dinner bei Kerzenschein.",
      },
      pinnawalaReachDining: {
        title: "Pinnawala Reach Dining-Lounge",
        desc: "Stilvolles Speisen mit Flussbrise, frischem Tropenfrühstück und europäischen Optionen.",
      },
      authenticFlavors: {
        title: "Tontopf-Currys & Tropenfrühstück",
        desc: "Schonend gegartes Linsencurry, Jackfrucht, Pol Sambol, reife Papaya und bester Ceylon-Tee.",
      },
      note: "Vegetarische, vegane und europäische Speisen frisch zubereitet. Transparente Preise vor Ort mit dem Gastgeber.",
    },
    gallery: {
      kicker: "Fotogalerie",
      title: "Impressionen der Ruhe",
      subtitle: "Fotos unserer Cabanas, Zimmer, Elefanten am Fluss, Kräutergarten und Restaurant.",
      all: "Alle",
      stays: "Unterkünfte",
      elephants: "Elefanten",
      ayurveda: "Kräutergarten",
      dining: "Restaurant",
      surroundings: "Umgebung",
    },
    packages: {
      kicker: "Reisepakete",
      title: "Individuelle Pakete",
      subtitle: "Comfort, Premium und Luxus für Paare und Familien.",
      tagline: "YOUR SRI LANKA. YOUR WAY.",
      couple: "Für Paare",
      family: "Für Familien",
      includes: "Inklusive:",
      inquirePrice: "Preis anfragen",
    },
    booking: {
      kicker: "Buchung",
      title: "Unverbindliche Reiseanfrage",
      subtitle: "Teilen Sie uns Ihre Reisewünsche mit. Wir antworten umgehend mit verbindlichen Details.",
      nameLabel: "Vollständiger Name",
      namePlaceholder: "z.B. Thomas Müller",
      emailLabel: "E-Mail oder WhatsApp / Telefon",
      emailPlaceholder: "z.B. thomas@beispiel.de oder +49 170 1234567",
      countryLabel: "Wohnsitzland",
      countryPlaceholder: "z.B. Deutschland, Österreich, Schweiz",
      checkInLabel: "Anreisedatum",
      checkOutLabel: "Abreisedatum",
      guestsLabel: "Anzahl Gäste",
      propertyLabel: "Bevorzugte Unterkunft",
      propertySelectOption: "Unterkunft wählen...",
      propertyCabanas: "Luck Uyana Cabana (4 Luxus-Cabanas)",
      propertyRooms: "Pinnawala Reach (7 Luxus-Zimmer)",
      propertyUndecided: "Noch unentschlossen — Bitte beraten",
      experienceLabel: "Gewünschtes Reiseprogramm",
      experienceSelectOption: "Programm wählen...",
      messageLabel: "Besondere Wünsche",
      messagePlaceholder: "Flugzeiten, Ernährungsbesonderheiten oder gewünschte Ausflugsziele...",
      consentText: "Ich stimme der Kontaktaufnahme bezüglich dieser Anfrage zu.",
      submitForm: "Anfrage absenden",
      sendWhatsapp: "Sofort per WhatsApp anfragen",
      whatsappDirectTip: "Direkter WhatsApp-Kontakt: +94 77 190 8272",
      successTitle: "Anfrage erhalten",
      successMessage: "Ayubowan! Wir haben Ihre Anfrage erhalten und melden uns umgehend. Sie können die Anfrage auch direkt per WhatsApp senden.",
      closeModal: "Schließen",
    },
    footer: {
      desc: "PINNAWALA ELEPHANT TOUR ist Ihr erfahrener Gastgeber in Pinnawala, Sri Lanka. Mit den 4 Natur-Cabanas von Luck Uyana, den 7 Zimmern von Pinnawala Reach, authentischem Restaurant und lebendigem Ayurveda-Garten.",
      quickLinks: "Navigation",
      contactInfo: "Kontakt",
      address: "Pinnawala, Rambukkana 71100, Kegalle, Sri Lanka",
      phone: "+94 77 190 8272",
      whatsapp: "+94 77 190 8272",
      rights: "Alle Rechte vorbehalten. PINNAWALA ELEPHANT TOUR.",
      disclaimer: "Alle Elefantenaktivitäten erfolgen unter strenger Beachtung des Tierwohls. Buchungen für Cabanas, Zimmer und Restaurant erfolgen direkt über die Betriebsleitung.",
    },
  },
};
