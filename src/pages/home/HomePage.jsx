// components
import ProductLayout from "../../layouts/ProductLayout";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

// custom hooks
import useFetch from "../../hooks/useFetch";

// constans
import { API_PRODUCT_LIST } from "../../constants/constans";

// styles
import "./HomePage.scss"

const HomePage = () => {
    const { data } = useFetch(API_PRODUCT_LIST);
    
    return (
        <ProductLayout>
            <section className="home-page__product-list">
                <ProductList products={data}/>
                <Cart />
            </section>
        </ProductLayout>
    );
};

export default HomePage;