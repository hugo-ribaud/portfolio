import React from "react";
import profile from "../assets/img/profile.png";
import CV from "../assets/img/Hugo-ribaud-cv.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function About() {
  return (
    <>
      <div className='about'>
        <div className='w-full pt-40'>
          <div className='flex flex-col justify-center max-w-xs mx-auto bg-purple-300 shadow-xl rounded-xl p-5'>
            <div className=''>
              <img
                className='w-32 mx-auto shadow-xl rounded-full'
                src={profile}
                alt='Profile face'
              />
            </div>
            <div className='text-center mt-5'>
              <p className='text-xl sm:text-2xl font-semibold text-gray-900'>
                Hugo RIBAUD
              </p>
              <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                Junior Web Developer
              </p>
              <div className='flex align-center justify-center mt-4'>
                <a
                  className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300'
                  href='https://github.com/hugo-ribaud'
                >
                  <FaGithub />
                  <span class='sr-only'>Github</span>
                </a>
                <a
                  className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300'
                  href='https://www.linkedin.com/in/hugo-ribaud/'
                >
                  <FaLinkedin />
                  <span className='sr-only'>LinkedIn</span>
                </a>
                <a
                  className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300'
                  href='https://twitter.com/Hugo_ribaud'
                >
                  <FaTwitter />
                  <span className='sr-only'>Twitter</span>
                </a>
                <a
                  className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300'
                  href='mailto:hugo.ribaud.dev@gmail.com'
                >
                  <FaRegEnvelope />
                  <span className='sr-only'>Email</span>
                </a>
                <div className=''></div>
              </div>
              <div className=''>
                <a
                  href={CV}
                  rel='noreferrer'
                  target='_blank'
                  className=' bg-purple-300 p-2 px-4 rounded-full font-semibold transition-all hover:bg-purple-400 border mt-5'
                >
                  Download CV (French)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
