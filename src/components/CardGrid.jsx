import React, { useState, useEffect } from 'react';
import Card from './Card';
import Scoreboard from './Scoreboard';
import axios from 'axios';

const CardGrid = ({ onWin }) => {
    const [pokemonData, setPokemonData] = useState([])
    const [clickedCards, setClickedCards] = useState([])
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const totalCards = 10

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
                        id: detailedPokemonData.id,
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

    const shuffleCards = () => {
        setPokemonData((prevPokemonData) => {
            const shuffledData = [...prevPokemonData];
            for (let i = shuffledData.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
            }
            return shuffledData;
        });
    }

    const handleCardClick = (id) => {
        console.log('Card clicked:', id)
        if (clickedCards.includes(id)) {
            setClickedCards([]);
            if (score > bestScore) {
                setBestScore(score)
            }
            setScore(0);
        } else {
            setClickedCards([...clickedCards, id]);
            setScore((prevScore) => prevScore + 1)
            if (score + 1 === totalCards) {
                onWin(score + 1)
            }
        }
    };

    return (
        <div className="card-grid">
            <Scoreboard score={score} bestScore={bestScore} />
            {pokemonData.map((pokemon) => (
                <Card key={pokemon.id} name={pokemon.name} spriteUrl={pokemon.spriteUrl} onClick={() => handleCardClick(pokemon.id)} />
            ))}
        </div>
    )
}

export default CardGrid;
