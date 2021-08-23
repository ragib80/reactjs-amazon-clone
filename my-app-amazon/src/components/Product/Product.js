import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props)
    return (
        <div className="product">
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/" + props.product.key}>{props.product.name} </Link></h4>
                <br></br>
                <p><small>by:{props.product.seller}</small></p>
                <p>${props.product.price}</p>

                <p><small>Only {props.product.stock} left in stock-Order Soon</small></p>
                {props.showAddToCart && <button
                    onClick={() => props.handleAddProduct(props.product)}
                    className='main'><FontAwesomeIcon icon={faShoppingCart} />
                    add to cart</button>}
            </div>


        </div>
    );
};

export default Product;