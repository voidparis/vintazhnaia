import React, { useState, useEffect } from 'react';
import { getCategoryData, CategoryData } from '../../utils/categoryData';

interface FilterSidebarProps {
  activeFilters: Record<string, string[]>;
  applyFilter: (category: string, value: string, isChecked: boolean) => void;
  clearFilters: () => void;
  categoryId?: string;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  activeFilters,
  applyFilter,
  clearFilters,
  categoryId = 'furniture'
}) => {
  const [categoryData, setCategoryData] = useState<CategoryData | null>(null);

  // State for expanded filter sections
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    styles: true,
    materials: true,
    priceRanges: true,
    colors: true,
    eras: true,
  });

  // Load category data
  useEffect(() => {
    const data = getCategoryData(categoryId);
    if (data) {
      setCategoryData(data);
    }
  }, [categoryId]);

  // Toggle expanded section
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  // Check if a filter is active
  const isFilterActive = (category: string, value: string) => {
    return activeFilters[category]?.includes(value);
  };

  // Handle filter change
  const handleFilterChange = (category: string, value: string, event: React.ChangeEvent<HTMLInputElement>) => {
    applyFilter(category, value, event.target.checked);
  };

  // Filter data - common to all categories
  const categories = [
    { id: 'furniture', label: 'Мебель' },
    { id: 'lighting', label: 'Освещение' },
    { id: 'decor', label: 'Декоративные объекты' },
    { id: 'art', label: 'Искусство' },
    { id: 'jewelry', label: 'Ювелирные изделия' },
    { id: 'fashion', label: 'Мода' },
  ];

  // Filter data based on category
  const getStyleFilters = () => {
    switch (categoryId) {
      case 'furniture':
        return [
          { id: 'mid_century', label: 'Середина века' },
          { id: 'art_deco', label: 'Ар-Деко' },
          { id: 'modern', label: 'Современный' },
          { id: 'scandinavian', label: 'Скандинавский' },
          { id: 'industrial', label: 'Индустриальный' },
        ];
      case 'jewelry':
        return [
          { id: 'art_deco', label: 'Ар-Деко' },
          { id: 'vintage', label: 'Винтаж' },
          { id: 'contemporary', label: 'Современный' },
          { id: 'victorian', label: 'Викторианский' },
          { id: 'edwardian', label: 'Эдвардианский' },
        ];
      case 'art':
        return [
          { id: 'abstract', label: 'Абстрактное' },
          { id: 'figurative', label: 'Фигуративное' },
          { id: 'expressionism', label: 'Экспрессионизм' },
          { id: 'impressionism', label: 'Импрессионизм' },
          { id: 'modern', label: 'Модернизм' },
        ];
      case 'fashion':
        return [
          { id: 'designer', label: 'Дизайнерские' },
          { id: 'vintage', label: 'Винтаж' },
          { id: 'casual', label: 'Повседневный' },
          { id: 'formal', label: 'Официальный' },
          { id: 'luxury', label: 'Люкс' },
        ];
      default:
        return [
          { id: 'mid_century', label: 'Середина века' },
          { id: 'art_deco', label: 'Ар-Деко' },
          { id: 'modern', label: 'Современный' },
          { id: 'vintage', label: 'Винтаж' },
          { id: 'contemporary', label: 'Актуальный' },
        ];
    }
  };

  const getMaterialFilters = () => {
    switch (categoryId) {
      case 'furniture':
        return [
          { id: 'wood', label: 'Дерево' },
          { id: 'metal', label: 'Металл' },
          { id: 'glass', label: 'Стекло' },
          { id: 'leather', label: 'Кожа' },
          { id: 'velvet', label: 'Бархат' },
          { id: 'marble', label: 'Мрамор' },
        ];
      case 'jewelry':
        return [
          { id: 'gold', label: 'Золото' },
          { id: 'silver', label: 'Серебро' },
          { id: 'platinum', label: 'Платина' },
          { id: 'diamond', label: 'Бриллианты' },
          { id: 'gemstone', label: 'Драгоценные камни' },
        ];
      case 'fashion':
        return [
          { id: 'silk', label: 'Шелк' },
          { id: 'cotton', label: 'Хлопок' },
          { id: 'wool', label: 'Шерсть' },
          { id: 'leather', label: 'Кожа' },
          { id: 'denim', label: 'Деним' },
        ];
      default:
        return [
          { id: 'wood', label: 'Дерево' },
          { id: 'metal', label: 'Металл' },
          { id: 'glass', label: 'Стекло' },
          { id: 'ceramic', label: 'Керамика' },
          { id: 'marble', label: 'Мрамор' },
        ];
    }
  };

  const priceRanges = [
    { id: 'under_1000', label: 'До 100 000 ₽' },
    { id: '1000_5000', label: '100 000 ₽ - 500 000 ₽' },
    { id: '5000_10000', label: '500 000 ₽ - 1 000 000 ₽' },
    { id: '10000_25000', label: '1 000 000 ₽ - 2 500 000 ₽' },
    { id: 'over_25000', label: 'Более 2 500 000 ₽' },
  ];

  const eraFilters = [
    { id: 'antique', label: 'Антикварный (до 1920)' },
    { id: 'vintage', label: 'Винтаж (1920-1980)' },
    { id: 'modern', label: 'Современный (1980-2000)' },
    { id: 'contemporary', label: 'Актуальный (после 2000)' },
  ];

  const colors = [
    { id: 'black', label: 'Черный' },
    { id: 'white', label: 'Белый' },
    { id: 'brown', label: 'Коричневый' },
    { id: 'gold', label: 'Золотой' },
    { id: 'silver', label: 'Серебряный' },
    { id: 'blue', label: 'Синий' },
    { id: 'green', label: 'Зеленый' },
    { id: 'red', label: 'Красный' },
  ];

  // Check if any filters are active
  const hasActiveFilters = Object.values(activeFilters).some(filters => filters.length > 0);

  // Dynamic styles and materials based on category
  const styleFilters = getStyleFilters();
  const materialFilters = getMaterialFilters();

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Фильтры</h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-neutral-600 hover:text-neutral-900"
          >
            Сбросить все
          </button>
        )}
      </div>

      {/* Categories Filter */}
      <div className="border-b border-neutral-200 py-4">
        <button
          className="flex justify-between items-center w-full text-left font-medium mb-4"
          onClick={() => toggleSection('categories')}
        >
          <span>Категории</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            {expandedSections.categories
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            }
          </svg>
        </button>

        {expandedSections.categories && (
          <div className="ml-2 space-y-2">
            {categories.map(category => (
              <div key={category.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${category.id}`}
                  checked={isFilterActive('categories', category.id)}
                  onChange={(e) => handleFilterChange('categories', category.id, e)}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor={`category-${category.id}`} className="text-sm">{category.label}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Subcategories Filter - Only if we have category data */}
      {categoryData && (
        <div className="border-b border-neutral-200 py-4">
          <button
            className="flex justify-between items-center w-full text-left font-medium mb-4"
            onClick={() => toggleSection('subcategories')}
          >
            <span>Подкатегории {categoryData.titleRu}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              {expandedSections.categories
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              }
            </svg>
          </button>

          {expandedSections.categories && (
            <div className="ml-2 space-y-2">
              {categoryData.subcategories.map(subcategory => (
                <div key={subcategory.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`subcategory-${subcategory.id}`}
                    checked={isFilterActive('subcategories', subcategory.id)}
                    onChange={(e) => handleFilterChange('subcategories', subcategory.id, e)}
                    className="mr-2 h-4 w-4"
                  />
                  <label htmlFor={`subcategory-${subcategory.id}`} className="text-sm">{subcategory.nameRu}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Styles Filter */}
      <div className="border-b border-neutral-200 py-4">
        <button
          className="flex justify-between items-center w-full text-left font-medium mb-4"
          onClick={() => toggleSection('styles')}
        >
          <span>Стили</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            {expandedSections.styles
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            }
          </svg>
        </button>

        {expandedSections.styles && (
          <div className="ml-2 space-y-2">
            {styleFilters.map(style => (
              <div key={style.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`style-${style.id}`}
                  checked={isFilterActive('styles', style.id)}
                  onChange={(e) => handleFilterChange('styles', style.id, e)}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor={`style-${style.id}`} className="text-sm">{style.label}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Materials Filter */}
      <div className="border-b border-neutral-200 py-4">
        <button
          className="flex justify-between items-center w-full text-left font-medium mb-4"
          onClick={() => toggleSection('materials')}
        >
          <span>Материалы</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            {expandedSections.materials
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            }
          </svg>
        </button>

        {expandedSections.materials && (
          <div className="ml-2 space-y-2">
            {materialFilters.map(material => (
              <div key={material.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`material-${material.id}`}
                  checked={isFilterActive('materials', material.id)}
                  onChange={(e) => handleFilterChange('materials', material.id, e)}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor={`material-${material.id}`} className="text-sm">{material.label}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="border-b border-neutral-200 py-4">
        <button
          className="flex justify-between items-center w-full text-left font-medium mb-4"
          onClick={() => toggleSection('priceRanges')}
        >
          <span>Ценовой диапазон</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            {expandedSections.priceRanges
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            }
          </svg>
        </button>

        {expandedSections.priceRanges && (
          <div className="ml-2 space-y-2">
            {priceRanges.map(range => (
              <div key={range.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`price-${range.id}`}
                  checked={isFilterActive('priceRanges', range.id)}
                  onChange={(e) => handleFilterChange('priceRanges', range.id, e)}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor={`price-${range.id}`} className="text-sm">{range.label}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Era Filter */}
      <div className="border-b border-neutral-200 py-4">
        <button
          className="flex justify-between items-center w-full text-left font-medium mb-4"
          onClick={() => toggleSection('eras')}
        >
          <span>Эпоха</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            {expandedSections.eras
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            }
          </svg>
        </button>

        {expandedSections.eras && (
          <div className="ml-2 space-y-2">
            {eraFilters.map(era => (
              <div key={era.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`era-${era.id}`}
                  checked={isFilterActive('eras', era.id)}
                  onChange={(e) => handleFilterChange('eras', era.id, e)}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor={`era-${era.id}`} className="text-sm">{era.label}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Colors Filter */}
      <div className="py-4">
        <button
          className="flex justify-between items-center w-full text-left font-medium mb-4"
          onClick={() => toggleSection('colors')}
        >
          <span>Цвета</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            {expandedSections.colors
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            }
          </svg>
        </button>

        {expandedSections.colors && (
          <div className="ml-2 space-y-2">
            {colors.map(color => (
              <div key={color.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`color-${color.id}`}
                  checked={isFilterActive('colors', color.id)}
                  onChange={(e) => handleFilterChange('colors', color.id, e)}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor={`color-${color.id}`} className="text-sm">{color.label}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
