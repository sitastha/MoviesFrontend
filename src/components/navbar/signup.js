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
  h6 {
    text-align: left;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin: 10px 0;
  }
  .form-signin input[type="password"],
  input[type="radio"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin: 3px;
  }
`;
class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      gender: "",
      email: "",
      country: "",
      area: "",
      city: "",
      street: "",
      pincode: "",
      role: "",
    };

    this.getTokenLogin();

    this.handleInputChange = this.handleInputChange.bind(this);

    this.registerUser = this.registerUser.bind(this);
  }
  registerUser(event) {
    registerUser(
      this.state.email,
      this.state.password,
      this.state.name,
      this.state.birth,
      this.state.country,
      this.state.area,
      this.state.street,
      this.state.pincode
    ).then((data) => {
      console.log(data.email);
    });
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
  handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  clickHandler() {
    this.setState({});
  }
  render() {
    return (
      <Styles>
        <div class="container">
          <div className="signup">
            <form class="form-signin">
              <h1 class="h3 mb-3 font-weight-normal"> Register From here</h1>
              <h6>User Name</h6>
              <label for="inputEmail" class="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="inputEmail"
                value={this.state.name}
                class="form-control"
                placeholder="Please Enter your Name"
                onChange={this.handleInputChange}
                required
                autofocus
              />
              <label for="radio" class="sr-only">
                Gender
              </label>
              Male
              <input
                type="radio"
                id="male"
                value="male"
                name="gender"
                checked={this.state.gender === "male"}
                onChange={this.handleInputChange}
              />
              Female
              <input
                type="radio"
                id="female"
                value="female"
                name="gender"
                checked={this.state.gender === "female"}
                onChange={this.handleInputChange}
              />
              <label for="inputEmail" class="sr-only">
                Number
              </label>
              <h6>Email</h6>
              <input
                type="email"
                name="email"
                id="phone"
                id="inputNmuber"
                value={this.state.email}
                class="form-control"
                placeholder="Please Enter your email"
                onChange={this.handleInputChange}
                required
              />
              <label for="inputPassword" class="sr-only">
                Password
              </label>
              <h6>Password</h6>
              <input
                type="password"
                name="password"
                id="inputPassword"
                value={this.state.password}
                class="form-control"
                placeholder="Password"
                onChange={this.handleInputChange}
                required
              />
              <label for="inputPassword" class="sr-only">
                Password
              </label>
              <h6>Confirm Password</h6>
              <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="Confirm Password"
                onChange={this.handleInputChange}
                required
              />
              <label for="inputBirthDate" class="sr-only"></label>
              <h6>Birth Date</h6>
              <input
                type="text"
                id="birth"
                name="birth"
                class="form-control"
                placeholder="DD/MM/YYYY"
                value={this.state.birth}
                onChange={this.handleInputChange}
                required
              />
              <label for="inputBirthDate" class="sr-only"></label>
              <h6>Country</h6>
              <input
                type="text"
                id="country"
                class="form-control"
                placeholder="Please Enter Your Country Name"
                name="country"
                value={this.state.country}
                onChange={this.handleInputChange}
                required
              />
              <label for="Area" class="sr-only"></label>
              <h6>Area</h6>
              <input
                type="text"
                id="area"
                class="form-control"
                placeholder="Please Enter Your Area Name"
                name="area"
                value={this.state.area}
                onChange={this.handleInputChange}
                required
              />
              <label for="inputCity" class="sr-only"></label>
              <h6>City</h6>
              <input
                type="text"
                id="city"
                class="form-control"
                placeholder="Please Enter Your City Name"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChange}
                required
              />
              <label for="inputBirthDate" class="sr-only"></label>
              <h6>Street</h6>
              <input
                type="street"
                id="street"
                class="form-control"
                placeholder="Please Enter Your Street Name"
                name="street"
                value={this.state.street}
                onChange={this.handleInputChange}
                required
              />
              <label for="inputBirthDate" class="sr-only"></label>
              <h6>Pin Code</h6>
              <input
                type="pin"
                id="pin"
                class="form-control"
                placeholder="Please Enter Your Pin Code"
                name="pincode"
                value={this.state.pincode}
                onChange={this.handleInputChange}
                required
              />
              <h6>Role:</h6>
              Admin
              <input
                type="radio"
                value="admin"
                name="role"
                checked={this.state.role === "admin"}
                onChange={this.handleInputChange}
              />
              User
              <input
                type="radio"
                value="user"
                name="role"
                checked={this.state.role === "user"}
                onChange={this.handleInputChange}
              />
              <Link to={"/"}>
                <button
                  class="btn btn-lg btn-primary btn-block"
                  onClick={this.registerUser}
                  type="submit"
                >
                  Sign Up
                </button>
              </Link>
              <p class="mt-5 mb-3 text-muted">ENJOY THE MOVIE</p>
            </form>
          </div>
        </div>
      </Styles>
    );
  }
}

export default Login;
