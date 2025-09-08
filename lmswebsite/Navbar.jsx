import React, { useEffect, useRef, useState } from 'react';



const Navbar = () => {
  return (
{/* Navigation Bar */}
      <nav className="navbar22">
        {/* Logo */}
        <div className="logo-section22">
          <div className="logo-icon22">
            📖
          </div>
          <span className="logo-text22">Learnify</span>
        </div>

        {/* Center Navigation */}
        <div className="nav-center22">
        <Link to="/" className="nav-button22" style={{ textDecoration: "none" }} >Home</Link>
        <Link to="/AllCourses" className="nav-button22 active" style={{ textDecoration: "none" }} >Courses</Link>
        </div>

        {/* Right Side Buttons */}
        <div className="auth-buttons22">
        <Link to="/Login" className="login-btn22" style={{ textDecoration: "none" }} >Login</Link>
        <Link to="/SignUp" className="signup-btn22" style={{ textDecoration: "none" }} >Sign Up</Link>
        </div>
      </nav>
)
}
