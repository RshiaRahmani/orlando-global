export type Language = 'en' | 'ru' | 'tr';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      starlux: 'Starlux Mall',
      shopAndCoffee: 'Shop & Coffee',
      cyberX: 'CyberX Gaming',
      contact: 'Contact',
    },
    homepage: {
      hero: {
        title: 'Experience Orlando Global',
        subtitle: 'Your ultimate destination for entertainment, shopping, and gaming. Discover a world of possibilities with us.',
        cta: 'Get in Touch',
      },
      branches: {
        title: 'Our Branches',
        learnMore: 'Learn More',
      },
      mission: {
        title: 'Our Goal',
        text: 'To provide unparalleled experiences across all our ventures, creating memorable moments for every visitor through innovation, quality, and a commitment to excellence.',
      },
      gallery: {
        title: 'Glimpses of Our World',
      },
    },
    branches: {
      starlux: {
        title: 'Starlux Orlando Mall',
        description: 'A premium destination in Kyrenia featuring a cinema, the "Las Vegas" bar, fine dining, a kids room, and a VR arena.',
        galleryTitle: 'Starlux Gallery',
        cinema: {
          title: 'Ultimate Cinema Experience',
          description: 'Immerse yourself in the magic of movies in our state-of-the-art cinema. Featuring crystal-clear digital projection, Dolby Atmos sound, and luxurious reclining seats, every screening becomes a memorable event. Catch the latest blockbusters and timeless classics in unparalleled comfort.'
        },
        restaurant: {
          title: 'Gourmet Dining',
          description: 'Embark on a culinary journey at our exquisite restaurant. Our chefs craft delightful dishes using the freshest local ingredients. From elegant dinners to casual lunches, the sophisticated ambiance and impeccable service make for a perfect dining experience.'
        },
        lasVegasBar: {
          title: 'Las Vegas Bar',
          description: 'Experience the vibrant energy of our "Las Vegas" themed bar. Enjoy expertly mixed cocktails, a wide selection of spirits, and a lively atmosphere. It\'s the perfect spot to unwind with friends or start a night out in style.'
        },
        kidsRoom: {
          title: 'Fun & Safe Kids Zone',
          description: 'A world of fun awaits our youngest visitors! Our supervised Kids Room is a safe and stimulating environment where children can play, learn, and make new friends. Packed with games and activities, it\'s a place where imaginations run wild.'
        },
        vrArena: {
          title: 'Immersive VR Arena',
          description: 'Step into new dimensions at our cutting-edge VR Arena. Equipped with the latest virtual reality technology, you can battle aliens, explore fantastical worlds, or challenge your friends in thrilling multiplayer games. An adventure like no other!'
        }
      },
      shopAndCoffee: {
        title: 'Orlando Shop & Coffee',
        description: 'Your cozy corner in Famagusta for the finest coffee and a curated shopping experience.',
        features: ['Artisanal Coffee Blends', 'Freshly Baked Pastries', 'Curated Lifestyle Products', 'Relaxing Ambiance'],
        galleryTitle: 'Shop & Coffee Gallery',
        events: {
            title: 'Community & Events',
            description: 'We\'re more than just a coffee shop; we\'re a community hub. Join us for our regular events, including live acoustic music nights, coffee tasting workshops, and local art showcases. Follow our social media to stay updated on the latest happenings!'
        }
      },
      cyberX: {
        title: 'CyberX Gaming Club',
        description: 'The ultimate gaming hub in Kyrenia with high-end PCs, popular titles, and a competitive atmosphere.',
        features: ['High-Performance Gaming PCs', 'Latest & Popular Games', 'Regular Tournaments', 'Comfortable Gaming Stations'],
        galleryTitle: 'CyberX Gallery'
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Have a question or want to get in touch? Send us a message and we will get back to you.',
      form: {
        name: 'Name',
        namePlaceholder: 'Your Name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'Message',
        messagePlaceholder: 'Your message...',
        submit: 'Send Message',
        success: 'Message sent successfully!',
        error: 'Failed to send message.',
      },
      info: {
        title: 'Our Locations',
        starlux: 'Starlux Orlando Mall, Kyrenia',
        shopAndCoffee: 'Orlando Shop and Coffee, Famagusta',
        cyberX: 'CyberX Gaming Club, Kyrenia',
      }
    },
    footer: {
      about: 'Your ultimate destination for entertainment, shopping, and gaming.',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      ourLocation: 'Our Location',
      rights: 'All Rights Reserved.'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      starlux: 'Starlux Mall',
      shopAndCoffee: 'Магазин и Кофе',
      cyberX: 'CyberX Gaming',
      contact: 'Контакты',
    },
    homepage: {
      hero: {
        title: 'Откройте для себя Orlando Global',
        subtitle: 'Ваше идеальное место для развлечений, покупок и игр. Откройте мир возможностей вместе с нами.',
        cta: 'Связаться с нами',
      },
      branches: {
        title: 'Наши Филиалы',
        learnMore: 'Узнать Больше',
      },
      mission: {
        title: 'Наша Цель',
        text: 'Предоставлять непревзойденные впечатления во всех наших начинаниях, создавая незабываемые моменты для каждого посетителя благодаря инновациям, качеству и стремлению к совершенству.',
      },
      gallery: {
        title: 'Мгновения Нашего Мира',
      },
    },
    branches: {
      starlux: {
        title: 'Starlux Orlando Mall',
        description: 'Премиальное место в Киринии с кинотеатром, баром "Лас-Вегас", изысканным рестораном, детской комнатой и VR-ареной.',
        galleryTitle: 'Галерея Starlux',
        cinema: {
          title: 'Незабываемый Киноопыт',
          description: 'Погрузитесь в магию кино в нашем современном кинотеатре. С кристально чистым цифровым изображением, звуком Dolby Atmos и роскошными креслами с откидной спинкой каждый сеанс становится незабываемым событием. Смотрите последние блокбастеры и вечную классику в непревзойденном комфорте.'
        },
        restaurant: {
          title: 'Изысканная Кухня',
          description: 'Отправьтесь в кулинарное путешествие в нашем изысканном ресторане. Наши повара создают восхитительные блюда из свежайших местных продуктов. От элегантных ужинов до непринужденных обедов — утонченная атмосфера и безупречное обслуживание создают идеальные условия для трапезы.'
        },
        lasVegasBar: {
          title: 'Бар "Лас-Вегас"',
          description: 'Ощутите яркую энергию нашего тематического бара "Лас-Вегас". Наслаждайтесь мастерски смешанными коктейлями, широким выбором спиртных напитков и оживленной атмосферой. Это идеальное место, чтобы расслабиться с друзьями или стильно начать вечер.'
        },
        kidsRoom: {
          title: 'Веселая и Безопасная Детская Зона',
          description: 'Мир веселья ждет наших самых маленьких посетителей! Наша детская комната под присмотром — это безопасная и стимулирующая среда, где дети могут играть, учиться и заводить новых друзей. Здесь, среди игр и развлечений, воображение не знает границ.'
        },
        vrArena: {
          title: 'Иммерсивная VR-арена',
          description: 'Шагните в новые измерения на нашей передовой VR-арене. Оснащенная новейшими технологиями виртуальной реальности, она позволяет сражаться с пришельцами, исследовать фантастические миры или соревноваться с друзьями в захватывающих многопользовательских играх. Приключение, не похожее ни на одно другое!'
        }
      },
      shopAndCoffee: {
        title: 'Orlando Магазин и Кофе',
        description: 'Ваш уютный уголок в Фамагусте с лучшим кофе и тщательно подобранным ассортиментом товаров.',
        features: ['Авторские кофейные смеси', 'Свежая выпечка', 'Тщательно подобранные товары для жизни', 'Расслабляющая атмосфера'],
        galleryTitle: 'Галерея Магазина и Кофе',
        events: {
          title: 'Сообщество и События',
          description: 'Мы больше, чем просто кофейня; мы — центр сообщества. Присоединяйтесь к нашим регулярным мероприятиям, включая вечера живой акустической музыки, мастер-классы по дегустации кофе и выставки местных художников. Следите за нами в социальных сетях, чтобы быть в курсе последних событий!'
        }
      },
      cyberX: {
        title: 'Игровой Клуб CyberX',
        description: 'Лучший игровой центр в Киринии с мощными ПК, популярными играми и соревновательной атмосферой.',
        features: ['Высокопроизводительные игровые ПК', 'Новейшие и популярные игры', 'Регулярные турниры', 'Удобные игровые места'],
        galleryTitle: 'Галерея CyberX'
      },
    },
    contact: {
      title: 'Свяжитесь с Нами',
      subtitle: 'Есть вопрос или хотите связаться? Отправьте нам сообщение, и мы вам ответим.',
      form: {
        name: 'Имя',
        namePlaceholder: 'Ваше Имя',
        email: 'Эл. почта',
        emailPlaceholder: 'vash@email.com',
        message: 'Сообщение',
        messagePlaceholder: 'Ваше сообщение...',
        submit: 'Отправить Сообщение',
        success: 'Сообщение успешно отправлено!',
        error: 'Не удалось отправить сообщение.',
      },
      info: {
        title: 'Наши Адреса',
        starlux: 'Starlux Orlando Mall, Кирения',
        shopAndCoffee: 'Orlando Магазин и Кофе, Фамагуста',
        cyberX: 'Игровой Клуб CyberX, Кирения',
      }
    },
    footer: {
      about: 'Ваше идеальное место для развлечений, покупок и игр.',
      quickLinks: 'Быстрые Ссылки',
      contactUs: 'Связаться с Нами',
      ourLocation: 'Наше Местоположение',
      rights: 'Все права защищены.'
    }
  },
  tr: {
    nav: {
      home: 'Anasayfa',
      starlux: 'Starlux AVM',
      shopAndCoffee: 'Mağaza & Kahve',
      cyberX: 'CyberX Gaming',
      contact: 'İletişim',
    },
    homepage: {
      hero: {
        title: 'Orlando Global\'i Deneyimleyin',
        subtitle: 'Eğlence, alışveriş ve oyun için nihai varış noktanız. Bizimle olasılıklar dünyasını keşfedin.',
        cta: 'İletişime Geçin',
      },
      branches: {
        title: 'Şubelerimiz',
        learnMore: 'Daha Fazla Bilgi',
      },
      mission: {
        title: 'Hedefimiz',
        text: 'Tüm girişimlerimizde benzersiz deneyimler sunmak, yenilik, kalite ve mükemmelliyet taahhüdü ile her ziyaretçi için unutulmaz anlar yaratmak.',
      },
      gallery: {
        title: 'Dünyamızdan Kareler',
      },
    },
    branches: {
      starlux: {
        title: 'Starlux Orlando AVM',
        description: 'Girne\'de sinema, "Las Vegas" barı, kaliteli restoran, çocuk odası ve VR arenası bulunan birinci sınıf bir mekan.',
        galleryTitle: 'Starlux Galerisi',
        cinema: {
          title: 'Mükemmel Sinema Deneyimi',
          description: 'Son teknoloji sinemamızda filmlerin büyüsüne kapılın. Kristal netliğinde dijital projeksiyon, Dolby Atmos ses sistemi ve lüks yatar koltuklar ile her gösterim unutulmaz bir etkinliğe dönüşüyor. En yeni gişe rekortmenlerini ve zamansız klasikleri benzersiz bir konforla izleyin.'
        },
        restaurant: {
          title: 'Gurme Lezzetler',
          description: 'Seçkin restoranımızda bir mutfak yolculuğuna çıkın. Şeflerimiz en taze yerel malzemeleri kullanarak enfes yemekler hazırlıyor. Şık akşam yemeklerinden gündelik öğle yemeklerine kadar, sofistike atmosfer ve kusursuz hizmet mükemmel bir yemek deneyimi sunuyor.'
        },
        lasVegasBar: {
          title: 'Las Vegas Bar',
          description: '"Las Vegas" temalı barımızın canlı enerjisini deneyimleyin. Ustalıkla hazırlanmış kokteyllerin, geniş içki yelpazesinin ve hareketli atmosferin tadını çıkarın. Arkadaşlarla gevşemek veya şık bir geceye başlamak için mükemmel bir yer.'
        },
        kidsRoom: {
          title: 'Eğlenceli ve Güvenli Çocuk Alanı',
          description: 'En küçük ziyaretçilerimizi bir eğlence dünyası bekliyor! Gözetimli Çocuk Odamız, çocukların oynayabileceği, öğrenebileceği ve yeni arkadaşlar edinebileceği güvenli ve teşvik edici bir ortamdır. Oyunlar ve etkinliklerle dolu bu yerde hayal güçleri özgür kalır.'
        },
        vrArena: {
          title: 'Sürükleyici VR Arenası',
          description: 'En yeni VR Arenamızda yeni boyutlara adım atın. En son sanal gerçeklik teknolojisiyle donatılmış olarak uzaylılarla savaşabilir, fantastik dünyaları keşfedebilir veya heyecan verici çok oyunculu oyunlarda arkadaşlarınıza meydan okuyabilirsiniz. Eşi benzeri olmayan bir macera!'
        }
      },
      shopAndCoffee: {
        title: 'Orlando Mağaza & Kahve',
        description: 'Gazimağusa\'da en iyi kahve ve özenle seçilmiş bir alışveriş deneyimi için rahat köşeniz.',
        features: ['Özel Kahve Harmanları', 'Taze Pişmiş Pastalar', 'Özenle Seçilmiş Yaşam Tarzı Ürünleri', 'Rahatlatıcı Ortam'],
        galleryTitle: 'Mağaza & Kahve Galerisi',
        events: {
            title: 'Topluluk ve Etkinlikler',
            description: 'Biz bir kahve dükkanından daha fazlasıyız; bir topluluk merkeziyiz. Canlı akustik müzik geceleri, kahve tadım atölyeleri ve yerel sanat sergileri gibi düzenli etkinliklerimize katılın. En son gelişmelerden haberdar olmak için sosyal medyamızı takip edin!'
        }
      },
      cyberX: {
        title: 'CyberX Oyun Kulübü',
        description: 'Girne\'de üst düzey bilgisayarlar, popüler oyunlar ve rekabetçi bir atmosfere sahip nihai oyun merkezi.',
        features: ['Yüksek Performanslı Oyun Bilgisayarları', 'En Yeni ve Popüler Oyunlar', 'Düzenli Turnuvalar', 'Konforlu Oyun İstasyonları'],
        galleryTitle: 'CyberX Galerisi'
      },
    },
    contact: {
      title: 'Bize Ulaşın',
      subtitle: 'Bir sorunuz mu var veya iletişime mi geçmek istiyorsunuz? Bize bir mesaj gönderin, size geri dönelim.',
      form: {
        name: 'İsim',
        namePlaceholder: 'Adınız',
        email: 'E-posta',
        emailPlaceholder: 'sizin@eposta.com',
        message: 'Mesaj',
        messagePlaceholder: 'Mesajınız...',
        submit: 'Mesaj Gönder',
        success: 'Mesaj başarıyla gönderildi!',
        error: 'Mesaj gönderilemedi.',
      },
      info: {
        title: 'Konumlarımız',
        starlux: 'Starlux Orlando AVM, Girne',
        shopAndCoffee: 'Orlando Mağaza & Kahve, Gazimağusa',
        cyberX: 'CyberX Oyun Kulübü, Girne',
      }
    },
    footer: {
      about: 'Eğlence, alışveriş ve oyun için nihai varış noktanız.',
      quickLinks: 'Hızlı Bağlantılar',
      contactUs: 'Bize Ulaşın',
      ourLocation: 'Konumumuz',
      rights: 'Tüm Hakları Saklıdır.'
    }
  },
};
