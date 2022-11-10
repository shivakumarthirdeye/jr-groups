import Link from 'next/link';
import { AccessControl, Camera, CCTV, Fire, FireSafety, Speaker } from './SVGs';
import Title from './Title';

const services = [
  {
    id: 1,
    title: 'Fire Safety',
    Svg: FireSafety,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'`,
    to: '/',
  },
  {
    id: 2,
    title: 'Access Control',
    Svg: AccessControl,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'`,
    to: '/',
  },
  {
    id: 3,
    title: 'CCTV',
    Svg: CCTV,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'`,
    to: '/',
  },
  {
    id: 4,
    title: 'Intruder Alarms ',
    Svg: Camera,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'`,
    to: '/',
  },
  {
    id: 5,
    title: 'public address system',
    Svg: Speaker,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'`,
    to: '/',
  },
  {
    id: 6,
    title: 'fire suppression system ',
    Svg: Fire,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'`,
    to: '/',
  },
];

const OurServices = () => {
  return (
    <section className='container'>
      <Title heading={'Our Services'} subheading='WHAT WE DE' />
      <div className='grid sm:grid-cols-2 max-w-5xl my-10 mx-auto gap-5 lg:gap-10'>
        {services.map(item => {
          const { description, id, Svg, title, to } = item;

          return (
            <div key={id} className='border border-[#163f7072] p-5'>
              <Svg />

              <h1 className='text-black text-2xl capitalize font-bold my-3'>
                {title}
              </h1>
              <p className='text-grey'>{description}</p>
              <div className='mt-5'>
                <Link
                  href={to}
                  className='underline font-semibold text-darkBlue'
                >
                  Know More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurServices;
