import React, { Component } from 'react';
import './App.css';
import PokeList from './Components/PokeList'
import NavBar from './Components/NavBar'
import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {



  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>See Your Pokemon!</h1>
        <div className="container">
          <Dashboard />
        </div>

      </div>
    );
  }
}

export default App;
