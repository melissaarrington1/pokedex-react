import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios'

class PokeList extends Component {

    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/',
        pokemon: null
    }

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        //this.setState re-renders the page
        this.setState({ pokemon: res.data['results'] })
    }

    render() {
        return (
            <React.Fragment>
                {/* the ternarary statement below checks to see if pokemon results loaded.. */}
                {this.state.pokemon ? (<div className='row'>
                    <h2>Helloooo Pokedex 😘</h2>
                    {this.state.pokemon.map(pokemon => (
                        <PokemonCard
                            key={pokemon.name}
                            name={pokemon.name}
                            url={pokemon.url} />
                    ))}
                </div>
                ) : (
                        <h1>Loading Pokemon...</h1>
                    )}


            </React.Fragment>
        );
    }
}

export default PokeList;