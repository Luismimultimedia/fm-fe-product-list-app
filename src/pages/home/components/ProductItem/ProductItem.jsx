import PropTypes from 'prop-types';

import Image from "../../../../components/Image/Image"

const ProductItem = ({ products }) => {
    return (
        <div>
            <Image src={products?.image} altText={products?. category}/>
        </div>
    );
};

ProductItem.propTypes = {
    products: PropTypes.objectOf({
        category: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.object.isRequired
    }).isRequired,
}

export default ProductItem;