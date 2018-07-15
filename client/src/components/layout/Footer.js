import React from 'react';

const Footer = () => (
  <footer className="footer ">
    <div className="container">
      <nav className="pull-left">
        <ul>
          <li>
            <a href="https://www.oliverdelaviadev.com">
              De La Via Studio
            </a>
          </li>
          <li>
            <a href="#">
              More About Me
            </a>
          </li>
          <li>
            <a href="https://medium.com/@oliverdelavia">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className="copyright pull-right">
        &copy;
        2018, made with  <i className="material-icons">favorite</i>   by
        <a href="https://www.oliverdelaviadev.com" target="_blank"> De La Via Studio</a>
        for a better web.
      </div>
    </div>
  </footer>

);

export default Footer;