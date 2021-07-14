import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
        <section className="banner-area relative">
          <div className="overlay overlay-bg" />
          <div className="banner-content text-center">
            <h1>Contact Me</h1>
            <p>
            </p>
          </div>
        </section>
        {/*================ End banner Area =================*/}
        {/* Start contact-page Area */}
        <section className="contact-page-area section-gap">
          <div className="container">
            <div className="row">
              <div className="map" style={{marginTop: '-93px'}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2589225125566!2d106.78567241472693!3d10.867900692259491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2zxJDhuqFpIEjhu41jIE7DtG5nIEzDom0!5e0!3m2!1svi!2s!4v1618584969016!5m2!1svi!2s" width={1140} height={370} style={{border: 0}} allowFullScreen loading="lazy" />
              </div>
              <div className="col-lg-4 d-flex flex-column address-wrap">
                <div className="single-contact-address d-flex flex-row">
                  <div className="icon"><span className="lnr lnr-home" /></div>
                  <div className="contact-details">
                    <h5>Thu Duc, Ho Chi Minh City</h5>
                    <p>1A Highway, Quarter 6, Linh Trung</p>
                  </div>
                </div>
                <div className="single-contact-address d-flex flex-row">
                  <div className="icon">
                    <span className="lnr lnr-phone-handset" />
                  </div>
                  <div className="contact-details">
                    <h5>(+84) 326491866</h5>
                    <p>Mon to Fri 9am to 6 pm</p>
                  </div>
                </div>
                <div className="single-contact-address d-flex flex-row">
                  <div className="icon"><span className="lnr lnr-envelope" /></div>
                  <div className="contact-details">
                    <h5>19130071@st.hcmuaf.edu.vn</h5>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <form className="form-area contact-form text-right" id="myForm" action="mail.php" method="post">
                  <div className="row">
                    <div className="col-lg-6 form-group">
                      <input name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" className="common-input mb-20 form-control" required type="text" />
                      <input name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" className="common-input mb-20 form-control" required type="email" />
                      <input name="subject" placeholder="Enter subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter subject'" className="common-input mb-20 form-control" required type="text" />
                    </div>
                    <div className="col-lg-6 form-group">
                      <textarea className="common-textarea form-control" name="message" placeholder="Enter Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Messege'" required defaultValue={""} />
                    </div>
                    <div className="col-lg-12">
                      <div className="alert-msg" style={{textAlign: 'left'}} />
                      <button className="primary-btn text-uppercase" style={{float: 'right'}}>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div> 
        )
    }
}