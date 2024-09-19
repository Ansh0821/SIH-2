import React from "react";
import SuccessAnimation from "../components/successAnimation";
import ErrorAnimation from "../components/ErrorAnimation";
import { useLocation, useNavigate } from "react-router-dom";

function Feedback() {
  const location = useLocation();
  const navigate = useNavigate();

  const isSuccess = location.state?.success;
  const message = location.state?.message || "No message provided.";

  const handleBackToForm = () => {
    navigate("/press-sewa");
  };

  return (
    <div className="flex justify-center items-center bg-gray-600 h-[100vh] ">
      <div className="flex flex-col items-center bg-white p-10 rounded-xl shadow-xl border-[0.1rem] border-orange-400">
        {isSuccess ? (
          <>
            {/* <h2>Submission Successful!</h2> */}
            <SuccessAnimation isPlaying={true} />
          </>
        ) : (
          <>
            {/* <h2>Submission Failed!</h2> */}
            <ErrorAnimation isPlaying={true} />
          </>
        )}

        <p className="font-medium text-xl italic mt-10">{message}</p>

        <button onClick={handleBackToForm} className="text-blue-400 underline mt-5">
          Back to Form
        </button>
      </div>
    </div>
  );
}

export default Feedback;
