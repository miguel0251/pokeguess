import React, { Component } from 'react';
import './PokeFetch.css';
import Timer from './Timer';

class PokeFetch extends Component {
  constructor() {
    super();
    this.state = {
      pokeInfo: '',
      pokeSprite: '',
      pokeName: '',
    };
  }

  fetchPokemon() {
    let min = Math.ceil(1);
    let max = Math.floor(152);
    let pokeNum = Math.floor(Math.random() * (max - min) + min);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          pokeInfo: res,
          pokeSprite: res.sprites.front_default,
          pokeName: res.species.name,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className={'wrapper'}>
        <button className={'start'} onClick={() => this.fetchPokemon()}>
          <Timer></Timer>
        </button>
        <h1 className={'timer'}></h1>
        <div className={'pokeWrap'}>
          <img className={'pokeImg'} src={this.state.pokeSprite} alt='' />
          <h1 className={'pokeName'}>{this.state.pokeName}</h1>
        </div>
      </div>
    );
  }
}

export default PokeFetch;
