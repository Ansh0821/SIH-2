import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import "./Form.css";

function Form() {
  const [ownershipSelect, setOwnershipSelect] = useState("");
  const [govtSelect, setGovtSelect] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const response = await axios.post(
        "https://5854-2401-4900-1cc4-9a95-17-fb65-e4ae-442e.ngrok-free.app/check-title",
        {
          title: title,
        }
      );
      
      if(response.status === 200){
        navigate("/feedback", {state:{success:true, message:response.data.message || "Submission was Successful!"}})
      } else{
        navigate("/feedback", {state:{success: false, message:response.data.message || "There was an issue with the submission."}})
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Submission failed due to an error."
      navigate("/feedback", {state:{success:false, message:errorMessage}})
    }finally{
      setLoading(false)
    }
  };

  const handleOwnership = (value) => {
    setOwnershipSelect(value);
  };

  const handleGovtOrg = (value) => {
    setGovtSelect(value);
  };

  return (
    <form
      className="bg-white min-h-[87vh] rounded-lg px-10 py-5 flex flex-col"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-grow space-x-8">
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col space-y-2">
            <label htmlFor="ownership-category" className="font-medium">
              Ownership Category{" "}
              <span className="text-red-500 font-bold">*</span>
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="ownership-category"
                  value="individual"
                  checked={ownershipSelect === "individual"}
                  onChange={() => handleOwnership("individual")}
                  className="form-checkbox custom-checkbox"
                />
                <span className="ml-2">Individual</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="ownership-category"
                  value="non-individual"
                  checked={ownershipSelect === "non-individual"}
                  onChange={() => handleOwnership("non-individual")}
                  className="form-checkbox custom-checkbox"
                />
                <span className="ml-2">Non Individual</span>
              </label>
            </div>
          </div>

          <div className="mt-10"></div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="government-organisation" className="font-medium">
              Whether a Government Organisation{" "}
              <span className="text-red-500 font-bold">*</span>
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="government-organisation"
                  value="yes"
                  checked={govtSelect === "yes"}
                  onChange={() => handleGovtOrg("yes")}
                  className="form-checkbox custom-checkbox"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="government-organisation"
                  value="no"
                  checked={govtSelect === "no"}
                  onChange={() => handleGovtOrg("no")}
                  className="form-checkbox custom-checkbox"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <div className="mt-10"></div>

          <label htmlFor="owner" className="font-medium flex flex-col">
            <span>
              Owner Name <span className="text-red-500 font-bold">*</span>
            </span>
            <input
              type="text"
              name="owner"
              id="owner"
              className="h-10 px-3 shadow-sm focus:border-b-blue-500 text-sm outline-none border-b-2 border-b-gray-500"
              placeholder=""
              required
            />
          </label>
        </div>

        <div className="flex flex-col w-1/2">
          <div className="mb-6">
            {" "}
            {/* Margin at the bottom to separate from next element */}
            <label htmlFor="title-category" className="font-medium">
              Category of Title{" "}
              <span className="text-red-500 font-bold">*</span>
            </label>
            <select
              name="title-category"
              id="title-category"
              className="block w-full p-2 border-b-gray-600 border-b-[0.05rem] outline-none"
            >
              <option value="" disabled selected>
                -- Please select a category --
              </option>
              <option value="Newspaper">Newspaper</option>
              <option value="Other Periodicals">Other Periodicals</option>
            </select>
          </div>

          <div className="mb-6">
            {" "}
            {/* Margin at the bottom to separate from next element */}
            <label htmlFor="nationality" className="font-medium">
              Nationality <span className="text-red-500 font-bold">*</span>
            </label>
            <select
              name="nationality"
              id="nationality"
              className="block w-full p-2 border-b-gray-600 border-b-[0.05rem] outline-none"
            >
              <option value="Haitian">Haitian</option>
              <option value="Herzegovinian">Herzegovinian</option>
              <option value="Honduran">Honduran</option>
              <option value="Hungarian">Hungarian</option>
              <option value="Icelander">Icelander</option>
              <option value="I-Kiribati">I-Kiribati</option>
              <option value="Indian" selected>
                Indian
              </option>
              <option value="Indonesian">Indonesian</option>
              <option value="Iranian">Iranian</option>
              <option value="Irish">Irish</option>
            </select>
          </div>

          <div className="mt-4">
            {" "}
            {/* Margin at the bottom to separate from next element */}
            <label htmlFor="owner-pan" className="font-medium flex flex-col">
              <span>
                Owner's PAN No.{" "}
                <span className="text-red-500 font-bold">*</span>
              </span>
              <input
                type="text"
                name="owner-pan"
                id="owner-pan"
                className="h-10 px-3 shadow-sm focus:border-blue-500 text-sm outline-none border-b-2 border-b-gray-500"
                placeholder=""
                required
              />
            </label>
          </div>
        </div>
      </div>

      <div className="mb-40">
        {" "}
        {/* Margin to push this section further down */}
        <label
          htmlFor="title"
          className="font-medium text-center flex flex-col text-xl"
        >
          <span>
            Enter your title <span className="text-red-500 font-bold ">*</span>
          </span>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full px-3 py-2 mt-1  border-gray-800 shadow-2xl  focus:border-b-blue-500 outline-none border-b-2 text-base italic"
            required
          />
        </label>
      </div>
      <div className="flex justify-end">
        <button className="bg-[#064F94] text-white px-5 py-2 w-[12rem] rounded-2xl flex justify-center hover:bg-[#338cde] " disabled={loading}>
          {loading ? "Submitting..." : "Submit for Review"}
        </button>
      </div>
      {/* {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>} */}
    </form>
  );
}

export default Form;
