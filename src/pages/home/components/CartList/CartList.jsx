import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectCartTotalPrice } from '../../cartSlice';

import CartItem from "../CartItem/CartItem";

import "./CartList.scss";


const CartList = ({ list }) => {
    const totalPriceOrder = useSelector(selectCartTotalPrice);

    return (
        <ul className='cart-list'>
            { list?.map(({ product, quantity }) => (
                <li className="cart-list__item" key={product?.id}>
                    <CartItem product={product} quantity={quantity} />
                </li>
            )) }
            <div className='cart-list__container-price'>
                <p className='cart-list__order'>Order Total</p>
                <p className='cart-list__total-price'>${totalPriceOrder}</p>
            </div>
        </ul>
    );
};

CartList.propTypes = {
    list: PropTypes.array,
};

export default CartList;