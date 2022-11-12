import img from '@/assets/images/about/img.png';
import img2 from '@/assets/images/about/2.png';
import img3 from '@/assets/images/about/3.webp';

const About = ({ showBtn }) => {
  return (
    <div className='my-10'>
      <section className='container my-28'>
        <div className='grid lg:grid-cols-2 gap-y-8 lg:gap-5 items-center xl:gap-8'>
          <div className='relative   lg:max-h-[556.07px]'>
            <img src={img.src} className='w-full' alt='' />
          </div>
          <div className=''>
            <h2 className='text-2xl font-semibold'>ABOUT</h2>
            <div className='relative w-fit'>
              <h1 className='text-[42px] font-bold'>JR Groups</h1>
              <div className='absolute bg-darkBlue rounded-full h-1.5 w-[60%]'></div>
            </div>
            <p className='text-grey leading-[34px] my-8'>
              JR Groups is one of the leading providers of high-quality fire
              detection devices and equipment for the protection of life and
              property in office, multi-residential, commercial, and industrial
              premises. When it comes to safety, security, and automation in any
              building, JR Groups provides the greatest people, products, and
              services in all aspects of detail tracking.
            </p>
            {showBtn && (
              <div>
                <button className='bg-primary text-white max-w-[193px] w-full py-3 rounded-md'>
                  LEARN MORE
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
