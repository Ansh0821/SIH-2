import React from "react";
import { NavLink } from "react-router-dom";
import Emblem from "../assets/Emblem.svg";
import Prgi from "../assets/prgi.svg";
import arrow from "../assets/downarrow.svg";

const Navbar = () => {
  return (
    <nav className="navbar flex px-5 py-2 justify-between">
      <div className="container flex items-center">
        <img
          src={Emblem}
          alt="Emblem of India Logo"
          className="h-24 border-r-[0.01rem] pr-5 border-gray-800 "
        />
        <img src={Prgi} alt="Emblem of India Logo" className="h-24 " />
        <div className="text-[#064F94] font-bold text-2xl leading-tight ">
          <h1 className="navbar-title font-extrabold">
            भारत के प्रेस महापंजीयक
          </h1>
          <h1 className="navbar-title">Press Registrar General of India</h1>
          <h1 className="italic text-lg">
            (Formerly Registrar of Newspapers for India)
          </h1>
        </div>
      </div>
      <div className="w-2/3 mt-8">
        <ul className=" flex font-mono space-x-4">
          <li>
            <NavLink
              to="about-us"
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-orange-600" : "none"} flex`
              }
            >
              <span className="">About Us</span>
              <img src={arrow} alt="" className="h-4 mt-[0.25rem]" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                `${isActive ? "border-b-4 rounded-sm border-orange-400" : "text-gray-800"} flex pb-2`
              }
            >
              Our Services
              <img src={arrow} alt="" className="h-4 mt-[0.25rem]" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="policy"
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-orange-600" : "none"} flex`
              }
            >
              Policy
              <img src={arrow} alt="" className="h-4 mt-[0.25rem]" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="connect"
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-orange-600" : "none"} flex`
              }
            >
              Connect with Us
              <img src={arrow} alt="" className="h-4 mt-[0.25rem]" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
