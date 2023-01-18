import Layout from '../components/Layout';
import Hero from '../components/heroAcknowledgment/Hero';
import Contributors from '../components/contributorsSection/Contributors';
import Techstacks from '../components/techStacksSection/Techstacks';

export default function Acknowledgment() {
  return (
    <Layout>
      <Hero />
      <Contributors />
      <Techstacks />
    </Layout>
  );
}