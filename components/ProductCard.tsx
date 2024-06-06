import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div role="listitem">
      <h3>{product.name}</h3>
      <Image
        src={`/images/${product.imageUrl}`}
        alt={product.name}
        width={300}
        height={200}
      />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Link href={`/products/${product.id}`}>
        <a>View Details</a>
      </Link>
      <button
        aria-expanded={isExpanded}
        aria-controls="product-details"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Hide Details' : 'Show Details'}
      </button>
      <div id="product-details" aria-hidden={!isExpanded}>
        {/* Add your product details content here */}
      </div>
    </div>
  );
};

export default ProductCard;