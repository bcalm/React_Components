import React, {Component} from 'react';
import ComponentE from './ComponentE';
import UserContext from './UserContext';

class ComponentD extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        byy {this.context}
        <ComponentE />
      </div>
    );
  }
}

export default ComponentD;
