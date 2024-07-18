// components
import ProductLayout from "../../layouts/ProductLayout";

// custom hooks
import useFetch from "../../hooks/useFetch";

// constans
import { API_PRODUCT_LIST } from "../../constants/constans";
import { useEffect } from "react";

// styles
import "./HomePage.scss"

const HomePage = () => {
    const { data } = useFetch(API_PRODUCT_LIST);

    useEffect(() => {
        console.log(data);
    }, [data]);
    
    return (
        <ProductLayout>
            <section className="home-page__product-list">
                <div>
                    <h1>Desserts</h1>
                </div>
                <div>d</div>
            </section>
        </ProductLayout>
    );
};

export default HomePage;