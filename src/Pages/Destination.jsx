import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function Destination() {
  const [place, setPlace] = useState("");
  const [date, setDate] = useState();
  const [person, setPerson] = useState();
  const lnk = `/${place}/${date}/${person}`;
  return (
    <>
      <div className="bg-white w-screen h-screen text-black">
      <h1 className="text-center">Plan Your Next Adventure</h1>
          <div className="md:mt-10 md:mb-10 w-screen text-center">
            <p className="">Place</p>
            <input
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
              require}}
              className="border-2 border-solid border-gray-400 p-2 rounded bg-white w-full md:w-1/3 md:p-3"
            required></input>
          </div>
          <div className="md:mt-10 md:mb-10 w-screen text-center">
            <p>Days</p>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="border-2 border-solid border-gray-400 p-2 rounded bg-white w-full md:w-1/3 md:p-3"
            required></input>
          </div>
          <div className="md:mt-10 md:mb-10 w-screen text-center">
            <p>Person</p>
            <input
              value={person}
              onChange={(e) => {
                setPerson(e.target.value);
              }}
              className="border-2 border-solid border-gray-400 p-2 rounded bg-white w-full md:w-1/3 md:p-3"
            required></input>
          </div>
          <div className="md:mt-10 md:mb-10 w-screen text-center">
          <NavLink to={lnk} className="bg-black m-2 p-4 rounded-lg pl-8  pr-8">Plan Trip</NavLink>
          </div>
        
      </div>
    </>
  );
}
