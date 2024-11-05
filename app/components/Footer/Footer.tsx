import Link from 'next/link'
import React from 'react'


function Footer() {
    const links =[
        {
            title:'Community',
            links:[
                'Accessabilty',
                "this is not a real site",
                "referral accepted",
                "Its Pretty awsome clone"
            ]
        },
        {
            title:'Community',
            links:[
                'Accessabilty',
                "this is not a real site",
                "referral accepted",
                "Its Pretty awsome clone"
            ]
        },
        {
            title:'Community',
            links:[
                'Accessabilty',
                "this is not a real site",
                "referral accepted",
                "Its Pretty awsome clone"
            ]
        },
        {
            title:'Community',
            links:[
                'Accessabilty',
                "this is not a real site",
                "referral accepted",
                "Its Pretty awsome clone"
            ]
        }
    ]
  return (
   <footer className='bg-gray-300 '>
    <div className="container grid grid-cols-1 md:grid-cols-4 gap-y-5 py-5">
{links.map((link)=>(
    <div key={link.title} className="space-y-4 text-xs py-5">
        <h5 className='font-bold'>{link.title}</h5>
        <div className="flex flex-col">
        {link.links.map((item)=>(
<Link href={item} key={item}>
{item}</Link>
        ))}
        </div>    
    </div>
)
)}
    </div>
   </footer>
  )
}

export default Footer