import React from 'react';
import Link from 'next/link';

const Products: React.FC = () => {
  return (
    <div>
      <h1>My Products</h1>
      {/* Display a list of products for the artisan */}
      <Link href="/artisan/add-product">
        <a>Add Product</a>
      </Link>
    </div>
  );
};

export default Products;
