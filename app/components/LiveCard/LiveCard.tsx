import Image from 'next/image'
import React from 'react'

function LiveCard({img, title}:{img:string, title:string}) {
  return (
    <div className="cursor-pointer hover:scale-105 transform duration-300 ease-out">
      <div className='relative w-80 h-80'>
        <Image src={img} alt={title} fill loading='lazy'/>
       
        </div>
        <h3 className="text-2xl mt-3">{title}</h3>
    </div>
    
  )
}

export default LiveCard