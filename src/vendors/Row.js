import React, {Component} from 'react';
import {getRegion} from '../util';

class Row extends Component {
  render() {
    const {
      name,
      logo,
      status,
      description,
      region,
      url
    } = this.props
    return (<div className="card flex-md-row mb-4 box-shadow h-md-150">
      <div className="card-body d-flex flex-column align-items-start">
        {getRegion(region)}
        <h3 className="mb-0">
          <p className="text-dark" href="#">{name}</p>
        </h3>
        <p className="card-text mb-auto">{description}</p>
        <a href="#" onClick={() => window.open(`${url}`, "_blank")}>Visit website</a>
      </div>
    </div>);
  }
}

export default Row;
