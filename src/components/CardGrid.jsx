import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

const CardGrid = () => {
    const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10')
                const data = response.data

                const pokemonDataList = []

                for (const pokemon of data.results) {
                    const responsePokemonData = await axios.get(pokemon.url)
                    const detailedPokemonData = responsePokemonData.data
                    pokemonDataList.push({
                        name: detailedPokemonData.name,
                        spriteUrl: detailedPokemonData.sprites.front_default,
                    })
                }

                setPokemonData(pokemonDataList)
            } catch (error) {
                console.error('Error fetching Pokemon data:', error)
            }
        };

        fetchPokemonData();
    }, [])

    const handleCardClick = (index) => {

    };

    return (
        <div className="card-grid">
            {pokemonData.map((pokemon, index) => (
                <Card key={index} name={pokemon.name} spriteUrl={pokemon.spriteUrl} onClick={() => handleCardClick(index)} />
            ))}
        </div>
    )
}

export default CardGrid;
