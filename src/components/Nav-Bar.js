import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navlink">
        Home
      </Link>
      <Link to="/animals" className="navlink">
        Animals
      </Link>
    </nav>
  );
};

export default Navbar;
