import React, { Component } from 'react'
import Lab1_Requirement from './Lab1_Requirement'

export default class Lab4 extends Component {
    render() {
        return (
          <div>
    <section class="blog-post-area section-gap relative">
        <div class="container" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <div class="rows">
            <div className="container"><h2 style={{margin: '20px 0'}}>Lab 4</h2></div>
          <div id="exTab2" className="container" >	
            <ul className="nav nav-tabs" style={{marginBottom: '30px'}}>
              <li className="active">
                <a href="#1" data-toggle="tab">Requirement</a>
              </li>
              <li><a href="#2" data-toggle="tab">Design</a>
              </li>
              <li><a href="#3" data-toggle="tab">Implement</a>
              </li>
            </ul>
            <div className="tab-content "style={{padding: '0 10px'}} >
              <div className="tab-pane active" id={1}>
                <h4 style={{marginTop: '17px'}}><strong>1. Tạo một trang Web có nội dung bất kỳ, sử dụng linh hoạt tất cả những phần sau:</strong></h4>
                <p style={{padding: '0 20px'}}> • Input Controls</p>
                <p style={{padding: '0 20px'}}> • Navigation</p>
                <p style={{padding: '0 20px'}}> • Animations</p>
                <p style={{padding: '0 20px'}}> • Default Settings</p>
                <p style={{padding: '0 20px'}}> • Guided Actions</p>
                   <h4><strong>2. Có biểu mẫu liên hệ</strong></h4>
                   
                     </div>
              <div className="tab-pane" id={2}>
              <div className="single-gallery-image" style={{background: 'url(img/lab4.png)',width:'1000px' ,height:'480px'}} />
              </div>
              <div className="tab-pane" id={3}>
              <a href="lab4-w\index.html" target="_blank" className="ex1" style={{color: '#fff', textDecoration: 'none',margin: '0 420px'}}> Go to Implement</a>
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