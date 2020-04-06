import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from '../shoppingList/ShoppingList';
import AddItemButton from '../../components/button/AddItemButton';
import Store from '../Store/Store';
import AddItem from '../addItem/AddItem';
import uuid from 'react-uuid';

class Root extends React.Component {
  state = {
    items: [],
    id: uuid(),
    itemName: '',
    quantity: 0,
    minAmount: 1,
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
      title: this.state.itemName,
      quantity: this.state.quantity,
      minAmount: this.state.minAmount,
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      id: uuid(),
      itemName: '',
      quantity: 0,
      minAmount: 1,
      editItem: false,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h1 className="text-capitalize text-center">Hello</h1>
            <ShoppingList />
            <AddItem
              itemName={this.state.itemName}
              quantity={this.state.quantity}
              minAmount={this.state.minAmount}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <Store items={this.state.items} />
            <AddItemButton />
          </div>
        </div>
      </div>
    );
  }
}

export default Root;
