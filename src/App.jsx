import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ClockPage from "./pages/ClockPage";
import StopwatchPage from "./pages/StopwatchPage";
import HomePage from "./pages/HomePage";
import FirebasePage from "./pages/FirebasePage";
import FirebaseEditPage from "./pages/FirebaseEditPage";
import { Layout } from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/stopwatch" element={<StopwatchPage />} />
          <Route path="/clock" element={<ClockPage />} />
          <Route path="/firebase" element={<FirebasePage />} />
          <Route
            path="/firebase/edit/:firebaseid"
            element={<FirebaseEditPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
