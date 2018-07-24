import React from 'react';

const About = () => (
  <section className="about-wrapper">
    <div className="about-btns-wrapper">
      <div className="about-btns-container">
        <button className="close-btn"></button>
        <button className="max-btn"></button>
        <button className="min-btn"></button>
      </div>
    </div>
    <div className="filetab-wrapper">
      <div className="filetab active">About.js</div>
      <div className="filetab">fileTwo.js</div>
      <div className="filetab">fileThree.js</div>
    </div>
    <div className="body-wrapper">
      <div className="line-num-container">
        <span className="line-num typed">1</span>
        <span className="line-num">2</span>
        <span className="line-num typed">3</span>
        <span className="line-num">4</span>
        <span className="line-num typed">5</span>
        <span className="line-num">6</span>
        <span className="line-num typed">7</span>
        <span className="line-num">8</span>
        <span className="line-num typed">9</span>
        <span className="line-num">10</span>
        <span className="line-num typed">11</span>
        <span className="line-num">12</span>
        <span className="line-num typed">13</span>
        <span className="line-num">14</span>
        <span className="line-num typed">15</span>
        <span className="line-num">16</span>
        <span className="line-num typed">17</span>
        <span className="line-num">18</span>
        <span className="line-num typed">19</span>
        <span className="line-num">20</span>
      </div>
      <div className="body-text-container">
        <code className="line-1-text">
          <span className="html-keyword">import</span>
          React
          <span className="html-keyword pad-space">from</span>
          <span className="html-path">'react'</span>;</code>
        <code className="line-2-text">
          <span className="html-keyword">import</span>
          ReactDOM
          <span className="html-keyword pad-space">from</span>
          <span className="html-path">'react-dom'</span>
          ;
        </code>
        <code className="line-3-text commented-out">// ABOUT</code>
        <code className="line-4-text"><span className="html-object">ReactDOM</span><span className="html-method">.render</span>(</code>
        <div className="line-5-text html-tag">&lt;<span className="html-element">article</span>&gt;</div>
          <div className="pad1 line-6-text html-tag">&lt;<span className="html-element">p</span>&gt;</div>
            <code className="pad2 line-7-text">Hi, I'm Oliver!</code>
          <div className="line-8-text html-tag pad1">&lt;/<span className="html-element">p</span>&gt;</div>
          <div className="line-9-text html-tag pad1">&lt;<span className="html-element">p</span>&gt;</div>
            <code className="pad2 line-10-text">
              I'm passionate about designing solutions and solving problems. 
              <br/> Coming from a strong visual arts background has allowed me to leverage my attention to detail and design.
              <br/> Whether it be figuring out how to make your user interface more intuitive, writing a crucial logic for your server logic or planning out a long-period savatical on a budget, I love creating solutions for you.
            </code>
          <div className="line-11-text html-tag pad1">&lt;/<span className="html-element">p</span>&gt;</div>
        <div className="line-12-text html-tag">&lt;/<span className="html-element">article</span>&gt;</div>
        <code className="line-13-text"><span className="html-object">document</span><span className="html-method">.getElementById</span>(<span className="html-path">'root'</span>),</code>
        <code className="line-14-text">);</code>

      </div>
    </div>
  </section>
);

export default About;