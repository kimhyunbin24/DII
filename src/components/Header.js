// src/components/Header.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // 스타일 파일 추가

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/page1" className="nav-link">
              Page 1
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/qa" className="nav-link">
              Q&A
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
