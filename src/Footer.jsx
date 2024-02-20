import React, { forwardRef, useRef } from 'react'
import Top from './comps/SVJ\'s/Top'
import useScroll from '../src/Context'

function Footer(props, ref) {

    const { setComps, Comps, handleClick } = useScroll()

    return (
        <div ref={ref} className='flex px-0 sm:px-7 justify-start md:justify-center '>
            <p className='input-text mb-3 ml-1 text-gray-700'>Site designed and coded with ❤️‍🔥</p>
            <div
                onClick={() => {
                    handleClick("Hero1");
                }}
                className='absolute right-0 sm:right-10 flex cursor-pointer
            '>
                <p className='heading mr-0'>BACK TO TOP</p>
                <Top />
            </div>
        </div>
    )
}

export default forwardRef(Footer)