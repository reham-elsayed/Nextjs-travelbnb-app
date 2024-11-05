'use client'
import React, { useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import Map , { Marker ,Popup} from 'react-map-gl/maplibre';
import { listingCard, SearchResultData } from '_/types/app';
import center from '@turf/center';
import { point, featureCollection } from '@turf/helpers';


const MapDisplay = ({searchData}:{searchData:SearchResultData}) => {
  const [isPopUp,setIsPopUp] = useState(false)
  const [selectedLocation,setSelectedLocation] = useState<{long:number; lat:number} | null>(null)

const coordinates = searchData.map((listing)=>({
    longitude:listing.long,
    latitude:listing.lat,
}))
const points = featureCollection(
    coordinates.map(coord => point([coord.longitude, coord.latitude]))
  );
  
  const centerPoint = center(points);
  const [longitude, latitude] = centerPoint.geometry.coordinates;

    return (
        <Map
        initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: 11
        }}

        style={{width: "100%", height: 500}}
        mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_BASE_MAP_KEY}`}
      >
        {searchData.map((coord)=>(
<div key={coord.lat}>
<Marker longitude={coord.long} latitude={coord.lat} anchor="bottom">
 <div
 onClick={()=>{setSelectedLocation({long:coord.long,lat: coord.lat})}}
  className='w-16 h-16 animate-pulse' >📍</div> 
 {selectedLocation?.long === coord.long && selectedLocation?.lat === coord.lat && (<Popup closeOnClick={false} longitude={coord.long} latitude={coord.lat}  onClose={()=>setSelectedLocation(null)}><p>{coord.title}</p></Popup>)}
</Marker>
</div>
        ))}
     
    </Map>
    );
};

export default MapDisplay;
