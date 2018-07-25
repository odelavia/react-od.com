import React, { Component } from 'react';
import Hero from './Hero.js';
import AboutContainer from './about/AboutContainer';
import Projects from './projects/Projects';
import Blog from './Blog';
import Contact from './contact/Contact';
class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <AboutContainer />
        <Projects />
        <Blog />
        <Contact />
      </div>
    );
  }
}

export default Home;