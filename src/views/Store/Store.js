import React from 'react';
import StoreItem from '../../components/storeItem/StoreItem';


const Store = (props) => { 


  const {items, handleDelete,handleEdit} = props;
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
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}
        </ul>

  );
};
export default Store;
