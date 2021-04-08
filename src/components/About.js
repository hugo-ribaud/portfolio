import React from "react";
import ReactPlayer from "react-player";

function About() {
  return (
    <>
      <div className='about py-20 px-5 flex flex-col items-center-center justify-items-center'>
        <ReactPlayer
          className='react-player flex flex-col items-center-center justify-items-center'
          url='https://youtu.be/MdleK5zHbUQ'
          width='100%'
          height='100%'
          playing='true'
          loop='true'
          onReady
        />
      </div>
    </>
  );
}

export default About;
