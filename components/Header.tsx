import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header>
      <nav>
        <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
          <a>Home</a>
        </Link>
        <Link href="/about" className={router.pathname === '/about' ? 'active' : ''}>
          <a>About</a>
        </Link>
        <Link href="/products" className={router.pathname === '/products' ? 'active' : ''}>
          <a>Products</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;


