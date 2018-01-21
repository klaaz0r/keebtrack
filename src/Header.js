import React, {Component} from 'react';
import './App.css';
import {getTag, getDates} from './util';

class Header extends Component {
  render() {
    //TODO make this nicer
    const items = this.props.items
    const item1 = items[0]
    const item2 = items[1]
    const item3 = items[2]
    return (<div className="container">
      <div style={{
          backgroundImage: `linear-gradient( rgba(33, 33, 33, 0.25), rgba(33, 33, 33, 0.25)), url(${item1.image})`
        }} className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">{item1.name}</h1>
          <p className="lead my-3">{item1.description}</p>
          <p className="lead mb-0">
            <a href="#" onClick={() => window.open(`${item1.url}`, "_blank")} className="text-white font-weight-bold">Visit Groupbuy</a>
          </p>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">{getTag(item2.tag)}</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">{item2.name}</a>
              </h3>
              {getDates(item2.open, item2.close)}
              <p className="card-text mb-auto">{item2.description.slice(0,50) + '..'}</p>
              <a href="#" onClick={() => window.open(`${item2.url}`, "_blank")}>Visit Groupbuy</a>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" src={item2.image} alt="Card image cap"/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-success">{getTag(item3.tag)}</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">{item3.name}</a>
              </h3>
              {getDates(item3.open, item3.close)}
              <p className="card-text mb-auto">{item3.description.slice(0,50) + '..'}</p>
              <a href="#" onClick={() => window.open(`${item3.url}`, "_blank")}>Visit Groupbuy</a>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" src={item3.image} alt="Card image cap"/></div>
        </div>
      </div>
    </div>);
  }
}

export default Header;
