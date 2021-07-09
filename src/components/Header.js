import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo500x300.png";

const Header = () => {
  return (
    <>
      <header className='flex justify-between py-3 px-5 absolute w-full text-shakespeare-500'>
        <div className='logo'>
          <Link to='/'>
            <img className='flex md:h-85 md:w-60' src={Logo} alt='Logo' />
          </Link>
        </div>
        <nav className='py-3'>
          <ul className='flex'>
            <li className='mr-5'>
              <Link to='/'>Home</Link>
            </li>
            <li className='mr-5'>
              <Link to='/projects'>Projects</Link>
            </li>
            <li className='mr-5'>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link
                to='/hire'
                className='mr-5 bg-bluoise-500 text-white p-1 px-4 rounded-full font-semibold transition-all hover:bg-shakespeare-500'
              >
                Hire
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
