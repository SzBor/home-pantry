import React from 'react';

import ItemButton from '../../components/button/ItemButton';

import uuid from 'react-uuid';

class AddItem extends React.Component {
  state = {
    items: [],
    id: uuid(),
    itemName: '',
    quantity: 0,
    minAmount: 0,
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      itemName: this.state.itemName,
      quantity: this.state.quantity,
      minAmount: this.state.minAmount,
    };

    console.log(newItem);

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      id: uuid(),
      itemName: '',
      quantity: 0,
      minAmount: 0,
      editItem: false,
    });
  };

  render() {
    return (
      <div className="card card-body my-3">
        <form onSubmit={this.handleSubmit}>
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
              value={this.state.itemName}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="quantity"
              className="form-control"
              placeholder="quantity PCs"
              min="1"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="minAmount"
              className="form-control"
              placeholder="minimum amt"
              min="1"
              value={this.state.minAmount}
              onChange={this.handleChange}
            />
          </div>
          <ItemButton>Submit</ItemButton>
        </form>
      </div>
    );
  }
}

export default AddItem;
