import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

const Card = ({ name, spriteUrl, onClick }) => {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <BootstrapCard className="m-2 shadow-sm" style={{ width: '10rem', cursor: 'pointer' }} onClick={onClick}>
            <BootstrapCard.Img variant="top" src={spriteUrl} alt={name} />
            <BootstrapCard.Body>
                <BootstrapCard.Text className='text-center'>{capitalizedName}</BootstrapCard.Text>
            </BootstrapCard.Body>
        </BootstrapCard>
    );
};

export default Card;
