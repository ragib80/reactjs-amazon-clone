import React from 'react';
import fakeDta from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    console.log(fakeDta);
    const first10 = fakeDta.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log("product Added", product)
        alert("product added ");
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count)

    }

    return (
        <div className="shop-container">
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

                </Cart>
            </div>


        </div>
    );
};

export default Shop;