import React from 'react';
import PromoCard from '../ui/PromoCard';

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PromoCard
            title="Наш Весенний Каталог"
            description="Мы приглашаем вас просмотреть подборку изделий, представленных в нашем последнем издании, включая мебель, искусство и декор."
            linkText="Исследовать Сейчас"
            linkUrl="#"
            imageSrc="/images/spring-catalog.jpeg"
            imageAlt="Весенний Каталог"
          />

          <PromoCard
            title="Её Выбор"
            description="Основательница и креативный директор курорта Палм Хайтс на Большом Каймане, Габриэлла Халил, подготовила подборку великолепных предметов, предлагаемых женщинами-продавцами в нашем сообществе."
            linkText="Посмотреть Её Выбор"
            linkUrl="#"
            imageSrc="/images/curated-collection.jpeg"
            imageAlt="Подборка Коллекций"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
