import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({house}) => {
    return (
        <div>
            <h3>Aunty</h3>
            <p>HOuse: {house}</p>
            <section className='flex'>
                <Cousin  house={house}></Cousin>
                <Cousin  house={house}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;