import AddIcon from "../../../../assets/icons/add-icon.svg";
import SubtractIcon from "../../../../assets/icons/subtract-icon.svg";
import ShoppingCartIcon from "../../../../assets/icons/shopping-cart-icon.svg";

import "./AddToCartButton.scss";
import { useState } from "react";

const AddToCartButton = () => {
    const [productQuantity, setProductQuantity] = useState(0);

    const handleAddToCart = () => {
        setProductQuantity((prev) => {
            return prev += 1;
        });
    }

    const handleRemoveItem = () => {
        setProductQuantity((prev) => {
            return prev -= 1;
        });
    }

    const InitialButton = () => {
        return (
        <button
            className="add-to-cart-button add-to-cart-button--initial"
            onClick={handleAddToCart}
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
            <button className="button-icon" onClick={handleRemoveItem}>
                <img src={SubtractIcon} alt="Shppping icon" />
            </button>
            <span>{productQuantity}</span>
            <button className="button-icon" onClick={handleAddToCart}>
                <img src={AddIcon} alt="Shppping icon" />
            </button>
        </div>);
    };

    return (
        (productQuantity === 0) ? <InitialButton/> : <IncreaseDecreaseButton />
    );
};

export default AddToCartButton;