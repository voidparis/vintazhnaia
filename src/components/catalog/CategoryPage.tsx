import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import { getCategoryData, CategoryData, Subcategory, FeaturedFilter } from '../../utils/categoryData';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import { excellentValues, editorsPicks, mostSavedItems } from '../../data/products';

const CategoryPage: React.FC = () => {
  const { categoryId = 'furniture' } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState<CategoryData | null>(null);

  // For filters and sorting
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    categories: [],
    styles: [],
    materials: [],
    priceRanges: [],
    colors: []
  });

  // All products combined from our mock data
  const allProducts = [...excellentValues, ...editorsPicks, ...mostSavedItems];

  // Load category data based on categoryId
  useEffect(() => {
    const data = getCategoryData(categoryId);
    if (data) {
      setCategoryData(data);
    } else {
      // Navigate to furniture if category not found
      navigate('/category/furniture');
    }
  }, [categoryId, navigate]);

  if (!categoryData) {
    return <div className="p-8 text-center">Загрузка...</div>;
  }

  // Toggle filters visibility on mobile
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Apply filter function
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
        {/* Breadcrumbs */}
        <nav className="text-sm mb-4 text-neutral-500">
          <ol className="flex flex-wrap">
            <li className="after:content-['/'] after:mx-2">
              <Link to="/" className="hover:text-gold">Главная</Link>
            </li>
            <li>
              <span className="text-neutral-900">{categoryData.titleRu}</span>
            </li>
          </ol>
        </nav>

        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-cardinal mb-2">{categoryData.titleRu}</h1>
          <p className="text-neutral-600 max-w-4xl">
            {categoryData.descriptionRu}
          </p>
        </div>

        {/* Subcategories Grid */}
        <div className="mb-12">
          <h2 className="text-xl font-cardinal mb-6">Категории {categoryData.titleRu}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categoryData.subcategories.map(subcategory => (
              <SubcategoryCard
                key={subcategory.id}
                subcategory={subcategory}
                categoryId={categoryId}
              />
            ))}
          </div>
        </div>

        {/* Featured Filters */}
        <div className="mb-12">
          <h2 className="text-xl font-cardinal mb-6">Популярные фильтры</h2>
          <div className="flex flex-wrap gap-3">
            {categoryData.featuredFilters.map(filter => (
              <FeaturedFilterChip
                key={filter.id}
                filter={filter}
                onSelect={(filterId) => {
                  applyFilter(filter.type + 's', filterId, true);
                }}
              />
            ))}
          </div>
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
              categoryId={categoryId}
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

interface SubcategoryCardProps {
  subcategory: Subcategory;
  categoryId: string;
}

const SubcategoryCard: React.FC<SubcategoryCardProps> = ({ subcategory, categoryId }) => {
  return (
    <Link
      to={`/category/${categoryId}/${subcategory.id}`}
      className="group relative block"
    >
      <div className="aspect-square overflow-hidden bg-neutral-100">
        <img
          src={subcategory.imageUrl}
          alt={subcategory.nameRu}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
          <div className="text-center px-4">
            <h3 className="text-white font-medium text-lg">{subcategory.nameRu}</h3>
            {subcategory.count && (
              <span className="text-white text-sm">{subcategory.count} Предметов</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

interface FeaturedFilterChipProps {
  filter: FeaturedFilter;
  onSelect: (filterId: string) => void;
}

const FeaturedFilterChip: React.FC<FeaturedFilterChipProps> = ({ filter, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(filter.id)}
      className="px-4 py-2 border border-neutral-300 text-sm rounded-full hover:border-neutral-800 transition-colors"
    >
      {filter.nameRu}
      {filter.count && (
        <span className="ml-1 text-neutral-500">({filter.count})</span>
      )}
    </button>
  );
};

export default CategoryPage;
