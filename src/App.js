import React, { Component } from 'react';
import './App.css';
import PokeFetch from './Components/PokeFetch/PokeFetch';
//import PokeTimer from './Components/PokeTimer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <PokeFetch></PokeFetch>
      </div>
    );
  }
}

export default App;
