import React from 'react'
import { MapContainer, TileLayer,Marker,useMap} from 'react-leaflet'
import { Icon } from 'leaflet'
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
    <div>

    
        <MapContainer id='map' center={props.position} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={props.position}>
   
  </Marker>
  <Recenter position={props.position}/>
</MapContainer>

</div>
  
  )
}
