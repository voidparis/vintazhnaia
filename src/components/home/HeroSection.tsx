import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[500px]">
        {/* Using the Pierre Chapo wooden shelves image with adjusted object-fit properties */}
        <img
          src="/images/pierre-chapo-shelves.jpg"
          alt="Pierre Chapo wooden shelves with decorative items"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ objectPosition: "center 30%" }}
        />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-md bg-white/80 p-6 rounded shadow-lg">
              <h1 className="text-4xl md:text-5xl mb-4 font-cardinal">
                Что-то <em className="italic">Культовое</em>
              </h1>
              <p className="text-neutral-700 mb-6">
                Откройте для себя коллекцию украшений, часов и сумок от желанных брендов.
              </p>
              <Link
                to="/category/watches"
                className="inline-block bg-[#002FA7] text-white px-6 py-2 hover:bg-[#002088] transition-colors"
              >
                Посмотреть Коллекцию
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
