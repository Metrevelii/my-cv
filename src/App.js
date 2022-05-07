import React from 'react';
import Header from "./compoents/Header";
import Contact from "./compoents/Contact";
import CvContent from "./compoents/CvContent";
import './App.css';



function App() {
  return (
    <div className="container">
      <Header />
      <Contact />
      <CvContent />
    </div>
  );
}

export default App;
