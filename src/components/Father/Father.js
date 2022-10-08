import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister'

const Father = ({house}) => {
    return (
        <div>
            <h3>Father</h3>
            <p>House: {house}</p>
            <section className='flex'>
                <Myself  house={house}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Father;