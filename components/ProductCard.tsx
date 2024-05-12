import React from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Link href={`/products/${product.id}`}>
        <a>View Details</a>
      </Link>
    </div>
  );
};

export default ProductCard;
