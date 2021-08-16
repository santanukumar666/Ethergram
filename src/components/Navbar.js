import React, { Component } from 'react';
import Identicon from 'identicon.js';


class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark  fixed-top p-0 shadow" style={{ background: '#99DCE2' }}>
        <a
          className="navbar-brand ml-5"



        >

          <p style={{ color: 'black', fontFamily: 'cursive', fontSize: '45px', marginLeft: '36rem' }}><b>ETHERGRAM</b></p>
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
            {this.props.account
              ? <img
                className='ml-2'
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
              />
              : <span></span>
            }
          </li>
        </ul>
      </nav >
    );
  }
}

export default Navbar;