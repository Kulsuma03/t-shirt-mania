import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({house}) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Uncle</h3>
            <p>House: {house}</p>
            <h6>Money:{money}</h6>
        </div>
    );
};

export default Uncle;