import React from 'react';

const EditItem = () => (
  <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
    <div className="todo-titles d-flex">
      <h6 className="mx-2">Name</h6>
      <h6 className="mx-2">Quantity</h6>
    </div>
    <div className="todo-icon">
      <span className="mx-2 text-success">
        <i className="fas fa-pen" />
      </span>

      <span className="mx-2 text-danger">
        <i className="fas fa-trash" />
      </span>
    </div>
  </li>
);

export default EditItem;
