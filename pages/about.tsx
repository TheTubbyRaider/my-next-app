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
          <p>
            We started our e-commerce business with a passion for providing high-quality products and exceptional customer service. Our journey began in a small garage, where we carefully curated and packaged each order with love and attention to detail.
          </p>
        </section>
        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make online shopping a delightful experience for our customers. We strive to offer a wide range of products at competitive prices, while ensuring that every order is delivered promptly and with care.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;