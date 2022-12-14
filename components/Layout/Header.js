import logo from '@/assets/images/logo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from './Sidebar';

const navLinks = [
  {
    id: 1,
    name: 'Home',
    to: '/',
  },

  {
    id: 2,
    name: 'ABOUT US ',
    to: '/about-us',
  },
  {
    id: 3,
    name: 'SERVICES ',
    to: '/services',
  },
  {
    id: 4,
    name: 'PRODUCTS',
    to: '/#products',
  },
  {
    id: 5,
    name: 'CONTACT US',
    to: '/contact-us',
  },
];

const Header = () => {
  const { pathname } = useRouter();
  const [showSidebar, setShowSideBar] = useState(false);
  return (
    <header className='container    h-[110px]'>
      <div className='flex    items-center h-full lg:justify-between'>
        <div className='md:hidden'>
          <button
            onClick={() => {
              setShowSideBar(prev => !prev);
            }}
          >
            <GiHamburgerMenu className='text-4xl' />
          </button>
        </div>
        <div className='flex-1 flex justify-center  md:justify-start mx-auto'>
          <Link href='/'>
            <img src={logo.src} alt='' />
          </Link>
        </div>
        <ul className='hidden md:flex space-x-5 xl:space-x-10'>
          {navLinks.map(item => {
            const { id, name, to } = item;

            return (
              <li
                className={`${
                  pathname === to ? 'text-primary' : 'text-lightBlue'
                } font-medium`}
                key={id}
              >
                <Link href={to}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Sidebar showSidebar={showSidebar} setShowSideBar={setShowSideBar} />
    </header>
  );
};

export default Header;
