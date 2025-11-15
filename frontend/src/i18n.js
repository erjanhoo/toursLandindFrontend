import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navigation: {
        links: [
          { href: '#home', label: 'HOME' },
          { href: '#tours', label: 'TOURS' },
          { href: '#itinerary', label: 'ITINERARY' },
          { href: '#services', label: 'SERVICES' },
          { href: '#gallery', label: 'GALLERY' },
        ],
        inquire: 'INQUIRE NOW',
        toggle: {
          label: {
            en: 'EN',
            ru: 'RU',
          },
          languageNames: {
            en: 'English',
            ru: 'Russian',
          },
          aria: 'Switch language to {{lang}}',
        },
      },
      hero: {
        badge: 'Discover Asia’s Hidden Switzerland',
        titleMain: 'Winter Majesty',
        titleLocation: 'Almaty & Karakol',
        subtitle:
          'Crafted for curious travelers seeking alpine adventure, cultural immersion, and warm hospitality.',
        ctaPrimary: 'Plan your trip',
        ctaSecondary: 'View inclusions',
        stats: [
          { label: 'Duration', value: '7 Days · 6 Nights' },
          { label: 'Season', value: 'December – March' },
          { label: 'Destinations', value: 'Almaty · Karakol' },
          { label: 'Group Size', value: 'Up to 12 travelers' },
        ],
        note: 'Curated by Sky Journey specialists with 12+ years hosting Kyrgyzstan expeditions.',
      },
      experience: {
        highlights: [
          {
            icon: 'curated',
            title: 'Curated Winter Journeys',
            description:
              'Designed by local experts who live the mountains every season. Expect small details that elevate each day.',
          },
          {
            icon: 'hospitality',
            title: 'Signature Hospitality',
            description:
              'Warm hotels, handcrafted dining, and stories shared fireside with new friends—hospitality with heart.',
          },
          {
            icon: 'logistics',
            title: 'Effortless Logistics',
            description:
              'Private transport, priority access, and concierge support let you focus on the adventure, not the planning.',
          },
        ],
      },
      tours: {
        eyebrow: 'Choose your season',
        heading: 'Signature Kyrgyzstan Journeys',
        description:
          'From frozen lakes to spring valleys, each departure is limited to small groups for an intimate experience.',
        cards: [
          {
            title: 'Kyrgyzstan Winter Adventure Tour',
            meta: '7 DAYS · 10-16 February 2026',
            tag: 'Signature Journey',
            description:
              'Thrilling winter adventures among snow-covered peaks with curated cultural moments and cozy evenings.',
            image:
              'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070&auto=format&fit=crop',
          },
          {
            title: 'Frozen Lakes & Photo Expedition',
            meta: '5 DAYS · 10-14 January 2026',
            tag: 'Photography Focus',
            description:
              'Glide across crystal lakes, capture the surreal frozen landscapes, and master winter photography in the wild.',
            image:
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
          },
          {
            title: 'Spring Highlights of Kyrgyzstan',
            meta: '7 DAYS · 24-30 April 2026',
            tag: 'Seasonal Escape',
            description:
              'Witness blooming valleys, eagle hunting traditions, and mountain canyons bursting with color and life.',
            image:
              'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
          },
          {
            title: 'Ultimate Mountain Stays',
            meta: '8 DAYS · 2-9 May 2026',
            tag: 'Design Retreat',
            description:
              'Stay in designer domes, eco-lodges, and modern yurts while exploring alpine trails with boutique comforts.',
            image:
              'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2070&auto=format&fit=crop',
          },
          {
            title: 'Southern Kyrgyzstan Photo Tour',
            meta: '9 DAYS · 17-25 June 2026',
            tag: 'Explorer Series',
            description:
              'Capture Silk Road history, dramatic canyons, and vibrant local culture on a photographer’s dream itinerary.',
            image:
              'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop',
          },
        ],
      },
      itinerary: {
        eyebrow: 'Day by day',
        heading: 'Your 7-Day Winter Journey',
        description:
          'A balanced rhythm of alpine adventure, cultural connection, and restorative downtime.',
        days: [
          {
            day: 'Day 1',
            title: 'Welcome to Almaty',
            intro:
              'Step into a city where snowy peaks meet golden lights. Your journey begins the moment you land.',
            schedule: [
              { label: 'Arrival', detail: 'Depending on flight schedule' },
              { label: 'Check-in', detail: 'Hotel Abay Residence' },
              { label: 'Lunch', detail: 'Navat Restaurant' },
              {
                label: 'Afternoon',
                detail: 'Visit Kok Tobe for panoramic views and city attractions',
              },
              { label: 'Dinner', detail: 'Navat Restaurant at 19:00' },
              { label: 'Evening', detail: 'Leisure time & rest' },
              { label: 'Overnight', detail: 'Almaty' },
            ],
          },
          {
            day: 'Day 2',
            title: 'Almaty Highlights & Cultural Immersion',
            intro: 'Feel the energy of Almaty — vibrant, alive, and wrapped in snow.',
            schedule: [
              { label: 'Breakfast', detail: 'At hotel (08:00 – 10:00)' },
              { label: 'Departure', detail: '10:30 guided city tour with lunch break' },
              {
                label: 'Activities',
                detail: [
                  'Medeu Ice Rink set among the mountains',
                  'Shymbulak Ski Resort cable car & alpine views',
                  'Green Bazaar tasting local delicacies',
                  'Panfilov Park & Zenkov Cathedral stroll',
                ],
              },
              { label: 'Break', detail: 'Tea / coffee & short rest' },
              {
                label: 'Dinner',
                detail: 'Sandyq Restaurant (18:00) with live performance',
              },
              { label: 'Evening', detail: 'Turkish bath experience (20:00)' },
              { label: 'Overnight', detail: 'Almaty' },
            ],
          },
          {
            day: 'Day 3',
            title: 'Scenic Journey to Karakol',
            intro: 'A road through winter’s postcard — every turn, pure magic.',
            schedule: [
              { label: 'Breakfast', detail: '08:00 – 10:00' },
              { label: 'Morning', detail: 'Packing & checkout' },
              {
                label: 'Departure',
                detail: '11:00 with time for traffic and border crossing',
              },
              { label: 'Lunch', detail: 'En route' },
              {
                label: 'Arrival',
                detail: 'Karakol between 16:30 – 17:30, check-in & refresh',
              },
              {
                label: 'Evening',
                detail: 'Ski equipment fitting & orientation (~18:30)',
              },
              { label: 'Dinner', detail: '19:30 – 20:00' },
              { label: 'Overnight', detail: 'Karakol' },
            ],
          },
          {
            day: 'Day 4',
            title: 'First Ski Adventure',
            intro: 'Ski where the snow is fresh, the air pure, and the views endless.',
            schedule: [
              { label: 'Breakfast', detail: '08:00 – 10:00' },
              {
                label: 'Activity',
                detail: 'Skiing session 11:00 – 16:00 at Karakol Ski Base',
              },
              {
                label: 'Afternoon',
                detail: 'Return to hotel and unwind with warm tea',
              },
              { label: 'Dinner', detail: '19:00' },
              { label: 'Overnight', detail: 'Karakol' },
            ],
          },
          {
            day: 'Day 5',
            title: 'Full Ski Day & Cultural Evening',
            intro: 'Freedom on the slopes, folklore by night.',
            schedule: [
              { label: 'Breakfast', detail: '08:00 – 10:00' },
              { label: 'Morning', detail: 'Leisure time or light activity' },
              { label: 'Activity', detail: 'Skiing 11:00 – 16:00' },
              {
                label: 'Afternoon',
                detail: 'Rest with optional hot drink break',
              },
              {
                label: 'Dinner',
                detail: '19:00 with traditional music & performance',
              },
              { label: 'Overnight', detail: 'Karakol' },
            ],
          },
          {
            day: 'Day 6',
            title: 'Horse Riding, City Tour & Hot Springs',
            intro: 'Ride through winter forests and soak in thermal waters.',
            schedule: [
              { label: 'Breakfast', detail: '08:00 – 10:00' },
              { label: 'Morning', detail: 'Guided horse ride through snowy trails' },
              {
                label: 'Afternoon',
                detail: 'Karakol city tour & Aksuu Hot Springs visit',
              },
              {
                label: 'Evening',
                detail: 'Relax in natural thermal pools with mountain views',
              },
              { label: 'Dinner', detail: '19:00' },
              { label: 'Overnight', detail: 'Karakol' },
            ],
          },
          {
            day: 'Day 7',
            title: 'Return to Almaty',
            intro: 'Goodbye mountains, hello memories.',
            schedule: [
              { label: 'Breakfast', detail: '08:00 – 10:00' },
              {
                label: 'Departure',
                detail: '11:00 return to Almaty with border formalities',
              },
              {
                label: 'Arrival',
                detail: 'End of services & onward travel arrangements',
              },
            ],
          },
        ],
      },
      essentials: {
        eyebrow: 'Living well on the road',
        heading: 'Where comfort meets adventure',
        description:
          'Thoughtfully curated stays, dining, and signature moments keep you inspired and well cared for.',
        cards: [
          {
            icon: 'dining',
            title: 'Dining Program',
            description:
              'Experience authentic flavors that reflect the soul of Kyrgyzstan.',
            points: [
              'Daily breakfast at the hotel included',
              'Hand-picked local restaurants for lunches & dinners',
              'Traditional, European, and Asian influences',
              'Signature dishes: tender lamb, fresh bread, local delicacies, warm tea by the fire',
            ],
            footnote: 'Good food. Warm places. Unforgettable moments.',
          },
          {
            icon: 'stays',
            title: 'Boutique Stays',
            description:
              'Carefully selected hotels designed for rest after winter adventures.',
            points: [
              'Almaty · Abay Hotel Residence',
              'Karakol · Suncor Hotel',
              'Twin or double rooms with private bathrooms & heating',
              'Single room upgrades available on request',
              'Wi-Fi and central locations close to dining & culture',
            ],
            footnote: 'Wake up to the quiet beauty of snow-covered mornings.',
          },
          {
            icon: 'experiences',
            title: 'Signature Experiences',
            description:
              'Every day blends alpine adventure with cultural immersion.',
            points: [
              'Horse riding through snowy valleys with expert guides',
              'Aksuu Hot Springs soak beneath winter skies',
              'Turkish bath (hamam) detox evening',
              'Cultural dinner with live music and folklore',
              '2-day ski pass with equipment included',
            ],
            footnote: 'Adventure with heart, hosted by local storytellers.',
          },
        ],
      },
      inclusions: {
        eyebrow: 'Transparent pricing',
        heading: 'What’s included & what’s not',
        included: {
          heading: 'Included in your journey',
          items: [
            '6 nights premium accommodation in Almaty & Karakol',
            'Daily breakfast plus selected lunches and dinners',
            'Modern private transport with driver & local guide',
            'Almaty city tour: Kok Tobe, Medeu, Shymbulak & cultural landmarks',
            '2-day ski pass with equipment rental (ski/snowboard, boots & poles)',
            'Guided horse riding through snowy mountains',
            'Visit to Aksuu Hot Springs with entrance fees',
            'Cultural dinner with live music and folklore performance',
            'Authentic Turkish bath (hamam) session',
            'All local taxes and standard service charges',
          ],
        },
        excluded: {
          heading: 'Not included',
          items: [
            'International flights and any entry visas',
            'Comprehensive travel insurance (required)',
            'Personal expenses such as souvenirs, snacks, alcoholic beverages, laundry, or room service',
            'Meals not specified in the itinerary to allow personal exploration',
            'Additional services at the Turkish bath (massages, specialty drinks)',
            'Optional excursions and gratuities for guides, drivers, or hotel staff',
          ],
        },
      },
      packing: {
        eyebrow: 'Winter packing edit',
        heading: 'What to bring',
        items: [
          'Layered winter clothing—base layers, warm mid-layers, waterproof shell',
          'Insulated gloves or mittens for skiing, riding, and walks',
          'Warm hat or beanie plus neck gaiter or scarf',
          'Thermal or wool socks (extra pairs recommended)',
          'Waterproof snow boots or insulated hiking boots',
          'Swimsuit for the hot springs experience',
          'Sunglasses or ski goggles for bright snow glare',
          'Sunscreen and SPF lip balm (winter sun still shines)',
        ],
      },
      special: {
        eyebrow: 'Why travelers love it',
        heading: 'This isn’t just a trip—it’s your winter fairytale',
        description:
          '“Not Switzerland… but it feels like it—with more heart.” Hear what guests highlight the most.',
        highlights: [
          {
            icon: 'ski',
            title: 'Skiing Like Nowhere Else',
            copy:
              'Carve fresh lines in soft powder with panoramic alpine views and quiet slopes tailored to your pace.',
          },
          {
            icon: 'springs',
            title: 'Hot Springs Under the Stars',
            copy:
              'Soak in mineral pools framed by snow-capped peaks—feel the warmth of the water against the crisp night air.',
          },
          {
            icon: 'horse',
            title: 'Horse Riding in the Snow',
            copy:
              'Ride through spruce forests and white valleys guided by local horsemen who know every hidden trail.',
          },
          {
            icon: 'dining',
            title: 'Authentic Flavors & Warm Hospitality',
            copy:
              'Savor tender lamb, traditional bread, and fragrant teas by the fire—each meal a celebration of Kyrgyz culture.',
          },
        ],
      },
      services: {
        eyebrow: 'Beyond the itinerary',
        heading: 'Creative services from Sky Journey',
        cards: [
          {
            title: 'Drone visuals',
            description:
              'State-of-the-art aerial footage to capture your journey or promote your brand from breathtaking angles.',
          },
          {
            title: 'Photo tours',
            description:
              'Signature photo coaching in the field—return home with magazine-worthy captures and new skills.',
          },
          {
            title: 'Tailored tour packages',
            description:
              'From weekend escapes to multi-country itineraries, we craft stress-free journeys with exceptional service.',
          },
          {
            title: 'Brand collaborations',
            description:
              'Partner with @skyjourney for story-driven content, product launches, and authentic regional campaigns.',
          },
        ],
      },
      gallery: {
        eyebrow: 'Visual journal',
        heading: 'Scenes from recent expeditions',
        images: [
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
            alt: 'Everest north face valley with snow',
          },
          {
            src: 'https://img.freepik.com/free-photo/sunset-snow-capped-mountains_23-2152014205.jpg?semt=ais_hybrid&w=740&q=80',
            alt: 'Sunset over snow capped mountains',
          },
          {
            src: 'https://media.timeout.com/images/106150176/image.jpg',
            alt: 'Snowy valley with atmospheric light',
          },
          {
            src: 'https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg',
            alt: 'Alpine meadow with sunrise in the Dolomites',
          },
          {
            src: 'https://cdn.mos.cms.futurecdn.net/7p3dtLbDPmDEjLVa3zafen.jpg',
            alt: 'Ski tracks in a snowy valley',
          },
          {
            src: 'https://geographical.co.uk/wp-content/uploads/Photographing-mountains-in-spring-1200x800.jpg',
            alt: 'Snowy valley during spring sunrise',
          },
        ],
      },
      footer: {
        tagline: 'Crafting modern adventures across Kyrgyzstan & Central Asia.',
        note: '© {{year}} Sky Journey. All rights reserved.',
      },
    },
  },
  ru: {
    translation: {
      navigation: {
        links: [
          { href: '#home', label: 'ГЛАВНАЯ' },
          { href: '#tours', label: 'ТУРЫ' },
          { href: '#itinerary', label: 'МАРШРУТ' },
          { href: '#services', label: 'УСЛУГИ' },
          { href: '#gallery', label: 'ГАЛЕРЕЯ' },
        ],
        inquire: 'ОТПРАВИТЬ ЗАПРОС',
        toggle: {
          label: {
            en: 'EN',
            ru: 'RU',
          },
          languageNames: {
            en: 'английский',
            ru: 'русский',
          },
          aria: 'Переключить язык на {{lang}}',
        },
      },
      hero: {
        badge: 'Откройте скрытую Швейцарию Азии',
        titleMain: 'Зимнее величие',
        titleLocation: 'Алматы и Каракол',
        subtitle:
          'Создано для любознательных путешественников, которые ищут горные приключения, культурное погружение и тёплый приём.',
        ctaPrimary: 'Спланировать поездку',
        ctaSecondary: 'Посмотреть включения',
        stats: [
          { label: 'Продолжительность', value: '7 дней · 6 ночей' },
          { label: 'Сезон', value: 'Декабрь – март' },
          { label: 'Направления', value: 'Алматы · Каракол' },
          { label: 'Размер группы', value: 'До 12 путешественников' },
        ],
        note: 'Создано специалистами Sky Journey с более чем 12 годами опыта экспедиций по Кыргызстану.',
      },
      experience: {
        highlights: [
          {
            icon: 'curated',
            title: 'Авторские зимние маршруты',
            description:
              'Разработаны местными экспертами, которые живут горами круглый год. Каждая деталь делает день особенным.',
          },
          {
            icon: 'hospitality',
            title: 'Уникальное гостеприимство',
            description:
              'Тёплые отели, авторская кухня и истории у камина с новыми друзьями — гостеприимство с душой.',
          },
          {
            icon: 'logistics',
            title: 'Продуманная логистика',
            description:
              'Частный транспорт, приоритетный доступ и поддержка консьерж-сервиса оставят вам только приключения.',
          },
        ],
      },
      tours: {
        eyebrow: 'Выберите свой сезон',
        heading: 'Фирменные путешествия по Кыргызстану',
        description:
          'От ледяных озёр до весенних долин — каждая дата рассчитана на небольшие группы для камерной атмосферы.',
        cards: [
          {
            title: 'Зимнее приключение в Кыргызстане',
            meta: '7 ДНЕЙ · 10–16 февраля 2026',
            tag: 'Фирменный тур',
            description:
              'Захватывающие зимние приключения среди заснеженных вершин, дополненные культурными моментами и уютными вечерами.',
            image:
              'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070&auto=format&fit=crop',
          },
          {
            title: 'Ледяные озёра и фотоэкспедиция',
            meta: '5 ДНЕЙ · 10–14 января 2026',
            tag: 'Фотография',
            description:
              'Скользите по кристальным озёрам, снимайте сюрреалистичные пейзажи и осваивайте зимнюю съёмку в дикой природе.',
            image:
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
          },
          {
            title: 'Весенние краски Кыргызстана',
            meta: '7 ДНЕЙ · 24–30 апреля 2026',
            tag: 'Сезонный побег',
            description:
              'Наблюдайте цветущие долины, охоту с орлами и каньоны, наполненные красками и жизнью.',
            image:
              'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
          },
          {
            title: 'Лучшие горные отели',
            meta: '8 ДНЕЙ · 2–9 мая 2026',
            tag: 'Дизайнерский ретрит',
            description:
              'Живите в дизайнерских куполах, эко-лоджах и современных юртах, исследуя альпийские тропы с комфортом boutique-класса.',
            image:
              'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2070&auto=format&fit=crop',
          },
          {
            title: 'Фото-тур по югу Кыргызстана',
            meta: '9 ДНЕЙ · 17–25 июня 2026',
            tag: 'Экспедиционный тур',
            description:
              'Снимайте наследие Великого шёлкового пути, драматичные каньоны и яркую местную культуру в туре мечты фотографа.',
            image:
              'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop',
          },
        ],
      },
      itinerary: {
        eyebrow: 'День за днём',
        heading: 'Ваш 7-дневный зимний маршрут',
        description:
          'Сбалансированное сочетание горных приключений, культурных встреч и времени для восстановления.',
        days: [
          {
            day: 'День 1',
            title: 'Добро пожаловать в Алматы',
            intro:
              'Город, где снежные вершины встречаются с золотыми огнями. Путешествие начинается сразу по прилёте.',
            schedule: [
              { label: 'Прибытие', detail: 'В зависимости от расписания рейсов' },
              { label: 'Размещение', detail: "Отель Abay Residence" },
              { label: 'Обед', detail: 'Ресторан Navat' },
              {
                label: 'Днём',
                detail: 'Подъём на Кок-Тобе с панорамными видами и городскими развлечениями',
              },
              { label: 'Ужин', detail: 'Navat в 19:00' },
              { label: 'Вечер', detail: 'Свободное время и отдых' },
              { label: 'Ночь', detail: 'Алматы' },
            ],
          },
          {
            day: 'День 2',
            title: 'Алматы: главные места и культура',
            intro: 'Почувствуйте энергию Алматы — яркого, живого и укрытого снегом.',
            schedule: [
              { label: 'Завтрак', detail: 'В отеле (08:00 – 10:00)' },
              { label: 'Выезд', detail: '10:30 — обзорная экскурсия по городу с перерывом на обед' },
              {
                label: 'Активности',
                detail: [
                  'Каток Медеу среди горных склонов',
                  'Канатная дорога и виды Шымбулака',
                  'Зелёный базар и дегустация местных деликатесов',
                  'Парк Панфилова и прогулка к собору Зенкова',
                ],
              },
              { label: 'Перерыв', detail: 'Чай, кофе и короткий отдых' },
              {
                label: 'Ужин',
                detail: 'Ресторан Sandyq (18:00) с живой программой',
              },
              { label: 'Вечер', detail: 'Турецкая баня (хамам) в 20:00' },
              { label: 'Ночь', detail: 'Алматы' },
            ],
          },
          {
            day: 'День 3',
            title: 'Живописная дорога в Каракол',
            intro: 'Путешествие через зимнюю открытку — каждый поворот полон магии.',
            schedule: [
              { label: 'Завтрак', detail: '08:00 – 10:00' },
              { label: 'Утро', detail: 'Сборы и выезд из отеля' },
              {
                label: 'Переезд',
                detail: 'Отправление в 11:00 с учётом дороги и прохождения границы',
              },
              { label: 'Обед', detail: 'По пути' },
              {
                label: 'Прибытие',
                detail: 'Каракол около 16:30 – 17:30, размещение и отдых',
              },
              {
                label: 'Вечер',
                detail: 'Подбор горнолыжного снаряжения и ориентация (~18:30)',
              },
              { label: 'Ужин', detail: '19:30 – 20:00' },
              { label: 'Ночь', detail: 'Каракол' },
            ],
          },
          {
            day: 'День 4',
            title: 'Первый день на склонах',
            intro: 'Снег свежий, воздух чистый, виды бесконечны.',
            schedule: [
              { label: 'Завтрак', detail: '08:00 – 10:00' },
              {
                label: 'Активность',
                detail: 'Катание на базе Karakol с 11:00 до 16:00',
              },
              {
                label: 'Днём',
                detail: 'Возвращение в отель и отдых с тёплым чаем',
              },
              { label: 'Ужин', detail: '19:00' },
              { label: 'Ночь', detail: 'Каракол' },
            ],
          },
          {
            day: 'День 5',
            title: 'Целый день катания и этно-вечер',
            intro: 'Свобода на склонах днём, фольклор вечером.',
            schedule: [
              { label: 'Завтрак', detail: '08:00 – 10:00' },
              { label: 'Утро', detail: 'Свободное время или лёгкая активность' },
              { label: 'Активность', detail: 'Катание 11:00 – 16:00' },
              {
                label: 'Днём',
                detail: 'Отдых с возможностью горячих напитков',
              },
              {
                label: 'Ужин',
                detail: '19:00 с традиционной музыкой и выступлением',
              },
              { label: 'Ночь', detail: 'Каракол' },
            ],
          },
          {
            day: 'День 6',
            title: 'Конные прогулки, город и горячие источники',
            intro: 'Прокатитесь по зимнему лесу и расслабьтесь в термальных водах.',
            schedule: [
              { label: 'Завтрак', detail: '08:00 – 10:00' },
              { label: 'Утро', detail: 'Конная прогулка по заснеженным тропам с инструктором' },
              {
                label: 'Днём',
                detail: 'Экскурсия по Караколу и посещение горячих источников Ак-Суу',
              },
              {
                label: 'Вечер',
                detail: 'Отдых в природных термальных бассейнах с видом на горы',
              },
              { label: 'Ужин', detail: '19:00' },
              { label: 'Ночь', detail: 'Каракол' },
            ],
          },
          {
            day: 'День 7',
            title: 'Возвращение в Алматы',
            intro: 'Прощай, горы. Здравствуй, воспоминания.',
            schedule: [
              { label: 'Завтрак', detail: '08:00 – 10:00' },
              {
                label: 'Выезд',
                detail: 'Отправление в 11:00 обратно в Алматы с прохождением границы',
              },
              {
                label: 'Финиш',
                detail: 'Завершение услуг и дальнейший маршрут по вашему желанию',
              },
            ],
          },
        ],
      },
      essentials: {
        eyebrow: 'Комфорт в путешествии',
        heading: 'Где комфорт встречается с приключением',
        description:
          'Продуманные размещения, питание и особые моменты сохранят вдохновение и ощущение заботы.',
        cards: [
          {
            icon: 'dining',
            title: 'Программа питания',
            description:
              'Познакомьтесь с подлинными вкусами, отражающими дух Кыргызстана.',
            points: [
              'Ежедневные завтраки в отеле включены',
              'Отобранные местные рестораны для обедов и ужинов',
              'Сочетание традиционной, европейской и азиатской кухни',
              'Фирменные блюда: нежная баранина, свежий лепёшки, местные деликатесы и тёплый чай у огня',
            ],
            footnote: 'Вкусная еда. Тёплые места. Незабываемые моменты.',
          },
          {
            icon: 'stays',
            title: 'Бутик-размещение',
            description:
              'Тщательно подобранные отели для отдыха после зимних приключений.',
            points: [
              'Алматы · Abay Hotel Residence',
              'Каракол · Suncor Hotel',
              'Двухместные номера с личными ванными комнатами и отоплением',
              'Возможен апгрейд до одноместного размещения по запросу',
              'Wi-Fi и центральное расположение рядом с культурой и гастрономией',
            ],
            footnote: 'Просыпайтесь с видом на тихие заснеженные утра.',
          },
          {
            icon: 'experiences',
            title: 'Фирменные впечатления',
            description:
              'Каждый день сочетает горные приключения и культурное погружение.',
            points: [
              'Конные прогулки по снежным долинам с опытными проводниками',
              'Горячие источники Ак-Суу под зимним небом',
              'Вечер в турецкой бане (хамам) для восстановления',
              'Культурный ужин с живой музыкой и фольклором',
              'Двухдневный ски-пасс со снаряжением включен',
            ],
            footnote: 'Приключения с душой и местными рассказчиками.',
          },
        ],
      },
      inclusions: {
        eyebrow: 'Прозрачная стоимость',
        heading: 'Что включено и что нет',
        included: {
          heading: 'Включено в тур',
          items: [
            '6 ночей проживания премиум-класса в Алматы и Караколе',
            'Ежедневные завтраки и выбранные обеды и ужины',
            'Современный частный транспорт с водителем и локальным гидом',
            'Экскурсия по Алматы: Кок-Тобе, Медеу, Шымбулак и культурные места',
            'Двухдневный ски-пасс с прокатом снаряжения (лыжи/сноуборд, ботинки и палки)',
            'Конные прогулки по заснеженным горам с гидом',
            'Посещение горячих источников Ак-Суу с входными билетами',
            'Культурный ужин с живой музыкой и фольклорным шоу',
            'Настоящая турецкая баня (хамам)',
            'Все местные налоги и стандартные сервисные сборы',
          ],
        },
        excluded: {
          heading: 'Не включено',
          items: [
            'Международные авиабилеты и визы (при необходимости)',
            'Полис комплексного страхования путешествий (обязательно)',
            'Личные расходы: сувениры, перекусы, алкоголь, прачечная, рум-сервис',
            'Питание вне программы маршрута для самостоятельных открытий',
            'Дополнительные услуги в хамаме (массажи, особые напитки)',
            'Опциональные экскурсии и чаевые гидам, водителям и персоналу',
          ],
        },
      },
      packing: {
        eyebrow: 'Список для зимы',
        heading: 'Что взять с собой',
        items: [
          'Многослойная зимняя одежда: базовые, утепляющие и влагозащитные слои',
          'Тёплые перчатки или варежки для катания, прогулок и верховой езды',
          'Тёплая шапка или бини и бафф/шарф для шеи',
          'Термоноски или шерстяные носки (включая запасные пары)',
          'Водонепроницаемые сапоги или утеплённые треккинговые ботинки',
          'Купальник для горячих источников',
          'Солнцезащитные очки или маска от яркого снежного света',
          'Крем с SPF и бальзам для губ с защитой (зимой солнце тоже активно)',
        ],
      },
      special: {
        eyebrow: 'Почему путешественники выбирают нас',
        heading: 'Это не просто поездка — это ваша зимняя сказка',
        description:
          '«Это не Швейцария… но ощущается именно так — только с большим сердцем». Узнайте, что ценят наши гости чаще всего.',
        highlights: [
          {
            icon: 'ski',
            title: 'Катание, которого вы не забудете',
            copy:
              'Режьте мягкий порошок с панорамными альпийскими видами и пустыми склонами в вашем темпе.',
          },
          {
            icon: 'springs',
            title: 'Горячие источники под звёздами',
            copy:
              'Расслабьтесь в минеральных бассейнах, окружённых снежными вершинами — почувствуйте контраст тепла и морозного воздуха.',
          },
          {
            icon: 'horse',
            title: 'Конные прогулки по снегу',
            copy:
              'Проезжайте через еловые леса и белые долины с местными наездниками, знающими каждый тропинку.',
          },
          {
            icon: 'dining',
            title: 'Аутентичные вкусы и тёплый приём',
            copy:
              'Наслаждайтесь нежной бараниной, традиционным хлебом и ароматным чаем у огня — каждый приём пищи празднует культуру Кыргызстана.',
          },
        ],
      },
      services: {
        eyebrow: 'Больше, чем маршрут',
        heading: 'Креативные услуги Sky Journey',
        cards: [
          {
            title: 'Дрон-съёмка',
            description:
              'Съёмка с новейших дронов, чтобы запечатлеть путешествие или продвинуть ваш бренд с высоты.',
          },
          {
            title: 'Фото-туры',
            description:
              'Авторские фото-коучинги в полевых условиях — вернитесь с кадрами уровня журнала и новыми навыками.',
          },
          {
            title: 'Индивидуальные турпакеты',
            description:
              'От уикендов до мультистрановых маршрутов — создаём путешествия без стресса с исключительным сервисом.',
          },
          {
            title: 'Брендовые коллаборации',
            description:
              'Партнёрство с @skyjourney для сторителлинга, запусков и аутентичных кампаний по региону.',
          },
        ],
      },
      gallery: {
        eyebrow: 'Визуальный дневник',
        heading: 'Кадры недавних экспедиций',
        images: [
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
            alt: 'Северная сторона Эвереста, долина под снегом',
          },
          {
            src: 'https://img.freepik.com/free-photo/sunset-snow-capped-mountains_23-2152014205.jpg?semt=ais_hybrid&w=740&q=80',
            alt: 'Закат над заснеженными горами',
          },
          {
            src: 'https://media.timeout.com/images/106150176/image.jpg',
            alt: 'Заснеженная долина с атмосферным светом',
          },
          {
            src: 'https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg',
            alt: 'Альпийский луг на рассвете в Доломитах',
          },
          {
            src: 'https://cdn.mos.cms.futurecdn.net/7p3dtLbDPmDEjLVa3zafen.jpg',
            alt: 'Горнолыжные следы в снежной долине',
          },
          {
            src: 'https://geographical.co.uk/wp-content/uploads/Photographing-mountains-in-spring-1200x800.jpg',
            alt: 'Весенний рассвет над заснеженной долиной',
          },
        ],
      },
      footer: {
        tagline: 'Современные приключения по Кыргызстану и Центральной Азии.',
        note: '© {{year}} Sky Journey. Все права защищены.',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
