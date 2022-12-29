import React from 'react'

export default function DisplayLabel(props) {
  return (
    <div>
        <label className={props.className} htmlFor={props.mainText}>{props.mainText}</label>
        <h2 className='className'>{props.subText}</h2>

    </div>
  )
}
