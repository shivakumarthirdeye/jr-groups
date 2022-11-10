import img1 from '@/assets/images/ourMission.png';

const OurMission = () => {
  return (
    <div className='my-10'>
      <section className='container my-28'>
        <div className='grid lg:grid-cols-2 gap-y-8 lg:gap-5 items-center xl:gap-8'>
          <div className=''>
            <h2 className='text-2xl font-semibold'>Mission</h2>
            <div className='relative w-fit'>
              <h1 className='text-[42px] font-bold'>Our Mission</h1>
              <div className='absolute bg-darkBlue rounded-full h-1.5 w-[60%]'></div>
            </div>
            <p className='text-grey leading-[34px] my-8'>
              Our primary goal is to deliver the finest security solutions to
              our customers through the use of cutting-edge technology and solid
              service assistance. Furthermore, the after-sales service that we
              offer is of the highest quality. Our goal is to empower clients to
              protect their lives, property, and businesses by providing
              high-quality, innovative fire protection products and expertise
              delivered promptly using world-class engineering processes and
              ensuring effective fire safety.
            </p>
          </div>
          <div className=''>
            <img src={img1.src} className='w-full h-full' alt='' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
