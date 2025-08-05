import React from "react";
import { useState } from "react";
import GridBoxes from "./GridBoxes.jsx";

const GridApp = () => {
  const [reset, setReset] = useState(false);

  const handleResetClick = () => {
    setReset(true);
  };

  return (
    <div className="grid-app">
      <h2>Grid app</h2>
      <GridBoxes />
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default GridApp;
