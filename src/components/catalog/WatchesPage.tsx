import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import ProductGrid from './ProductGrid';
import { watchesData } from '../../utils/categoryData';
import WatchFilterSidebar from './WatchFilterSidebar';
import { WatchProduct, getAllWatches, filterWatches } from '../../data/watchData';

const WatchesPage: React.FC = () => {
  // State for filter visibility on mobile
  const [showFilters, setShowFilters] = useState(false);

  // State for active filters
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    creators: [],
    department: [],
    period: [],
    style: [],
    features: [],
    materials: [],
    priceRange: [],
    dialColor: [],
    bandMaterial: [],
    condition: [],
    sellerLocation: []
  });

  // State for all watch products
  const [allWatches, setAllWatches] = useState<WatchProduct[]>([]);

  // State for filtered products
  const [filteredWatches, setFilteredWatches] = useState<WatchProduct[]>([]);

  // Sort option
  const [sortOption, setSortOption] = useState('newest');

  // Load all watches on component mount
  useEffect(() => {
    const watches = getAllWatches();
    setAllWatches(watches);
    setFilteredWatches(watches);
  }, []);

  // Update filtered watches when active filters or sort changes
  useEffect(() => {
    let filtered = filterWatches(allWatches, activeFilters);

    // Apply sorting
    filtered = sortWatches(filtered, sortOption);

    setFilteredWatches(filtered);
  }, [allWatches, activeFilters, sortOption]);

  // Filter visibility toggle for mobile
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Apply filters function
  const applyFilter = (category: string, value: string, isChecked: boolean) => {
    setActiveFilters(prev => {
      const currentFilters = [...(prev[category] || [])];

      if (isChecked) {
        return {
          ...prev,
          [category]: [...currentFilters, value]
        };
      } else {
        return {
          ...prev,
          [category]: currentFilters.filter(item => item !== value)
        };
      }
    });
  };

  // Clear filters function
  const clearFilters = () => {
    setActiveFilters({
      creators: [],
      department: [],
      period: [],
      style: [],
      features: [],
      materials: [],
      priceRange: [],
      dialColor: [],
      bandMaterial: [],
      condition: [],
      sellerLocation: []
    });
  };

  // Sort function
  const sortWatches = (watches: WatchProduct[], option: string): WatchProduct[] => {
    const sorted = [...watches];

    switch(option) {
      case 'price_asc':
        return sorted.sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));
      case 'price_desc':
        return sorted.sort((a, b) => (b.priceValue || 0) - (a.priceValue || 0));
      case 'name_asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'name_desc':
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case 'newest':
      default:
        // For demo purposes, just return the original order
        return sorted;
    }
  };

  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  return (
    <Layout>
      {/* Hero Section with Prada Campaign Background */}
      <div className="relative h-[400px] overflow-hidden mb-10">
        <div className="absolute inset-0 bg-black">
          <img
            src="/images/prada-campaign.jpg"
            alt="Prada Campaign"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="container mx-auto px-4 h-full relative z-20 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-cardinal mb-4">Часы (Watches)</h1>
            <p className="text-lg mb-6">
              Коллекционные и винтажные часы известных брендов. От редких антикварных моделей до современных роскошных экземпляров - в нашей коллекции вы найдете исключительные часы для истинных ценителей.
            </p>
            <Link
              to="#watches-section"
              className="inline-block border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors"
            >
              Смотреть Коллекцию
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 pb-12" id="watches-section">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6 text-neutral-500">
          <ol className="flex flex-wrap">
            <li className="after:content-['/'] after:mx-2">
              <Link to="/" className="hover:text-gold">Главная</Link>
            </li>
            <li>
              <span className="text-neutral-900">{watchesData.titleRu}</span>
            </li>
          </ol>
        </nav>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={toggleFilters}
            className="w-full py-3 border border-neutral-300 flex justify-between items-center px-4"
          >
            <span>Фильтры</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              {showFilters
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              }
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <WatchFilterSidebar
              activeFilters={activeFilters}
              applyFilter={applyFilter}
              clearFilters={clearFilters}
              totalResults={filteredWatches.length}
            />
          </div>

          {/* Products Area */}
          <div className="lg:w-3/4">
            {/* Sort Dropdown */}
            <div className="flex justify-between items-center mb-6">
              <div>
                {/* Empty div to maintain flex spacing */}
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2">Сортировать по:</span>
                <select
                  className="border border-neutral-300 p-2 text-sm"
                  value={sortOption}
                  onChange={handleSortChange}
                >
                  <option value="newest">Новинки</option>
                  <option value="price_asc">Цена (по возрастанию)</option>
                  <option value="price_desc">Цена (по убыванию)</option>
                  <option value="name_asc">Имя (А-Я)</option>
                  <option value="name_desc">Имя (Я-А)</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredWatches.length > 0 ? (
              <ProductGrid products={filteredWatches} />
            ) : (
              <div className="py-12 text-center">
                <p className="text-neutral-500">
                  По вашему запросу ничего не найдено. Попробуйте изменить фильтры.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-gold hover:underline"
                >
                  Сбросить все фильтры
                </button>
              </div>
            )}

            {/* Pagination (if needed) */}
            {filteredWatches.length > 24 && (
              <div className="flex justify-center mt-8">
                <div className="inline-flex">
                  <button className="border border-neutral-300 px-4 py-2">
                    &lt; Предыдущая
                  </button>
                  <button className="border border-neutral-300 px-4 py-2 bg-neutral-100 font-medium">
                    1
                  </button>
                  <button className="border border-neutral-300 px-4 py-2">
                    2
                  </button>
                  <button className="border border-neutral-300 px-4 py-2">
                    3
                  </button>
                  <button className="border border-neutral-300 px-4 py-2">
                    Следующая &gt;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WatchesPage;
