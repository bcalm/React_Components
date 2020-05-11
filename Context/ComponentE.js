import React, {Component} from 'react';
import {UserConsumer} from './UserContext';

class ComponentC extends Component {
  render() {
    return (
      <div>
        <UserConsumer>{(userName) => <div>hello {userName}</div>}</UserConsumer>
      </div>
    );
  }
}

export default ComponentC;
