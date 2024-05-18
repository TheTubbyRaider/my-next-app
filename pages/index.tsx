import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard'; // Assuming you have a ProductCard component
import { fetchProducts } from '../../utils/productUtils'; // Assuming you have a fetchProducts utility function

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  // Add other product properties as needed
}

const ProductsPage: React.FC = () => {
  const products: Product[] = fetchProducts();

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

export default ProductsPage;
