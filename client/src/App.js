import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Menu from './components/Menu';

import Home from './pages/Home';
import Squaregold from './pages/Squaregold';
import Tallgold from './pages/Tallgold';

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
        <Route exact path="/square" render={(props) => <Squaregold {...props} checkpage={this.pageissquare}/>} />
        <Route exact path="/tall" render={(props) => <Tallgold {...props} checkpage={this.pageissquare}/>} />
      </Switch>

      <Menu/>
      </div>
    );
  }
}

export default App;
