import React, { useState } from "react";

function App() {
  setInterval(GetTime, 1000);

  const time = new Date().toLocaleTimeString();
  // console.log(time);
  const [Time, setTime] = useState(time);

  function GetTime() {
    const now = new Date().toLocaleTimeString();
    setTime(now);
  }

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={GetTime}>Get Time</button>
    </div>
  );
}

export default App;
