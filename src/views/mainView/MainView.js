import React from 'react';
import uuid from 'react-uuid';
import Store from '../Store/Store';
import AddItem from '../../components/addItem/AddItem';

class MainView extends React.Component {
  state = {
    items: [],
    id: uuid(),
    itemName: '',
    quantity: '',
    minAmount: '',
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
      quantity: '',
      minAmount: '',
      editItem: false,
    });
  };
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);

    this.setState({
      items: filteredItems,
    });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItems,
      itemName: selectedItem.title,
      quantity: selectedItem.quantity,
      minAmount: selectedItem.minAmount,
      editItem: true,
      id: id,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <Store
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
            <AddItem
              itemName={this.state.itemName}
              quantity={this.state.quantity}
              minAmount={this.state.minAmount}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainView;
