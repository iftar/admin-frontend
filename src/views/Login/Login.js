import React from 'react';
import './Login.css';

const BASE_URL = 'https://share-iftar-staging.herokuapp.com/api';

class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value
    };

    console.log(await this.loginRequest(data));
    console.log("fsd");
  }

  async loginRequest(data) {
    return await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  render() {
    return (
      <div className="Login row">
        <div className="col-md-6">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group mt-4">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
