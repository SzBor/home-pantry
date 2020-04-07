import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainView from '../mainView/MainView';
import Navigation from '../../components/navigation/Navigation';
import ShoppingList from '../shoppingList/ShoppingList';

const Root = () => (
  <>
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={MainView} />
        <Route path="/shoppinglist" component={ShoppingList} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Root;
