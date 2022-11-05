import Hero from '@/components/Hero';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout
      description={'This is a description'}
      keywords={'This is a keywords'}
      title={'This is a title'}
    >
      <Hero />
    </Layout>
  );
}
