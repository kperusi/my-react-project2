import React from 'react'
import img from './images/icon-complete.svg'

export default function Confirmation() {



    
  return (
    <div>
        <div className="confirmation">
    <img src={img} alt="imagelogo" />

    <h1 className="thanks" style={{ textAlign: "center" }}>
      THANK YOU!
    </h1>
    <p className="para" style={{ textAlign: "center" }}>
      We've added your card details
    </p>

    <button className="continue-button" style={{}} >
      continue
    </button>
  </div>
  </div>
  )
}
