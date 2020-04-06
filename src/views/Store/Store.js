import React from 'react';
import StoreItem from '../../components/storeItem/StoreItem';

const Store = (state) => {
  const { items } = state;
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">List of Items</h3>

      {items.map((item) => {
        return (
          <StoreItem
            key={item.id}
            title={item.title}
            quantity={item.quantity}
            minAmount={item.minAmount}
          />
        );
      })}
    </ul>
  );
};
export default Store;
