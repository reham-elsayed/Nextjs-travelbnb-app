import { GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'
import React from 'react'

function Navbar() {
  return (
    <nav className='flex spacd-x-4 items-center justify-end gap-1 text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6  cursor-pointer'/>
        <div className='flex space-x-2 p-2 border shadow-md border-cyan-50 rounded-full'>
            <MenuIcon className='h-6'/>
            <UserCircleIcon className='h-6'/>
        </div>
    </nav>
  )
}

export default Navbar