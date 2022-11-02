import React, { Component } from 'react';
import People from './People';


class App extends Component {
  state = {
    people: [
        {name: "Ryan", age: '33', favColor: 'red', id: 1},
        {name: "MF DOOM", age: '44', favColor: 'green', id: 2},
        {name: "Wario", age: '35', favColor: 'yellow', id: 3},
    ]
}
  render(){
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Hey There!</p>
        <People people={this.state.people}/>
      </div>
    );
  }
}
export default App;
