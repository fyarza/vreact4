import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ title, value, onClick, className, classNameTitle }) {
  return (
    <div className={`flex space-x-2 ${className}`}>
      <input type="checkbox" value={value} onClick={onClick} />
      {title && (
        <p className={`text-base text-gray-500 ${classNameTitle}`}>{title}</p>
      )}
    </div>
  );
}

Checkbox.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string | PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  classNameTitle: PropTypes.string,
};

export default Checkbox;
