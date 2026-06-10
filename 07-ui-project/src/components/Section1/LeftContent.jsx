import React from 'react'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3  flex flex-col justify-between'>
      <div className='p-7'>
        <h3 className='text-6xl font-bold mb-7 leading-[1.1]'>Prospective <br /> <span className='text-gray-300'>customer</span><br /><span>Segmentatiion</span></h3>
        <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis rerum est minus corrupti praesentium saepe voluptatibus non, esse cupiditate!</p>
      </div>
      <div>
         <svg width="85px" height="85px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  )
}

export default LeftContent
