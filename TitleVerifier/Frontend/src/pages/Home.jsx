import React from "react";
import Navbar from "../components/Navbar";
import Registrar from "../components/Registrar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Registrar />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
