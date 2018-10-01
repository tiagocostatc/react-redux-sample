import React, { Component } from 'react';
import { Login } from './components/login';
import { UserInfo } from './components/userinfo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      company: ""
    }
  }

  updateUsername = (username) => {
    this.setState({username: username});
  }

  updateCompany = (company) => {
    this.setState({company: company});
  }

  render() {
    return (
      <div>
        <Login updateUsername={this.updateUsername} updateCompany={this.updateCompany}/>
        <UserInfo username={this.state.username} company={this.state.company}/>
      </div>
    );
  }
}

export default App;
