import React, {Component} from 'react';
import '../App.css';
import Row from './Row'
import Header from '../Header'

class GroupBuys extends Component {
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
      {
        this.state.items.length === 0
          ? null
          : <Header items={this.state.items.filter(({promoted}) => promoted)}/>
      }
      <h3 className="pb-3 mb-4 font-italic border-bottom">
        Active Group Buys
      </h3>
      <form className="search">
        <div className="form-row">
          <div className="col-7">
            <input type="text" className="form-control" placeholder="Search.." onChange={this.filterList}/>
          </div>
          <div className="col">
            <select onChange={this.selectList} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option defaultValue="default" value="default">Choose...</option>
              <option value="Keyboard">Keyboard</option>
              <option value="Keycaps">Keycaps</option>
              <option value="Parts">Parts</option>
            </select>
          </div>
        </div>
      </form>
      <div>
        {
          this.state.filtered.map(({
            name,
            image,
            open,
            close,
            tag,
            url,
            description
          }, idx) => {
            return <Row key={idx} name={name} tag={tag} image={image} url={url} description={description} open={open} close={close}/>
          })
        }
      </div>
    </div>);
  }
}

export default GroupBuys;
