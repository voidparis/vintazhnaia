import { Product , excellentValues, editorsPicks, mostSavedItems } from './products';

export interface WatchProperties {
  creator?: string;
  department?: 'mens' | 'womens' | 'unisex';
  period?: string;
  style?: string;
  features?: string[];
  material?: string;
  dialColor?: string;
  bandMaterial?: string;
  condition?: 'excellent' | 'very_good' | 'good' | 'fair';
  sellerLocation?: string;
}

export interface WatchProduct extends Product, WatchProperties {
  isWatch: boolean;
}

// Function to match a string against a filter value, ignoring case and checking for substring
const matchesFilter = (value: string | undefined, filter: string): boolean => {
  if (!value) return false;
  return value.toLowerCase().includes(filter.toLowerCase());
};

// Function to match a watch against a filter value in a specific category
const watchMatchesFilter = (watch: WatchProduct, category: string, filter: string): boolean => {
  switch (category) {
    case 'creators':
      return matchesFilter(watch.creator, filter);
    case 'department':
      return watch.department === filter;
    case 'period':
      return matchesFilter(watch.period, filter);
    case 'style':
      return matchesFilter(watch.style, filter);
    case 'features':
      return watch.features?.some(feature => matchesFilter(feature, filter)) || false;
    case 'materials':
      return matchesFilter(watch.material, filter);
    case 'priceRange':
      switch (filter) {
        case 'under_5000':
          return (watch.priceValue || 0) < 500000;
        case '5000_10000':
          return (watch.priceValue || 0) >= 500000 && (watch.priceValue || 0) < 1000000;
        case '10000_25000':
          return (watch.priceValue || 0) >= 1000000 && (watch.priceValue || 0) < 2500000;
        case '25000_50000':
          return (watch.priceValue || 0) >= 2500000 && (watch.priceValue || 0) < 5000000;
        case 'over_50000':
          return (watch.priceValue || 0) >= 5000000;
        default:
          return false;
      }
    case 'dialColor':
      return matchesFilter(watch.dialColor, filter);
    case 'bandMaterial':
      return matchesFilter(watch.bandMaterial, filter);
    case 'condition':
      return watch.condition === filter;
    case 'sellerLocation':
      return matchesFilter(watch.sellerLocation, filter) || matchesFilter(watch.location, filter);
    default:
      return false;
  }
};

// Function to filter watches based on active filters
export const filterWatches = (
  watches: WatchProduct[],
  activeFilters: Record<string, string[]>
): WatchProduct[] => {
  // If no active filters, return all watches
  if (Object.values(activeFilters).every(filters => filters.length === 0)) {
    return watches;
  }

  return watches.filter(watch => {
    // For each filter category
    for (const [category, filters] of Object.entries(activeFilters)) {
      // Skip empty filter categories
      if (filters.length === 0) continue;

      // For this category, at least one filter must match
      const categoryMatches = filters.some(filter =>
        watchMatchesFilter(watch, category, filter)
      );

      // If no filters in this category match, exclude the watch
      if (filters.length > 0 && !categoryMatches) {
        return false;
      }
    }

    // If we get here, all filter categories with active filters have at least one match
    return true;
  });
};

// Creators to choose from
const watchCreators = [
  'Rolex', 'Cartier', 'Patek Philippe', 'Omega', 'Audemars Piguet',
  'TAG Heuer', 'Jaeger-LeCoultre', 'Breitling', 'IWC', 'Panerai'
];

// Periods to choose from
const watchPeriods = [
  '21st Century', 'Late 20th Century', 'Mid 20th Century',
  'Early 20th Century', '19th Century'
];

// Styles to choose from
const watchStyles = [
  'Modern', 'Contemporary', 'Art Deco', 'Vintage', 'Minimalist', 'Classical'
];

// Features to choose from
const watchFeatures = [
  'Chronograph', 'Date Display', 'Automatic', 'Quartz',
  'Moon Phase', 'Diamonds', 'Skeleton', 'Tourbillon'
];

// Materials to choose from
const watchMaterials = [
  'Gold', 'Stainless Steel', 'Silver', 'Platinum', 'Titanium', 'Ceramic'
];

// Dial colors to choose from
const watchDialColors = [
  'Black', 'White', 'Silver', 'Gold', 'Blue', 'Green', 'Brown', 'Red'
];

// Band materials to choose from
const watchBandMaterials = [
  'Stainless Steel', 'Leather', 'Gold', 'Rubber', 'Fabric', 'Ceramic'
];

// Conditions to choose from
const watchConditions: ('excellent' | 'very_good' | 'good' | 'fair')[] = [
  'excellent', 'very_good', 'good', 'fair'
];

// Seller locations to choose from
const watchLocations = [
  'Москва', 'Санкт-Петербург', 'Европа', 'США', 'Азия'
];

// Function to randomly select an item from an array
const randomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Function to randomly select multiple items from an array
const randomItems = <T>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Function to enhance a product with watch properties
const enhanceWithWatchProperties = (product: Product): WatchProduct => {
  return {
    ...product,
    isWatch: true,
    creator: randomItem(watchCreators),
    department: randomItem(['mens', 'womens', 'unisex']),
    period: randomItem(watchPeriods),
    style: randomItem(watchStyles),
    features: randomItems(watchFeatures, Math.floor(Math.random() * 3) + 1),
    material: randomItem(watchMaterials),
    dialColor: randomItem(watchDialColors),
    bandMaterial: randomItem(watchBandMaterials),
    condition: randomItem(watchConditions),
    sellerLocation: product.location || randomItem(watchLocations)
  };
};

// Enhance all products with watch properties
export const getAllWatches = (): WatchProduct[] => {
  const allProducts = [...excellentValues, ...editorsPicks, ...mostSavedItems];
  return allProducts.map(enhanceWithWatchProperties);
};
