import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      topic: 'react',
    };
  }

  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleChangeSkill = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  saveData = (event) => {
    const {username, email, topic} = this.state;
    alert(`${username}, ${email}, ${topic}`);
    event.preventDefault();
  };

  render() {
    const {username, email, topic} = this.state;
    return (
      <div>
        <form onSubmit={this.saveData}>
          <label>Username: </label>
          <input value={username} onChange={this.handleChangeUsername} />
          <br></br>
          <label>Email: </label>
          <input value={email} onChange={this.handleChangeEmail} />
          <br></br>
          <select value={topic} onChange={this.handleChangeSkill}>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Angular">Angular</option>
          </select>
          <br></br>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
