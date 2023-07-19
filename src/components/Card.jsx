import React from 'react';

const Card = ({ name, spriteUrl, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={spriteUrl} alt={name} />
            <p>{name}</p>
        </div>
    );
};

export default Card;
