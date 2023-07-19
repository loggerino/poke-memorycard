import React from 'react';

const Scoreboard = ({ score, bestScore }) => {
    return (
        <div className="scoreboard d-flex justify-content-around">
            <p>Score: {score}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    );
};

export default Scoreboard;
