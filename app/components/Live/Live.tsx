import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import { getLiveData } from '_/app/utils/api'
import LiveCard from '../LiveCard/LiveCard'

async function Live() {
    const liveData = getLiveData()
  return (
    <section>
        <div className='container pt-6'>
        <MainHeading title={'Live Anywhere'}/>
        <div className='flex space-x-3 overflow-scroll no-scroll-bar'>
        {(await liveData).map((item)=>
            <LiveCard key={item.img} img={item.img} title={item.title}/>
            )}
        </div>
          
           
        </div>
    </section>
  )
}

export default Live