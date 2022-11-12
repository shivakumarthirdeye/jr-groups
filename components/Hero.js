import Background from '@/assets/images/hero.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';

const descriptions = [
  {
    id: 1,
    description: `JR Groups is a solution provider for security and fire safety equipment, supply, commissioning, testing, and servicing.
`,
  },
  {
    id: 2,
    description: `We safeguard your property against fire and theft and make sure you adhere to all fire safety regulations.
`,
  },
  {
    id: 3,
    description: `End-to-end fire safety and security solutions for customers across India.
`,
  },
];

const Hero = () => {
  return (
    <section
      className='bg-cover  my-0 hero-bg bg-center relative'
      style={{
        height: '618.2px',
        backgroundImage: `url(${Background.src})`,
      }}
    >
      <div className='container  py-28 z-50 h-full relative overflow-hidden text-white'>
        <h1 className='text-primary text-xl md:text-2xl '>WELCOME TO</h1>
        <h1 className='text-5xl md:text-6xl lg:text-7xl mt-2 font-bold'>
          JR Groups
        </h1>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.swiper-btn-next-hero',
            prevEl: '.swiper-btn-prev-hero',
          }}
          className='ourWorkSwiper'
          // navigation={true}
          modules={[Navigation]}
        >
          <div className='absolute bottom-[-200px] sm:bottom-[-225px] right-0 lg:right-20  z-10'>
            <div className=' flex gap-5'>
              <button className='swiper-btn-prev-hero disabled:pointer-events-none disabled:opacity-60     cursor-pointer  bg-primary max-w-[66px] p-5 px-6  '>
                <svg
                  width='12'
                  height='21'
                  viewBox='0 0 12 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0.0218006 10.1376C0.0218006 9.77919 0.158661 9.4208 0.431807 9.14752L9.03144 0.547978C9.57849 0.000934431 10.4654 0.00093447 11.0122 0.547978C11.5591 1.0948 11.5591 1.98156 11.0122 2.52865L3.40281 10.1376L11.012 17.7467C11.5588 18.2937 11.5588 19.1804 11.012 19.7272C10.4652 20.2745 9.57822 20.2745 9.03118 19.7272L0.431541 11.1277C0.15835 10.8543 0.0218005 10.4959 0.0218006 10.1376Z'
                    fill='white'
                  />
                </svg>
              </button>
              <button className='swiper-btn-next-hero     disabled:pointer-events-none  disabled:opacity-60  cursor-pointer   bg-primary max-w-[66px] p-5 px-6  '>
                <svg
                  width='13'
                  height='21'
                  viewBox='0 0 13 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.3888 10.1378C12.3888 10.4962 12.252 10.8546 11.9788 11.1279L3.3792 19.7274C2.83216 20.2745 1.94522 20.2745 1.3984 19.7274C0.851576 19.1806 0.851576 18.2938 1.3984 17.7467L9.00783 10.1378L1.39866 2.52873C0.851841 1.98169 0.851841 1.09501 1.39866 0.548237C1.94549 0.000928837 2.83242 0.000928798 3.37947 0.548237L11.9791 9.14764C12.2523 9.42106 12.3888 9.77945 12.3888 10.1378Z'
                    fill='white'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='max-w-5xl mx-auto container'>
            {descriptions.map(item => {
              const { id, description } = item;
              return (
                <SwiperSlide
                  key={id}
                  className=' w-full select-none  justify-center'
                >
                  <div className='my-14 max-w-[656.89px] leading-[36px] '>
                    <p className='md:text-lg '>{description}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>

        <button className='rounded-md font-bold bg-primary p-2.5  max-w-[193px] w-full'>
          CONTACT US
        </button>
      </div>
    </section>
  );
};

export default Hero;
