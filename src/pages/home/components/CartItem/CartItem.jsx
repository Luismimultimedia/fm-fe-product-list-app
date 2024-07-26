import PropTypes from 'prop-types';
import { removeCompleteProductItem } from '../../cartSlice';
import { useDispatch } from 'react-redux';

import Xicon from "../../../../assets/icons/x-icon.svg";

import "./CartItem.scss";

const CartItem = ({ product, quantity }) => {
    const dispatch = useDispatch();

    return (
        <div className='cart-item'>
            <div>
                <h3 className='cart-item__name'>{product?.name}</h3>
                <span className='cart-item__info-container'>
                    <p className='cart-item__quantity'>{quantity}x</p>
                    <p className='cart-item__price'>@ ${parseFloat(product?.price).toFixed(2)}</p>
                    <p className='cart-item__total-price'>${parseFloat(product?.price * quantity).toFixed(2)}</p>
                </span>
            </div>
            <button
                className='cart-item__button-remove'
                onClick={() => dispatch(removeCompleteProductItem(product))}
                >
                <img src={Xicon} alt="x icon to remove all items" />
            </button>
        </div>
    );
};

CartItem.propTypes = {
    product: PropTypes.objectOf({
        id: PropTypes.string,
        category: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.object
    }),
    quantity: PropTypes.number,
};

export default CartItem;