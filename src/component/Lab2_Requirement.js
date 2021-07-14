import React, { Component } from 'react'
import Lab1_Requirement from './Lab1_Requirement'

export default class Lab1 extends Component {
    render() {
        return (
            <div className="container--lab">
            <div className="image--lab-item">
              <span className="material-icons" style={{transform: 'rotate(270deg)'}}>
                arrow_forward_ios
              </span>
              <div className="image--lab-item1">
                <img src="https://product.hstatic.net/1000230642/product/dsmh03800xdg-1_d9ef6bc6318f440a9726c5a513b6942b_1024x1024.jpg" className="procduct-item" />
              </div>
              <div className="image--lab-item1">
                <img src="https://product.hstatic.net/1000230642/product/dsmh03800xdg-3_11a14a2d2cd64c679179fb2a4a227031_1024x1024.jpg" className="procduct-item" />
              </div>
              <div className="image--lab-item1">
                <img src="https://product.hstatic.net/1000230642/product/dsmh03800xdg-4_b02878e0640243e3802f7a7b147f3b20_1024x1024.jpg" className="procduct-item" />
              </div>
              <div className="image--lab-item1">
                <img src="https://product.hstatic.net/1000230642/product/dsmh03800xdg-5_ab3e89d2a7604553af3f12d00119ae89_1024x1024.jpg" className="procduct-item" />
              </div>
              <div className="image--lab-item1">
                <img src="https://product.hstatic.net/1000230642/product/dsmh03800xdg-2_9073e429275543f29d36b397aeb85572_1024x1024.jpg" className="procduct-item" />
              </div>
              <span className="material-icons" style={{transform: 'rotate(90deg)'}}>
                arrow_forward_ios
              </span>
            </div>
            <div className="wall" />
            <div className="image--lab">
              <img src="https://product.hstatic.net/1000230642/product/dsmh03800xdg-2_9073e429275543f29d36b397aeb85572_1024x1024.jpg" className="procduct-view" />
            </div>
            <div className="infor__procduct">
              <h1 className="product__name">Giày Bóng Đá Nam Biti's Hunter Football High-Top Admiral Blue</h1>
              <div className="product__sku">
                Mã sản phẩm:
                <span>DSMH03800XDG39</span>
              </div>
              <div className="price__product">
                <span className="price-m-r-10">650,000 ₫</span>
                <div className="vat">*Đã bao gồm VAT</div>
              </div>
              <div className="crossbar" />
              <div className="product__color">
                <label htmlFor className="hheader" style={{fontSize: '16px'}}>Màu sắc</label>
                <img src="https://product.hstatic.net/1000230642/product/dsmh03800xdg-2_9073e429275543f29d36b397aeb85572_icon.jpg" alt="" className="color__image" />
                <span className="box__color">
                  {/* <img src="https://product.hstatic.net/1000230642/product/dsmh03800xdg-2_9073e429275543f29d36b397aeb85572_icon.jpg" alt=""> */}
                  Xanh dương
                </span>
              </div>
              <div className="product__color">
                <label htmlFor className="hheader">Kích thước</label>
                <span className="boxx" style={{backgroundColor: 'black', color: 'white'}}>39</span>
                <span className="boxx">40</span>
                <span className="boxx">41</span>
                <span className="boxx">42</span>
                <span className="boxx">43</span>
                <span className="boxx">44</span>
              </div>
              <div className="product__color">
                <label htmlFor className="hheader">Còn hàng</label>
                <span style={{lineHeight: '28px'}}><strong>19</strong>&nbsp; Sản phẩm</span>
              </div>
              <div className="btn__sell__enjoy">
                <button className="btn_btn btn__sell">MUA NGAY</button>
                <button className="btn_btn btn__enjoy"><i className="fas fa-heart" />&nbsp; 
                  Thêm vào yêu thích</button>
              </div>
              <div className="crossbar" style={{marginTop: '25px', marginBottom: '15px'}} />
              <div className="payment__product">
                <div style={{marginTop: '12px'}}>Tư vấn: 0123456789</div>
                <div className="payment">
                  <img src="https://theme.hstatic.net/1000230642/1000679613/14/zalopay.png?v=911" alt="" className="pppp" />
                  <img src="https://theme.hstatic.net/1000230642/1000679613/14/visa.png?v=911" alt="" className="pppp" />
          
                  <img src="https://theme.hstatic.net/1000230642/1000679613/14/cod.png?v=911" alt="" className="pppp" />
                </div>
              </div>
              <div>
                <span style={{fontSize: '20px'}}>Đánh giá sản phẩm</span>
                <div className="evaluate">
                  <div className="danhGia" style={{display: 'flex'}}>
                    {/* <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i> */}
                    <div className="start_evaluate"> <i className="far fa-star" /></div>
                    <div className="start_evaluate"> <i className="far fa-star" /></div>
                    <div className="start_evaluate"> <i className="far fa-star" /></div>
                    <div className="start_evaluate"> <i className="far fa-star" /></div>
                    <div className="start_evaluate"> <i className="far fa-star" /></div>
                  </div>
                  <button className="write__evaluate">Viết đánh giá</button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}