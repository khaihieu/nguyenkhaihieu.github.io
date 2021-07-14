import React, { Component } from 'react'

export default class MyPicture extends Component {
    render() {
        return (
            <div>
                 <section className="banner-area relative">
          <div className="overlay overlay-bg" />
          <div className="banner-content text-center">
            <h1>My Picture</h1>
            {/* <p>Elementum libero hac leo integer. Risus hac parturient feugiat litora <br /> cursus hendrerit bibendum per </p> */}
          </div>
        </section>
        {/*================ End banner Area =================*/}
        {/*================ Start Blog Post Area =================*/}
        <section className="whole-wrap">
          <div className="container">
            <div className="section-top-border">
              <h3>Image Gallery</h3>
              <div className="row gallery-item">
                <div className="col-md-4">
                  <a href="img/MU/oldTrabford3.jpg" className="img-gal">
                    <div className="single-gallery-image" style={{background: 'url(img/MU/oldTrabford3.jpg)'}} />
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="img/MU/ronaldo.jpg" className="img-gal">
                    <div className="single-gallery-image" style={{background: 'url(img/MU/ronaldo.jpg)'}} />
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="img/MU/oldTranford.jpg" className="img-gal">
                    <div className="single-gallery-image" style={{background: 'url(img/MU/oldTranford.jpg)'}} />
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="img/MU/oldTranford2.jpg" className="img-gal">
                    <div className="single-gallery-image" style={{background: 'url(img/MU/oldTranford2.jpg)'}} />
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="img/MU/oldTranford4.jpg" className="img-gal">
                    <div className="single-gallery-image" style={{background: 'url(img/MU/oldTranford4.jpg)'}} />
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="img/MU/sirAlex.jpg" className="img-gal">
                    <div className="single-gallery-image" style={{background: 'url(img/MU/sirAlex.jpg)'}} />
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="img/MU/mu.jpg" className="img-gal">
                    <div className="single-gallery-image" style={{background: 'url(img/MU/mu.jpg)'}} />
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="img/MU/beckKham.jpg" className="img-gal">
                    <div className="single-gallery-image" style={{background: 'url(img/MU/beckKham.jpg)'}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>

        )
    }
}