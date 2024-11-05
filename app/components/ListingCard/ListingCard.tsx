import { HeartIcon, StarIcon } from '@heroicons/react/outline'
import { listingCard } from '_/types/app'
import Image from 'next/image'
import React from 'react'

function ListingCard({card}:{card:listingCard}) {
    
  return (
<div className='flex flex-col lg:flex-row py-2  cursor-pointer hover:opacity-80 hover:shadow-lg justify-center'>
<div className='relative h-24 w-40 md:w-80 md:h-52 flex-shrink-0  '>
                 <Image src={card.img} alt={card.title}
                  fill
                  objectFit='cover'
                  className='rounded-xl'
                  /></div>
                  <div className='flex flex-col flex-grow pl-5'>
                    <div className='flex justify-between'>
                        <p>{card.location}</p>
                        <HeartIcon className='h-7 cursor-pointer'/>
                    </div>
                    <h4
                    className='text-xl'
                    >{card.title}</h4>
                    <div className='border-b pt-2 flex-grow'>
                        <p className='pt-2 text-sm text-gray-500 flex-grow'>{card.description}</p>
                        <div className='flex justify-between items-end pt-5'>
                            <p className='flex items-center'>
                                <StarIcon className='h-5 text-red-400'/>
                                {card.star}
                            </p>
                        </div>
                        <p>{card.price}</p>
                        <p>{card.total}</p>
                    </div>

                  </div>

                    </div>

  )
}

export default ListingCard