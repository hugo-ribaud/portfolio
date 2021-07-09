import React, { useState } from "react";
import data from "../data";

const Projects = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data);

  return (
    <div className='showcase overlay py-20'>
      <section className='px-5 '>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 md:pl-36'>
          {items.map((item) => {
            const { id, path, desc, url } = item;
            return (
              <div key={id}>
                <a href={url} rel='noreferrer' target='_blank'>
                  <img
                    src={path}
                    alt={desc}
                    className='p-2 md:mt-24 h-72 bg-shakespeare-500 rounded'
                  />
                </a>
                <small className='block pt-6 text-center md:text-left text-white font-semibold text-lg'>
                  {desc}
                </small>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
