import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./containers/Main";
import Resume from "./components/resume/Resume"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;