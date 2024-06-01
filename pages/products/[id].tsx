import React from 'react';
import { GetServerSideProps } from 'next';
import { fetchProduct } from '../../utils/fetchData';
import ProductReview from '../../components/ProductReview';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

import { useRouter } from "next/router";

const ProductDetailPage: React.FC<{ product: Product }> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Head>

      <Header />

      <main>
        <h1>{product.name}</h1>
        <img src={`/images/${product.imageUrl}`} alt={product.name} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <ProductReview productId={product.id} />
      </main>

      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const product = await fetchProduct(id as string);

  return {
    props: {
      product,
    },
  };
};

export default ProductDetailPage;
