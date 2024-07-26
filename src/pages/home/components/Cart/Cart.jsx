import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from "../../cartSlice";

import CartList from "../CartList/CartList";
import EmptyCart from '../EmptyCart/EmptyCart';

import "./Cart.scss";

const Cart = () => {
    const [quantityItems, setQuantityItems] = useState(0)
    const cartList = useSelector(selectCart);

    useEffect(() => {
        const quantity = cartList?.reduce((accumulator, item) => (accumulator + item?.quantity), 0);
        setQuantityItems(quantity);
    }, [cartList])

    return (
        <aside>
            <div className="cart">
                <h2 className="cart__header">Your Cart ({ quantityItems })</h2>
                {quantityItems ===0 ? <EmptyCart /> : <CartList list={cartList} />}
            </div>
        </aside>
    )
};

export default Cart;