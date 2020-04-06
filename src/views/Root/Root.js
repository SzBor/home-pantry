import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from '../shoppingList/ShoppingList';
import AddItemButton from '../../components/button/AddItemButton';
import EditStores from '../editStores/EditStores';
import AddItem from '../addItem/AddItem';

const Root = () => (
  <div className="container">
    <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-4">
        <h1 className="text-capitalize text-center">Hello</h1>
        <ShoppingList />
        <EditStores />
        <AddItem
    
        />
        <AddItemButton />
      </div>
    </div>
  </div>
);

export default Root;
