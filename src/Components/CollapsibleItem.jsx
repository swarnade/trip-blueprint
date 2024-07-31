import './design.css'
import React from "react";
const CollapsibleItem = ({
  isOpen,
  title,
  content,
  onToggle,
  day,
  location,
  description
}) => {
    console.log(location)
  return (
    <div className="border-b">
      <div
        onClick={onToggle}
        className="flex items-center justify-between p-4 cursor-pointer pt-7"
      >
        <div className="flex items-center">
          {isOpen ? "" : ""}
          <span className="ml-2 text-xl Card-Title">
            {day} : {title}
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="p-4">
                      <p className="Card-Description"><span className='text-3xl'>D</span>escription:-{description}</p>
          {
            <ul>
              {location.map((location, locIndex) => (
                <li key={locIndex}>
                  {location.name} - {location.type} - {location.description} -{" "}
                  {location.time}
                </li>
              ))}
            </ul>
          }
        </div>
      )}
    </div>
  );
};

export default CollapsibleItem;
