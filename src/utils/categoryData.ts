// Types for category data
export interface CategoryData {
  id: string;
  titleRu: string;
  descriptionRu: string;
  subcategories: Subcategory[];
  featuredFilters: FeaturedFilter[];
  headerImage?: string;
}

export interface Subcategory {
  id: string;
  nameRu: string;
  imageUrl?: string;
  count?: number;
}

export interface FeaturedFilter {
  id: string;
  nameRu: string;
  type: 'style' | 'material' | 'era' | 'price' | 'color';
  count?: number;
}

// Furniture category data
export const furnitureData: CategoryData = {
  id: 'furniture',
  titleRu: 'Мебель',
  descriptionRu: 'Изысканная винтажная и современная мебель от ведущих мировых дизайнеров и галерей. Найдите уникальные предметы мебели, которые станут центром внимания в вашем интерьере.',
  headerImage: 'https://ext.same-assets.com/2411483839/878713496.jpeg',
  subcategories: [
    { id: 'seating', nameRu: 'Мебель для сидения', count: 1248, imageUrl: 'https://ext.same-assets.com/2411483839/878713496.jpeg' },
    { id: 'tables', nameRu: 'Столы', count: 976, imageUrl: 'https://ext.same-assets.com/2411483839/1167461518.jpeg' },
    { id: 'storage', nameRu: 'Мебель для хранения', count: 754, imageUrl: 'https://ext.same-assets.com/2411483839/2790377507.jpeg' },
    { id: 'beds', nameRu: 'Кровати', count: 315, imageUrl: 'https://ext.same-assets.com/272843701/223234628.jpeg' },
    { id: 'desks', nameRu: 'Письменные столы', count: 289, imageUrl: 'https://ext.same-assets.com/272843701/1439521969.webp' },
    { id: 'mirrors', nameRu: 'Зеркала', count: 412, imageUrl: 'https://ext.same-assets.com/2411483839/4223837559.jpeg' },
    { id: 'lighting', nameRu: 'Освещение', count: 678, imageUrl: 'https://ext.same-assets.com/2411483839/1012990268.jpeg' },
    { id: 'rugs', nameRu: 'Ковры', count: 523, imageUrl: 'https://ext.same-assets.com/2411483839/2321549824.jpeg' }
  ],
  featuredFilters: [
    { id: 'mid_century', nameRu: 'Середина века', type: 'style', count: 872 },
    { id: 'art_deco', nameRu: 'Ар-Деко', type: 'style', count: 543 },
    { id: 'scandinavian', nameRu: 'Скандинавский', type: 'style', count: 321 },
    { id: 'wood', nameRu: 'Дерево', type: 'material', count: 1245 },
    { id: 'leather', nameRu: 'Кожа', type: 'material', count: 418 },
    { id: 'velvet', nameRu: 'Бархат', type: 'material', count: 276 }
  ]
};

// Jewelry category data
export const jewelryData: CategoryData = {
  id: 'jewelry',
  titleRu: 'Ювелирные Изделия',
  descriptionRu: 'Уникальные ювелирные изделия от известных дизайнеров и брендов. От антикварных драгоценностей до современных произведений искусства, наша коллекция предлагает исключительные украшения для самых требовательных ценителей.',
  headerImage: 'https://ext.same-assets.com/2411483839/1808370198.jpeg',
  subcategories: [
    { id: 'necklaces', nameRu: 'Колье и ожерелья', count: 678, imageUrl: 'https://ext.same-assets.com/2411483839/1808370198.jpeg' },
    { id: 'rings', nameRu: 'Кольца', count: 823, imageUrl: 'https://ext.same-assets.com/272843701/1579124635.jpeg' },
    { id: 'bracelets', nameRu: 'Браслеты', count: 496, imageUrl: 'https://ext.same-assets.com/272843701/8172935018.jpeg' },
    { id: 'earrings', nameRu: 'Серьги', count: 741, imageUrl: 'https://ext.same-assets.com/272843701/1834652901.jpeg' },
    { id: 'brooches', nameRu: 'Броши', count: 358, imageUrl: 'https://ext.same-assets.com/272843701/9271534982.jpeg' },
    { id: 'watches', nameRu: 'Часы', count: 412, imageUrl: 'https://ext.same-assets.com/272843701/7234981632.jpeg' }
  ],
  featuredFilters: [
    { id: 'gold', nameRu: 'Золото', type: 'material', count: 987 },
    { id: 'silver', nameRu: 'Серебро', type: 'material', count: 754 },
    { id: 'platinum', nameRu: 'Платина', type: 'material', count: 321 },
    { id: 'diamond', nameRu: 'Бриллианты', type: 'material', count: 652 },
    { id: 'art_deco', nameRu: 'Ар-Деко', type: 'style', count: 428 },
    { id: 'vintage', nameRu: 'Винтаж', type: 'era', count: 871 }
  ]
};

