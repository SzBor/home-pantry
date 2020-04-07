import React from 'react';

const AddItem = (props) => {
  const { itemName, quantity, minAmount, handleChange, handleSubmit, editItem } = props;

  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-warning text-black">
              <i className="fas fa-utensils" />
            </div>
          </div>

          <input
            type="text"
            name="itemName"
            className="form-control"
            placeholder="product"
            value={itemName}
            onChange={handleChange}
          />

          <input
            type="number"
            name="quantity"
            className="form-control"
            placeholder="quantity in PCs"
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
        <button
          type="submit"
          variant="warning"
          size="sm"
          className={
            editItem ? 'btn btn-block btn-secondary mt-3' : 'btn btn-block btn-warning mt-3'
          }
        >
          {editItem ? 'Edit item' : 'Add Item'}
        </button>
      </form>
    </div>
  );
};

export default AddItem;
