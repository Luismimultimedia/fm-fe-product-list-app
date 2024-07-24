import PropTypes from 'prop-types';

import Image from "../../../../components/Image/Image";
import AddToCartButton from "../AddToCartButton/AddToCartButton"

import "./ProductItem.scss"

const ProductItem = ({ product }) => {
    console.log(product);
    return (
        <div className='product-item'>
            <Image
                src={product?.image}
                altText={product?.category}
                customClass={"product-item__image"}
            />
            <div className='product-item__add-to-cart'>
                <AddToCartButton />
            </div>
            <div className="product-item__content">
                <p className='product-item__category'>{product?.category}</p>
                <h1 className='product-item__name'>{product?.name}</h1>
                <p className='product-item__price'>{`$${parseFloat(product?.price).toFixed(2)}`}</p>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    product: PropTypes.objectOf({
        category: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.object
    }),
}

export default ProductItem;