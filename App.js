import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Component/Form';
import ParentComponent from './Component/ParentComponent';
import RefsDemo from './Component/RefsDemo';
import FocusInput from './Component/FocusInput';
import FRParentInput from './Component/FRParentInput';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Form /> */}
        {/* <ParentComponent /> */}
        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
        <FRParentInput />
      </div>
    );
  }
}

export default App;
