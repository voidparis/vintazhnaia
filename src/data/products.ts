export interface Product {
  id: string;
  imageUrl: string;
  image?: string; // Added for compatibility with ProductGrid
  title: string;
  seller?: string;
  designer?: string; // Added for compatibility with ProductGrid
  price: string;
  priceValue?: number; // Added for compatibility with ProductGrid
  shipping?: string;
  location?: string; // Added for compatibility with ProductGrid
}

// Helper function to convert USD price strings to RUB numeric values
const usdToRub = (usdPrice: string): number => {
  // Remove $ and commas, then convert to number and multiply by approximate exchange rate
  const numericValue = parseFloat(usdPrice.replace('$', '').replace(',', ''));
  // Approximate USD to RUB exchange rate (for example purposes)
  return Math.round(numericValue * 95);
};

// Add Russian details to products
const addRussianDetails = (product: Product): Product => {
  return {
    ...product,
    image: product.imageUrl, // Map imageUrl to image
    designer: product.seller ? product.seller.split('By ').pop() : 'Винтажная Коллекция',
    priceValue: usdToRub(product.price),
    location: ['Москва', 'Санкт-Петербург', 'Сочи', 'Казань'][Math.floor(Math.random() * 4)]
  };
};

export const editorsPicks: Product[] = [
  {
    id: '1',
    imageUrl: 'https://ext.same-assets.com/2411483839/878713496.jpeg',
    title: 'Exceptional Finn Juhl \'57\' Sofa',
    seller: 'By Onecollection, Finn Juhl',
    price: '$7,750'
  },
  {
    id: '2',
    imageUrl: 'https://ext.same-assets.com/2411483839/1603949192.jpeg',
    title: 'Iris Pink Glass Candleholder by Summerill & Bishop',
    seller: 'By Casarialto',
    price: '$250'
  },
  {
    id: '3',
    imageUrl: 'https://ext.same-assets.com/2411483839/3604620263.jpeg',
    title: 'Slim Aarons \'Bahamas Signpost\'',
    seller: 'By Slim Aarons',
    price: '$3,000',
    shipping: 'Free Shipping'
  },
  {
    id: '4',
    imageUrl: 'https://ext.same-assets.com/2411483839/1808370198.jpeg',
    title: 'Van Cleef & Arpels Vintage Alhambra Turquoise Yellow 18K Gold Pendant Necklace',
    seller: 'By Van Cleef & Arpels',
    price: '$9,210',
    shipping: 'Free Shipping'
  },
  {
    id: '5',
    imageUrl: 'https://ext.same-assets.com/2411483839/4019792414.jpeg',
    title: 'Chanel 1997 Vintage Wicker and Beige Lambskin Basket Vanity Bag',
    price: '$5,850',
    shipping: 'Free Shipping'
  }
].map(addRussianDetails);

export const mostSavedItems: Product[] = [
  {
    id: '6',
    imageUrl: 'https://ext.same-assets.com/2411483839/374420982.jpeg',
    title: 'Baccarat Harmonie Double Old-Fashioned Tumbler',
    seller: 'By Baccarat',
    price: '$290'
  },
  {
    id: '7',
    imageUrl: 'https://ext.same-assets.com/2411483839/2059002105.jpeg',
    title: 'Tom Ford for Gucci 2003 Silk Dress',
    seller: 'Vintage Luxury',
    price: '$1,850',
    shipping: 'Free Shipping'
  },
  {
    id: '8',
    imageUrl: 'https://ext.same-assets.com/272843701/2439521969.webp',
    title: 'Murano Glass Bowl, Verde Sommerso',
    seller: 'Italian Vintage Collection',
    price: '$420'
  },
  {
    id: '9',
    imageUrl: 'https://ext.same-assets.com/272843701/223234628.jpeg',
    title: 'Soleia Curved Linen Sofa in Cream',
    seller: 'Marine Bustros Design',
    price: '$3,200',
    shipping: 'Free Shipping'
  },
  {
    id: '10',
    imageUrl: 'https://ext.same-assets.com/2411483839/2321549824.jpeg',
    title: 'Antique Persian Tabriz Rug',
    seller: 'Heritage Rugs',
    price: '$4,800'
  }
].map(addRussianDetails);

export const excellentValues: Product[] = [
  {
    id: '11',
    imageUrl: 'https://ext.same-assets.com/2411483839/1167461518.jpeg',
    title: 'Pair of Mid-Century Teak Nightstands',
    seller: 'Modern Archive',
    price: '$950'
  },
  {
    id: '12',
    imageUrl: 'https://ext.same-assets.com/2411483839/91178169.jpeg',
    title: 'Transparent Blue Glass Vase',
    seller: 'Glass Studio Collection',
    price: '$180'
  },
  {
    id: '13',
    imageUrl: 'https://ext.same-assets.com/2411483839/1012990268.jpeg',
    title: 'Brass Pendant Light, Tom Dixon Style',
    seller: 'Modern Lighting Co.',
    price: '$295'
  },
  {
    id: '14',
    imageUrl: 'https://ext.same-assets.com/2411483839/2790377507.jpeg',
    title: 'Vintage Leather Club Chair',
    seller: 'Classic Furniture Vault',
    price: '$1,200',
    shipping: 'Free Shipping'
  },
  {
    id: '15',
    imageUrl: 'https://ext.same-assets.com/2411483839/4223837559.jpeg',
    title: 'Art Deco Wall Mirror with Gold Frame',
    seller: 'Deco Treasures',
    price: '$650'
  }
].map(addRussianDetails);
