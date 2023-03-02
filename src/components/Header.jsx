import React from "react";

import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar">
        <div class="navbar-container">
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>

          <ul class="menu-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <a href="/videos">Videos</a>
            </li>
            <li>
              <a href="/article">Article</a>
            </li>
          </ul>
          {/* <div className='center-logo'>
          <Link to="/" style={{textDecoration:'none'}} ><h1 class="logo">MyBlogs</h1></Link>
          </div> */}
        </div>
      </nav>

      {/* <nav>
          <Link to="#" className='filter'><i class="fa-solid fa-filter"></i></Link>
          <Link to="/login" className='item'>Blogs</Link>
          <Link to="/register" className='item'>Videos</Link>
          <Link to="/register" className='item'>Articles</Link>
        </nav> */}
    </>
  );
}

export default Header;
