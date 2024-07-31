import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { differenceInDays, parseISO } from "date-fns";
export default function Destination() {
  //Use Effect Hooks
  const [place, setPlace] = useState("");
  const [date, setDate] = useState();
  const [person, setPerson] = useState();
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const navigate = useNavigate();

  //Date Checking Function
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const diff = differenceInDays(
        parseISO(checkOutDate),
        parseISO(checkInDate)
      );
      setDate(diff + 1);
    }
  }, [checkInDate, checkOutDate]);

  //Next Page & Condition Checker
  const btn = () => {
    if (place != "" && date >= 1 && person >= 1) {
      navigate(`/${place}/${date}/${person}`);
    } else {
      if (place == "") {
        alert("Enter Your Destination");
      }
      if (date <= 0) {
        alert("Enter Check-out date After Checkin Date");
      }
      if (person <= 0) {
        alert("Check Proper Number Of Person");
      }
    }
  };
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
              require;
            }}
            className="border-2 border-solid border-gray-400 p-2 rounded bg-white w-full md:w-1/3 md:p-3"
            required
          ></input>
        </div>
        <div className="md:mt-10 md:mb-10 w-screen text-center">
          <label>
            Check-in Date:
            <input
              className="bg-white"
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </label>
        </div>
        <div className="md:mt-10 md:mb-10 w-screen text-center">
          <label>
            Check-out Date:
            <input
              className="bg-white"
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </label>
        </div>
        <div className="md:mt-10 md:mb-10 w-screen text-center">
          <p>Person</p>
          <input
            value={person}
            onChange={(e) => {
              setPerson(e.target.value);
            }}
            className="border-2 border-solid border-gray-400 p-2 rounded bg-white w-full md:w-1/3 md:p-3"
            required
          ></input>
        </div>
        <div className="md:mt-10 md:mb-10 w-screen text-center">
          <button
            onClick={btn}
            className="bg-slate-600 m-2 p-4 rounded-lg pl-8  pr-8"
          >
            Plan Trip
          </button>
        </div>
      </div>
    </>
  );
}
