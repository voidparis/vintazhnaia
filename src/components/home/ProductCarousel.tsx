import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { Product } from '../../data/products';

interface ProductCarouselProps {
  title: string;
  viewAllLink?: string;
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  viewAllLink,
  products
}) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-cardinal">{title}</h2>
          {viewAllLink && (
            <Link to={viewAllLink} className="text-sm uppercase tracking-wide hover:text-gold">
              Смотреть Еще
            </Link>
          )}
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-2 hide-scrollbar">
            {products.map((product) => (
              <div key={product.id} className="min-w-[250px] max-w-[250px] flex-shrink-0 h-full">
                {/* Remove the redundant Link wrapper since ProductCard already contains a Link */}
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 -ml-5 hover:bg-neutral-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 -mr-5 hover:bg-neutral-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
