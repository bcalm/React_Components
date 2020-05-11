import React, {Component} from 'react';
import './App.css';
import Counter from './Component/Counter';
import ClickCounter from './Component/ClickCounter';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>
      </React.Fragment>
    );
  }
}

export default App;
