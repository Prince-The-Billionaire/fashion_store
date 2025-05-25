import React from 'react'
import Image from 'next/image'

const TestimonyCard = () => {
  return (
    <div className='flex flex-col items-center justify-center '> 
        <div className='bg-gradient-to-r from-amber-500  rounded-xl shadow-md p-1 via-amber-900 to-yellow-400'>
            <div className='w-[250px] h-full bg-black  rounded-xl shadow-md flex flex-col items-center gap-5 p-5'>
            <p className='text-xl max-md:text-xs font-sans pb-8 text-white/60 '> Honestly, when I saw her website I knew she was a pro  and after she designed my 
                    outfit I was blown away. <br/> <br/> I got so many compliments and I felt like a million bucks. <br/> <br/>
                I would recommend her to anyone looking for a designer who can bring their vision to life.
                <span className='italic text-sm font-thin text-white/80'><br/>-Ashley Angel ● Model</span>
            </p>
        </div>
    </div>
    <Image src={'/girl1.jpg'} alt="girl" width={120} height={120} className='rounded-full -mt-12 border-amber-500 border-4' />
    </div>
  )
}

export default TestimonyCard