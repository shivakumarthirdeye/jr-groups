import About from '@/components/About';
import Hero from '@/components/common/Hero';
import Customers from '@/components/Customers';
import GetInTouch from '@/components/GetInTouch';
import Layout from '@/components/Layout';
import OurMission from '@/components/OurMission';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';

const AboutUs = () => {
  return (
    <Layout>
      <Hero
        heading='About Us'
        description={
          <>
            SECURITY SOLUTIONS FROM TRUSTED PROFESSIONALS{' '}
            <br className='hidden sm:block' /> OUR SECURITY SERVICES ASSIST YOU
            IN CREATING SAFE AND SECURE AREAS.
          </>
        }
      />
      <About />
      <OurMission />
      <WhyChooseUs />
      <Customers />
      <GetInTouch />
      <Testimonials />
    </Layout>
  );
};

export default AboutUs;
