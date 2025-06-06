import React from "react";

function Content() {
  return (
    <div className="content-area">
      <h2 className="section-heading">Sonia</h2>
      <div className="content-wrapper">
        <div className="content-text">
          Sonia is a conversational AI for emotional support that offers 20 minute voice based wellbeing sessions.
          Download the free research preview to try it out.
        </div>
        <a
          href="https://apps.apple.com/us/app/sonia-ai-mental-health/id6472111765"
          target="_blank"
          rel="noopener noreferrer"
          className="action-button"
        >
          Download Sonia
        </a>
      </div>
    </div>
  );
}

export default Content;
