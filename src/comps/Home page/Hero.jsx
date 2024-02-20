import React, { forwardRef, useRef, useState } from 'react'
import img from './profile.jpg'
import LinkedIn from '../SVJ\'s/LinkedIn'
import Git from '../SVJ\'s/Git'
import Html from '../SVJ\'s/Html'
import Css from '../SVJ\'s/Css'
import JavaS from '../SVJ\'s/JavaS'
import Reactsvj from '../SVJ\'s/Reactsvj'
import TailW from '../SVJ\'s/TailW'
import BootS from '../SVJ\'s/BootS'
import Next from '../SVJ\'s/Next'



function Hero(props, ref) {

  const [fill, setFill] = useState("#4B5563")
  const [height, setHeight] = useState('35')


  return (
    // Home page

    < div ref={ref}
      className='border-b px-4 
      sm:px-4
      md:px-4
      lg:px-16
      xl:px-32'
    >
      <div className='flex-none mt-0 justify-between 
      sm:flex sm:mt-32  '
      >
        <div className=''>
          {/* Heading */}
          <div className=''>
            <div
              className='
            px-4
            sm:mt-0 '
            >
              <p
                className='
              heading mt-20 text-6xl leading-none text-blue-700 
              sm:text-5xl sm:mt-0
              md:text-7xl'
              >Front-End React<br />Developer 👋
              </p>
            </div>
          </div>
          {/* sub-heading */}
          <div className='px-4'>
            <p className='tagLine text-gray-600 mt-14 md:mt-6 lg:mt-14'>Hi i'm Sakib Zalori. A pessinate Front-End Developer. <br />
              based in Ahmedabad, India
            </p>
          </div>
        </div>
        {/* <div class="
        min-[320px]:text-center 
        min-[550px]:bg-sky-700
        max-[600px]:bg-none"
        >
          sakib
        </div> */}
        {/* Img */}
        <div className='bg-gray-50 px-4 flex justify-center mt-14 
      sm:flex-none sm:mt-0'
        >
          <img
            className='img h-72 md:h-60 lg:h-72'
            src={img}
            alt="Profile img"
          />
        </div>
      </div>
      {/* icon div */}
      <div className=' flex flex-wrap justify-center sm:justify-start items-center gap-1 mt-14 sm:mt-1 px-4'>
        <a href="https://www.linkedin.com/in/sakib-zalori-8b4227205" className='' target='_blank'><LinkedIn fill={fill} /></a>
        <a href="https://github.com/Denny9113" className='' target='_blank'><Git fill={fill} /> </a>
        <button
          onClick={() => {
            alert('CV will be updated soon')
          }}
          className='w-fit button bg-[#4B5563] opacity-50 text-gray-50 px-2  rounded h-7 '>
          Download CV
        </button>
      </div>

      {/* tachStack */}
      <div className=' bg-gray-50 w-full h-[20vh] mt-14'>
        <div className='flex px-4 '>
          <p className='techStack my-auto mr-6'>
            Tech Stack
          </p>
          <span className='my-auto opacity-50 mr-14' >|</span>
          <div className='flex flex-wrap gap-7 sm:gap-10 p-1'>
            <p className='teckI my-auto '><Html fill={fill} height={height} /></p>
            <p className='teckI my-auto'><Css fill={fill} height={height} /></p>
            <p className='teckI my-auto'><JavaS fill={fill} height={height} /></p>
            <p className='teckI my-auto'><Reactsvj fill={fill} height={height} /></p>
            <p className='teckI my-auto'><TailW fill={fill} height={height} /></p>
            <p className='teckI my-auto'><BootS fill={fill} height={height} /></p>
            <p className='teckI my-auto'><Next/></p>
          </div>
        </div>
      </div>

    </div >
  )
}

export default forwardRef(Hero)