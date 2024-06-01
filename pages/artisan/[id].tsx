import React from 'react';
import { GetServerSideProps } from 'next';
import { fetchArtisan } from '../../utils/fetchData';
import Link from 'next/link';

interface Artisan {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  products: Product[];
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ArtisanDetailPage: React.FC<{ artisan: Artisan }> = ({ artisan }) => {
  return (
    <div>
      <h1>{artisan.name}</h1>
      <img src={artisan.imageUrl} alt={artisan.name} />
      <p>{artisan.bio}</p>
      <h2>Products</h2>
      {artisan.products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
      <Link href={`/artisan/products?id=${artisan.id}`}>
        <a>Manage Products</a>
      </Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const artisan = await fetchArtisan(id as string);

  return {
    props: {
      artisan,
    },
  };
};

export default ArtisanDetailPage;
