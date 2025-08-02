// import React from "react";
// import SuccessAnimation from "../components/successAnimation";
// import ErrorAnimation from "../components/ErrorAnimation";
// import { useLocation, useNavigate } from "react-router-dom";

// function Feedback() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const isSuccess = location.state?.success;
//   const message = location.state?.message || "No message provided.";
//   const similarTitles = location.state?.top_similar_titles || [];

//   const handleBackToForm = () => {
//     navigate("/press-sewa");
//   };

//   return (
//     <div className="flex justify-center items-center bg-gray-600 h-[100vh]">
//       <div className="flex flex-col items-center bg-white p-10 rounded-xl shadow-xl border-[0.1rem] border-orange-400">
//         {isSuccess ? (
//           <>
//             <SuccessAnimation isPlaying={true} />
//           </>
//         ) : (
//           <>
//             <ErrorAnimation isPlaying={true} />
//           </>
//         )}

//         <p className="font-medium text-xl italic mt-10">{message}</p>

//         {similarTitles.length > 0 && (
//           <div className="mt-4">
//             <h3>Top Similar Titles:</h3>
//             <ul>
//               {similarTitles.map((title, index) => (
//                 <li key={index}>{title["Title Name"]}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <button
//           onClick={handleBackToForm}
//           className="text-blue-400 underline mt-5"
//         >
//           Back to Form
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Feedback;


import React from "react";
import SuccessAnimation from "../components/successAnimation";
import ErrorAnimation from "../components/ErrorAnimation";
import { useLocation, useNavigate } from "react-router-dom";

function Feedback() {
  const location = useLocation();
  const navigate = useNavigate();

  const isSuccess = location.state?.success;
  const message = location.state?.message || "No message provided.";
  const topSimilarTitles = location.state?.top_similar_titles || [];
  const acceptableUniqueTitles = location.state?.acceptable_unique_titles || [];

  const handleBackToForm = () => {
    navigate("/press-sewa");
  };

  return (
    <div className="flex justify-center items-center bg-gray-600 h-[100vh]">
      <div className="flex flex-col items-center bg-white p-10 rounded-xl shadow-xl border-[0.1rem] border-orange-400">
        {isSuccess ? (
          <>
            <SuccessAnimation isPlaying={true} />
          </>
        ) : (
          <>
            <ErrorAnimation isPlaying={true} />
          </>
        )}

        <p className="font-medium text-xl italic mt-10">{message}</p>

        {/* Display top similar titles if the title was rejected */}
        {topSimilarTitles.length > 0 && (
          <div className="mt-4 w-full">
            <h3 className="text-xl font-semibold mb-4">Top Similar Titles:</h3>
            <ul className="list-disc pl-6">
              {topSimilarTitles.map((title, index) => (
                <li key={index}>
                  <strong>{title["Title Name"]}</strong>
                  <br />
                  <em>Levenshtein Similarity:</em> {title["Levenshtein Similarity"]}
                  <br />
                  <em>Cosine Similarity:</em> {title["Cosine Similarity"]}
                  <br />
                  <em>Phonetic Similarity:</em> {title["Phonetic Similarity"] ? "Yes" : "No"}
                  <br />
                  <br />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Display acceptable unique titles if the title was accepted */}
        {acceptableUniqueTitles.length > 0 && (
          <div className="mt-4 w-full">
            <h3 className="text-xl font-semibold mb-4">Acceptable Unique Titles:</h3>
            <ul className="list-disc pl-6">
              {acceptableUniqueTitles.map((title, index) => (
                <li key={index}>
                  <strong>{title["Title Name"]}</strong>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button onClick={handleBackToForm} className="text-blue-400 underline mt-5">
          Back to Form
        </button>
      </div>
    </div>
  );
}

export default Feedback;
