import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContext from '../../context';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainView from '../mainView/MainView';
import Navigation from '../../components/navigation/Navigation';
import ShoppingList from '../shoppingList/ShoppingList';
import uuid from 'react-uuid';

class Root extends React.Component {
  state = {
    items:  JSON.parse(localStorage.getItem("items")),
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
    localStorage.setItem('list', JSON.stringify(updatedItems));
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
   const contextElements = {
      ...this.state,
      handleChange:this.handleChange,
      handleSubmit:this.handleSubmit,
      handleDelete:this.handleDelete,
      handleEdit:this.handleEdit,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Navigation />
          <Switch>
            <Route exact path="/" component={MainView} />
            <Route path="/shoppinglist" component={ShoppingList} />
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
