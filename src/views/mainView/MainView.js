import React from 'react';
import Store from '../Store/Store';
import AddItem from '../../components/addItem/AddItem';
import AppContext from '../../context';

class MainView extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-8 mt-4">
                <Store
                  items={context.items}
                  id={context.id}
                  handleDelete={context.handleDelete}
                  handleEdit={context.handleEdit}
                />
                <AddItem
                  itemName={context.itemName}
                  quantity={context.quantity}
                  minAmount={context.minAmount}
                  handleChange={context.handleChange}
                  handleSubmit={context.handleSubmit}
                  editItem={context.editItem}
                />
              </div>
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default MainView;
