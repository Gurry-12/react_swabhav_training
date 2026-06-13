import { useState } from "react";

const Demo = () => {
  
  //  let num = 10;

  const [number , setNumber] = useState(0)

  const increment = (event) => {
    event.preventDefault();
    console.log("Before increment : ", number);
    setNumber(number+1)
    console.log("After increment : ", number);
  };

  const row = 5;

  const displayPattern = (event) => {

    event.preventDefault()
    for(let i = 1 ; i <= row ; i ++){
        for(let j = 1 ; j <= row ; j ++) {
        console.log("*");
        }
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={(event) => {
          increment(event);
        }}
      >
        increment
      </button>
      <br />

      <button onClick={ (event) => {displayPattern(event)}}>pattern </button>
    </div>
  );
};

export default Demo;
