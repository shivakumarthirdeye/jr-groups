import Background from '@/assets/images/hero.jpg';

const Hero = ({ heading, description }) => {
  return (
    <section
      className='bg-cover  my-0 hero-bg bg-[80%] md:bg-center  relative'
      style={{
        height: '430px',
        backgroundImage: `url(${Background.src})`,
      }}
    >
      <div className='container text-center py-28 z-50 relative text-white'>
        <h1 className='text-3xl md:text-4xl lg:text-[54px]  mt-2 font-bold'>
          {heading}
        </h1>
        <p className='my-8 text-sm md:text-base md:leading-[36px]'>
          {description}
        </p>
      </div>
    </section>
  );
};

export default Hero;
