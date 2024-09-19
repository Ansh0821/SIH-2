import React from "react";
import user from "../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <div className="bg-white rounded-lg flex justify-center items-start p-5 min-h-[87vh] max-w-md mx-auto relative">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img src={user} alt="User" className="h-40 border-2 rounded-full" />
          <input
            type="file"
            accept="image/*"
            id="file-upload"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => console.log(e.target.files[0])}
          />
          <label
            htmlFor="file-upload"
            className="absolute bottom-0 right-0  mr-2 cursor-pointer flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600"
          >
            <FontAwesomeIcon icon={faEdit} className="w-6 h-6" />
          </label>
        </div>
        <p className="mt-5 text-gray-700 font-medium">8084505796</p>
        <p className=" text-gray-700 font-medium">ansh2020kumar@gmail.com</p>
      </div>
    </div>
  );
}

export default Profile;
