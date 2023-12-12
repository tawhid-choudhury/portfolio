import PropTypes from 'prop-types';

const Heading = ({ title, subtitle, className }) => {
    return (
        <div className="pt-8 text-center">
            <h3 className={`font-light font-roboto text-3xl md:text-5xl ${className}`}>{title}</h3>
            <p className="pb-8 text-center text-gray-600 text-3xl md:text-3xl">{subtitle}</p>
        </div>
    )
}

Heading.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    className: PropTypes.string,
};

export default Heading
