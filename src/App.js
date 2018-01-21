import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './Header'
import Navbar from './Navbar'
import GroupBuys from './groupbuys/GroupBuys'
import Vendors from './vendors/Vendors'

class App extends Component {
  render() {
    return (<div className="container">
      <Navbar/>
      <Switch>
        <Route path="/vendors" component={Vendors}/>
        <Route path="/" component={GroupBuys}/>
      </Switch>
    </div>);
  }
}

export default App;
