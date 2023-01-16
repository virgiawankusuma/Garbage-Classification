import Layout from '../components/Layout';
import Hero from '../components/hero/Hero';
import About from '../components/aboutSection/About';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}