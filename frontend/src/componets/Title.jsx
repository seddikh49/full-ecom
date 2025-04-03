import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex  gap-5  items-center '>
        <p className='text-gray-400 font-poppins sm:text-2xl xm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl'>{text1 }<span className='pl-3 text-gray-700 font-bold md:text-2xl lg:text-2xl xl:text-4xl'>{text2 }</span></p>
        <p className='xl:w-12 sm:w-8 h-[2px] bg-gray-400 '></p>
    </div>
  )
}

export default Title
