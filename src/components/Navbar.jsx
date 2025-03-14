import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { close, omnihand, menu } from '../assets';
import { navLinks } from './../constants/index';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation(); // Get current route

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      {/* Logo */}
      <img
        src={omnihand}
        alt='weblogo'
        className='w-[180px] h-[80px] cursor-pointer'
        onClick={() => (window.location.href = '/')}
      />

      {/* Navbar Links for bigger screens */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } ${
              location.pathname === `/${nav.id}` // Check if current route matches nav link
                ? 'text-secondary' // Active menu styling
                : 'text-white hover:text-secondary' // Inactive menu styling
            }`}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      {/* Smaller devices links in a container */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='toggler'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } ${
                  location.pathname === `/${nav.id}` // Check if current route matches nav link
                    ? 'text-secondary' // Active menu styling
                    : 'text-white hover:text-secondary' // Inactive menu styling
                }`}
              >
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;