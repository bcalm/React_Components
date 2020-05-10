import React, {Component} from 'react';

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
    // this.inputRef.current.focus();
  }

  handleClick = () => {
    this.setState({
      name: this.inputRef.current.value,
    });
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <input ref={this.setCbRef} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
