import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex justify-between py-3 px-5 absolute w-full text-white">
        <div className="logo">
          <h2 className="text-3xl lg:text-5xl">
            <Link to="/">Hugo Ribaud</Link>
          </h2>
        </div>
        <nav className="py-3">
          <ul className="flex">
            <li className="mr-5">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-5">
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link
                to="/hire"
                className="mr-5 bg-purple-500 p-1 px-4 rounded-full font-semibold transition-all hover:bg-purple-800"
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
