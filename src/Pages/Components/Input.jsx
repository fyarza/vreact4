import React from 'react';
import PropTypes from 'prop-types';

function Input({
  placeholder,
  value,
  onChange,
  type,
  classNameContainer,
  classNameInput,
}) {
  return (
    <div className={`h-10 ${classNameContainer}`}>
      <input
        className={`w-full px-2 h-full outline-none border border-gray-300  focus:border-gray-700 ${classNameInput}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameInput: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;
