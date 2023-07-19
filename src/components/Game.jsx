import React, { useState } from "react"
import CardGrid from "./CardGrid"

const Game = () => {
    const [gameStatus, setGameStatus] = useState("playing")

    const handleWin = (maxScore) => {
        if (maxScore === 10) {
            console.log("Congratulations! You won the game!")
            setGameStatus("won")
        }
    }

    const handlePlayAgain = () => {
        setGameStatus("playing")
    }

    return (
        <div className="game">
            {gameStatus === "won" ? (
                <div className="win-message">
                    <p>Congratulations! You won the game!</p>
                    <button onClick={handlePlayAgain}>Play Again</button>
                </div>
            ) : null}
            <CardGrid onWin={handleWin} />
        </div>
    )
}

export default Game