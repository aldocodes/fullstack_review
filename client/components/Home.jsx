import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      username: '',
      password: '',
      personality: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitUserInfo = this.submitUserInfo.bind(this);
  }

  componentDidMount() {
    axios.get('/api/users')
      .then((data) => {
        this.setState({
          users: data
        }, () => {
          console.log('this.state.users = ', this.state.users);
        })
      })
      .catch(err => console.log('error in CDM HOME'));
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitUserInfo() {
    axios.post('/api/users', {
      username: this.state.username,
      password: this.state.password,
      personality: parseInt(this.state.personality)
    })
      .then(({data}) => {
        this.setState({
          users: [...this.state.users, data]
        }, () => {
          console.log('this.state.users = ', this.state.users);
        })
      })
  }

  render() {
    return (
      <div>
        Hello Friend
        <input onChange={this.handleInputChange} name="username" />
        <input onChange={this.handleInputChange} name="password" />
        <input onChange={this.handleInputChange} name="personality" />
        <button onClick={this.submitUserInfo}>Submit</button>
      </div>
    );
  }
}

export default Home;