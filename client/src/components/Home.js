import React, { Component } from 'react';
import Hero from './Hero.js'
import About from './About'
class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
      </div>
    );
  }
}

export default Home;