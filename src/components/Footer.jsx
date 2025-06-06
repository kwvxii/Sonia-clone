import React from "react";
import footerImg from "../assets/logosoniabora.svg";

function Footer() {
  return (
    <footer className="footer">
      <img src={footerImg} alt="Sonia Logo" className="footer-logo" />
      <p className="footer-text">Front-end sprint / Emeka. / 180B / 2025</p>
    </footer>
  );
}

export default Footer;
