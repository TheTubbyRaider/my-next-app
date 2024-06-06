import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <header>
      <nav role="navigation" aria-label="Main Navigation">
        <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
          <a tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/')}>
            Home
          </a>
        </Link>
        <Link href="/about" className={router.pathname === '/about' ? 'active' : ''}>
          <a tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/about')}>
            About
          </a>
        </Link>
        <Link href="/products" className={router.pathname === '/products' ? 'active' : ''}>
          <a tabIndex={0} onKeyDown={(e) => handleKeyDown(e, '/products')}>
            Products
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;