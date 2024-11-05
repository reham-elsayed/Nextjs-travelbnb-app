import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Navbar from '../Navbar.tsx/Navbar'
import { placeholderProps } from '_/types/app';

function Header({placeholder}:placeholderProps) {
  return (
   <header className='sticky top-0 z-50 shadow-md py-5 '>
    <div  className=" container grid grid-cols-3 relative">
    <Link href='/' className='relative flex items-center h-10 my-auto' >
    <Image src='https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' fill alt="logo/img"
    objectFit='contain'
    className='object-left'
    />
    </Link>
    <Searchbar placeholder={placeholder}/>
    <Navbar/>
    </div>
   
   </header>
  )
}

export default Header