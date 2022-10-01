import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    

    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(() =>{
        const storeCart = getStoreCart;
        const saveCart = [];
        for(const id in storeCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
               
                
            }       
    } 
    setCart(saveCart);  
}
    ,[products])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product ={product}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="product-summary">
                <Cart cart={cart}>
                    
                </Cart>
                
            </div>
        </div>
    );
};

export default Shop;