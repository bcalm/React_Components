import React, {Component} from 'react';
import './App.css';
import ComponentC from './Component/ComponentC';
import {UserProvider} from './Component/UserContext';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <UserProvider value="vikram">
          <ComponentC />
        </UserProvider>
      </React.Fragment>
    );
  }
}

export default App;
