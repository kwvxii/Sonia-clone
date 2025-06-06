import React from "react";
import hiringImg from "../assets/Yc.jpeg";

function Hiring() {
  return (
    <div className="content-area">
    <h2 className="section-heading">Hiring</h2>
      <div className="content-wrapper">
        <div className="content-text">
          We’re hiring engineers and psychologists. We recently raised $3.5m from Y Combinator, the founders of Reddit, Instacart, Verkada and many others. We care about intelligence, hard work and kindness. Email jobs@soniahealth.com if you want to join us in Brooklyn, NY, to make people happier at scale.
        </div>
        <div className="hiring-image">
          <img
            src={hiringImg}
            alt="Sonia Hiring Illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default Hiring;
