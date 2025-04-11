import React, { useState } from 'react';

interface WatchFilterSidebarProps {
  activeFilters: Record<string, string[]>;
  applyFilter: (category: string, value: string, isChecked: boolean) => void;
  clearFilters: () => void;
  totalResults: number;
}

const WatchFilterSidebar: React.FC<WatchFilterSidebarProps> = ({
  activeFilters,
  applyFilter,
  clearFilters,
  totalResults
}) => {
  // State for expanded filter sections
  const [expandedSections, setExpandedSections] = useState({
    creators: true,
    department: true,
    period: true,
    style: true,
    features: true,
    materials: true,
    priceRange: true,
    dialColor: true,
    bandMaterial: true,
    condition: true,
    sellerLocation: true,
  });

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

  // Count active filters by category
  const countActiveFilters = (category: string) => {
    return activeFilters[category]?.length || 0;
  };

  // Filter data specific to watches
  const creatorFilters = [
    { id: 'rolex', label: 'Rolex', count: 152 },
    { id: 'cartier', label: 'Cartier', count: 102 },
    { id: 'patek_philippe', label: 'Patek Philippe', count: 87 },
    { id: 'omega', label: 'Omega', count: 93 },
    { id: 'audemars_piguet', label: 'Audemars Piguet', count: 76 },
    { id: 'tag_heuer', label: 'TAG Heuer', count: 68 },
    { id: 'jaeger_lecoultre', label: 'Jaeger-LeCoultre', count: 62 },
    { id: 'breitling', label: 'Breitling', count: 59 },
    { id: 'iwc', label: 'IWC', count: 47 },
    { id: 'panerai', label: 'Panerai', count: 43 },
  ];

  const departmentFilters = [
    { id: 'mens', label: 'Мужские часы', count: 438 },
    { id: 'womens', label: 'Женские часы', count: 324 },
    { id: 'unisex', label: 'Унисекс', count: 67 },
  ];

  const periodFilters = [
    { id: '21st_century', label: '21 век', count: 256 },
    { id: 'late_20th_century', label: 'Конец 20 века', count: 342 },
    { id: 'mid_20th_century', label: 'Середина 20 века', count: 187 },
    { id: 'early_20th_century', label: 'Начало 20 века', count: 76 },
    { id: '19th_century', label: '19 век', count: 18 },
  ];

  const styleFilters = [
    { id: 'modern', label: 'Модерн', count: 378 },
    { id: 'contemporary', label: 'Современный', count: 312 },
    { id: 'art_deco', label: 'Ар-Деко', count: 87 },
    { id: 'vintage', label: 'Винтаж', count: 217 },
    { id: 'minimalist', label: 'Минималистский', count: 165 },
    { id: 'classical', label: 'Классический', count: 124 },
  ];

  const featureFilters = [
    { id: 'chronograph', label: 'Хронограф', count: 183 },
    { id: 'date_display', label: 'Дата', count: 347 },
    { id: 'automatic', label: 'Автоматические', count: 412 },
    { id: 'quartz', label: 'Кварцевые', count: 267 },
    { id: 'moon_phase', label: 'Фаза Луны', count: 76 },
    { id: 'diamonds', label: 'С бриллиантами', count: 118 },
    { id: 'skeleton', label: 'Скелетные', count: 52 },
    { id: 'tourbillon', label: 'Турбийон', count: 24 },
  ];

  const materialFilters = [
    { id: 'gold', label: 'Золото', count: 265 },
    { id: 'stainless_steel', label: 'Нержавеющая сталь', count: 386 },
    { id: 'silver', label: 'Серебро', count: 124 },
    { id: 'platinum', label: 'Платина', count: 37 },
    { id: 'titanium', label: 'Титан', count: 68 },
    { id: 'ceramic', label: 'Керамика', count: 42 },
  ];

  const priceRangeFilters = [
    { id: 'under_5000', label: 'До 500 000 ₽', count: 122 },
    { id: '5000_10000', label: '500 000 ₽ - 1 000 000 ₽', count: 235 },
    { id: '10000_25000', label: '1 000 000 ₽ - 2 500 000 ₽', count: 187 },
    { id: '25000_50000', label: '2 500 000 ₽ - 5 000 000 ₽', count: 112 },
    { id: 'over_50000', label: 'Более 5 000 000 ₽', count: 67 },
  ];

  const dialColorFilters = [
    { id: 'black', label: 'Черный', count: 214 },
    { id: 'white', label: 'Белый', count: 187 },
    { id: 'silver', label: 'Серебряный', count: 142 },
    { id: 'gold', label: 'Золотой', count: 97 },
    { id: 'blue', label: 'Синий', count: 78 },
    { id: 'green', label: 'Зеленый', count: 46 },
    { id: 'brown', label: 'Коричневый', count: 32 },
    { id: 'red', label: 'Красный', count: 21 },
  ];

  const bandMaterialFilters = [
    { id: 'stainless_steel', label: 'Нержавеющая сталь', count: 286 },
    { id: 'leather', label: 'Кожа', count: 247 },
    { id: 'gold', label: 'Золото', count: 142 },
    { id: 'rubber', label: 'Каучук', count: 87 },
    { id: 'fabric', label: 'Текстиль', count: 65 },
    { id: 'ceramic', label: 'Керамика', count: 42 },
  ];

  const conditionFilters = [
    { id: 'excellent', label: 'Отличное', count: 456 },
    { id: 'very_good', label: 'Очень хорошее', count: 276 },
    { id: 'good', label: 'Хорошее', count: 118 },
    { id: 'fair', label: 'Удовлетворительное', count: 42 },
  ];

  const locationFilters = [
    { id: 'moscow', label: 'Москва', count: 215 },
    { id: 'saint_petersburg', label: 'Санкт-Петербург', count: 183 },
    { id: 'europe', label: 'Европа', count: 246 },
    { id: 'usa', label: 'США', count: 167 },
    { id: 'asia', label: 'Азия', count: 87 },
  ];

  // Check if any filters are active
  const hasActiveFilters = Object.values(activeFilters).some(filters => filters.length > 0);

  // Filter section component for reuse
  const FilterSection = ({
    title,
    section,
    filters,
    category
  }: {
    title: string,
    section: string,
    filters: { id: string, label: string, count?: number }[],
    category: string
  }) => {
    const activeCount = countActiveFilters(category);

    return (
      <div className="border-b border-neutral-200 py-4">
        <button
          className="flex justify-between items-center w-full text-left font-medium mb-4"
          onClick={() => toggleSection(section)}
        >
          <span className="flex items-center">
            {title}
            {activeCount > 0 && (
              <span className="ml-2 text-xs bg-black text-white rounded-full px-2 py-0.5">
                {activeCount}
              </span>
            )}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            {expandedSections[section as keyof typeof expandedSections]
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            }
          </svg>
        </button>

        {expandedSections[section as keyof typeof expandedSections] && (
          <div className="ml-2 space-y-2">
            {filters.map(filter => (
              <div key={filter.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`${category}-${filter.id}`}
                    checked={isFilterActive(category, filter.id)}
                    onChange={(e) => handleFilterChange(category, filter.id, e)}
                    className="mr-2 h-4 w-4 accent-black"
                  />
                  <label htmlFor={`${category}-${filter.id}`} className="text-sm">{filter.label}</label>
                </div>
                {filter.count && (
                  <span className="text-xs text-neutral-500">{filter.count}</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white pr-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium">{totalResults} Результатов</h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-neutral-600 hover:text-neutral-900 underline"
          >
            Сбросить все
          </button>
        )}
      </div>

      <FilterSection
        title="Создатель"
        section="creators"
        filters={creatorFilters}
        category="creators"
      />

      <FilterSection
        title="Отдел"
        section="department"
        filters={departmentFilters}
        category="department"
      />

      <FilterSection
        title="Период"
        section="period"
        filters={periodFilters}
        category="period"
      />

      <FilterSection
        title="Стиль"
        section="style"
        filters={styleFilters}
        category="style"
      />

      <FilterSection
        title="Особенности"
        section="features"
        filters={featureFilters}
        category="features"
      />

      <FilterSection
        title="Материал корпуса"
        section="materials"
        filters={materialFilters}
        category="materials"
      />

      <FilterSection
        title="Ценовой диапазон"
        section="priceRange"
        filters={priceRangeFilters}
        category="priceRange"
      />

      <FilterSection
        title="Цвет циферблата"
        section="dialColor"
        filters={dialColorFilters}
        category="dialColor"
      />

      <FilterSection
        title="Материал ремешка"
        section="bandMaterial"
        filters={bandMaterialFilters}
        category="bandMaterial"
      />

      <FilterSection
        title="Состояние"
        section="condition"
        filters={conditionFilters}
        category="condition"
      />

      <FilterSection
        title="Локация продавца"
        section="sellerLocation"
        filters={locationFilters}
        category="sellerLocation"
      />
    </div>
  );
};

export default WatchFilterSidebar;
