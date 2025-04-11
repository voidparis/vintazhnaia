import React from 'react';

interface CategoryItem {
  id: string;
  imageUrl: string;
  title: string;
  link: string;
}

const categories: CategoryItem[] = [
  {
    id: '1',
    imageUrl: 'https://ext.same-assets.com/2411483839/453680602.jpeg',
    title: 'Эпохи',
    link: '#'
  },
  {
    id: '2',
    imageUrl: 'https://ext.same-assets.com/2411483839/4048938580.jpeg',
    title: 'Производители Мебели',
    link: '#'
  },
  {
    id: '3',
    imageUrl: 'https://ext.same-assets.com/272843701/1084109076.jpeg',
    title: 'Художники',
    link: '#'
  },
  {
    id: '4',
    imageUrl: 'https://ext.same-assets.com/2411483839/2137643249.jpeg',
    title: 'Ювелирные Мастера',
    link: '#'
  }
];

const ShopByCategory: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-cardinal mb-8 text-center">Каталог</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="group relative overflow-hidden"
            >
              <div className="aspect-square bg-neutral-100 overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-25 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold tracking-wide text-center px-4">
                  {category.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <a href="#" className="p-4 text-center border border-neutral-200 hover:border-neutral-400 transition-colors">
            <h3 className="font-bold">Стили</h3>
          </a>
          <a href="#" className="p-4 text-center border border-neutral-200 hover:border-neutral-400 transition-colors">
            <h3 className="font-bold">Происхождение</h3>
          </a>
          <a href="#" className="p-4 text-center border border-neutral-200 hover:border-neutral-400 transition-colors">
            <h3 className="font-bold">Модные Дизайнеры</h3>
          </a>
          <a href="#" className="p-4 text-center border border-neutral-200 hover:border-neutral-400 transition-colors">
            <h3 className="font-bold">Материалы</h3>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
