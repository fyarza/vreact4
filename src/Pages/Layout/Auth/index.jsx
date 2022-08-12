import React from 'react';
import PropTypes from 'prop-types';

function LayoutAuth({ children }) {
  return (
    <div>
      <div className=" h-[4rem] bg-white shadow-md flex justify-center items-center">
        Logo
      </div>
      <div className="flex justify-center items-center  p-5">{children}</div>
    </div>
  );
}

LayoutAuth.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default LayoutAuth;
