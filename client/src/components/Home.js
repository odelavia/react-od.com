import React, { Component } from 'react';
import Hero from './Hero.js'
import AboutContainer from './about/AboutContainer'
class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <AboutContainer />
      </div>
    );
  }
}

export default Home;