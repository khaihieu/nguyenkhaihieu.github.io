import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
            <section className="banner-area relative">
            <div className="overlay overlay-bg" />
            <div className="banner-content text-center">
              <h1>ABOUT</h1>
              <p>
              </p>
            </div>
          </section>
          <section className="contact-page-area section-gap" >
          <div className="container">
   
            <div className="about__container">
              <div className="avatarContainer">
                <div className="avatar__frame">
                  <img src="img/me.jpg" alt="img" />
                  <h1 className="myName">KHAI HIEU</h1>
                </div>
              </div>
              <div className="inforContainer">
                <div>
                  <h1>About</h1>
                </div>
                <div className="crossbar" />
                <div className="titles_infor">
                  <ul className="titles">
                    <li><strong>NAME:</strong></li>
                    <li><strong>DATE OF BIRD:</strong> </li>
                    <li><strong>EDUCATION:</strong> </li>
                    <li><strong>ADDRESS:</strong> </li>
                    <li><strong>EMAIL:</strong> </li>
                  </ul>
                  <ul className="infor">
                    <li><strong>Nguyen Khai Hieu</strong></li>
                    <li><strong>30/11/2001</strong> </li>
                    <li><strong>Nong Lam University</strong> </li>
                    <li><strong>Linh Trung, Thu Duc, Ho Chi Minh, Viet Nam</strong> </li>
                    <li><strong>19130071@st.hcmuaf.edu.vn</strong> </li>
                  </ul>
                </div>
          
                <div className="icon__container">
                  <div className="iccs">
                  <a href="https://www.facebook.com/hieu.khai.503/" target="_blank"><i className="fab fa-facebook icc" /></a>
                    
                  </div>
                  <div className="iccs">
                    <i className="fas fa-at icc" />
                  </div>
                  <div className="iccs">
                    <i className="fab fa-instagram icc" />
                  </div>
                  <div className="iccs">
                    <i className="fab fa-twitter icc" />
                  </div>
                </div>
              </div>
            </div>
          </div>
     
          </section>
          </div>
       
            )
        }
    }