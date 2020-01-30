import React from "react";
import logo from "../public/presentation-assets/img/new_logo.png";

export default () => {
  return (
    <a
      id="logo"
      rel="noopener noreferrer"
      target="_blank"
      href="https://santoshge-reddy.github.io/Santosh/"
    >
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="brand">News</div>
      </div>
    </a>
  );
};
