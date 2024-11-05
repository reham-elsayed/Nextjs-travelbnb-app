import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {format } from 'date-fns';
import { getsearchResult } from '../utils/api';
import { SearchResultData } from '_/types/app';
import ListingCard from '../components/ListingCard/ListingCard';
import MapDisplay from '../components/MapDisplay/MapDisplay';
import 'maplibre-gl/dist/maplibre-gl.css';

type SearchParams =Promise<{
    startDate:string;
    endDate:string;
    numOfGuests:string;
    location:string;
}>;
const searchResult =async ({ searchParams}:{searchParams:SearchParams})=>{
const {startDate, endDate, location, numOfGuests} =  await searchParams;
    let formattedStartDate;
    let formattedEndDate;
    if(startDate && endDate){
    formattedStartDate = format(new Date(startDate),  'yyyy-MM-dd');
    formattedEndDate = format(new Date(endDate),  'yyyy-MM-dd');
        }

        const range=`${formattedStartDate} - ${formattedEndDate}`
        const filterOptions = [
            "Cancellation Flexibility",
            "Type of Place",
            "Price",
            "Rooms and Beds",
            "More filters"
          ];
const sParam = await searchParams;
 const searchResultData:SearchResultData = await getsearchResult({location})
 console.log("search result: ",searchResultData)         
    return(
        <>
        <Header placeholder={`${location} | ${range} | ${numOfGuests}`}/>
        
            <section className='pt-14'>
            <div className='px-5'>
                <h2> 300+ Stays  - {range} - for {numOfGuests} guests</h2>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stay in {location}</h1>
                <div className='hiddem lo:inline-flex mb-5 space-x-3 text-gray-800'>
                    {filterOptions.map((filter, i)=>(
                        <p key={i} className='filter-btn'>{filter}</p>
                    ))}
                </div>
 <div className='flex flex-col md:flex-row'>
 <div className='w-full md:w-2/3'> 
                  {searchResultData.map((card)=>(
                  
                  <ListingCard key={`${card.lat}`} card={card}/>
              ))}
              </div>
<div className='w-full md:w-1/3'>  
    <MapDisplay searchData={searchResultData} />
    </div>
 </div>

                </div>
               
            </section>
        
        <Footer/>
        </>
    )
}

export default searchResult