import React from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/main.jpg"
function App() {
  return (
    <div className="bg-black w-screen h-screen">
      <div className=" w-screen h-1/6"></div>
      <div className=" w-screen h-4/6 flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2  h-full">
          <p className="text-white md:text-[55px] px-4 Card-Title md:mb-4 ">
            Unlock the World with AI-Powered Travel
          </p>
          <p className="text-white md:text-[25px] px-4 py-4 md:mb-4">
            Discover the best destinations, plan your dream trips, and get
            personalized recommendations with our AI-powered travel app.
          </p>
          <div className="grid place-content-center">
            <NavLink to="/destination"className="p-4 bg-slate-900 text-white rounded-xl">Get Started</NavLink>
          </div>
        </div>
        <div className="w-full md:w-1/2  h-full grid place-content-center">
          <img
            className="rounded-s-3xl "
            src={image}
          />
        </div>
      </div>
      <div className=" w-screen h-1/6 grid place-content-center">
      <div className="h-2/10 text-center Card-Title text-xl">
        <p>Trip BluePrint | Developed By Swarnadeep Saha Poddar</p>
        </div>
        {/* <p className="text-xl md:text-2xl text-white">
          Developed By Swarnadeep Saha Poddar
        </p> */}
      </div>
    </div>
  );
}

export default App;
