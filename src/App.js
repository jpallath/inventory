import React, { Component } from 'react';
import './App.css';

const ItemEntry = ({text}) => (
  <li>{text}</li>
);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        items: [],
        newItem: ''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
      e.preventDefault();
      const items = [...this.state.items, this.state.newItem];
      this.setState({items, newItem: ''});
    }
  render() {
    const {newItem} = this.state;
    const items = this.state.items.map((item, index)=>(
      <ItemEntry key={index} text={item} />
    ));
    return (
      <div className="App">
        <h1>Reactive Inventory</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="item-input"
            autoComplete="off"
            type="text"
            name="newItem"
            placeholder="What's Missing?"
            value={newItem}
            onChange={(e) => this.setState({[e.target.name]: e.target.value})}
           />
           <button
             type="submit"
             className="add-button">
             Add
           </button>
        </form>
        <div className="item-content">
          <ol>
            {items}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
