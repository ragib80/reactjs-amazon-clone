import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    //const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;


    }
    return (
        <div>
            <h4 className="text-danger">Order Summary</h4>
            <p>Iteams Ordered: {cart.length} </p>
            {/*<p>total price: {totalPrice}</p>*/}
            <p>total price: {total}</p>
            <br />
            {
                props.children
            }


        </div>
    );
};

export default Cart;