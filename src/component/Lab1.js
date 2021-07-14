import React, { Component } from 'react'
import Lab1_Requirement from './Lab1_Requirement'

export default class Lab1 extends Component {
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
              <li><a href="#2" data-toggle="tab">Design</a>
              </li>
              <li><a href="#3" data-toggle="tab">Implement</a>
              </li>
            </ul>
            <div className="tab-content "style={{padding: '0 10px'}} >
              <div className="tab-pane active" id={1}>
                <h4><strong>1. Yêu cầu</strong></h4>
                <p style={{padding: '0 20px'}}> Chọn 1 đối tượng bất kỳ trong thế giới thực, ví dụ như lớp môn học, giảng viên 
                  ,… Sau đó thiết kế chức năng Quản lý đối tượng đó trên html bao gồm các tính năng thêm, sửa, xóa,
                   tìm kiếm cho đối tượng đó. Ví dụ, làm chức năng Quản lý Sinh viên, bao gôm tính năng thêm, sửa, xóa, 
                   tìm kiếm. Chú ý: Các thành viên trong nhóm không được chọn các đối tượng giống nhau.</p>
                   <h4><strong>2. Tạo 1 menu Lab1 trên website cá nhân (sử dụng thẻ a trong html) bao gồm các tab sau:</strong></h4>
                   <p style={{padding: '0 20px'}}><strong> ➡ Tab Requirement:</strong> copy lại nội dung của phần 1 ở trên (Yêu cầu) vào đây (và trình bày lại cho đẹp)</p>
                   <p style={{padding: '0 20px'}}><strong> ➡ Tab Design: </strong>để link tới các file sau đây:</p>
                   <p style={{padding: '0 60px'}}> • Thiết kế trên giấy (chụp lại ảnh)</p>
                   <p style={{padding: '0 60px'}}> • Chụp lại màn hình đã thiết kế trên html</p>
                   <p style={{padding: '0 20px'}}><strong> ➡ Tab Implement: </strong>là trang html của chức năng Quản lý đó</p>
                   <h4><strong>3. Sau khi làm xong, upload toàn bộ lên website cá nhân trên firebase.</strong></h4>
                     </div>
              <div className="tab-pane" id={2}>
              <div className="col-md-4" style={{maxWidth: '47%'}}>
                  <a href="img/d1.jpg" className="img-gal">
                    <div className="single-gallery-image" style={{background: 'url(img/d1.jpg)', height:'350px',border: '10px'}} />
                  </a>
                  <p style={{margin: '8px 30%'}}>(Ảnh thiết kế trên giấy)</p>
                </div>
                <div className="col-md-4" style={{maxWidth: '47%'}}>
                  <a href="img/elements/requi1.png" className="img-gal">
                    <div className="single-gallery-image" style={{background: 'url(img/elements/requi1.png)', height:'350px',border: '10px'}} />
                  </a>
                  <p style={{margin: '8px 28%'}}>(Ảnh thiết kế trên html)</p>
                </div>
              </div>
              <div className="tab-pane" id={3}>
              <Lab1_Requirement/>
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