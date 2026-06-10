import React from 'react'

const RightCardContent = () => {
  return (
    <div>
      <div className='h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-10 w-10 font-semibold flex justify-center items-center '>1</h2>
        <div>
            <p className='text-lg leading-normal text-white mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates voluptate culpa voluptatem labore id natus!</p>
            <div>
                <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full'>Satisfied-</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
