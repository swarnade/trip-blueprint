import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Maps from "../Components/Map";
import Plans from "../Components/Plans";
export default function Display() {
  const params = useParams();
  const [place, setPlace] = useState(params.place);
  const [date, setDate] = useState(params.date);
  const [person, setPerson] = useState(params.person);
  return (
    <>
      <div className="bg-slate-50 w-screen h-screen text-black">
        <div className=" w-screen h-1/6 text-black text-5xl text-center">Trip Planner</div>
        <div className=" w-screen h-5/6 flex flex-col-reverse md:flex-row">
          <div className="w-screen md:w-1/2 h-full overflow-y-scroll"><Plans place={place} date={date} person={person} /></div>
          <div className="w-screen md:w-1/2 h-full "><Maps place={place} /></div>
        </div>
      </div>
    </>
  );
}