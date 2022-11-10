import Title from './Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import profile from '@/assets/images/profile.png';
import ContactInfo from './contactInfo';

const testimonials = [
  {
    id: 1,
    review: `We recently hired JR Group to install a new fire alarm system in our school. We were very pleased with their prompt and professional service, and I wholeheartedly recommend them.`,
    name: 'Jhon David',
    role: 'Manager at XYZ',
    img: profile,
  },
  {
    id: 2,
    review: `We recently hired JR Group to install a new fire alarm system in our school. We were very pleased with their prompt and professional service, and I wholeheartedly recommend them.`,
    name: 'Jhon David',
    role: 'Manager at XYZ',
    img: profile,
  },
  {
    id: 3,
    review: `We recently hired JR Group to install a new fire alarm system in our school. We were very pleased with their prompt and professional service, and I wholeheartedly recommend them.`,
    name: 'Jhon David',
    role: 'Manager at XYZ',
    img: profile,
  },
];

const Testimonials = () => {
  return (
    <section className='bg-[#1f375f19] my-0 py-20 '>
      <div className='container relative max-w-7xl'>
        <div className=' overflow-hidden'>
          <Title
            subheading='PORTFOLIO'
            heading='Our Products'
            headingColor='text-darkBlue'
            subColor='text-primary'
            borderBg='bg-darkBlue'
          />
          <div className='my-20'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
              }}
              className='ourWorkSwiper'
              // navigation={true}
              modules={[Navigation]}
            >
              <div className='absolute bottom-0 right-0 lg:right-20  z-10'>
                <div className=' flex gap-5'>
                  <button className='swiper-btn-prev disabled:pointer-events-none disabled:opacity-60     cursor-pointer  bg-primary max-w-[66px] p-5 px-6  '>
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
                  <button className='swiper-btn-next     disabled:pointer-events-none  disabled:opacity-60  cursor-pointer   bg-primary max-w-[66px] p-5 px-6  '>
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
                {testimonials.map(item => {
                  const { id, img, name, review, role } = item;
                  return (
                    <SwiperSlide
                      key={id}
                      className=' w-full select-none  justify-center'
                    >
                      <div className='flex justify-center items-center gap-5'>
                        <div className='w-[320px]'>
                          <img src={img.src} alt='' />
                        </div>
                        <div className='flex-1'>
                          <div>
                            <h1 className='text-9xl text-darkBlue'>“</h1>
                            <h3 className='text-grey max-w-[580.85px] mt-[-20px] leading-[33px]'>
                              {review}
                            </h3>
                            <div className='my-6 text-[#163F70]'>
                              <h2 className='text-2xl font-medium'>{name}</h2>
                              <p className='mt-2'>{role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>
        <ContactInfo />
      </div>
    </section>
  );
};

export default Testimonials;
