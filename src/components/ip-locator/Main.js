import React, { useState } from "react";
import IpInput from "./IpInput";
import Map from "./Map";
import Display from "./Display";
import "./map.css";
import { MapContext } from "./MapContext";
import { useEffect } from "react";
import { useReducer } from "react";

const initials = {
  city: "NY 1001",
  region: "California",
  isp: "",
  address: "",
  timeZone: "",
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "successful":
      return {
        city: action.payload.location.city,
        region: action.payload.location.region,
        isp: action.payload.isp,
        address: action.payload.ip,
        timeZone: action.payload.location.timezone,
      };
    case "failed":
      return {
        error: "Something went wrong !Check your internet",
      };
    default:
      return {};
  }
};
export default function Main() {
  const [ip, setIp] = useState("");
  const [temp, setTemp] = useState("142.250.188.238");
  const [position, setPosition] = useState([37.38, -122.08]);
  const [details, dispatch] = useReducer(reducer, initials);

  let api_url = "https://geo.ipify.org/api/v1?";
  let api_key = "at_BihrAczzpt0w10MxpdIuneJsKtUwU";

  const getIpNameHandler = (e) => {
    setIp(e.target.value);
  };

  const setIpNameHandler = () => {
    setTemp(ip);
  };

  useEffect(() => {
    console.log(temp);

    let url = api_url + "apiKey=" + api_key + "&domain=" + temp;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosition([data.location.lat, data.location.lng]);
        console.log(data);
        dispatch({ type: "successful", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "failed", payload: error });
      });
  }, [temp, api_key, api_url]);

  console.log(details.city);

  return (
    <MapContext.Provider
      value={{
        position: position,
        city: details.city,
        region: details.region,
        timeZone: details.timeZone,
        address:details.address,
        error: details.error,
        isp:details.isp,
      }}
    >
      <div className="container">
        <IpInput
          getIpNameHandler={getIpNameHandler}
          ip={ip}
          setIpNameHandler={setIpNameHandler}
        />
        <Display />
        {details.error ? (
          <h1 className="error">{details.error}</h1>
        ) : (
          <Map position={position} />
        )}
      </div>
    </MapContext.Provider>
  );
}


