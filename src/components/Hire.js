import React from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
init("user_O2XZheJaTo8u32kabPoKL");

const Hire = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "hugo.ribaud.dev",
        "template_lxv7ta4",
        e.target,
        "user_O2XZheJaTo8u32kabPoKL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <section className='showcase'>
        <div className='overlay flex flex-col items-center justify-center'>
          <div className='flex flex-col w-9/12 lg:w-auto lg:flex-row space-x-4'>
            <div className='bg-bluoise-500 bg-opacity-20 md:mt-12 py-10 md:h-96 lg:px-5 lg:pt-32 rounded'>
              <h2 className='text-white text-center text-5xl font-semibold mb-5 lg:text-7xl'>
                Hire a dev
              </h2>
              <p className='text-white text-center text-md font-semibold mb-5 lg:text-4xl'>
                Replies within 24 hours
              </p>
            </div>

            <form
              name='Feedback form'
              method='post'
              className='flex flex-col bg-bluoise-500 bg-opacity-20 rounded py-7 px-10 lg:w-7/12'
              onSubmit={sendEmail}
            >
              <input
                type='text'
                name='name'
                id='username'
                placeholder='Enter your username'
                required
                className='py-2 px-4 mb-5 rounded border border-solid border-shakespeare-500 text-shakespeare-500 placeholder-shakespeare-500 font-semibold'
              />
              <input type='hidden' name='form-name' value='contact' />
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email'
                required
                className='py-2 px-4 mb-5 rounded border border-solid border-shakespeare-500 text-shakespeare-500 placeholder-shakespeare-500 font-semibold'
              />
              <textarea
                name='message'
                id='textarea'
                cols='30'
                rows='10'
                placeholder='Enter message'
                required
                className='py-2 px-4 mb-5 rounded border border-solid border-shakespeare-500 text-shakespeare-500 placeholder-shakespeare-500 font-semibold'
              ></textarea>
              <input
                type='submit'
                value='Submit'
                className='bg-shakespeare-500 text-white font-bold tracking-wider py-2 rounded cursor-pointer transition-all hover:bg-shakespeare-800'
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hire;
