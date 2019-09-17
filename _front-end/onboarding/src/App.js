import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/auth/login', this.state.credentials)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div className="App" >
        <form onSubmit={this.handleSubmit}>
          <label>LogOn</label><br />
          <label>
            UserName

          <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={this.state.value}
              onChange={this.handleChange}
            />

          </label><br />
          <label>
            Password

          <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={this.state.value}
              onChange={this.handleChange}
            />

          </label><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;