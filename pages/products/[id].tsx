import React from 'react'
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { fetchProduct } from '../../utils/fetchData';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

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
