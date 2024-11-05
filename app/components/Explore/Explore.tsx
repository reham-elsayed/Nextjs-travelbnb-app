import React from 'react'
import ExploreCard from '../ExploreCard/ExploreCard'
import { getExplore } from '_/app/utils/api'
import { ExploreData } from '_/types/app';
import MainHeading from '../MainHeading/MainHeading';

async function Explore() {

    const exploreData : ExploreData = await getExplore();
  return (
    <section className='pt-6 '>
        <div className="container">
            <MainHeading title={'Explore NearBy'}/>
      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

      {exploreData.map((item)=>(
        <ExploreCard key={item.img} img={item.img} location={item.location} distance={item.distance}/>
       ))}
        
      </div>
        </div>
    </section>
  )
}

export default Explore