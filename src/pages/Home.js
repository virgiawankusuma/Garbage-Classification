import Layout from '../components/Layout';
import Hero from '../components/hero/Hero';
import About from '../components/aboutSection/About';
import Steps from '../components/stepsSection/Steps';
import Featured from '../components/featuredSection/Featured';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Steps />
      <Featured />
    </Layout>
  );
}