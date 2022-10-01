import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={ () => handleAddToCart(product)} className='addTo-cart-btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon className='shopping-icon' icon={faShoppingCart}  ></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;