import React from "react";

// Navigation bar component
function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="not-last">
        Home
      </a>
      <a href="#" className="not-last">
        About Me
      </a>
      <a href="#">Contact Me</a>
      <a href="#" className="login-link">
        Login
      </a>
    </nav>
  );
}

export default Navbar;