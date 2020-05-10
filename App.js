import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Component/Form';
import ParentComponent from './Component/ParentComponent.js';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Form /> */}
        <ParentComponent />
      </div>
    );
  }
}

export default App;
