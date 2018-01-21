import React, {Component} from 'react';
import {getTag, getDates} from '../util';

class Row extends Component {
  render() {
    const {
      name,
      image,
      open,
      close,
      tag,
      url,
      description
    } = this.props
    return (<div className="card flex-md-row mb-4 box-shadow h-md-250">
      <img className="card-img-left flex-auto d-none d-md-block" src={image} alt="Card image cap"/>
      <div className="card-body d-flex flex-column align-items-start">
        {getTag(tag)}
        <h3 className="mb-0">
          <a className="text-dark" href="#">{name}</a>
        </h3>
        {getDates(open, close)}
        <p className="card-text mb-auto">{description.slice(0,150) + '..'}</p>
        <a href="#" onClick={() => window.open(`${url}`, "_blank")}>Visit Groupbuy</a>
      </div>
    </div>);
  }
}

export default Row;
