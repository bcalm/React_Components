import React, {Component} from 'react';
import withCounter from './WithCounter';

class ClickCounter extends Component {
  render() {
    const {count, incrementCount} = this.props;
    return (
      <React.Fragment>
        Clicked {count} times
        <br></br>
        <button onClick={incrementCount}>Increment Count</button>
      </React.Fragment>
    );
  }
}

export default withCounter(ClickCounter, 5);
