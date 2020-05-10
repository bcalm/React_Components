import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('portal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
  }

  handleClick = () => {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
    }));
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

const Child = () => (
  <React.Fragment>
    <button>Click</button>
  </React.Fragment>
);

export default Parent;
