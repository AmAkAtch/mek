import React, { useEffect, useState } from "react";

//count will keep onincreasing, we want to increase it only once on first click
//separate each of the boxes
//display them in order of the click
//reset everything on button click

const GridBoxes = ({ reset }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [clickCount, setClickCount] = useState(1);

  useEffect(() => {
    setIsSelected(false);
    setClickCount(1);
  }, [reset]);

  const handleBoxClick = () => {
    setClickCount(clickCount + 1);
    setIsSelected(true);
  };

  return (
    <div className="complete-grid">
      <div
        className={`grid-box ${isSelected ? "isSelected" : ""}`}
        onClick={() => handleBoxClick(clickCount)}
        isSelected={isSelected}
      ></div>
      <div
        className={`grid-box ${isSelected ? "isSelected" : ""}`}
        onClick={handleBoxClick}
        isSelected={isSelected}
      ></div>
      <div
        className={`grid-box ${isSelected ? "isSelected" : ""}`}
        onClick={handleBoxClick}
        isSelected={isSelected}
      ></div>
      <div
        className={`grid-box ${isSelected ? "isSelected" : ""}`}
        onClick={handleBoxClick}
        isSelected={isSelected}
      ></div>
      <div
        className={`grid-box ${isSelected ? "isSelected" : ""}`}
        onClick={handleBoxClick}
        isSelected={isSelected}
      ></div>
      <div
        className={`grid-box ${isSelected ? "isSelected" : ""}`}
        onClick={handleBoxClick}
        isSelected={isSelected}
      ></div>
      <div
        className={`grid-box ${isSelected ? "isSelected" : ""}`}
        onClick={handleBoxClick}
        isSelected={isSelected}
      ></div>
      <div
        className={`grid-box ${isSelected ? "isSelected" : ""}`}
        onClick={handleBoxClick}
        isSelected={isSelected}
      ></div>
      <div
        className={`grid-box ${isSelected ? "isSelected" : ""}`}
        onClick={handleBoxClick}
        isSelected={isSelected}
      ></div>
    </div>
  );
};

export default GridBoxes;
