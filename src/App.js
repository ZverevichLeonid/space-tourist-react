import React from "react";
import Home from "./components/Home/Home.jsx";
import DestinationsList from "./components/Destinations/DestinationsList.jsx";
import Crew from "./components/Crew/Crew.jsx";
import Technology from "./components/Technology/Technology.jsx";
import "./index.scss";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/destinations" element={<DestinationsList />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
