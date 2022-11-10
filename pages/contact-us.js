import Hero from '@/components/common/Hero';
import Layout from '@/components/Layout';
import React from 'react';

const ContactUs = () => {
  return (
    <Layout>
      <Hero
        heading='Contact Us'
        description={
          <>Want to know how can we help and protect you, Get in Touch!</>
        }
      />
    </Layout>
  );
};

export default ContactUs;
