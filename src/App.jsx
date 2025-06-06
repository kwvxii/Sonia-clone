import React, { useState } from "react";
import SplashScreen from "./components/Splashscreen";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Why from "./components/Why";
import Hiring from "./components/Hiring";
import Research from "./components/Research";
import Partnerships from "./components/Partnerships";
import "./index.css";
import loadingImg from "../assets/logosoniabora.svg";

function App() {
  const [activeSection, setActiveSection] = useState("sonia");
  const [transitioning, setTransitioning] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSectionChange = (section) => {
    setTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setTransitioning(false);
      setMenuOpen(false); // close menu on select
    }, 300);
  };

  return (
    <main className={`animated ${menuOpen ? "menu-open" : ""}`}>
      <img src={loadingImg} alt="Sonia Logo" className="logo hidden" />

      <div className="content visible">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <Navbar
          activeSection={activeSection}
          setActiveSection={handleSectionChange}
          menuOpen={menuOpen}
        />

        <div className={`content-area-wrapper ${transitioning ? "fade-out" : "fade-in"}`}>
          {activeSection === "why" && <Why />}
          {activeSection === "hiring" && <Hiring />}
          {activeSection === "sonia" && <Content />}
          {activeSection === "research" && <Research />}
          {activeSection === "partnerships" && <Partnerships />}
        </div>
      </div>

      <div className="footer-wrapper visible">
        <Footer />
      </div>
    </main>
  );
}

export default App;
