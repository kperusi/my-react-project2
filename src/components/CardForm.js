import React from 'react'

export default function CardForm() {




    
  return (
    <div className="forms"> 
    <label htmlFor="holdername">CARDHOLDER NAME</label>
    <input className="holdername" placeholder="e.g Jane Appleseed"></input>
    <label htmlFor="card-number">CARD NUMBER</label>
    <input
      className="card-number-input"
      placeholder="e.g 1234 5678 9123 0000"
    ></input>
    <div className="date-labels">
      <label htmlFor="card-date-month">EXP.DATE(MM/YY)</label>
      <label htmlFor="card-date-year" style={{ marginRight: "30px" }}>
        CVC
      </label>
    </div>

    <div className="date-container">
      <input
        className="card-date-month"
        placeholder="MM"
        style={{ width: "50px", height: "30px" }}
      ></input>
      <input
        className="card-date-year"
        placeholder="YY"
        style={{ width: "50px", height: "30px" }}
      ></input>
      <input
        className="cvc"
        placeholder="e.g 123"
        style={{ width: "70px", height: "30px" }}
      ></input>
    </div>
    <button className="form-button" >
      confirm
    </button>
  </div>
  )
}
