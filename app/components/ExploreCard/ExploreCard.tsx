import { Exploreitem } from '_/types/app'
import Image from 'next/image';
import React from 'react'
type ExploreCardProps = Exploreitem;
function ExploreCard({img, location, distance}:ExploreCardProps) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 hover:scale-105 duration-300 transition ease-out hover:bg-gray-300 text-zinc-800 ">
        <div className='relative w-16 h-16'>
        <Image src={img} alt={location} fill />
        </div>
        <div className='flex flex-col'>
        <h3>{location}</h3>
        <p>{distance}</p>
        </div>
       
    </div>
  )
}

export default ExploreCard