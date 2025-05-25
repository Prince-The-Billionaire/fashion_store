import React from 'react'

const Exquisite = () => {
  return (
    <div className='w-screen relative h-screen flex flex-col bg-center bg-contain max-md:bg-cover max-md:bg-left-top bg-no-repeat bg-fixed max-md:bg-top' style={{backgroundImage: `url('/mask1.png')`}}>
        <div className='absolute top-0 left-0 w-screen h-screen bg-black/30'></div>
        <div className='flex flex-col justify-center z-30 max-md:text-center items-center h-full '>
            <h1 className='text-6xl font-bold max-md:text-4xl'>Exquisite <span className='text-amber-500'>Designs</span> for Every <span  className='text-amber-500'>Occasion</span>.</h1>
            
        </div>
    </div>
  )
}

export default Exquisite