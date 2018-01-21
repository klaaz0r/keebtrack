import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg'

class Navbar extends Component {
  render() {
    return (<div className="container">
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-1 text-center">
            <a className="blog-header-logo text-dark" href="#">⌘keebtrack</a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">

            <a className="btn btn-sm btn-outline-secondary" href="#">Vendor List</a>
          </div>
        </div>
      </header>


    </div>);
  }
}

export default Navbar;
