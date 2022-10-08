import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h5>Friend</h5>
            <p>Ring: {house}</p>
            <button onClick={() => setHouse(house-1)}>Decrease</button>
        </div>
    );
};

export default Friend;