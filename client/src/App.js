import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Home from './pages/Home';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
    
     }
  }

  render() {


    return (
      <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} checkpage={this.pageishome}/>} />
      </Switch>


      </div>
    );
  }
}

export default App;
