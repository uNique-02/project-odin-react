import React, { useState } from "react";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import "./App.css";

function App() {
  const [cvData, setCvData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    experience: "",
    skills: "",
  });

  return (
    <div className="app">
      <h1>CV Generator</h1>
      <div className="cv-container">
        <CVForm cvData={cvData} setCvData={setCvData} />
        <CVPreview cvData={cvData} />
      </div>
    </div>
  );
}

export default App;
