import React, { Component } from 'react'
import Lab2_Requirement from './Lab2_Requirement'

export default class Lab2copy extends Component {
    render() {
        return (
          <div>
    <section class="blog-post-area section-gap relative">
        <div class="container" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <div class="rows">
            <div className="container"><h2 style={{margin: '20px 0'}}>Lab 1</h2></div>
          <div id="exTab2" className="container" >	
            <ul className="nav nav-tabs">
              <li className="active">
                <a href="#1" data-toggle="tab">Requirement</a>
              </li>
              <li><a href="#2" data-toggle="tab">User scenario</a>
              </li>
              <li><a href="#3" data-toggle="tab">Implement</a>
              </li>
            </ul>
            <div className="tab-content "style={{padding: '0 10px'}} >
              <div className="tab-pane active" id={1}>
              <h4 style={{padding:'12px 0'}}><strong>1. Tạo ra một user scenario</strong></h4>
         
         <h4 style={{padding:'12px 0'}}><strong>2. Chọn 1 bước trong user scenario để thiết kế 1 form giao diện Web trên công cụ thiết kế đã chọn. Sau đó tạo ra file html tương ứng cho thiết kế này.</strong></h4>
       
         <h4 style={{padding:'12px 0'}}><strong>3. Upload lên Azure / github: trong file html có chèn hình ảnh của user scenario ở (1) và đường dẫn của file thiết kế ở (2).
      </strong></h4>
                     </div>
              <div className="tab-pane" id={2}>
              <div  style={{maxWidth: '100%'}}>
                  {/* <a href="img/user.png" className="img-gal"> */}
                    <div className="single-gallery-image" style={{background: 'url(img/user.png)', height:'600px'}} />
                  {/* </a> */}
                </div>
              </div>
              <div className="tab-pane" id={3}>
              <Lab2_Requirement/>
              </div>
            </div>
          </div>
          <hr />
      
            </div>
            </div>
            </section>
          
            </div>
        
        )
    }
}