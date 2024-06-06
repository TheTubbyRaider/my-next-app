// Dummy implementation for demonstration purposes
// Replace with your actual data fetching logic

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is the description for Product 1',
    price: 9.99,
    imageUrl: 'product1.jpg',
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'This is the description for Product 2',
    price: 14.99,
    imageUrl: 'product2.jpg',
  },
  // Add more dummy products as needed
];

export const fetchProducts = async (): Promise<Product[]> => {
  // Simulate an asynchronous operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyProducts);
    }, 1000);
  });
};

export const fetchProduct = async (id: string): Promise<Product | null> => {
  // Simulate an asynchronous operation
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = dummyProducts.find((p) => p.id === id);
      resolve(product || null);
    }, 1000);
  });
};