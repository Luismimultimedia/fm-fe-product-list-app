import PropTypes from 'prop-types';

const Image = ({ src, altText = "", customClass="" }) => {
 return (
    <picture className={customClass}>
        <source media="(max-width: 767px)" srcSet={src?.mobile} />
        <source media="(min-width: 768px) and (max-width: 899px)" srcSet={src?.tablet} />
        <img src={src?.desktop} alt={altText} />
    </picture>
 );
};

Image.propTypes = {
    src: PropTypes.shape({
        desktop: PropTypes.string,
        mobile: PropTypes.string,
        tablet: PropTypes.string,
        thumbnail: PropTypes.string,
    }),
    altText: PropTypes.string,
    customClass: PropTypes.string
};

export default Image;