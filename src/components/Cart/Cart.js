import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {

    let message;
    if(cart.length === 0){
        message = <p>Please Buy At Least One Item !!!</p>
    }
    else if(cart.length === 1){
        message = <div>
            <h6>Amar Jonno Akta Naw</h6>
            <p>2 tar besi nile akta free</p>
            <p><small>Buy More</small></p>
        </div>
    }
    else{
        message = <p>Thanks For Buying !!!!</p>
    }


    return (
        <div style={{position:'sticky', top: 0}}>
            <h2 className={cart.length === 2 ? 'orange' : 'red'}>Order Summary</h2>
            <h5 className={`bold ${cart.length === 2 ? 'blue' : 'purple'}`}>Order Quantity: {cart.length} </h5>
            
            {
                cart.map(tshirt => 
                <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {message}
            {cart.length === 3 ? <p> 3 jon k gift diba </p> : <p>Enjoy !!!!</p>}
            <p>And Operator</p>
            {cart.length === 2 && <h2>Dubble Items</h2>}
            <p>Or Operator</p>
            {cart.length === 4 || <h5>Charta Item Na</h5>}
            
        </div>
    );
};

export default Cart;