// Fashion category data
export const fashionData: CategoryData = {
  id: 'fashion',
  titleRu: 'Мода',
  descriptionRu: 'Винтажная и дизайнерская одежда, сумки и аксессуары от всемирно известных модных домов. Наша коллекция включает эксклюзивные предметы, которые станут значимым дополнением вашего гардероба.',
  headerImage: 'https://ext.same-assets.com/2411483839/2059002105.jpeg',
  subcategories: [
    { id: 'womens', nameRu: 'Женская одежда', count: 1247, imageUrl: 'https://ext.same-assets.com/2411483839/2059002105.jpeg' },
    { id: 'mens', nameRu: 'Мужская одежда', count: 753, imageUrl: 'https://ext.same-assets.com/272843701/9274635810.jpeg' },
    { id: 'handbags', nameRu: 'Сумки', count: 682, imageUrl: 'https://ext.same-assets.com/2411483839/4019792414.jpeg' },
    { id: 'accessories', nameRu: 'Аксессуары', count: 571, imageUrl: 'https://ext.same-assets.com/272843701/1457823916.jpeg' },
    { id: 'shoes', nameRu: 'Обувь', count: 498, imageUrl: 'https://ext.same-assets.com/272843701/6192873456.jpeg' },
    { id: 'scarves', nameRu: 'Шарфы и платки', count: 329, imageUrl: 'https://ext.same-assets.com/272843701/1239875643.jpeg' }
  ],
  featuredFilters: [
    { id: 'designer', nameRu: 'Дизайнерские', type: 'style', count: 1542 },
    { id: 'vintage', nameRu: 'Винтаж', type: 'era', count: 876 },
    { id: 'contemporary', nameRu: 'Современные', type: 'era', count: 743 },
    { id: 'silk', nameRu: 'Шелк', type: 'material', count: 584 },
    { id: 'leather', nameRu: 'Кожа', type: 'material', count: 697 },
    { id: 'cotton', nameRu: 'Хлопок', type: 'material', count: 532 }
  ]
};

// Art category data
export const artData: CategoryData = {
  id: 'art',
  titleRu: 'Искусство',
  descriptionRu: 'Уникальные произведения искусства от признанных мастеров и восходящих звезд. Наша коллекция включает живопись, скульптуру, фотографию и многое другое для самых взыскательных коллекционеров.',
  headerImage: 'https://ext.same-assets.com/2411483839/3604620263.jpeg',
  subcategories: [
    { id: 'paintings', nameRu: 'Живопись', count: 872, imageUrl: 'https://ext.same-assets.com/2411483839/3604620263.jpeg' },
    { id: 'photography', nameRu: 'Фотография', count: 654, imageUrl: 'https://ext.same-assets.com/272843701/2845961732.jpeg' },
    { id: 'prints', nameRu: 'Принты и гравюры', count: 741, imageUrl: 'https://ext.same-assets.com/272843701/3692581473.jpeg' },
    { id: 'sculpture', nameRu: 'Скульптура', count: 358, imageUrl: 'https://ext.same-assets.com/272843701/9182736459.jpeg' },
    { id: 'mixed_media', nameRu: 'Смешанная техника', count: 246, imageUrl: 'https://ext.same-assets.com/272843701/1937485629.jpeg' },
    { id: 'drawings', nameRu: 'Рисунки', count: 412, imageUrl: 'https://ext.same-assets.com/272843701/6485912374.jpeg' }
  ],
  featuredFilters: [
    { id: 'modern', nameRu: 'Современное', type: 'era', count: 1258 },
    { id: 'contemporary', nameRu: 'Актуальное', type: 'era', count: 987 },
    { id: 'abstract', nameRu: 'Абстрактное', type: 'style', count: 746 },
    { id: 'figurative', nameRu: 'Фигуративное', type: 'style', count: 654 },
    { id: 'expressionism', nameRu: 'Экспрессионизм', type: 'style', count: 423 },
    { id: 'impressionism', nameRu: 'Импрессионизм', type: 'style', count: 321 }
  ]
};

// Decor category data
export const decorData: CategoryData = {
  id: 'decor',
  titleRu: 'Декоративные Объекты',
  descriptionRu: 'Изысканные декоративные предметы, которые добавят шарм и индивидуальность вашему интерьеру. От антикварных изделий до современных объектов искусства, наша коллекция предлагает множество вариантов для создания уникального пространства.',
  headerImage: 'https://ext.same-assets.com/2411483839/1603949192.jpeg',
  subcategories: [
    { id: 'vases', nameRu: 'Вазы', count: 589, imageUrl: 'https://ext.same-assets.com/2411483839/1603949192.jpeg' },
    { id: 'candleholders', nameRu: 'Подсвечники', count: 478, imageUrl: 'https://ext.same-assets.com/2411483839/91178169.jpeg' },
    { id: 'bowls', nameRu: 'Чаши и блюда', count: 365, imageUrl: 'https://ext.same-assets.com/272843701/2439521969.webp' },
    { id: 'sculptures', nameRu: 'Скульптуры', count: 246, imageUrl: 'https://ext.same-assets.com/272843701/4859612375.jpeg' },
    { id: 'boxes', nameRu: 'Декоративные коробки', count: 198, imageUrl: 'https://ext.same-assets.com/272843701/7563891245.jpeg' },
    { id: 'wallart', nameRu: 'Настенный декор', count: 312, imageUrl: 'https://ext.same-assets.com/272843701/3127856491.jpeg' }
  ],
  featuredFilters: [
    { id: 'glass', nameRu: 'Стекло', type: 'material', count: 732 },
    { id: 'ceramic', nameRu: 'Керамика', type: 'material', count: 587 },
    { id: 'metal', nameRu: 'Металл', type: 'material', count: 421 },
    { id: 'wood', nameRu: 'Дерево', type: 'material', count: 368 },
    { id: 'mid_century', nameRu: 'Середина века', type: 'style', count: 498 },
    { id: 'contemporary', nameRu: 'Современные', type: 'era', count: 654 }
  ]
};

