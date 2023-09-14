import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      //groceries references the list above
      groceries: groceries
    }
  }
  // Class methods to update state

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = { 
      name: item,
      id: Date.now(),
      purchased: false 
    }
    this.setState({...this.state, groceries: {...this.state.groceries, newItem} })
  }

  clearPurchased = () => {
    
  }

  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm addItem={this.addItem} />
         </div>
        <GroceryList groceries={groceries} />
        <button className="clear-btn" clearPurchased={this.clearPurchased}>Clear Purchased</button>
        <button onClick={(e) => this.addItem(e, 'orange')}>Add Orange</button>
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);