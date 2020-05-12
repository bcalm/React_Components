import React, {Component} from 'react';
import axios from 'axios';

class PostData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: '',
      title: '',
      body: '',
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const {userid, title, body} = this.state;
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange} value={userid} name="userid" />
          <br></br>
          <input type="text" onChange={this.handleChange} value={title} name="title" />
          <br></br>
          <input type="text" onChange={this.handleChange} value={body} name="body" />
          <br></br>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostData;
