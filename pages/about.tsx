import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About our app" />
      </Head>

      <Header />

      <main>
        <h1>About</h1>
        <p>This is the about page of our awesome app.</p>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
