import EmptySvg from "../../../../assets/icons/empty-illustration.svg";
import "./EmptyCart.scss"

const EmptyCart = () => {
    return (
        <div className="empty-cart">
            <img className="empty-cart__svg" src={EmptySvg} alt="illustration cake"/>
            <p className="empty-cart__text">Your added items will appear here</p>
        </div>
    );
};

export default EmptyCart;