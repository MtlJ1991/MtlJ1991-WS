import React, { Component } from 'react';
import './css/App.css';
import './css/Kata.css';

import Particles from 'react-particles-js'
import pParams from './particles/particles'
import HomePage from './components/HomePage';

import { BrowserRouter, Route } from "react-router-dom";


class App extends Component {




  render() {

    return (

<BrowserRouter>
        <section className="App">
        <Route exact path="/" component={HomePage} />
        </section>
</BrowserRouter>


     
    );
  }
}

export default App;
