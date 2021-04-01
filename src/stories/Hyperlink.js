import PropTypes from 'prop-types';
const Hyperlink = ({ title, src, target }) => {
    return (
        <a href={src} target={target}>{title}</a>
    )
}

Hyperlink.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  target: PropTypes.string,
};

Hyperlink.defaultProps = {
  title: 'Click',
  src: '#', 
  target: null
};

export default Hyperlink