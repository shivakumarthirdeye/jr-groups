import logo from '@/assets/images/logo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
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

const Sidebar = ({ showSidebar, setShowSideBar }) => {
  const { pathname } = useRouter();

  return (
    <aside
      className={`${
        showSidebar ? 'translate-x-0 md:-translate-x-full' : '-translate-x-full'
      } z-[100] fixed top-0 transition-all left-0 shadow-md w-[80vw] h-screen bg-white`}
    >
      <div className='p-5'>
        <div className='flex justify-end '>
          <button
            onClick={() => {
              setShowSideBar(prev => !prev);
            }}
          >
            <MdClose className='text-4xl text-red-400' />
          </button>
        </div>
        <div className='flex justify-center my-5'>
          <img src={logo.src} alt='' />
        </div>
        <ul className='mt-10'>
          {navLinks.map(item => {
            const { id, name, to } = item;

            return (
              <li
                className={`${
                  pathname === to ? 'text-primary' : 'text-lightBlue'
                } font-medium my-4 text-xl `}
                key={id}
                onClick={() => {
                  setShowSideBar(prev => !prev);
                }}
              >
                <Link href={to}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
