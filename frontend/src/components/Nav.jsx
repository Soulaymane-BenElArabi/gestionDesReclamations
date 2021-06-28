import React, { Component } from "react";
export default class Nav extends Component {
  render() {
    return (
      <div id="menu">
        <nav className="navbar-wrapper navbar-default" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-themers"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand site-name" href="/">
                <img src="../assets/images/ll.png" alt="logo"></img>
              </a>
            </div>

            <div
              id="navbar-scroll"
              className="collapse navbar-collapse navbar-themers navbar-right"
            >
              <ul className="nav navbar-nav">
                <li>
                  <a href="https://instagram.com/">About</a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
