import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
type GreatData = {
    img:string;
     title:string;
      description:string;
       linkText:string
}
function GreatOutdoor({img, title , description, linkText}:GreatData) {
  return (
    <div className='container pt-16'>
         
         <div className='relative w-full h-80'>
        <Image src={img} alt={title} fill loading='lazy'
        className='object-cover'
        />
       
        <div
        className="absolute top-27 left-12"
        ><h3 className="text-2xl mt-3">{title}</h3>
        <p>{description}</p>
        <button
        className="text-sm px-4 py-2 block rounded-lg mt-5 text-white bg-gray-900">
          <Link href='/'>
          {linkText}
          </Link> 
        </button>
        </div>
        </div>
      
        
    </div>
  )
}

export default GreatOutdoor