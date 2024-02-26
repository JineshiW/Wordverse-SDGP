import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const handleLogout = () => {
    // Add your logout logic here
  };

  return (
    <header>
      <div className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="navbar-item">
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
      <div className="profile-icon" style={{ backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvdvN3A0JdILWy4nSD4OyVfmR8Go4MiGwCw&usqp=CAU"})` }}>
        <i className="fas fa-user"></i>
      </div>
    </header>
  );
};

export default Navbar;