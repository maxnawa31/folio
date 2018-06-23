import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage'
class App extends Component {
  render() {
    return (
      <div>
      <HomePage/>
      <AboutPage/>
      <ProjectPage/>
      </div>
    );
  }
}

export default App;
