import React from "react";

const Hire = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay flex flex-col items-center justify-center">
          <div className="flex flex-col w-9/12 lg:w-auto lg:flex-row">
            <div className="bg-purple-500 py-10 rounded lg:px-5 lg:pt-32">
              <h2 className="text-white text-center text-5xl font-semibold mb-5 lg:text-7xl">
                Hire a dev
              </h2>
              <p className="text-white text-center text-md font-semibold mb-5 lg:text-4xl">
                Replies within 24 hours
              </p>
            </div>

            <form
              name="Feedback form"
              method="post"
              className="flex flex-col bg-purple-200 py-5 px-10 rounded lg:w-7/12"
              data-netlify="true"
            >
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-purple-500 text-purple-500 placeholder-purple-500 font-semibold"
              />
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-purple-500 text-purple-500 placeholder-purple-500 font-semibold"
              />
              <textarea
                name="textarea"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="Enter message"
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-purple-500 text-purple-500 placeholder-purple-500 font-semibold"
              ></textarea>
              <a
                href="mailto:hugo.ribaud.dev@gmail.com"
                className="bg-purple-500 text-white font-bold tracking-wider py-2 rounded cursor-pointer transition-all hover:bg-purple-800"
              >
                Submit
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hire;
