import React from "react";
import { NavLink } from "react-router-dom";

// Navigation bar component
function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="not-last">
        Home
      </NavLink>
      <NavLink to="/aboutMe" className="not-last">
        About Me
      </NavLink>
      <NavLink to="/newPost" className="not-last">
        New Post
      </NavLink>
      <NavLink to="/postsPage">Posts</NavLink>
      <a href="#" className="login-link">
        Login
      </a>
    </nav>
  );
}

export default Navbar;
