import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const { key } = useParams();
    const product = fakeData.find(pd => pd.key === key)
    console.log(product);
    return (
        <div>
            <h1>Your Product Detail</h1>
            <Product showAddToCart={false} product={product} />
        </div>
    );
};

export default ProductDetail;