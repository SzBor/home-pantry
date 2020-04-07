import React from 'react';
import StoreItem from '../../components/storeItem/StoreItem';
import AppContext from '../../context';

const ShoppingList = () => (
  <div className="container">
    <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-4">
        <h3>Shopping List</h3>
        <AppContext.Consumer>
          {(context) =>
            context.items
              .filter((item) => item.quantity < item.minAmount)
              .map((item) => <StoreItem {...item} key={item.id} />)
          }
        </AppContext.Consumer>
      </div>
    </div>
  </div>
);

export default ShoppingList;
