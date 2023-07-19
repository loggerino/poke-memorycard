import React, { useState } from "react"
import CardGrid from "./CardGrid"

const Game = () => {
    const [gameStatus, setGameStatus] = useState("playing")
    const [isClickable, setIsClickable] = useState(true)

    const handleWin = (maxScore) => {
        if (maxScore === 10) {
            console.log("Congratulations! You won the game!")
            setGameStatus("won")
            setIsClickable(false)
        }
    }

    const handlePlayAgain = () => {
        setGameStatus("playing")
        setIsClickable(true)
    }

    return (
        <div className="game">
            {gameStatus === "won" ? (
                <div className="win-message">
                    <p>Congratulations! You won the game!</p>
                    <button onClick={handlePlayAgain}>Play Again</button>
                </div>
            ) : null}
            <CardGrid onWin={handleWin} isClickable={isClickable} />
        </div>
    )
}

export default Game