import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import { fetchProducts } from '../../utils/fetchData';
import { GetStaticProps } from 'next';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
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

export const getStaticProps: GetStaticProps<ProductsPageProps> = async () => {
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
    revalidate: 60, // Revalidate the page every 60 seconds
  };
};

export default ProductsPage;