import React, { useEffect, useState } from "react";

const GridBoxes = ({ reset }) => {
  const [clickCount, setClickCount] = useState(1);
  const [gridArray, setGridArray] = useState(Array(9).fill(null));

  useEffect(() => {
    setClickCount(1);
    setGridArray(Array(9).fill(null));
  }, [reset]);

  const handleBoxClick = (index) => {
    if (gridArray[index] === null) {
      const newGridArray = [...gridArray];
      newGridArray[index] = clickCount;
      setGridArray(newGridArray);
      setClickCount(clickCount + 1);
    }
  };

  return (
    <div className="complete-grid">
      {gridArray.map((number, index) => (
        <div
          key={index}
          className={`grid-box ${number !== null ? "isSelected" : ""}`}
          onClick={() => handleBoxClick(index)}
        >
          <p>{number !== null ? number : ""}</p>
        </div>
      ))}
    </div>
  );
};

export default GridBoxes;
