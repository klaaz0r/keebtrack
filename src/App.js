import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './Header'
import Navbar from './Navbar'
import GroupBuys from './groupbuys/GroupBuys'
import Vendors from './vendors/Vendors'

class App extends Component {
  constructor(props) {
    super(props);

    this.getInitialState = this.getInitialState.bind(this);
    this.selectList = this.selectList.bind(this);
    this.filterList = this.filterList.bind(this);

    this.state = {
      items: [],
      filtered: []
    };
  }

  filterList(event) {
    const updatedList = this.state.items.filter(function(item) {
      const keyword = event.target.value.toLowerCase()
      const name = item.name.toLowerCase()
      return name.includes(keyword)
    });
    this.setState({filtered: updatedList});
  }

  selectList(event) {
    const updatedList = this.state.items.filter(function(item) {
      const keyword = event.target.value.toLowerCase()
      if (keyword === 'default') {
        return true;
      }
      const name = item.tag.toLowerCase()
      return name === keyword
    });
    this.setState({filtered: updatedList});
  }

  getInitialState() {
    return fetch('/groupbuys.json').then((resp) => resp.json())
  }

  componentWillMount() {
    this.getInitialState().then(items => this.setState({filtered: items, items: items}))
  }

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
