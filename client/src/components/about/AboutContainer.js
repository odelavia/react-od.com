import React, { Component } from 'react';
import IndexTab from './IndexTab';
import App from './App';
import About from './About';
import Proficiency from './Proficiency';
import Interests from './Interests';
import ReadMe from './ReadMe';

class AboutContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileOne: false,
      fileTwo: false,
      fileThree: true,
      fileFour: false,
      fileFive: false,
      fileSix: false,
    }
    this.onFileSelection = this.onFileSelection.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onFileSelection);
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.onFileSelection);
  }

  onFileSelection() {
    if (event.target.id == 'fileOne') {
      this.setState({
        fileOne: true,
        fileTwo: false,
        fileThree: false,
        fileFour: false,
        fileFive: false,
        fileSix: false,
      })
    } else if (event.target.id == 'fileTwo') {
        this.setState({
          fileOne: false,
          fileTwo: true,
          fileThree: false,
          fileFour: false,
          fileFive: false,
          fileSix: false,
        })
    } else if (event.target.id == 'fileThree') {
        this.setState({
          fileOne: false,
          fileTwo: false,
          fileThree: true,
          fileFour: false,
          fileFive: false,
          fileSix: false,
        })
    } else if (event.target.id == 'fileFour') {
        this.setState({
          fileOne: false,
          fileTwo: false,
          fileThree: false,
          fileFour: true,
          fileFive: false,
          fileSix: false,
        })
    }else if (event.target.id == 'fileFive') {
        this.setState({
          fileOne: false,
          fileTwo: false,
          fileThree: false,
          fileFour: false,
          fileFive: true,
          fileSix: false,
        })
    }else if (event.target.id == 'fileSix') {
        this.setState({
          fileOne: false,
          fileTwo: false,
          fileThree: false,
          fileFour: false,
          fileFive: false,
          fileSix: true,
        })
    }
  }

  render() {
    return (
      <section className="about-wrapper">
        <div className="about-btns-wrapper">
          <div className="about-btns-container">
            <button className="close-btn" onClick={this.onFileSelection}></button>
            <button className="max-btn" onClick={this.onFileSelection}></button>
            <button className="min-btn" onClick={this.onFileSelection}></button>
          </div>
        </div>

        <div className="filetab-wrapper">
          <div id="fileOne" className={this.state.fileOne ? 'filetab active' : 'filetab'}>
            index.js
          </div>
          <div id="fileTwo" className={this.state.fileTwo ? 'filetab active' : 'filetab'}>
            App.js
          </div>
          <div id="fileThree" className={this.state.fileThree ? 'filetab active' : 'filetab'}>
            About.js
          </div>
          <div id="fileFour" className={this.state.fileFour ? 'filetab active' : 'filetab'}>
            Proficiency.js
          </div>
          <div id="fileFive" className={this.state.fileFive ? 'filetab active' : 'filetab'}>
            Interests.js
          </div>
          <div id="fileSix" className={this.state.fileSix ? 'filetab active' : 'filetab'}>
            README.md
          </div>
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
          {this.state.fileOne ? <IndexTab /> : null}
          {this.state.fileTwo ? <App /> : null}
          {this.state.fileThree ? <About /> : null}
          {this.state.fileFour ? <Proficiency /> : null}
          {this.state.fileFive ? <Interests /> : null}
          {this.state.fileSix ? <ReadMe /> : null}
        </div>
      </section>
    );
  }
};

export default AboutContainer;