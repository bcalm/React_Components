import React, {Component} from 'react';
import FunctionMemo from './FunctionMemo';

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({
        name: 'Vikram',
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        Parent Component
        <FunctionMemo name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
