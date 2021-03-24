import React, { useState } from "react";
import data from "../data";

const Projects = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data);

  return (
    <>
      <section className="showcase py-20 px-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:h-screen lg:pt-32">
        {items.map((item) => {
          const { id, path, desc, url } = item;
          return (
            <div key={id}>
              <a href ={url} rel="noreferrer" target='_blank'>
              <img
                src={path}
                alt={desc}
                className="p-5 bg-purple-400 rounded"
              />
              </a>
              <small className="block text-center text-white font-semibold text-lg">
                {desc}
              </small>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Projects;
