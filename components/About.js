import img1 from '@/assets/images/about/1.png';
import img2 from '@/assets/images/about/2.png';
import img3 from '@/assets/images/about/3.webp';

const About = ({ showBtn }) => {
  return (
    <div className='my-10'>
      <section className='container my-28'>
        <div className='grid lg:grid-cols-2 gap-y-8 lg:gap-5 items-center xl:gap-8'>
          <div className='relative h-[556.07px]'>
            <div className='absolute top-0 right-0 xl:right-20 '>
              <svg
                width='197'
                height='171'
                viewBox='0 0 197 171'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M116.15 7.54409L107.304 4.75049L191.112 135.584L196.699 133.722L116.15 7.54409Z'
                  fill='#163F70'
                />
                <path
                  d='M87.7487 3.35366L78.9023 0.560059L162.71 131.394L168.298 129.531L87.7487 3.35366Z'
                  fill='#163F70'
                />
                <path
                  d='M62.6062 4.28481L53.7598 1.49121L137.568 132.325L143.155 130.462L62.6062 4.28481Z'
                  fill='#163F70'
                />
                <path
                  d='M40.2575 10.8031L31.4111 8.00952L115.219 138.843L120.806 136.981L40.2575 10.8031Z'
                  fill='#163F70'
                />
                <path
                  d='M27.2209 28.496L18.3745 25.7024L102.183 156.536L107.77 154.674L27.2209 28.496Z'
                  fill='#163F70'
                />
                <path
                  d='M9.52804 42.464L0.681641 39.6704L84.4896 170.504L90.0768 168.642L9.52804 42.464Z'
                  fill='#163F70'
                />
                <path
                  d='M158.054 33.152C156.937 31.6621 148.277 24.4608 144.086 21.0464L191.578 95.5424C190.802 90.8864 188.97 81.0157 187.853 78.7808C186.456 75.9872 159.451 35.0144 158.054 33.152Z'
                  fill='#163F70'
                />
              </svg>
            </div>
            <div className='xl:w-[385.52px] md:w-[300px]  md:h-[300px] xl:h-[390.32px]  absolute z-10  '>
              <img
                src={img3.src}
                alt=''
                className='w-full h-full  object-cover rounded-2xl'
              />
            </div>
            <div className='absolute lg:left-5 xl:left-10 bottom-32 xl:bottom-10 w-[200px] xl:w-[256.33px] rounded-2xl z-20  '>
              <img
                src={img1.src}
                alt=''
                className='w-full h-full  object-cover rounded-2xl  '
              />
            </div>
            <div className=' md:w-[300px] xl:w-[378.07px]  md:h-[300px] xl:h-[378.07px] absolute right-10 top-36 z-[15]'>
              <img
                src={img2.src}
                alt=''
                className='w-full h-full  object-cover rounded-2xl z-20'
              />
            </div>
          </div>
          <div className=''>
            <h2 className='text-2xl font-semibold'>ABOUT</h2>
            <div className='relative w-fit'>
              <h1 className='text-[42px] font-bold'>JR Groups</h1>
              <div className='absolute bg-darkBlue rounded-full h-1.5 w-[60%]'></div>
            </div>
            <p className='text-grey leading-[34px] my-8'>
              We offer a diverse range of fire detection systems, evacuation
              systems, fire suppression systems, and maintenance services. JR
              Group's services include fire safety, CCTV camera surveillance
              solutions, access control systems, fire alarm systems, public
              address systems and Intrusion Security Alarms. Modern technology,
              worry-free security, and user-friendly integrations make everyday
              solutions even simpler. Our staff is made up of knowledgeable and
              motivated individuals that enjoy developing creative security
              consulting solutions that free our clients from worrying about
              their security. We can supply protection and routine maintenance
              to all the commercial structures under our care with the help of
              our strategies. Look for a fire detection solution that meets all
              of your requirements.
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
