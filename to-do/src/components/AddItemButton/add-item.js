import React from 'react';

const AddItem = ({ onAddition }) => {
  return (
    <button
      onClick={() => onAddition('hail hitler')}
      className="btn btn-primary btn-lg float-right mt-3"
    >
      +
    </button>
  );
};

export default AddItem;
