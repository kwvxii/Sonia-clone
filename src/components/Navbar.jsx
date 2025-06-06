import React, { useRef, useEffect, useState } from "react";

function Navbar({ activeSection, setActiveSection, menuOpen}) {
  const navRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({});

  const tabs = ["why", "hiring", "sonia", "research", "partnerships"];

  useEffect(() => {
    const activeBtn = navRef.current.querySelector(
      `.nav-item[data-tab="${activeSection}"]`
    );

    if (activeBtn) {
      setSliderStyle({
        width: `${activeBtn.offsetWidth}px`,
        left: `${activeBtn.offsetLeft}px`,
      });
    }
  }, [activeSection]);

  return (
    <nav className="navbar">
      <div className={`nav-container ${menuOpen ? "show" : ""}`} ref={navRef}>
        {tabs.map((tab) => (
          <button
            key={tab}
            data-tab={tab}
            className={`nav-item${activeSection === tab ? " selected" : ""}`}
            onClick={() => setActiveSection(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
        <div className="slider" style={sliderStyle}></div>
      </div>
    </nav>
  );
}

export default Navbar;
