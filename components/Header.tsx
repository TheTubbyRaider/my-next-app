import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;