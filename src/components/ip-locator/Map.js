import React from 'react'
import { MapContainer, TileLayer,Marker,useMap,ZoomControl} from 'react-leaflet'
// import { Ic} from 'leaflet'

import { useEffect } from 'react'


export default function Map(props) {

  const Recenter = ({position}) => {
    const map = useMap();
     useEffect(() => {
       map.setView(position);
     }, [position,map]);
     return null;
   }

  
// const myicon = new Icon({iconUrl:'./images/icon-location.svg' , iconSize:[33,33]})
  
  return (
    // <div id='map'>
     
        <MapContainer className='map'  center={props.position} zoom={13} zoomControl={false} scrollWheelZoom={false}>
        
  <TileLayer
   attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
 
  />
        
  <Marker position={props.position}>
   
  </Marker>
  <ZoomControl position='bottomleft'/>
  <Recenter position={props.position}/>
</MapContainer>

// </div>
  
  )
}
