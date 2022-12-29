import React from "react";
import { useContext } from "react";
import { MapContext } from "./MapContext";

export default function Display() {
  const details= useContext(MapContext)
 console.log(details.city)
  

  return (
  


    <div>
      <section className="display-section">

        <div className="ip-address-wrap">
          {/* <DisplayLabel className="ip-address"  text1={'IP ADDRESS'} text2={'192.334.567.789'}></DisplayLabel> */}
          <label htmlFor="ip-address">IP ADDRESS</label>
          <h2 className="ip-address">{details.address?details.address:'192.334.567.789'}</h2>
        </div>
        <hr />
        <div className="location-wrap">
          <label htmlFor="location">LOCATION</label>
          <div className="region-wrap">
            <h2 className="location-region">{details.region?details.region:'California'},</h2>
            <h2 className="location-city">{details.city?details.city:'NY 1001'}</h2>
          </div>
        </div>
        <hr />
        <div className="time-wrap">
          <label htmlFor="time">TIME ZONE</label>
          <h2 className="time">UTC{details.timeZone?details.timeZone:'UTC-05:00'}</h2>
        </div>
        <hr />
        <div className="isp-wrap">
          <label htmlFor="isp">ISP</label>
          <h2 className="isp">{details.isp?details.isp:'SpaceX Starlink'}</h2>
        </div>
      </section>

      {/* {value => <h1>this is {value}</h1>} */}
    </div>

  );
}
