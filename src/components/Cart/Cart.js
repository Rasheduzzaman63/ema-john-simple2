import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    let total = 0;
    let shipping = 0;
   
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
        
    }
    const tax = total * 0.1;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
             <h3>Order Summary</h3>
            <p>Select Items: {cart.length}</p>
            <p>Total Price: $ {total}</p>
            <p>Total Shipping: $ {shipping}</p>
            <p>Tax: {parseFloat(tax.toFixed(2))}</p>
            <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;