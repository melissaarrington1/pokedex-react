import React, { Component } from 'react';
import './App.css';
import PokeList from './Components/PokeList'
import NavBar from './Components/NavBar'

class App extends Component {



  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>See Your Pokemon!</h1>


      </div>
    );
  }
}

export default App;
