import React from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/main.jpg"
function App() {
  return (
    <div className="bg-slate-50 w-screen h-screen">
      <div className=" w-screen h-1/6">a</div>
      <div className=" w-screen h-4/6 flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2  h-full">
          <p className="text-black md:text-[55px] px-4 Card-Title md:mb-4 ">
            Unlock the World with AI-Powered Travel
          </p>
          <p className="text-black md:text-[25px] px-4 py-4 md:mb-4">
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
        <p className="text-xl md:text-2xl text-black">
          Developed By Swarnadeep Saha Poddar
        </p>
      </div>
    </div>
  );
}

export default App;
