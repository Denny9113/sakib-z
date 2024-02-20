import React, { forwardRef, useEffect, useRef, useState } from 'react'
import Clock from './CurTime'
import emailjs from '@emailjs/browser'

function Contect(props, ref) {
  const [successMsg, setSuccessMsg] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current)
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    if (name && email && message) {
      emailjs.sendForm('service_531yh4p', 'template_ml19pae', form.current, {
        publicKey: 'sgZNWl5SgixvboLKj',
      })
        .then(
          () => {
            console.log('SUCCESS!');
            e.target.reset()
            setSuccessMsg(true)
            setTimeout(() => {
              setSuccessMsg(false)
            }, 5000)
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <>
      {/* ------------------------form------------------------ */}
      <form ref={form} onSubmit={sendEmail}>

        <div ref={ref} className='border-t flex-none md:flex w-full pt-20 h-screen bg-gray-50 px-7'>

          <div className='flex flex-col w-full md:w-[60%] h-fit mb-10 md:mb-0 md:h-screen'>
            <div className='mt-14'>
              <p className='heading  text-5xl '>
                Let's make something <br /> <span className='text-blue-700'>better</span> together.
              </p>
            </div>


            <div className=' flex mt-14'>
              <div className=' w-[50%] flex flex-col mr-8'>
                <label className='input-text text-sm text-gray-800' htmlFor="name">Your name</label>
                <input type="text" name="user_name" required className='input-text py-2 outline-none border-b border-black bg-gray-50' />
              </div>
              <div className=' w-[50%] flex flex-col'>
                <label className='input-text text-sm text-gray-800' htmlFor="email">Your email</label>
                <input type="email" name="user_email" required className='input-text py-2 outline-none border-b border-black bg-gray-50' />
              </div>
            </div>
            <div className='flex flex-col mt-14'>
              <label htmlFor="text-aria" className='input-text text-sm text-gray-800'>Your message</label>
              <textarea name="message" cols="50" rows="3" required className='input-text py-2 outline-none border-b border-black bg-gray-50' />
            </div>

          </div>

          <div className='flex flex-row justify-between gap-3 md:gap-y-28 md:flex-col bg-gray-50 w-full md:w-[40%] h-fit md:h-fit'>
            {/* contact */}
            <div className='pt-0 md:pt-14 pl-0 md:pl-16'>
              <p className='heading text-2xl text-gray-800'>Contact Detail</p>
              <ul className='pt-3 input-text text-gray-800'>
                <li>Dennyoxford@gmail.com</li>
              </ul>
            </div>
            {/* my digital space */}
            <div className='pt-0 md:pt-0 pl-0 md:pl-16'>
              <p className='heading text-2xl text-gray-800'>My Digital Spaces</p>
              <ul className='pt-3 input-text text-gray-800'>
                <li><a href="https://github.com/Denny9113" target='_blank'>Github</a></li>
                <li><a href="https://www.linkedin.com/in/sakib-zalori-8b4227205" target='_blank'>LinkedIn</a></li>
                <li><a href="https://x.com/SakibZalor69451?t=WIMgu9hltqmHwdN_1AnOCA&s=09" target='_blank'>Twitter</a></li>
              </ul>
            </div>
            {/* from */}
            <div className='pt-0 md:pt-0 pb-0 pl-0 md:pl-16'>
              <p className='heading text-2xl text-gray-800'>From</p>
              <ul className='pt-3 input-text text-gray-800'>
                <li>Ahmedabad, INDIA</li>
                <li><Clock /></li>
              </ul>
            </div>
          </div>
        </div>

        <div className=''>
          <input type='submit' value="Send Message" className='mt-10 mb-4 border mx-7 rounded-full input-text text-blue-700  border-blue-700 py-3 px-6 outline-none active:bg-blue-700 active:text-gray-50' />
          {successMsg &&
            (<span className='input-text text-gray-800'>Message sent <span className='text-blue-700 '>successfully!</span></span>)
          }
        </div>
      </form >
      {/* ------------------------form------------------------ */}
    </>
  )
}

export default forwardRef(Contect)