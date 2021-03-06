import React from 'react';
import heroImage from '../assets/img/splash2.png'

const Hero = () => (
  <div className="section" id="top">
  <div className="hero">
    <div className="container full">
      <div className="content">
        <div className="hero-info">
          <h1 className="tagline">Passionate about implementing creative solutions for the digital world.</h1>
          <ul className="social">
            <li>
              <a href="https://github.com/odelavia" className="special" target="_blank" rel="noopener">github</a>
            </li>
            <li>
              <a href="https://twitter.com/odelavia" className="special" target="_blank" rel="noopener">twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="splash-image">
        <img src={heroImage} alt="portrait" />
      </div>
    </div>
  </div>
</div>
);

export default Hero;