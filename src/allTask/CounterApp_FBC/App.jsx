import React, { useState } from "react";
import "./style.css";

const App = () => {
  let [count, setCount] = useState(0);

  let handelInc = () => {
    setCount(count + 1);
  };

  let handelDec = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  let handelReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="main">
        <div className="content">
          <h1>{count}</h1>
 
          <button onClick={handelInc}>ADD</button>
          <button onClick={handelDec}>SUB</button>
          <button onClick={handelReset}>RESET</button>
        </div>
      </div>
    </>
  );
};
export default App;
