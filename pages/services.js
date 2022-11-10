import Hero from '@/components/common/Hero';
import Layout from '@/components/Layout';
import Testimonials from '@/components/Testimonials';
import React from 'react';

const Services = () => {
  return (
    <Layout>
      <Hero
        heading='Services'
        description={
          <>
            We are committed to meeting our client's demands by providing prompt
            and reliable service.
          </>
        }
      />
      <Testimonials />
    </Layout>
  );
};

export default Services;
