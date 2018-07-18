import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false,
      right: 0,
    }
    this.openNav = this.navOpen.bind(this)
  }

  openNav() {
    !this.state.navOpen ? this.setState({navOpen: true}) : this.setState({navOpen: false})
    console.log(this.state.navOpen)

    if (this.state.navOpen == true) {
      // set nav ul.navbar-collapse to right: 300px
      this.setState({
        right: 300px
      })
    } else {
      //set nav ul.navbar-collapse to right: 0px
      right: 0
    }
    console.log(this.state.right)
  };

  // resetMobileNav() {
  //   navOpen ? (!this.state.linkClicked ? this.setState({linkClicked: true}) : null) : null
  // };

  render() {
    return (
      <nav className="navbar-color-on-scroll navbar-transparent" color-on-scroll="100" id="sectionsNav">
        <div className="navbar-container">
          <div className="navbar-translate">
            <Link className="navbar-brand" to="/">DE LA VIA</Link>
            <button onClick={this.openNav} className="navbar-toggler" style={{right: `${this.state.right} px` }} type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
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
