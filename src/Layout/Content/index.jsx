import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "../../Pages/AboutMe";
import Contact from "../../Pages/Contact";
import Portfolio from "../../Pages/Portfolio";
import Resume from "../../Pages/Resume";

function Content() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default Content;
