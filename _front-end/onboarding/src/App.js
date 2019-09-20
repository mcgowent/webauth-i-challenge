import React from 'react';
import './App.css';
import axios from 'axios';


import LoginForm from './login'

class App extends React.Component {
  render() {
    return (
      <>
        <LoginForm />
      </>
    );
  }
}

export default App;