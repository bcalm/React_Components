import React, {Component} from 'react';

class GetData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({data: res.express}))
      .catch((err) => console.log(err));
  }
  
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  render() {
    return <div>{this.state.data}</div>;
  }
}

export default GetData;
