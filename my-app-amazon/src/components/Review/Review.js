import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import SuccesImg from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false)

    const handlePlaceOrder = () => {
        console.log("ordr placed");
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    const RemoveProduct = (productKey) => {
        //console.log('removed clicked', productKey)
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }

    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map(key => {
            //saveCart[key]
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        })
        //console.log(cartProducts);
        setCart(cartProducts);

    }, []);
    let thankyou;
    let success = "order placed";

    if (orderPlaced) {

        thankyou = <img src={SuccesImg} alt="" />


    }

    return (
        <div className="twin-container">
            <div className="product-container">


                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        RemoveProduct={RemoveProduct}
                        product={pd} />)
                }
                {
                    thankyou

                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} >
                    <button onClick={handlePlaceOrder} className="main"> Place Order  </button>
                </Cart>

            </div>


        </div>
    );
};

export default Review;