import PropTypes from 'prop-types';

import "./ProductLayout.scss"

const ProductLayout = ({ children }) => {
    return (
        <main>{children}</main>
    );
};

ProductLayout.propTypes = {
    children: PropTypes.node,
};

export default ProductLayout;