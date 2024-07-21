import PropTypes from 'prop-types';

import Image from "../../../../components/Image/Image"

import "./ProductItem.scss"

const ProductItem = ({ product }) => {
    console.log(product);
    return (
        <div className='product-item'>
            <Image
                src={product?.image}
                altText={product?. category}
                customClass={"product-item__image"}
            />
            <button>Add to cart</button>
            <div className="product-item__content">
                <p>{product?.category}</p>
                <h1>{product?.name}</h1>
                <p>{`$${parseFloat(product.price).toFixed(2)}`}</p>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    product: PropTypes.objectOf({
        category: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.string,
        image: PropTypes.object
    }),
}

export default ProductItem;