import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import HeroSection from './HeroSection';
import FeaturedCategories from './FeaturedCategories';
import ShopByCategory from './ShopByCategory';
import ProductCarousel from './ProductCarousel';
import PromoSection from './PromoSection';
import { editorsPicks, mostSavedItems } from '../../data/products';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Test link to product page */}
      <div className="container mx-auto my-4 px-4">
        <Link to="/product" className="inline-block py-2 px-4 bg-amber-700 text-white rounded hover:bg-amber-800">
          Test Product Page Link
        </Link>
      </div>

      <HeroSection />
      <div className="container mx-auto px-4 py-8 space-y-12">
        <FeaturedCategories />
        <ProductCarousel
          title="Новые поступления"
          products={editorsPicks}
          viewAllLink="/catalog"
        />
        <ShopByCategory />
        <PromoSection />
        <ProductCarousel
          title="Популярные товары"
          products={mostSavedItems}
          viewAllLink="/catalog"
        />
      </div>
    </Layout>
  );
};

export default HomePage;
