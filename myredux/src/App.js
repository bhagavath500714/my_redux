import React, { Component } from 'react';
import NewFile from './NewFile';

class App extends Component {

  state = {
    records : [
      {name: 'R', age: 30, belt: 'black', id: 1},
      {name: 'Y', age: 20, belt: 'green', id: 2},
      {name: 'C', age: 14, belt: 'pink', id: 3},
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Welcome</p>
        <NewFile records={this.state.records}/>
      </div>
    );
  }  
}

export default App;
