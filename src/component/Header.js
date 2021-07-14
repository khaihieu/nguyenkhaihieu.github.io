import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="header-area" style={{position: "fixed"}}>
        <div className="container">
          <div className="header-wrap">
            <div className="header-top d-flex justify-content-between align-items-lg-center navbar-expand-lg">
              <div className="col menu-left">
                <a className="active" href="/" style={{textDecoration: 'none'}}>
                  HOME
                </a>
                <a href="/About" style={{textDecoration: 'none'}}>ABOUT</a>
                <a href="/MyPicture" style={{textDecoration: 'none'}}>MY PICTURE</a>
              </div>
              <div className="col-5 text-lg-center mt-2 mt-lg-0">
                <span className="logo-outer">
                  <span className="logo-inner">
                    <a href="/">
                      <img className="mx-auto" src="img/logoNKH.png" alt="" />
                    </a>
                  </span>
                </span>
              </div>
              <nav className="col navbar navbar-expand-lg justify-content-end">
                {/* Toggler/collapsibe Button */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsibleNavbar"
                >
                  <span className="lnr lnr-menu" />
                </button>
                {/* Navbar links */}
                <div
                  className="collapse navbar-collapse menu-right"
                  id="collapsibleNavbar"
                >
                  <ul className="navbar-nav justify-content-center w-100">
                    <li className="nav-item hide-lg">
                      <a className="nav-link" href="/SS">
                        HOME
                      </a>
                    </li>
                    <li className="nav-item hide-lg">
                      <a className="nav-link" href="/About">
                        ABOUT
                      </a>
                    </li>
                    {/* Dropdown */}
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbardrop"
                        data-toggle="dropdown"
                      >
                        LABS
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/Lab1">
                          LAB 1
                        </a>
                        <a className="dropdown-item" href="/Lab2">
                          LAB 2
                        </a>
                        <a className="dropdown-item" href="/Lab3">
                          LAB 3
                        </a>
                        <a className="dropdown-item" href="/Lab4">
                          LAB 4
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/Result">
                        RESULT
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/Contact">
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
