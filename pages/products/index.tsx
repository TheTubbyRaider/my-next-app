import React from 'react'
import { GetStaticProps } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { fetchProducts } from '../../utils/fetchData';

const ProductCard = dynamic(() => import('../../components/ProductCard'), {
  loading: () => <div>Loading...</div>,
});

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductsPage: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Products</title>
        <meta name="description" content="List of products" />
      </Head>

      <Header />

      <main>
        <h1>Products</h1>
        <div>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
  };
};

export default ProductsPage;
