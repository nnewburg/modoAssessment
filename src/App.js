import React, { Component } from 'react';
import './App.css';
import Login from './loginPage';
import Vehicles from './vehiclePage';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { acceptedUser: false };

    this.onTokenAuth = this.onTokenAuth.bind(this);
  }

  onTokenAuth = e => this.setState({acceptedUser: true})

  render() {
    return (
      <div>
        {this.state.acceptedUser ?
        <Vehicles />
        :<Login token={this.onTokenAuth} />
        }

      </div>
  )}
}

export default App;
