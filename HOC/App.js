import React, {Component} from 'react';
import './App.css';
import ClickCounter from './Component/ClickCounter';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ClickCounter name={'Vikram'} />
      </React.Fragment>
    );
  }
}

export default App;
