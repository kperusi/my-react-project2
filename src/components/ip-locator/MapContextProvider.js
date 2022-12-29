import { createContext } from "react";
import React from 'react'
import { useState } from "react";
import { MapContext } from "./MapContext";

export default function MapContextProvider({children}) {
  const [location ,setLocation]=useState('location')
  
  
  return (
    <MapContext.Provider value={location} >
{children}
    </MapContext.Provider>
  )
}
