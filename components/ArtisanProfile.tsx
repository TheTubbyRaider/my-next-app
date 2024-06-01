import React from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface Artisan {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  products: Product[];
}

interface ArtisanProfileProps {
  artisan: Artisan;
}

const ArtisanProfile: React.FC<ArtisanProfileProps> = ({ artisan }) => {
  return (
    <div>
      <h1>{artisan.name}</h1>
      <Image src={artisan.imageUrl} alt={artisan.name} width={200} height={200} />
      <p>{artisan.bio}</p>
      <h2>Products</h2>
      <div>
        {artisan.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ArtisanProfile;
