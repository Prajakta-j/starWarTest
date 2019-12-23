import React from 'react';
import './Header.css';
import logo from './images/menu-1.png';
import fullscreen from './images/menu-fullscren.png';
import comment from './images/comment.png';


export default class Header extends React.Component {


  render() {
    return (

      <nav className="navbar navbar-default menu-default" role="navigation">
      <div>
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div className="navbar-brand navbar-brand-centered menu-brand">StarWars Test</div>
      </div>

      <div className="collapse navbar-collapse" id="navbar-brand-centered">
        <ul className="nav navbar-nav menu-left">
          <li><a href="#"><img src={logo} alt=""/></a></li>
          <li><a href="#"><img src={comment} alt=""/></a></li>

        </ul>
        <ul className="nav navbar-nav navbar-right menu-right">
          <li><a href="#" className="q-help">?</a></li>
          <li><a href="#" className="menu-login">Log in or Create Account</a></li>
          <li>
            <div className="dropdown">
              <button className="dropdown-toggle drop-100" type="button" data-toggle="dropdown">100%
              <span className="caret"></span></button>
              <ul className="dropdown-menu">
                <li><a href="#">100% display full size</a></li>
                <li><a href="#">Fit - Scale down to fit</a></li>
                <li><a href="#">Fill - Scale down or up to fill</a></li>
                <li><a href="#">Width - Scale down to fit width</a></li>
              </ul>
            </div></li>
          <li><a href="#" className="fullscreen"><img src={fullscreen} /></a></li>
        </ul>
      </div>
    </div>
  </nav>
    );
  }

}
