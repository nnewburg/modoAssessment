import React, { Component } from "react";
import axios from 'axios';
import './App.css';
import { Button, Form, Label } from 'semantic-ui-react'


class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorPresent: "",
      authentication: ""
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value })
  }


  onSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    axios.post(`http://localhost:8080/user/auth`, { email, password })
      .then(res => {
        if(res.data !== "Login accepted"){
          this.setState({authentication: res.data})
          this.setState({errorPresent: true})
        }
        else {
          this.props.token()
        }
      })
  }


  render() {
  return (

    <div className="loginContainer">

    <Form onSubmit={this.onSubmit} className="loginForm" >
      <Form.Field>
        <label className="loginLabel">Email address</label>
        <input value={this.state.email} onChange={this.onChangeEmail} placeholder="Enter Email here" />
      </Form.Field>
      <Form.Field>
       <label className="loginLabel">Password</label>
       <input value={this.state.password} onChange={this.onChangePassword} type="password" />
      </Form.Field>
      {this.state.errorPresent ?
        <Label className="errorLabel" basic color='red' >
          {this.state.authentication}
        </Label> : null}
      <Button id="loginBtn" color="blue" type='submit'>Log in</Button>
    </Form>

    </div>

  );
  }
}

export default LoginForm;