import React from "react";
import CardForm from "./CardForm";
import Confirmation from "./Confirmation";

export default function Page() {
  const [count, setCount] = React.useState(0);

  


  const myMeth = (count) => {
    // setCount(count+1);
    const value = count + 2;
    return value
  };
const value = myMeth()
  console.log(`this is value ${value}`)
  console.log(`this is value ${count}`)

  return (
    <div className="main">
      <CardForm />
      <Confirmation />
    </div>
  );
}
