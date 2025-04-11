import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';
import { WatchProduct } from '../../data/watchData';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Check if the product is a watch product (has the isWatch property)
  const isWatchProduct = 'isWatch' in product;
  const watchProduct = isWatchProduct ? product as WatchProduct : null;

  // Extract special watch details if this is a watch product
  const creator = watchProduct?.creator || product.designer || product.seller?.split('By ').pop() || '';
  const location = product.location || '';

  // Handle original price for sale items
  const onSale = 'onSale' in product;
  const originalPrice = onSale && 'originalPrice' in product ? (product as any).originalPrice : null;

  return (
    <div className="product-card group">
      <div className="product-image aspect-square relative overflow-hidden bg-neutral-50 mb-3">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image || product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <button className="favorite-btn opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>

      <div className="product-info text-sm">
        {/* Creator/Designer/Brand */}
        {creator && (
          <div className="mb-1 font-medium text-black line-clamp-1">
            {creator}
          </div>
        )}

        {/* Product Title */}
        <Link to={`/product/${product.id}`} className="hover:text-gold">
          <h3 className="mb-1 line-clamp-2 text-neutral-700">
            {product.title}
          </h3>
        </Link>

        {/* Watch-specific details */}
        {isWatchProduct && watchProduct?.department && (
          <div className="text-xs text-neutral-500 mb-1">
            {watchProduct.department === 'mens' ? 'Мужские часы' :
             watchProduct.department === 'womens' ? 'Женские часы' : 'Унисекс'}
          </div>
        )}

        {/* Price with sale display */}
        <div className="flex items-center gap-2 mb-1">
          <span className={`font-medium ${onSale ? 'text-red-600' : 'text-black'}`}>
            {product.price}
          </span>
          {onSale && originalPrice && (
            <span className="text-neutral-500 line-through text-xs">
              {originalPrice}
            </span>
          )}
        </div>

        {/* Shipping information */}
        {product.shipping && (
          <div className="text-xs text-green-600 mb-1">
            {product.shipping}
          </div>
        )}

        {/* Location */}
        {location && (
          <div className="text-xs text-neutral-500">
            {location}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
