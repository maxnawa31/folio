import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage'
class App extends Component {
  render() {
    return (
      <div>
      <HomePage/>
      <AboutPage/>
      </div>
    );
  }
}

export default App;
