import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Maps from "../Components/Map";
import Plans from "../Components/Plans";
import Histrory from "../Components/Histrory";

export default function Display() {
  const params = useParams();
  const [place, setPlace] = useState(params.place);
  const [date, setDate] = useState(params.date);
  const [person, setPerson] = useState(params.person);

  return (
    <>
    <Histrory place={place} date={date} person={person} />
      <div className=" w-screen h-screen text-white bg-black">
        <div className=" w-screen h-1/6 text-white text-5xl text-center Card-Title">Trip Blueprint</div>
        <div className=" w-screen h-5/6 flex flex-col-reverse md:flex-row">
          <div className="w-screen md:w-1/2 h-2/3 md:h-full  overflow-y-scroll no-scrollbar"><Plans place={place} date={date} person={person} /></div>
          <div className="w-screen md:w-1/2 h-1/3 md:h-full  "><Maps destination={place} /></div>
        </div>
      </div>
    </>
  );
}
