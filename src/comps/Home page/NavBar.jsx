import React, { useContext, useRef } from 'react'
import useScroll from '../../Context'

function NavBar() {

  const { setComps, Comps, handleClick } = useScroll()

  return (
    <div className='flex w-full z-9999 h-14 justify-between absolute top-0 bg-gray-50'>
      <p className='icon my-auto ml-5 font-bold text-2xl'>Sakib.dev</p>
      <ul className='list relative flex flex-row mr-5'>
        <li
          onClick={() => {
            handleClick("Hero1")
          }}
          className='nav my-auto mx-3 cursor-pointer '>
          Home
        </li>

        <li onClick={() => {
          handleClick("About1");
        }}
          className='nav my-auto mx-3 cursor-pointer'>
          About
        </li>

        <li onClick={() => {
          handleClick("Porject1");
        }}
          className='nav my-auto mx-3 cursor-pointer'>
          project
        </li>

        <li onClick={() => {
          handleClick("Contect1");
        }}
          className='nav my-auto mx-3 cursor-pointer'>
          Contact
        </li>

      </ul>
    </div >
  )
}

export default NavBar