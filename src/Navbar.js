import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (<div className="container">
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-1 text-center">
            <Link className="blog-header-logo text-dark" to="/">⌘keebtrack</Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <Link activeClassName="btn-secondary" className="btn btn-sm btn-outline-secondary" to="vendors">Vendor List</Link>
          </div>
        </div>
      </header>

    </div>);
  }
}

export default Navbar;
