import About from '@/components/About';
import Customers from '@/components/Customers';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import OurProducts from '@/components/OurProducts';
import OurServices from '@/components/OurServices';
import Testimonials from '@/components/Testimonials';
import Works from '@/components/Works';

export default function Home() {
  return (
    <Layout
      description={'This is a description'}
      keywords={'This is a keywords'}
      title={'This is a title'}
    >
      <Hero />
      <About showBtn={true} />
      <Works />
      <OurServices />
      <OurProducts />
      <Customers />
      <Testimonials />
    </Layout>
  );
}
