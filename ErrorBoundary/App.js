import React, {Component} from 'react';
import './App.css';
import ErrorBoundary from './Component/ErrorBoundary';
import Error from './Component/Error';

class App extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>{<Error heroName={'aditya'} />}</ErrorBoundary>
        <ErrorBoundary>{<Error heroName={'vikram'} />}</ErrorBoundary>
      </div>
    );
  }
}

export default App;
