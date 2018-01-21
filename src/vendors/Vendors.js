import React, {Component} from 'react';
import '../App.css';
import Row from './Row'

class Vendors extends Component {
  constructor(props) {
    super(props);

    this.getInitialState = this.getInitialState.bind(this);

    this.state = {
      items: []
    };
  }

  getInitialState() {
    return fetch('/vendors.json').then((resp) => resp.json())
  }

  componentWillMount() {
    this.getInitialState().then(items => this.setState({items: items}))
  }

  render() {
    return (<div className="container">
      <h3 className="pb-3 mb-4 font-italic border-bottom">
        Vendors
      </h3>
      <div>
        {
          this.state.items.map(({
            name,
            logo,
            status,
            description,
            region,
            url
          }, idx) => {
            return <Row key={idx} name={name} region={region} logo={logo} url={url} description={description} status={status}/>
          })
        }
      </div>
    </div>);
  }
}

export default Vendors;
