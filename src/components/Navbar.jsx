import React, { Component } from 'react';
import { Link } from '@reach/router';

class Navbar extends Component {
  state = { clicked: false }

  render() {
    return (
      <div className="navbar" >
        <nav className="nav">
          <Link className="links" to='/about'>About </Link>{' '}
          <Link className="links" to='/resume' >Resume </Link>
          <Link className="links" to='/apps'>Applications </Link>
          <Link className="links" to='/contact'>Contact </Link>
        </nav>
      </div>
    )
  }
}

export default Navbar;