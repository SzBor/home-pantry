import React from 'react';

import ItemButton from '../../components/button/ItemButton';

const AddItem = (props) => {
  const { itemName, quantity, minAmount, handleChange, handleSubmit } = props;

  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-warning text-black">
              <i className="fas fa-plus" />
            </div>
          </div>
          <input
            type="text"
            name="itemName"
            className="form-control"
            placeholder="name"
            value={itemName}
            onChange={handleChange}
          />
          <input
            type="number"
            name="quantity"
            className="form-control"
            placeholder="quantity PCs"
            min="1"
            value={quantity}
            onChange={handleChange}
          />
          <input
            type="number"
            name="minAmount"
            className="form-control"
            placeholder="minimum amt"
            min="1"
            value={minAmount}
            onChange={handleChange}
          />
        </div>
        <ItemButton>Submit</ItemButton>
      </form>
    </div>
  );
};

export default AddItem;
