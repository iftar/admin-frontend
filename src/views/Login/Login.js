import React from 'react';
import './Login.css';
import AuthService from '../../services/AuthService';

class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.authService = new AuthService();
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value
    };

    let request = await this.authService.login(data);

    if (request.data.status === "success" && request.data.data.type === "admin") {
      this.authService.setUserToken(request.data.data.token);
      window.location.href = "/";
    } else {
      alert('Login failed');
    }
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
