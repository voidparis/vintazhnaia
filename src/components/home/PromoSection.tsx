import React from 'react';

const PromoSection: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-cardinal mb-4">Гарантия Винтажная</h2>
          <p className="text-neutral-600">
            Мы стремимся к вашему удовлетворению при каждой покупке предметов роскоши
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white shadow-sm text-center">
            <h3 className="text-lg font-bold mb-2">Гарантия Подлинности</h3>
            <p className="text-sm text-neutral-600">
              Эксперты проверяют подлинность каждого предмета
            </p>
          </div>

          <div className="p-6 bg-white shadow-sm text-center">
            <h3 className="text-lg font-bold mb-2">Проверенные Продавцы</h3>
            <p className="text-sm text-neutral-600">
              Надежные дилеры с исключительными коллекциями
            </p>
          </div>

          <div className="p-6 bg-white shadow-sm text-center">
            <h3 className="text-lg font-bold mb-2">Гарантия Возврата Денег</h3>
            <p className="text-sm text-neutral-600">
              Полный возврат в течение установленного срока
            </p>
          </div>

          <div className="p-6 bg-white shadow-sm text-center">
            <h3 className="text-lg font-bold mb-2">Надежная Глобальная Доставка</h3>
            <p className="text-sm text-neutral-600">
              Профессиональная доставка по всему миру
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="text-sm text-gold hover:underline">
            Узнать Больше
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
