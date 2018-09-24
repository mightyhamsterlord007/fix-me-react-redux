import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import stores from './stores';
import { Home, Navbar } from './components/layout/';

import { Register, Login } from './components/containers';


class App extends Component {
  render() {
    return (
      <Provider store={stores}>
       <Router>
        <div>
        <Navbar />
       <div className="App">
         <Route exact path='/' component={Home} />
         <Route exact path='/register' component={Register} />
         <Route exact path='/Login' component={Login} />
        </div>
        </div>
       </Router>
      </Provider>
    );
  }
}

export default App;
