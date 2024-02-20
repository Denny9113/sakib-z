import React, { forwardRef, useEffect, useRef, useState } from 'react';
import img5 from "../notes-1.png";
import img6 from "../notes-2.png";


function Porject(props, ref) {

  return (
    <div ref={ref} className={`bg-blue-200 py-10 justify-center items-center w-full h-full md:h-fit px-7 `}>
      <div className='flex-none w-full h-full md:h-screen md:flex'>
        <div className={`bg-blue-200 flex flex-col w-full h-fit justify-normal pb-7 md:justify-between md:w-[50%] md:h-full`}>
          <p className='text-blue-700 aboutMe mt-2 mb-4 md:mb-0'>PROJECTS</p>
          <div>
            <img src={img5} className='w-full bg-[${background}] rounded-xl' alt="" />
          </div>
        </div>

        <div className={`flex flex-col bg-blue-200 justify-between w-full md:w-[50%] md:h-full pb-7`}>
          <div className={`ml-0 mt-7 bg-blue-200 md:mt-0 md:ml-8 flex md:hidden items-end`}>
            <img src={img6} className='h-full md:h-[70%]  rounded-xl ' alt="" />
          </div>
          <div className={`w-full bg-blue-200 mt-7 md:mt-0 md:w-[27.8rem] ml-0 md:ml-4`} >
            <div className='flex justify-start items-center'>
              <h1 className=' About-title font-bold text-2xl my-2 hover:underline transition-all'>NoteSphere</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10m0 0v10m0-10L7 17" />
              </svg>
            </div>
            <p className='list text-gray-700'>"NoteSphere" combines Next.js, Redux Toolkit, React.js and Tailwind CSS. it replicates Google Keep's features, offering exact functionality of notes and dynamic organization. Users can effortlessly capture and manage ideas, enjoying a seamless note-taking experience with NoteSphere.</p>
          </div>
          <div className={`bg-blue-200 ml-0  mt-7 md:mt-0 md:ml-8 md:flex hidden items-end`} >
            <img src={img6} className='h-full md:h-[70%]  rounded-xl ' alt="" />
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div ref={ref} className='bg-gray-50 10 w-full h-screen flex justify-center items-center px-14 '>
  //     {/* project1 */}
  //     <div className='bg-gray-50 h-fit w-[25%] flex flex-col justify-center items-center  scale-90'>
  //       <div className='border rounded-2xl w-full flex justify-center items-end h-fit '>
  //         <a href="#">
  //           <img className='z-0 h-52 pro-img rounded-2xl hover:translate-y-[-10px] transition-all'
  //             src={img4}
  //             alt="project1" />
  //         </a>
  //       </div>
  //       <div className='w-full h-[50%] '>
  //         <div className='flex flex-row'>
  //           <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-5 py-1 m-2 ml-0 text-sm'>2023</button>
  //           <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-4 py-1 m-2 ml-0 text-sm overflow-hidden'> React • Appwrite • Tailwind</button>
  //         </div>
  //         <p className='About-title font-bold text-xl my-1 mb-2'>LANGUAGE EXCHANGE PAGE</p>
  //         <p className='input-text text-gray-800'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nemo assumenda quas. Quo perferendis ratione impedit esse! Ullam commodi culpa voluptates officia ex mollitia quibusdam quasi necessitatibus iste asperiores, quia fuga, doloribus ea nam architecto?</p>
  //       </div>
  //     </div>

  //     {/* project2 */}
  //     <div className='h-fit w-[25%] flex flex-col justify-center items-center  scale-90'>
  //       <div className=' border hover:border-none rounded-2xl w-full flex justify-center items-end h-[50%] '>
  //         <a href="#">
  //           <img className='h-52 pro-img rounded-2xl hover:translate-y-[-10px] transition-all'
  //             src={img5}
  //             alt="project2" />
  //         </a>
  //       </div>
  //       <div className='w-full h-[50%] '>
  //         <div className='flex flex-row'>
  //           <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-5 py-1 m-2 ml-0 text-sm'>2023</button>
  //           <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-4 py-1 m-2 ml-0 text-sm'>React • Tailwind • JavaScript</button>
  //         </div>
  //         <p className='About-title font-bold text-xl my-1 mb-2'>E-COM WEBSITE CLONE</p>
  //         <p className='input-text text-gray-800'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nemo assumenda quas. Quo perferendis ratione impedit esse! Ullam commodi culpa voluptates officia ex mollitia quibusdam quasi necessitatibus iste asperiores, quia fuga, doloribus ea nam architecto?</p>
  //       </div>
  //     </div>

  //     {/* project3 */}
  //     <div className='h-fit w-[25%] flex flex-col justify-center items-center  scale-90'>
  //       <div className='border hover:border-none rounded-2xl w-full flex justify-center items-end h-[50%] '>
  //         <a href="#">
  //           <img className='h-52 pro-img rounded-2xl hover:translate-y-[-10px] transition-all'
  //             src={img6}
  //             alt="project3" />
  //         </a>
  //       </div>
  //       <div className='w-full h-[50%] '>
  //         <div className='flex flex-row'>
  //           <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-5 py-1 m-2 ml-0 text-sm'>2023</button>
  //           <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-4 py-1 m-2 ml-0 text-sm'>React • Tailwind • Socket.io </button>
  //         </div>
  //         <p className='About-title font-bold text-xl my-1 mb-2'>CHAT APPLICATION</p>
  //         <p className='input-text text-gray-800'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nemo assumenda quas. Quo perferendis ratione impedit esse! Ullam commodi culpa voluptates officia ex mollitia quibusdam quasi necessitatibus iste asperiores, quia fuga, doloribus ea nam architecto?</p>
  //       </div>
  //     </div>

  //     {/* project4 */}
  //     <div className='h-fit w-[25%] flex flex-col justify-center items-center  scale-90'>
  //       <div className='border hover:border-none rounded-2xl w-full flex justify-center items-end h-[50%] '>
  //         <a href="#">
  //           <img className='h-52 pro-img rounded-2xl hover:translate-y-[-10px] transition-all'
  //             src={img7}
  //             alt="project4" />
  //         </a>
  //       </div>
  //       <div className='w-full h-[50%] '>
  //         <div className='flex flex-row'>
  //           <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-5 py-1 m-2 ml-0 text-sm'>2023</button>
  //           <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-4 py-1 m-2 ml-0 text-sm'>Tailwind • React • Appwrite</button>
  //         </div>
  //         <p className='About-title font-bold text-xl my-1 mb-2'>ACCOUNTING AGENCY PAGE</p>
  //         <p className='input-text text-gray-800'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nemo assumenda quas. Quo perferendis ratione impedit esse! Ullam commodi culpa voluptates officia ex mollitia quibusdam quasi necessitatibus iste asperiores, quia fuga, doloribus ea nam architecto?</p>
  //       </div>
  //     </div>

  //   </div>
  // )
}

export default forwardRef(Porject);