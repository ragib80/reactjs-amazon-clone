import React from 'react';

const ReviewItem = (props) => {
    //  console.log(props)
    const { name, quantity, key, price } = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '100px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <button
                className="main"
                onClick={() => props.RemoveProduct(key)}

            >Remove</button>
        </div>
    );
};

export default ReviewItem;