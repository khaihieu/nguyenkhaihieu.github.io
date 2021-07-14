import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <section className="banner-area relative" style={{minHeight: '1000px', background: 'url(img/elements/home-bg.jpg)'}}>
            <div className="overlay overlay-bg" />
            <div className="banner-content text-center" style={{top: '40%'}}>
              <h1>WELCOM TO MY WEBSITE</h1>
              <h2 style={{color: 'rgb(255, 187, 0)'}}>Im Khai Hieu, Nong Lam university student</h2>
              <h3>  <a href="/About" style={{textDecoration: 'none', color: 'white'}}>(more infor...)</a></h3>
              <p>
              </p>
            </div>
          </section>
        )
    }
}