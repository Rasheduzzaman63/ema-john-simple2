import React from 'react';

const Cart = (props) => {
    const {cart} = props
    return (
        <div>
            <p>Select Items: {cart.length}</p>
        </div>
    );
};

export default Cart;