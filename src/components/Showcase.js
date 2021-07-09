import React from "react";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <>
      <section className='showcase md:h-screen'>
        <div className='h-screen overlay flex flex-col items-center justify-center text-white px-5'>
          <h1 className='text-5xl font-bold text-shakespeare-500 text-center mb-10 lg:text-center lg:text-7xl lg:px-56'>
            Building your brand identity in a{" "}
            <span className='text-bluoise-500'>creative way</span>
          </h1>

          <div className='lg:ml-0'>
            <Link
              to='/hire'
              className='mr-5 bg-bluoise-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-shakespeare-500'
            >
              Get Started
            </Link>
            <Link
              to='/projects'
              className='mr-5 bg-shakespeare-500 p-2 px-4 rounded-full font-semibold transition-all hover:bg-bluoise-500 hover:text-white'
            >
              Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
