import "./design.css";
import React, { useEffect, useState } from "react";
import Location from "./Location";
const bracket = ">";
const CollapsibleItem = ({
  isOpen,
  title,
  content,
  onToggle,
  day,
  location,
  description,
}) => {
  console.log(location);
  const [color_main, setColor] = useState("");
  useEffect(() => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  }, []);
  return (
    <div className="border-b">
      <div
        onClick={onToggle}
        className="flex items-center justify-between p-4 cursor-pointer pt-7"
      >
        <div className="flex items-center">
          {isOpen ? "" : ""}
          <span
            className="text-xl Card-Title mt-5 mb-5 "
            style={{ color: color_main }}
          >
            {bracket} {day} : {title}
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="p-4 pl-8">
          <p className="Card-Description" style={{color:"#12b5cb"}}>
            <span className="text-3xl" style={{color:"#1518D6"}}>D</span>escription:-{description}
          </p>
          {
            <ul>
              {location.map((location, locIndex) => (
                <Location location={location} locIndex={locIndex}></Location>
              ))}
            </ul>
          }
        </div>
      )}
    </div>
  );
};

export default CollapsibleItem;
