import React from 'react';
import PropTypes from 'prop-types';

function Input({
  placeholder,
  value,
  onChange,
  type,
  classNameContainer,
  classNameInput,
  label,
  name,
}) {
  return (
    <div className={`h-10 mb-10 ${classNameContainer}`}>
      {label && (
        <label htmlFor={name} className="text-gray-500  text-sm">
          {label}
        </label>
      )}
      <input
        className={`w-full px-2 h-full outline-none border border-gray-300  focus:border-gray-700 ${classNameInput}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
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
  label: PropTypes.string,
  name: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  name: 'input',
};

export default Input;
