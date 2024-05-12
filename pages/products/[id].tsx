import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { fetchProduct } from '../../utils/fetchData';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const product: Product | undefined = id ? fetchProduct(id as string) : undefined;

  if (!product) {
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
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
