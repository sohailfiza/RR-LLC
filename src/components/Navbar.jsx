import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="wrapper">
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars"></i></label>
        <div className="content">
          <div className="logo"><a href="#">WebBuilders</a></div>

          <div className="search-bar">
            <button type="submit"></button><input type="text" placeholder="Search" />
          </div>

          <ul className="links">
            <li><a href="#">Categories</a></li>
            <li><a href="#">Website Builders</a></li>
            <li><a href="#">Today's deal</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
