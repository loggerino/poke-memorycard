import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
    const [pokemonData, setPokemonData] = useState(null)

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
                const data = response.data;

                const randomPokemon = data.results[Math.floor(Math.random() * data.results.length)];
                const responsePokemonData = await axios.get(randomPokemon.url);
                const pokemon = responsePokemonData.data;

                setPokemonData({
                    name: pokemon.name,
                    sprite: pokemon.sprites.front_default,
                })
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        }
        fetchPokemonData()
    }, []);

    return (
        <div className="card">
            {pokemonData ? (
                <>
                    <img src={pokemonData.sprite} alt={pokemonData.name} />
                    <p>{pokemonData.name}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Card