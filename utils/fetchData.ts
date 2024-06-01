// Dummy data for demonstration purposes
const products = [
  { id: '1', name: 'Product 1', description: 'This is product 1', price: 9.99, imageUrl: 'https://via.placeholder.com/150', category: 'Pottery' },
  { id: '2', name: 'Product 2', description: 'This is product 2', price: 14.99, imageUrl: 'https://via.placeholder.com/150', category: 'Jewelry' },
  { id: '3', name: 'Product 3', description: 'This is product 3', price: 19.99, imageUrl: 'https://via.placeholder.com/150', category: 'Pottery' },
];

const artisans = [
  {
    id: '1',
    name: 'Jane Smith',
    bio: 'I am a potter with a passion for creating unique and functional ceramics.',
    imageUrl: 'https://via.placeholder.com/200',
    products: [products[0], products[1]],
  },
  // Add more artisans as needed
];

export const fetchProducts = () => products;

export const fetchProduct = (id: string) => products.find((product) => product.id === id) || null;

export const fetchArtisan = (id: string) => artisans.find((artisan) => artisan.id === id) || null;
