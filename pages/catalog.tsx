import React, { useState } from 'react';
import { fetchProducts } from '../utils/fetchData';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: Infinity });

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({ ...prevRange, [name]: parseFloat(value) }));
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch = category === '' || product.category === category;
    const priceMatch = product.price >= priceRange.min && product.price <= priceRange.max;
    return categoryMatch && priceMatch;
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Catalog</h1>
      <div>
        <label>
          Category:
          <select value={category} onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="Pottery">Pottery</option>
            <option value="Jewelry">Jewelry</option>
            {/* Add more categories */}
          </select>
        </label>
        <label>
          Price Range:
          <input
            type="number"
            name="min"
            value={priceRange.min}
            onChange={handlePriceRangeChange}
            placeholder="Min"
          />
          <input
            type="number"
            name="max"
            value={priceRange.max}
            onChange={handlePriceRangeChange}
            placeholder="Max"
          />
        </label>
      </div>
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            {/* Add more product details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;

