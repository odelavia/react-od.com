import React, { Component } from 'react';
import Hero from './Hero.js'
import AboutContainer from './about/AboutContainer'
import Contact from './contact/Contact'
class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <AboutContainer />
        <Contact />
      </div>
    );
  }
}

export default Home;