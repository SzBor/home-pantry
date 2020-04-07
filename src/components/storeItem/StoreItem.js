import React from 'react';
import './StoreItem.css';

const StoreItem = (props) => {
  const { title, quantity, minAmount, handleDelete, handleEdit } = props;

  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <div className="todo-titles d-flex align-items-center">
        <h6 className="font-weight-normal">Item:</h6>
        <h5 className="mx-2">{title}</h5>
        <h6 className="font-weight-normal">Quantity:</h6>

        <h5 className="mx-2">{quantity}</h5>
        <h6 className="font-weight-normal">Minimal Amount:</h6>

        <h5 className="mx-2">{minAmount}</h5>
      </div>
      <div className="todo-icon">
        <span
          className="mx-2 text-success spanButton"
          role="button"
          onClick={handleEdit}
          onKeyDown={handleEdit}
          tabIndex={0}
        >
          <i className="fas fa-pen" />
        </span>

        <span
          className="mx-2 text-danger spanButton"
          role="button"
          onClick={handleDelete}
          onKeyDown={handleDelete}
          tabIndex={0}
        >
          <i className="fas fa-trash" />
        </span>
      </div>
    </li>
  );
};

export default StoreItem;
