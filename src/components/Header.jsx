import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="pic2"></div> {/* Background for pic2 */}
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <div className="nav-options">
          <span>Help</span>
          <span>Deutsch</span>
          <span>EUR</span>
          <span className="icon">
            <i className="fas fa-user-circle"></i>
          </span>
          <span className="menu-icon">
            <i className="fas fa-bars"></i>
          </span>
        </div>
      </nav>
      <div className="header-content text-center">
        <h1>Hello, how can we help you?</h1>
        <p>Find Travel guide, FAQ, chat</p>
      </div>
    </header>
  );
};

export default Header;

