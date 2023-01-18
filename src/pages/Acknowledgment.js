import Layout from '../components/Layout';
import Hero from '../components/heroAcknowledgment/Hero';
import Contributors from '../components/contributorsSection/Contributors';
import TechStacks from '../components/techStacksSection/TechStacks';
import Credits from '../components/creditsSection/Credits';

export default function Acknowledgment() {
  return (
    <Layout>
      <Hero />
      <Contributors />
      <TechStacks />
      <Credits />
    </Layout>
  );
}