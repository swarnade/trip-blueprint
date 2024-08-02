import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { differenceInDays, parseISO } from "date-fns";
import "../Components/design.css";
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
      <div className="bg-black w-screen h-screen text-white">
        <div className="h-2/10">
          <h1 className="text-center">Trip Blueprint</h1>
        </div>
        <div className="h-7/10 mt-5">
          <div className=" md:mb-10         w-screen text-center mt-5 mb-5">
            <p className="description-title text-2xl">Place</p>
            <input
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
              className="border-4 border-double border-gray-400 p-2 rounded bg-black w-5/6 md:w-1/3 md:p-3"
              required
              placeholder="Place to Travel"
            ></input>
          </div>
          <div className="md:mt-10 md:mb-10 w-screen text-center mt-5 mb-5">
            <label className="text-2xl description-title">
              Check-in Date:
              <br />
              <input
                className="bg-black border-4 border-double border-gray-400 p-3 rounded-xl"
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </label>
          </div>
          <div className="md:mt-10 md:mb-10 w-screen text-center mt-5 mb-5">
            <label className="text-2xl description-title">
              Check-out Date:
              <br />
              <input
                className=" bg-black border-4 border-double border-gray-400 p-3 rounded-xl"
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </label>
          </div>
          <div className="md:mt-10 md:mb-10 w-screen text-center mt-5 mb-5">
            <p className="description-title text-2xl">Person</p>
            <input
              value={person}
              onChange={(e) => {
                setPerson(e.target.value);
              }}
              className="border-4 border-double border-gray-400 p-2 rounded bg-black w-5/6 md:w-1/3 md:p-3"
              required
              placeholder="Number of Person"
            ></input>
          </div>
          <div className="md:mt-10 md:mb-10 w-screen text-center mt-5 mb-5">
            <button
              onClick={btn}
              className="bg-white text-black m-2 p-4 rounded-lg pl-8  pr-8 Location-Heading">
              Plan Trip
            </button>
          </div>
        </div>
        {/* <div className="h-2/10 text-center Card-Title text-xl">
        <p>Trip BluePrint | Developed By Swarnadeep Saha Poddar</p>
        </div> */}
      </div>
    </>
  );
}
