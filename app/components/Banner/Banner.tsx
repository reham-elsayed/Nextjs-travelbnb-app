import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='relative h-[400px]'>
        <Image src='https://images.unsplash.com/photo-1728902293794-99df76c0b017?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        fill
        alt='banner image'
        objectFit='cover'
className='object-left'
        />
        <div className='absolute top-1/2 w-full text-center'>
        <p className='text-md sm:text-lg text-white'>Not sure where to go? Perfect.</p>
      <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold'>
        I'm flexable
      </button>
        </div>
    </div>
  )
}

export default Banner