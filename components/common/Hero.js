import Background from '@/assets/images/hero.jpg';

const Hero = ({ heading, description }) => {
  return (
    <section
      className='bg-cover  my-0 hero-bg bg-center relative'
      style={{
        height: '430px',
        backgroundImage: `url(${Background.src})`,
      }}
    >
      <div className='container text-center py-28 z-50 relative text-white'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl mt-2 font-bold'>
          {heading}
        </h1>
        <p className='my-8  md:leading-[36px]'>{description}</p>
      </div>
    </section>
  );
};

export default Hero;
