import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
    const {picture, name, price} = tshirt
    return (
        <div className='t-shirt-card'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <h4>Price: {price}</h4>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;