import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';

const ProductDetail: React.FC = () => {
  // Get optional productId from URL
  const { productId } = useParams<{ productId?: string }>();

  const [mainImage, setMainImage] = useState('/images/product-page/main.jpg');
  const [activeTab, setActiveTab] = useState('details');

  const handleThumbnailClick = (imagePath: string) => {
    setMainImage(imagePath);
  };

  // Error handling for images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Image failed to load:', e.currentTarget.src);
    // Fallback to main image if thumbnail fails
    e.currentTarget.src = '/images/product-page/main.jpg';
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <nav className="flex text-sm overflow-x-auto hide-scrollbar">
            <a href="/" className="text-neutral-500 hover:text-blue-primary whitespace-nowrap">Home</a>
            <span className="mx-2">/</span>
            <a href="/furniture" className="text-neutral-500 hover:text-blue-primary whitespace-nowrap">Furniture</a>
            <span className="mx-2">/</span>
            <a href="/furniture/decorative-objects" className="text-neutral-500 hover:text-blue-primary whitespace-nowrap">Decorative Objects</a>
            <span className="mx-2">/</span>
            <a href="/furniture/decorative-objects/vases-vessels" className="text-neutral-500 hover:text-blue-primary whitespace-nowrap">Vases and Vessels</a>
            <span className="mx-2">/</span>
            <a href="/furniture/decorative-objects/vases-vessels/vases" className="text-neutral-500 hover:text-blue-primary whitespace-nowrap">Vases</a>
          </nav>
        </div>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div className="mb-4 bg-neutral-100 aspect-square relative">
              <img
                src={mainImage}
                alt="French Art Deco vase by Charles Catteau, 1920"
                className="w-full h-full object-contain"
                onError={handleImageError}
              />
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-2 mb-4">
              <button
                className="border border-neutral-300 p-1 hover:border-neutral-500 transition-colors"
                onClick={() => handleThumbnailClick('/images/product-page/main.jpg')}
              >
                <img
                  src="/images/product-page/main.jpg"
                  alt="Thumbnail 1"
                  className="w-16 h-16 object-cover"
                  onError={handleImageError}
                />
              </button>
              <button
                className="border border-neutral-300 p-1 hover:border-neutral-500 transition-colors"
                onClick={() => handleThumbnailClick('/images/product-page/thumbnails/thumb1.jpg')}
              >
                <img
                  src="/images/product-page/thumbnails/thumb1.jpg"
                  alt="Thumbnail 2"
                  className="w-16 h-16 object-cover"
                  onError={handleImageError}
                />
              </button>
              <button
                className="border border-neutral-300 p-1 hover:border-neutral-500 transition-colors"
                onClick={() => handleThumbnailClick('/images/product-page/thumbnails/thumb2.jpg')}
              >
                <img
                  src="/images/product-page/thumbnails/thumb2.jpg"
                  alt="Thumbnail 3"
                  className="w-16 h-16 object-cover"
                  onError={handleImageError}
                />
              </button>
            </div>

            {/* Image Controls */}
            <div className="flex justify-between mb-4">
              <div className="text-sm text-neutral-500">1 of 3</div>
              <div className="flex space-x-4">
                <button className="text-neutral-500 hover:text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Z" />
                  </svg>
                </button>
                <button className="text-neutral-500 hover:text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-cardinal mb-2">French Art Deco vase by Charles Catteau, 1920 {productId ? `(ID: ${productId})` : ''}</h1>
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-medium">$1,331.04</span>
                <div className="ml-2">
                  <span className="text-neutral-500 text-sm">
                    Free Shipping with code FREESHIP
                  </span>
                </div>
              </div>

              <div className="mb-4 text-sm">
                <p>Ships from Netherlands: $142 Standard Parcel</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center text-sm mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gold mr-2">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span>The 1stDibs Promise:</span>
                </div>
                <p className="text-sm ml-6 mb-1">Authenticity Guarantee,</p>
                <p className="text-sm ml-6 mb-1">Money-Back Guarantee,</p>
                <p className="text-sm ml-6">24-Hour Cancellation</p>
              </div>

              <div className="space-y-4">
                <button className="w-full py-3 px-4 bg-neutral-900 text-white hover:bg-neutral-700 transition-colors">
                  Add to Shopping Bag
                </button>
                <button className="w-full py-3 px-4 border border-neutral-900 hover:bg-neutral-100 transition-colors">
                  Ask The Seller
                </button>
              </div>
            </div>

            <div className="border-t border-neutral-300 pt-6">
              <h2 className="text-xl font-cardinal mb-4">Questions about this piece?</h2>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gold">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gold">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gold">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gold">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gold">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2 text-sm">(34)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12">
          <div className="border-b border-neutral-300">
            <div className="flex overflow-x-auto hide-scrollbar">
              <button
                className={`py-3 px-6 text-sm font-medium whitespace-nowrap ${activeTab === 'details' ? 'border-b-2 border-neutral-900' : 'text-neutral-500'}`}
                onClick={() => setActiveTab('details')}
              >
                Item Details
              </button>
              <button
                className={`py-3 px-6 text-sm font-medium whitespace-nowrap ${activeTab === 'seller' ? 'border-b-2 border-neutral-900' : 'text-neutral-500'}`}
                onClick={() => setActiveTab('seller')}
              >
                Seller Information
              </button>
              <button
                className={`py-3 px-6 text-sm font-medium whitespace-nowrap ${activeTab === 'shipping' ? 'border-b-2 border-neutral-900' : 'text-neutral-500'}`}
                onClick={() => setActiveTab('shipping')}
              >
                Shipping & Returns
              </button>
              <button
                className={`py-3 px-6 text-sm font-medium whitespace-nowrap ${activeTab === 'promise' ? 'border-b-2 border-neutral-900' : 'text-neutral-500'}`}
                onClick={() => setActiveTab('promise')}
              >
                The 1stDibs Promise
              </button>
            </div>
          </div>

          <div className="py-6">
            {activeTab === 'details' && (
              <div>
                <h2 className="text-xl mb-4">French Art Deco vase by Charles Catteau, 1920</h2>
                <p className="mb-4">
                  A French Art Deco vase by Charles Catteau (1880-1966) for Grès Keramis-Boch Frères. A sandstone egg-shaped vase with open neck with model number D635 and shape number 897. A green and yellow glazed sandstone vase. Foot and neck finished with a wavy beige edge decorated with green dots. Neck and foot connected by vertical green lines, interrupted at the height of the belly, which is decorated with a round medallion with a stylish rooster depicted.
                </p>
                <p className="mb-4">
                  Play of superpositions of matt glazes that create a marble effect in some places. The vase has a firing error in the neck. Charles Crépin Nicolas Catteau was a French potter and designer, known for his work in the Art Deco style with a pronounced use of color. He made many of his designs for the pottery Boch Frères.
                </p>
                <p className="mb-8">
                  The measurement is 26 cm high and 11,5 cm diagonal. The weight is 1200 grams.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="font-bold mb-2">Creator:</h3>
                    <p>Charles Catteau for Boch Freres (Designer)</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Dimensions:</h3>
                    <p>Height: 10.24 in (26 cm)</p>
                    <p>Diameter: 4.53 in (11.5 cm)</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Materials and Techniques:</h3>
                    <p>Sandstone</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Place of Origin:</h3>
                    <p>France</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Period:</h3>
                    <p>Early 20th Century</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Date of Manufacture:</h3>
                    <p>1920</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Condition:</h3>
                    <p>Good</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Seller Location:</h3>
                    <p>Delft, NL</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'seller' && (
              <div>
                <h2 className="text-xl mb-4">Seller Information</h2>
                <p>Information about the seller would appear here.</p>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div>
                <h2 className="text-xl mb-4">Shipping & Returns</h2>
                <p>Shipping and returns information would appear here.</p>
              </div>
            )}

            {activeTab === 'promise' && (
              <div>
                <h2 className="text-xl mb-4">The 1stDibs Promise</h2>
                <p>The 1stDibs Promise information would appear here.</p>
              </div>
            )}
          </div>
        </div>

        {/* Similar Items */}
        <div className="mt-12 border-t border-neutral-300 pt-8">
          <h2 className="text-2xl font-cardinal mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="product-card">
              <div className="product-image aspect-square">
                <img
                  src="/images/product-page/main.jpg"
                  alt="Charles Catteau Art Deco Ceramic Vase, Circa 1920"
                  className="h-full w-full object-cover"
                  onError={handleImageError}
                />
                <button className="favorite-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
              </div>
              <div className="product-info">
                <h3 className="text-sm font-bold line-clamp-2 mb-1">Charles Catteau Art Deco Ceramic Vase, Circa 1920</h3>
                <p className="text-sm font-medium">
                  $3,800
                </p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image aspect-square">
                <img
                  src="/images/product-page/main.jpg"
                  alt="Charles Catteau French Art Deco Pottery Vase"
                  className="h-full w-full object-cover"
                  onError={handleImageError}
                />
                <button className="favorite-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
              </div>
              <div className="product-info">
                <h3 className="text-sm font-bold line-clamp-2 mb-1">Charles Catteau French Art Deco Pottery Vase</h3>
                <p className="text-sm font-medium">
                  $2,500
                </p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image aspect-square">
                <img
                  src="/images/product-page/main.jpg"
                  alt="Art Deco Craquel Vase by Charles Catteau"
                  className="h-full w-full object-cover"
                  onError={handleImageError}
                />
                <button className="favorite-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
              </div>
              <div className="product-info">
                <h3 className="text-sm font-bold line-clamp-2 mb-1">Art Deco "Craquelé" Vase by Charles Catteau</h3>
                <p className="text-sm font-medium">
                  $2,395
                </p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image aspect-square">
                <img
                  src="/images/product-page/main.jpg"
                  alt="Art Deco Kéramis Vase by Charles Catteau"
                  className="h-full w-full object-cover"
                  onError={handleImageError}
                />
                <button className="favorite-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
              </div>
              <div className="product-info">
                <h3 className="text-sm font-bold line-clamp-2 mb-1">Art Deco Kéramis Vase by Charles Catteau</h3>
                <p className="text-sm font-medium">
                  $1,030
                </p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image aspect-square">
                <img
                  src="/images/product-page/main.jpg"
                  alt="Charles Catteau Art Deco Vase for Boch Frères"
                  className="h-full w-full object-cover"
                  onError={handleImageError}
                />
                <button className="favorite-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
              </div>
              <div className="product-info">
                <h3 className="text-sm font-bold line-clamp-2 mb-1">Charles Catteau Art Deco Vase for Boch Frères</h3>
                <p className="text-sm font-medium">
                  $1,080
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
