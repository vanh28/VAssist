import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Newspaper from './Newspaper';

function Navbar() {
    return (
      <nav className="navbar">
        <ul className="navbar__links">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">Trang chủ</Link>
          </li>
          <li className="navbar__item">
            <Link to="/Login" className="navbar__link">Báo nói</Link>
          </li>
          <li className="navbar__item">
            <Link to="/Protected" className="navbar__link">Video Call</Link>
          </li>
        </ul>
      </nav>
    );
}
  

export default Navbar;