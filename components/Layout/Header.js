import logo from '@/assets/images/logo.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
    to: '/products',
  },
  {
    id: 5,
    name: 'CONTACT US',
    to: '/contact-us',
  },
];

const Header = () => {
  const { pathname } = useRouter();
  return (
    <header className='container    h-[110px]'>
      <div className='flex    items-center h-full justify-between'>
        <div>
          <Link href='/'>
            <img src={logo.src} alt='' />
          </Link>
        </div>
        <ul className='flex space-x-10'>
          {navLinks.map(item => {
            const { id, name, to } = item;

            return (
              <li
                className={`${
                  pathname === to ? 'text-primaryColor' : 'text-lightBlue'
                } font-medium`}
                key={id}
              >
                <Link href={to}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
