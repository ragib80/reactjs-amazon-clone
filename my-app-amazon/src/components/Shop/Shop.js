import React, { useEffect } from 'react';
import fakeDta from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    console.log(fakeDta);
    const first10 = fakeDta.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)
        const previousCart = productKeys.map(existingKey => {
            const product = fakeDta.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
            //console.log(existingKey, savedCart[existingKey]);
        })
        setCart(previousCart);
    }, [])

    const handleAddProduct = (product) => {
        console.log("product Added", product)
        alert("product added ");
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            //sameProduct.quantity = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        // const count = sameProduct.length;
        //const newCart = [...cart, product];

        setCart(newCart);

        addToDatabaseCart(product.key, count)

    }

    return (
        <div className="twin-container">
            <div className="product-container">

                {
                    products.map(pd => <Product
                        key={pd.key}
                        handleAddProduct={handleAddProduct}
                        showAddToCart={true}
                        product={pd}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/review'>
                        <button className="button"> Review Order  </button>
                    </Link>
                </Cart>
            </div>


        </div>
    );
};

export default Shop;