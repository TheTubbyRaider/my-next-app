import React from 'react';
import { GetServerSideProps } from 'next';
import { fetchProduct } from '../../utils/fetchData';
import ProductReview from '../../components/ProductReview';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

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

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Head>

      <Header />

      <main>
        <nav aria-label="Breadcrumb">
          <Link href="/">
            <a>Home</a>
          </Link>
          <span>&gt;</span>
          <Link href="/products">
            <a>Products</a>
          </Link>
          <span>&gt;</span>
          <span>{product.name}</span>
        </nav>

        <h1>{product.name}</h1>
        <Image
          src={`/images/${product.imageUrl}`}
          alt={product.name}
          width={500}
          height={300}
        />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <ProductReview productId={product.id} />
      </main>

      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{ product: Product }> = async (
  context
) => {
  const { id } = context.query;

  try {
    const product = await fetchProduct(id as string);
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    // Handle error case
    return {
      notFound: true,
    };
  }
};

export default ProductDetailPage;
