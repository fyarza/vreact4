import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, type, onClick, className }) {
  return (
    <button className={`${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'submit',
};

export default Button;
