import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <header className="navbar">
    <div className="container">
      <div className="row">
        <div className="logo">
          <Link to="/">yinka.</Link>
        </div>
        <nav className="primary">
          <ul className="nav">
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <Link to="/projects">projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
