import { useState } from "react";
import Home from "./pages/HOme";
import Login from "./pages/login";
import PressSewa from "./pages/PressSewa";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/press-sewa" element={<PressSewa />}  />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
