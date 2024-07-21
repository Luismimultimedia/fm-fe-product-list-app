import PropTypes from 'prop-types';

import ProductItem from '../ProductItem/ProductItem';

import "./ProductList.scss";

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            <h1 className="product-list__heading">Desserts</h1>
            <ul className="product-list__inner">
                {products?.length > 0 && products.map((product) => (
                    <li key={product?.category}>
                        <ProductItem product={product} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.array,
};

export default ProductList;
