import React, { Component } from 'react';
import { Login } from './components/login';
import { UserInfo } from './components/userinfo';
import SpaceXInfo from './components/space-x-info';

import { Provider } from 'react-redux';
import configureStore from './store/store';

class App extends Component {

  render() {

    let Store = configureStore();

    return (
      <Provider store={Store}>
        <div>
          <Login/>
          <UserInfo/>
          <SpaceXInfo/>
        </div>
      </Provider>
    );
  }
}

export default App;
