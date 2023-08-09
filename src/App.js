import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./components/Home/Home.jsx";
// import DestinationsList from "./components/Destinations/DestinationsList.jsx";
// import Crew from "./components/Crew/Crew.jsx";
// import Technology from "./components/Technology/Technology.jsx";
import "./index.scss";
import { Loader } from "./components/Loader/Loader";
const Technology = lazy(() => import("./components/Technology/Technology.jsx"));
const Home = lazy(() => import("./components/Home/Home.jsx"));
const DestinationsList = lazy(() =>
  import("./components/Destinations/DestinationsList.jsx")
);
const Crew = lazy(() => import("./components/Crew/Crew.jsx"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/destinations" element={<DestinationsList />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
