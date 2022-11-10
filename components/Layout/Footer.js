import { HiOutlineChevronRight } from 'react-icons/hi';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from 'react-icons/fa';
import Link from 'next/link';
const ourServices = [
  {
    id: 1,
    title: 'Fire Safety',
  },
  {
    id: 2,
    title: 'Access Control',
  },
  {
    id: 3,
    title: 'CCTV',
  },
  {
    id: 4,
    title: 'Intruder Alarms',
  },
];
const usefulLinks = [
  {
    id: 1,
    title: 'About Us',
    to: '/about-us',
  },
  {
    id: 2,
    title: 'Services',
    to: '/services',
  },
  {
    id: 3,
    title: 'Contact us',
    to: '/contact-us',
  },
];

const footerIcons = [
  {
    id: 1,
    icon: <FaFacebookF className='text-white' />,
    href: 'http://facebook.com/',
  },
  {
    id: 2,
    icon: <FaInstagram className='text-white' />,
    href: 'http://instagram.com/',
  },
  {
    id: 3,
    icon: <FaLinkedinIn className='text-white' />,
    href: 'http://linkedin.com/',
  },
  {
    id: 4,
    icon: <FaTwitter className='text-white' />,
    href: 'http://linkedin.com/',
  },
  {
    id: 5,
    icon: <FaPinterestP className='text-white' />,
    href: 'http://pinterest.com/',
  },
];

const Footer = () => {
  return (
    <footer className='bg-darkBlue pt-28 pb-10  text-white'>
      <div className='container container-footer'>
        <div className=' sm:grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 '>
          <div>
            <h1 className='text-4xl font-semibold'>About Us</h1>
            <div className='my-5'>
              <p className='text-sm tracking-wide text-opacity-70 leading-[22.4px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
            </div>
          </div>
          <div>
            <h1 className='text-4xl font-semibold'>Our Services</h1>
            <ul className='my-5 '>
              {ourServices.map(item => {
                const { id, title } = item;
                return (
                  <li
                    key={id}
                    className='flex space-x-1 my-2.5 items-center text-sm tracking-wide text-opacity-70 leading-[22.4px]'
                  >
                    <HiOutlineChevronRight />
                    <h4>{title}</h4>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h1 className='text-4xl font-semibold'>Useful Links</h1>
            <ul className='my-5'>
              {usefulLinks.map(item => {
                const { id, title, to } = item;
                return (
                  <li
                    key={id}
                    className=' my-2.5  text-sm tracking-wide text-opacity-70 leading-[22.4px]'
                  >
                    <Link className='flex space-x-1 items-center' href={to}>
                      <HiOutlineChevronRight />
                      <h4>{title}</h4>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='sm:col-span-2 xl:col-span-1'>
            <h1 className='text-4xl font-semibold'>Get In Touch</h1>
            <div className='my-5'>
              <p className='text-sm tracking-wide text-opacity-70 leading-[22.4px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className='my-4 relative max-w-sm'>
                <input
                  type='text '
                  className='p-4 text-grey outline-none w-full  pr-8 rounded-md'
                  placeholder='Email address'
                />
                <button className='bg-primary p-4 absolute top-0 max-w-[118px]  rounded-md w-full right-0'>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
        <ul className='flex space-x-5 my-10'>
          {footerIcons.map(item => {
            const { href, icon, id } = item;
            return (
              <li
                key={id}
                className='text-xl p- h-8 w-8 bg-black bg-opacity-50 flex items-center justify-center rounded-full'
              >
                {icon}
              </li>
            );
          })}
        </ul>
        <div className='w-full  my-5 h-[1px] bg-white'></div>
        <div>
          <h3 className='text-center text-sm font-medium'>
            © 2022. All rights reserved by Third Eye Innovations.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
