import React, { useState } from 'react';
import Layout from '../layout/Layout';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import { excellentValues, editorsPicks, mostSavedItems } from '../../data/products';

const CatalogPage: React.FC = () => {
  // Combine all products for the catalog
  const allProducts = [...excellentValues, ...editorsPicks, ...mostSavedItems];

  // State for filter visibility on mobile
  const [showFilters, setShowFilters] = useState(false);

  // State for active filters
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    categories: [],
    styles: [],
    materials: [],
    priceRanges: [],
    colors: []
  });

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
      categories: [],
      styles: [],
      materials: [],
      priceRanges: [],
      colors: []
    });
  };

  // Count total active filters
  const totalActiveFilters = Object.values(activeFilters).flat().length;

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-6 pb-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-cardinal mb-2">Новые Поступления</h1>
          <p className="text-neutral-600">
            Самые свежие и эксклюзивные предметы на Винтажная.ру. Обновляется ежедневно.
          </p>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={toggleFilters}
            className="w-full py-3 border border-neutral-300 flex justify-between items-center px-4"
          >
            <span>Фильтры {totalActiveFilters > 0 && `(${totalActiveFilters})`}</span>
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
            <FilterSidebar
              activeFilters={activeFilters}
              applyFilter={applyFilter}
              clearFilters={clearFilters}
            />
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            {/* Results Count & Sort */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-sm">{allProducts.length} Результатов</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2">Сортировать по:</span>
                <select className="border border-neutral-300 p-2 text-sm">
                  <option value="newest">Новинки</option>
                  <option value="price_asc">Цена (по возрастанию)</option>
                  <option value="price_desc">Цена (по убыванию)</option>
                </select>
              </div>
            </div>

            {/* Products */}
            <ProductGrid products={allProducts} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CatalogPage;
