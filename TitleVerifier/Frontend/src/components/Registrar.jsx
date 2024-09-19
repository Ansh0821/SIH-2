import React from "react";
import banner from "../assets/banner.png";
import arrow from "../assets/rightarrow.svg";
import { useNavigate } from "react-router-dom";

function Registrar() {
    const navigate = useNavigate();

  return (
    <>
      <header
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "18vh",
        }}
        className="text-white px-24 pt-8"
      >
        <h1 className="text-3xl font-medium ">Registration of Periodicals</h1>
        <p className="flex text-sm mt-2 ">
          Home <img src={arrow} alt="" className="h-3 mt-[0.35rem]" /> Our
          Services <img src={arrow} alt="" className="h-3 mt-[0.35rem]" />{" "}
          Registration of Periodicals
        </p>
      </header>
      <section
        style={{
          backgroundImage: `url(https://prgi.gov.in/themes/custom/rni/img/before-design-up.svg)`,
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left top",
          height: "87vh",
          backdropFilter: "revert",
        }}
        className="p-16 mb-14"
      >
        <h1 className="flex flex-col text-xl font-semibold text-gray-700 pl-5 mb-4">
          Registration of Periodicals
        </h1>
        <p className="pl-5 pr-20 mb-3">
          The streamlined process of registering newspapers in India under the
          PRP Act 2023 has been designed for simplicity and efficiency. To
          initiate the registration, individuals seeking to publish are required
          to submit an online application through the Press Sewa Portal.
          Beginning with the creation of an account on the portal, individuals
          assume the role of owner. Within this account, the owner is prompted
          to select a title, location, and language of publication, all while
          adhering to the provided title guidelines.
        </p>
        <p className="pl-5 pr-20 mb-3">
          Following this, the owner appoints a publisher for the publication
          through the online Press Sewa Portal. Once appointed, the owner may
          instruct the publisher to complete the main registration form. The
          publisher, using their own account, fills out the form and designates
          the printing press. It is imperative that the selected press already
          holds an account on the Press Sewa Portal; otherwise, the keeper
          (owner/manager) of the press should create an account promptly.
        </p>
        <p className="pl-5 pr-20 mb-3">
          Upon the payment of a ₹1000 fee in the Press Sewa Portal, the
          application is officially submitted, and a unique Applicant Reference
          Number (ARN) is assigned. It is noteworthy that the publisher is
          granted a three-day window to make corrections to the submitted
          application; however, no corrections can be made after this period.
          Once the 3-day window concludes, the application proceeds to the PRG
          office and SA office for further processing.
        </p>
        <p className="pl-5 pr-20 mb-3">
          In the event of any deficiencies in the application, the Office of the
          Press Registrar issues a letter through the Press Sewa Portal
          detailing these deficiencies within a stipulated period. The State
          Authority may also contact the publisher through their chosen online
          or offline medium. Upon verification that the options chosen by the
          publisher align with guidelines and are not similar or identical to
          any other title in the PRG database, and if no other deficiencies are
          identified, the Press Registrar General issues a registration
          certificate after receiving comments from the Specified Authority.
        </p>
        <p className="pl-5 pr-20 mb-3">
          For any complications arising in the issuance of the registration
          certificate, the office of the Press Registrar allows the publisher a
          10-day window to file a reply. Publishers can conveniently submit
          their responses through the Press Sewa portal within this timeframe.
        </p>
        <p className="pl-5 pr-20 mb-3">
          It is crucial to emphasize that the registration process remains
          incomplete until comments are received from the specified authority.
          To ensure a smooth application process, Publishers and Owners are
          advised to thoroughly review all guidelines on the PRG website or
          watch the comprehensive instructional video released by PRG. For any
          further assistance, publishers can readily contact the PRG office.
        </p>
        <p className="pl-5 pr-20 mb-3">Thank You</p>
        <p className="pl-5 pr-20 mb-3">
          For Press Sewa Portal{" "}
          <button className="py-1 px-5 bg-[#0f71cd] text-white rounded-lg ml-2" onClick={() => navigate("login")}>
            Click Here
          </button>
        </p>
      </section>
    </>
  );
}

export default Registrar;
