import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/App.css";
import "../style/style.css";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light Nav-vertispace">
        <Link class="navbar-brand Nav-space" to="home">
          GoCart
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="men" className="nav-link Nav-space">
                Men
              </Link>
            </li>
            <li className="nav-item Nav-space">
              <Link className="nav-link" to="women">
                Women
              </Link>
            </li>
            <li className="nav-item Nav-space">
              <Link className="nav-link" to="kids">
                Kids
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit">
                Search
              </button>
            </form>
            <li className="nav-item Nav-space">
              <Link className="nav-link" to="login">
                Login
              </Link>
            </li>
            <li className="nav-item Nav-space">
              <Link className="nav-link" to="signup">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
