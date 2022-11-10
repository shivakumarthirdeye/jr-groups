import Background from '@/assets/images/hero.jpg';

const Hero = () => {
  return (
    <section
      className='bg-cover  my-0 hero-bg bg-center relative'
      style={{
        height: '618.2px',
        backgroundImage: `url(${Background.src})`,
      }}
    >
      <div className='container py-28 z-50 relative text-white'>
        <h1 className='text-primary text-2xl '>WELCOME TO</h1>
        <h1 className='text-7xl mt-2 font-bold'>JR Groups</h1>
        <div className='my-14 max-w-[656.89px] leading-[36px] '>
          <p className='text-lg '>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <button className='mt-12 rounded-md font-bold bg-primary p-2.5  max-w-[193px] w-full'>
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
