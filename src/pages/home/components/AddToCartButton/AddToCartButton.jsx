import PropTypes from 'prop-types';

import AddIcon from "../../../../assets/icons/add-icon.svg";
import SubtractIcon from "../../../../assets/icons/subtract-icon.svg";
import ShoppingCartIcon from "../../../../assets/icons/shopping-cart-icon.svg";

import "./AddToCartButton.scss";

const AddToCartButton = ({ quantity, onHandleAddToCart, onHandleRemoveToCart}) => {
   

    const InitialButton = () => {
        return (
        <button
            className="add-to-cart-button add-to-cart-button--initial"
            onClick={onHandleAddToCart}
        >
            <img src={ShoppingCartIcon} alt="Shppping icon" />
            <span>Add to cart</span>
        </button>);
    };

    const IncreaseDecreaseButton = () => {
        return (
        <div
            className="add-to-cart-button add-to-cart-button--increase"
        >
            <button className="button-icon" onClick={onHandleRemoveToCart}>
                <img src={SubtractIcon} alt="Shppping icon" />
            </button>
            <span>{quantity}</span>
            <button className="button-icon" onClick={onHandleAddToCart}>
                <img src={AddIcon} alt="Shppping icon" />
            </button>
        </div>);
    };

    return (
        (quantity === 0) ? <InitialButton/> : <IncreaseDecreaseButton />
    );
};

AddToCartButton.propTypes = {
    quantity: PropTypes.number,
    onHandleAddToCart: PropTypes.func,
    onHandleRemoveToCart: PropTypes.func
}

export default AddToCartButton;