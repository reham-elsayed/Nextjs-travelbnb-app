'use client';
import React, { useState } from 'react';
import {SearchIcon, UsersIcon} from '@heroicons/react/solid';
import {DateRangePicker, RangeKeyDict} from 'react-date-range'
import Link from 'next/link';
import { placeholderProps } from '_/types/app';
const Searchbar = ({placeholder}:placeholderProps) => {
  const [input, setInput] = useState<string>('')
  const[startDate, setStartDate]= useState<Date>(new Date());
  const[endDate, setEndDate]= useState<Date>(new Date());
  const [numOfGuests, setNumOfGuests] = useState<number>()
  function resetInput(){
    setInput('')
  }
  const selectionRange :{
    startDate: Date;
    endDate: Date;
    key:string
  }= {
    startDate,
    endDate,
    key: 'selection',
  }
  const handleSelect = (ranges:RangeKeyDict)=>{
setStartDate(ranges.selection.startDate as Date);
setEndDate(ranges.selection.endDate as Date)
  }
const search=()=>{
  setInput('')
}
  return (
   <>
  
   <div className='flex items-center md:border-2 rounded-full p-2 md:shadow-sm'> 
        <input 
        type='text'
        value={input}
        placeholder= {placeholder||'start your search'}
        onChange={(e)=>{setInput(e.target.value)}}
        className='text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-white outline-none'
        />
        <SearchIcon className="hidden p-2 bg-red-400  text-xs md:inline-flex h-8 text-white rounded-full"/>
    </div>
    {input && <div className='absolute top-20 bg-white p-5 max-h-screen'>
     
      <DateRangePicker
      ranges={[selectionRange]}
      onChange={handleSelect}
      rangeColors={['#FD5B61']}
      minDate={new Date()}
      />
      <div className="flex items-center border-b mb-4">
        <h2 className='text-2xl flex-grow font-semibold'>
          Number of Guests
        </h2>
        <UsersIcon className='h-5'/>
        <input
        type='number'
        className='w-12 pl-2 text-lg outline-none'
        value={numOfGuests}
        min={1}
        onChange={(e)=> setNumOfGuests(Number(e.target.value) )}/>
      </div>
      <div className='flex items-center'>
        <button
        onClick={resetInput}
         className='flex-grow text-gray-500'>
          Cancel
        </button>
        <button
         className='flex-grow text-gray-500'
         >
          <Link href={{pathname:"/search", search:`?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`}}
          onClick={search}>
          Search
          </Link>
        </button>
      </div>
      </div>}
  
    
   </>
  )
}

export default Searchbar