import React, { Component } from 'react';
import People from './People';


class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Hey There!</p>
        <People />
      </div>
    );
  }
}
export default App;
