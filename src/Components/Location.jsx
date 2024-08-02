import React from "react";

export default function Location({ location, locIndex }) {
  return (
    <li
      key={locIndex}
      className=" m-6 p-2 Location-Heading border-dashed border-2 border-white rounded-xl text-xl"
      style={{ color: "#6c409f" }}
    >
      {location.time}
      <br />
      <div
        className="pl-5 Location-Description text-2xl"
        style={{ color: "#649c4a" }}
      >
        {" "}
        <span className="Location-Heading text-xl md:text-2xl">
          {location.name} - {location.type}
        </span>
        <br /> <span style={{ color: "#b31f55" }}>{location.description}</span>
      </div>

      {/* {location.name} - {location.type} - {location.description} -{" "}
      {location.time} */}
    </li>
  );
}
