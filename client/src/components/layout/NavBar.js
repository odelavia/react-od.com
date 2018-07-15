import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar-color-on-scroll navbar-transparent" color-on-scroll="100" id="sectionsNav">
        <div className="navbar-container">
          <div className="navbar-translate">
            <Link className="navbar-brand" to="/">DE LA VIA</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <ul className="navbar-collapse">
            <Link className="nav-item about" to="/about">About</Link>
            <Link className="nav-item" to="/skills">Skills</Link>
            <li className="dropdown nav-item">
              <Link className="nav-item dropdown-toggle" to="/projects" data-toggle="dropdown">Projects</Link>
              <div className="dropdown-menu dropdown-with-icons">
                <a href="./projects.html" className="dropdown-item">
                  Project1
                </a>
                <a href="./projects.html" className="dropdown-item">
                  Project2
                </a>
                <a href="./projects.html" className="dropdown-item">
                  Project3
                </a>
                <a href="./projects.html" className="dropdown-item">
                  Project4
                </a>
              </div>
            </li>
            {/*<Link className="nav-item blog" to="/blog">Blog</Link>*/}
            <a className="nav-item blog" href="http://www.medium.com/@oliverdelavia">blog</a>
            <Link className="nav-item contact" to="/contact">Contact</Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
