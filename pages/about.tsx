import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About our e-commerce website" />
      </Head>

      <Header />

      <main>
        <h1>About Us</h1>
        <section>
          <h2>Our Story</h2>
          {/* Content */}
        </section>
        <section>
          <h2>Our Mission</h2>
          {/* Content */}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
