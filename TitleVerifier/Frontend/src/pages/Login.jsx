import React from "react";
import prgi from "../assets/prgi.svg";
import user from "../assets/user-icon.svg";
import eye from "../assets/eye.svg";
import refresh from "../assets/refresh.svg";
import { useNavigate } from "react-router-dom";

function login() {
  const navigate = useNavigate();

  return (
    <div className="p-2 flex space-x-2">
      <div className="w-1/2 bg-[radial-gradient(circle,_rgba(255,255,255,1)_29%,_rgba(35,122,190,1)_90%)] min-h-[97.5vh] rounded-lg flex justify-center items-center flex-col">
        <img src={prgi} alt="" className="h-[20rem] " />
        <p className="font-serif text-3xl font-bold text-[#064F94] ">
          Press Sewa Portal
        </p>
      </div>
      <div className="w-1/2 p-10 flex items-center">
        <form action="">
          <h1 className="text-3xl font-semibold text-gray-700">Login</h1>
          <p className="mt-2 text-gray-600 mb-2">
            Owner/ Publisher/ Printer/ Specified Authority / PRGI/ CA
          </p>
          <div className="flex flex-col space-y-10 shadow-xl rounded-sm p-4">
            <label htmlFor="username" className="flex flex-col space-y-1">
              <span>
                Username <span className="text-red-700">*</span>
              </span>
              <span className="w-[37rem] flex items-center">
                <input
                  type="text"
                  placeholder="username"
                  className="outline-none border-b-[0.01rem] border-gray-600 w-full"
                  required
                />
                <img src={user} alt="" className="h-4  " />
              </span>
            </label>
            <label htmlFor="password" className="flex flex-col space-y-1">
              <span>
                Password <span className="text-red-700">*</span>
              </span>
              <span className="w-[37rem] flex items-center">
                <input
                  type="password"
                  placeholder="username"
                  className="outline-none border-b-[0.01rem] border-gray-600 w-full"
                  required
                />
                <img src={eye} alt="" className="h-4  " />
              </span>
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <p className="p-2 border-[0.01rem] w-[5.5rem] ">5 + 7 = ?</p>
                <img src={refresh} alt="" className="ml-1 h-5" />
              </div>
              <label htmlFor="captcha" className="">
                <span>
                  Enter captcha code <span className="text-red-700">*</span>
                </span>
                <input
                  type="text"
                  className="outline-none border-b-[0.01rem] border-gray-600 "
                  required
                />
              </label>
            </div>
            <div className=" flex justify-between text-[#563e8f] font-medium ">
              <button className="hover:underline">Sign Up</button>
              <button className="hover:underline">Forgot Password?</button>
            </div>
            <button
              className="bg-[#064F94] p-2 text-white rounded-md mt-[-10rem] hover:bg-[#215f98] "
              onClick={() => navigate("/press-sewa")}
            >
              Login
            </button>
          </div>
          <p>
            <span className="font-medium">Note:</span> A publisher account can
            only be created upon receiving an invitation from an owner account.
          </p>
        </form>
      </div>
    </div>
  );
}

export default login;
