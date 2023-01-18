import Layout from '../components/Layout';
import Hero from '../components/heroAcknowledgment/Hero';
import Contributors from '../components/contributorsSection/Contributors';
import TechStacks from '../components/techStacksSection/TechStacks';

export default function Acknowledgment() {
  return (
    <Layout>
      <Hero />
      <Contributors />
      <TechStacks />
    </Layout>
  );
}