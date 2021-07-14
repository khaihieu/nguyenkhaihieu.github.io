import React, { Component } from 'react'
import Lab1 from './Lab1';
import Lab3_Exercise1 from './Lab3_Exercise1';
import Lab2_Requirement from './Lab2_Requirement';
import Lab3_Exercise2 from './Lab3_Exercise2';

export default class Lab3 extends Component {
    render() {
        return (
          <div>
    <section class="blog-post-area section-gap relative" >
        <div class="container" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <div class="rows">
            <div className="container"><h2 style={{margin: '20px 0'}}>Lab 3</h2></div>
          <div id="exTab2" className="container" >	
            <ul className="nav nav-tabs">
              <li className="active">
                <a href="#1" data-toggle="tab">Requirement</a>
              </li>
              <li><a href="#2" data-toggle="tab">Exercise 1</a>
              </li>
              <li><a href="#3" data-toggle="tab">Exercise 2</a>
              </li>
            </ul>
            <div className="tab-content "style={{padding: '0 10px'}} >
              <div className="tab-pane active" id={1}>
                <h4 style={{marginTop: '12px'}}><strong>1. Trong menu Labs, tạo 1 menu Lab3 (file lab3.html) sau đó tạo 2 tab Ex1, Ex2.</strong></h4>
                    <p style={{padding: '0 20px'}}><strong> ➡ Ex1:</strong> Thiết kế một trang Web đơn giản sử dụng mẫu F-pattern => chuyển sang html (ex1.html).</p>
                   <p style={{padding: '0 20px'}}><strong> ➡ Ex2: </strong>Thiết kế một trang Web sử dụng mẫu Z-pattern =>chuyển sang html (ex2.html).</p>
                <h4><strong>2.  Với cả Ex1, Ex2: Tạo 2 tab Design và Implementation:</strong></h4>
                   <p style={{padding: '0 20px'}}><strong> ➡ Design:</strong> chụp lại hình ảnh để có cái nhìn tổng quan về file thiết kế, có nút Download để download file thiết kế về nếu muốn.</p>
                   <p style={{padding: '0 20px'}}><strong> ➡ Implementation:  </strong> nội dung phần hiện thực trên html.</p>
            
                <h4><strong>3. Upload lên Azure / Github.</strong></h4>
                
                     </div>
              <div className="tab-pane" id={2}>
              <Lab3_Exercise1/>
              </div>
              <div className="tab-pane" id={3}>
             <Lab3_Exercise2/>
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