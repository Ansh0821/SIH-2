import React from "react";
import Header from "../components/header";
import Profile from "../components/profile";
import Form from "../components/Form";

function PressSewa() {
  return (
    <>
      <Header />
      <div className="flex px-8 py-4 bg-gray-300 space-x-5">
        <div className="w-1/4">
          <Profile />
        </div>
        <div className="w-3/4">
            <Form />
        </div>
      </div>
    </>
  );
}

export default PressSewa;
