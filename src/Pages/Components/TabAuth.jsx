import React from 'react';
import PropTypes from 'prop-types';

function TabAuth({
  textLeft,
  textRight,
  onClickLeft,
  onClickRight,
  activeRight,
  activeLeft,
}) {
  return (
    <div className="flex  h-[3rem]  mt-5 bg-white shadow-md">
      <button
        className={`flex flex-1 justify-center items-center  ${
          activeLeft ? ' border-b-2 border-b-gray-700' : ''
        } `}
        onClick={onClickLeft}
      >
        <p className="text-black text-base font-semibold">{textLeft}</p>
      </button>
      <button
        className={`flex flex-1  justify-center items-center  ${
          activeRight ? ' border-b-2 border-b-gray-700' : ''
        } `}
        onClick={onClickRight}
      >
        <p className="text-black text-base font-semibold">{textRight}</p>
      </button>
    </div>
  );
}

TabAuth.propTypes = {
  textLeft: PropTypes.string,
  textRight: PropTypes.string,
  onClickLeft: PropTypes.func.isRequired,
  onClickRight: PropTypes.func.isRequired,
  activeRight: PropTypes.bool,
  activeLeft: PropTypes.bool,
};

TabAuth.defaultProps = {
  textLeft: 'example1',
  textRight: 'example2',
};

export default TabAuth;
