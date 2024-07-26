import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
    addProductItem,
    removeProductItem,
    selectCartProductQuantity
} from "../../cartSlice";

import Image from "../../../../components/Image/Image";
import AddToCartButton from "../AddToCartButton/AddToCartButton"

import "./ProductItem.scss"

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const productQuantity = useSelector(selectCartProductQuantity(product?.id));

    const handleAddToCart = () => {
        dispatch(addProductItem(product));
    }

    const handleRemoveItem = () => {
        dispatch(removeProductItem(product));
    }
    return (
        <div className='product-item'>
            <Image
                src={product?.image}
                altText={product?.category}
                customClass={"product-item__image"}
            />
            <div className='product-item__add-to-cart'>
                <AddToCartButton
                    quantity={productQuantity}
                    onHandleAddToCart={handleAddToCart}
                    onHandleRemoveToCart={handleRemoveItem}
                />
            </div>
            <div className="product-item__content">
                <p className='product-item__category'>{product?.category}</p>
                <h2 className='product-item__name'>{product?.name}</h2>
                <p className='product-item__price'>{`$${parseFloat(product?.price).toFixed(2)}`}</p>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    product: PropTypes.objectOf({
        id: PropTypes.string,
        category: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.object
    }),
}

export default ProductItem;