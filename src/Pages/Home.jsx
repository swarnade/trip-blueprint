import React from "react";
import { NavLink } from "react-router-dom";
function App() {
  return (
    <div className="bg-slate-50 w-screen h-screen">
      <div className=" w-screen h-1/6">a</div>
      <div className=" w-screen h-4/6 flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2  h-full">
          <p className="text-black md:text-[60px] px-4">
            Unlock the World with AI-Powered Travel
          </p>
          <p className="text-black md:text-[30px] px-4 py-4">
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
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
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
