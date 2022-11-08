import About from '@/components/About';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import OurServices from '@/components/OurServices';

export default function Home() {
  return (
    <Layout
      description={'This is a description'}
      keywords={'This is a keywords'}
      title={'This is a title'}
    >
      <Hero />
      <About />
      <OurServices />
    </Layout>
  );
}
