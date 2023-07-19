import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

const Card = ({ name, spriteUrl, onClick }) => {
    return (
        <BootstrapCard style={{ width: '10rem' }} onClick={onClick}>
            <BootstrapCard.Img variant="top" src={spriteUrl} alt={name} />
            <BootstrapCard.Body>
                <BootstrapCard.Text>{name}</BootstrapCard.Text>
            </BootstrapCard.Body>
        </BootstrapCard>
    );
};

export default Card;
