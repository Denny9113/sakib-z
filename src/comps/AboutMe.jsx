import React, { forwardRef, useRef, useState } from 'react'
import img1 from "./img1.jpg";
import img from "./img.jpg";
import img2 from "./img2.jpg";


function AboutMe(props, ref) {

  return (
    <div ref={ref} className='w-full h-screen px-8 mt-14 flex justify-center items-center bg-gray-50
    md:mt-0 border-b'
    >

      <div className=' flex justify-center items-center flex-col w-fit  bg-gray-50
      md:flex-row'
      >
        <div className='rounded-xl -ml-0 mr-0
         md:mr-14'
        >
          <img src={img1} alt="img" className='rounded-xl h-72' />
        </div>

        <div style={{ scrollbarWidth: 'none' }} className='h-80 w-96  overflow-visible '>
          <p className='text-blue-700 aboutMe mt-2 mb-1'>ABOUT ME</p>
          <h1 className='About-title font-bold text-2xl mb-2'>A dedicated Front-end developer.<br /> base in Ahmedabad, India</h1>
          <p className='About-discription text-gray-800 '>
            I'm a 21-year-old fresh Front-end developer from Ahmedabad, India. who used to work as an accountant. I've learned HTML, CSS, JavaScript, and some advanced tools like ReactJS and NextJS. Even though my background is in accounting, I'm really passionate about web development. I pay close attention to details and learn fast. I'm excited to find chances to learn and help in this area.
          </p>
        </div>

      </div>
    </div>
  )
}

export default forwardRef(AboutMe)