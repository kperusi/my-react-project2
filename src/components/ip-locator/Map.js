import React from 'react'
import { MapContainer, TileLayer,Marker,useMap,ZoomControl} from 'react-leaflet'
// import { Ic} from 'leaflet'

import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async';


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
    <>
     <Helmet>
      
{/* <!-- Primary Meta Tags --> */}
<title>Frontend Mentor | IP Address Tracker</title>
<meta name="title" content="IP Address Tracker"/>
<meta name="description" content="IP address tracker is a web application where users can enter an Ip address and their location is displayed on a map. The map can be zoomed in and zoomed out, showing all the nearby location."/>

{/* <!-- Open Graph / Facebook --> */}
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://my-react-project2.vercel.app/"/>
<meta property="og:title" content="IP Address Tracker"/>
<meta property="og:description" content="IP address tracker is a web application where users can enter an Ip address and their location is displayed on a map. The map can be zoomed in and zoomed out, showing all the nearby location."/>
<meta property="og:image" content=""/>

{/* <!-- Twitter --> */}
<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://my-react-project2.vercel.app/"/>
<meta property="twitter:title" content="IP Address Tracker"/>
<meta property="twitter:description" content="IP address tracker is a web application where users can enter an Ip address and their location is displayed on a map. The map can be zoomed in and zoomed out, showing all the nearby location."/>
<meta property="twitter:image" content=""/>

     </Helmet>
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

 </>
  
  )
}
