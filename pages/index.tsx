import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../utils/fetchData';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const HomePage: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        const productsWithImages = fetchedProducts.map((product) => ({
          ...product,
          imageUrl: 'https://via.placeholder.com/150',
        }));
        setProducts(productsWithImages);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to our e-commerce website" />
      </Head>

      <Header />

      <main>
        <h1>Welcome to our website</h1>
        <section>
          <h2>Featured Products</h2>
          <div role="list">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;