// Lighting category data
export const lightingData: CategoryData = {
  id: 'lighting',
  titleRu: 'Освещение',
  descriptionRu: 'Изысканные осветительные приборы для любого интерьера. От роскошных люстр и винтажных ламп до современных дизайнерских светильников - наша коллекция поможет создать идеальную атмосферу в вашем пространстве.',
  headerImage: 'https://ext.same-assets.com/2411483839/1012990268.jpeg',
  subcategories: [
    { id: 'chandeliers', nameRu: 'Люстры', count: 487, imageUrl: 'https://ext.same-assets.com/2411483839/1012990268.jpeg' },
    { id: 'table_lamps', nameRu: 'Настольные лампы', count: 624, imageUrl: 'https://ext.same-assets.com/272843701/3857419263.jpeg' },
    { id: 'floor_lamps', nameRu: 'Торшеры', count: 358, imageUrl: 'https://ext.same-assets.com/272843701/9274561038.jpeg' },
    { id: 'wall_lamps', nameRu: 'Настенные светильники', count: 426, imageUrl: 'https://ext.same-assets.com/272843701/1873465912.jpeg' },
    { id: 'pendants', nameRu: 'Подвесные светильники', count: 389, imageUrl: 'https://ext.same-assets.com/272843701/6719283457.jpeg' },
    { id: 'sconces', nameRu: 'Бра', count: 275, imageUrl: 'https://ext.same-assets.com/272843701/1982374659.jpeg' }
  ],
  featuredFilters: [
    { id: 'mid_century', nameRu: 'Середина века', type: 'style', count: 543 },
    { id: 'art_deco', nameRu: 'Ар-Деко', type: 'style', count: 478 },
    { id: 'crystal', nameRu: 'Хрусталь', type: 'material', count: 327 },
    { id: 'brass', nameRu: 'Латунь', type: 'material', count: 456 },
    { id: 'murano', nameRu: 'Мурано', type: 'style', count: 287 },
    { id: 'contemporary', nameRu: 'Современные', type: 'era', count: 592 }
  ]
};

// Watches category data
export const watchesData: CategoryData = {
  id: 'watches',
  titleRu: 'Часы',
  descriptionRu: 'Коллекционные и винтажные часы известных брендов. От редких антикварных моделей до современных роскошных экземпляров - в нашей коллекции вы найдете исключительные часы для истинных ценителей.',
  headerImage: 'https://ext.same-assets.com/272843701/7234981632.jpeg',
  subcategories: [
    { id: 'mens_watches', nameRu: 'Мужские часы', count: 526, imageUrl: 'https://ext.same-assets.com/272843701/7234981632.jpeg' },
    { id: 'womens_watches', nameRu: 'Женские часы', count: 387, imageUrl: 'https://ext.same-assets.com/272843701/8273645910.jpeg' },
    { id: 'pocket_watches', nameRu: 'Карманные часы', count: 194, imageUrl: 'https://ext.same-assets.com/272843701/9283746591.jpeg' },
    { id: 'table_clocks', nameRu: 'Настольные часы', count: 268, imageUrl: 'https://ext.same-assets.com/272843701/1029384756.jpeg' },
    { id: 'wall_clocks', nameRu: 'Настенные часы', count: 315, imageUrl: 'https://ext.same-assets.com/272843701/3847561029.jpeg' }
  ],
  featuredFilters: [
    { id: 'swiss', nameRu: 'Швейцарские', type: 'style', count: 478 },
    { id: 'gold', nameRu: 'Золото', type: 'material', count: 327 },
    { id: 'silver', nameRu: 'Серебро', type: 'material', count: 415 },
    { id: 'automatic', nameRu: 'Автоматические', type: 'style', count: 523 },
    { id: 'vintage', nameRu: 'Винтаж', type: 'era', count: 389 },
    { id: 'luxury', nameRu: 'Роскошные', type: 'style', count: 276 }
  ]
};

// Map of all category data
export const categoryDataMap: Record<string, CategoryData> = {
  furniture: furnitureData,
  jewelry: jewelryData,
  fashion: fashionData,
  art: artData,
  decor: decorData,
  lighting: lightingData,
  watches: watchesData
};

// Get category data by ID
export function getCategoryData(categoryId: string): CategoryData | undefined {
  return categoryDataMap[categoryId];
}

// Get all categories list
export function getAllCategories(): { id: string; nameRu: string }[] {
  return Object.values(categoryDataMap).map(category => ({
    id: category.id,
    nameRu: category.titleRu
  }));
}
