import React from "react";

export default function IpInput(props) {



  return (
    <div>
      <section className="input-section">
        <h1>IP Address Tracker</h1>
        {/* <!-- input --> */}
        <div className="ip-input-container">
          <input
            type="text"
            className="ip-input"
            placeholder="Search for any IP address or domain"
            onChange={props.getIpNameHandler}
          />

          <button className="input-btn" 
          onClick={props.setIpNameHandler}
          >
           
          </button>
          
        </div>
      </section>
    </div>
  );
}
