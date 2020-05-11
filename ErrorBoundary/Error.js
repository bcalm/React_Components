import React, {Component} from 'react';

export class Error extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  handleClick = () => {
    try {
      if (this.props.heroName === 'vikram') {
        throw new Error('Not a hero');
      }
    } catch (error) {
      this.setState(
        {
          error,
        },
        () => {
          console.log('new state', this.state.error);
        }
      );
    }
  };

  render() {
    return (
      <div>
        {this.props.heroName}
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default Error;
