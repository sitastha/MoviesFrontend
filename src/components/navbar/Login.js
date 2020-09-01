import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Form, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../index";
import { createBrowserHistory as history } from "history";
import { registerUser } from "../../api/apiService";
import { getToken } from "../../api/apiService";

const Styles = styled.div`
  .forms {
    font-size: 2rem;
    color: #20639b;
    text-align: center;
  }
  .form-signin {
    width: 50%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;
class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.getTokenLogin();

    this.handleInputChange = this.handleInputChange.bind(this);

    this.registerUser = this.registerUser.bind(this);
  }
  registerUser(event) {
    registerUser(this.state.email, this.state.password, this.state.name).then(
      (data) => {
        console.log(data.email);
      }
    );
  }
  getTokenLogin() {
    getToken().then((data) => {
      console.log(data.access_token);
      localStorage.setItem("token", data.access_token);
    });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  clickHandler() {
    this.setState({});
  }
  render() {
    return (
      <Styles>
        <div class="container">
          <form class="form-signin">
            <img
              class="mb-4"
              src="https://image.freepik.com/free-vector/cinema-logo_23-2147503279.jpg?1"
              alt=""
              width="100"
              height="100"
            />

            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

            <label for="inputEmail " class="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              value={this.state.value}
              class="form-control"
              placeholder="Email address"
              required
              autofocus
            />

            <label for="inputPassword" class="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              value={this.state.value}
              class="form-control"
              placeholder="Password"
              required
            />
            <div class="checkbox mb-3"></div>
            <Link to={"/"}>
              <button class="btn btn-lg btn-primary btn-block" type="submit">
                Log in
              </button>
            </Link>
            <Link to={"/signup"}>
              <p class="mt-5 mb-3 text-muted">
                If Not Sign Up, Please Register
              </p>
            </Link>
          </form>
        </div>
      </Styles>
    );
  }
}

export default Login;
