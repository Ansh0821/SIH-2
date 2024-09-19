import React from "react";
import prgi from "../assets/prgi.svg";
import user from "../assets/user.jpg"

function header() {
  return (
    <header className="px-5 py-2 flex justify-between">
      <div className="flex justify-center items-center">
        <img src={prgi} alt="" className="h-14" />
        <h1 className="text-[#3579ba] text-xl font-bold ">Press Sewa Portal</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="leading-none mr-1">
        <p className="text-lg font-medium text-gray-700">Owner/Applicant</p>
        <p className="text-sm">ansh2020kumar@gmail.com</p>
        </div>
        <img src={user} alt="" className="h-10 bg-slate-800" />
      </div>
    </header>
  );
}

export default header;
