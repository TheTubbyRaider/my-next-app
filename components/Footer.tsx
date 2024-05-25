import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      <nav aria-label="Footer Navigation">
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/privacy">
          <a>Privacy Policy</a>
        </Link>
        <Link href="/terms">
          <a>Terms of Service</a>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
