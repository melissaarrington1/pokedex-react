import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
class PokeList extends Component {


    render() {
        return (
            <div className='row'>
                <h2>Helloooo Pokedex 😘</h2>
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
            </div>
        );
    }
}

export default PokeList;