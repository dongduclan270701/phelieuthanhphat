import React from 'react';
import 'assets/scss/footer.scss'
import Logo from 'assets/images/logo.png'
const Index = () => {
    return (
        <div className='footer-kld0203'>
            <div className="section-1-kld0203">
                <div className="col-lg-4 felm">
                    <div className="bxil">
                        <img src={Logo} alt="" />
                        <div className='name'>
                            <div className="abv">Thành Phát</div>
                            <div className="blw">Phế liệu & xử lý môi trường</div>
                        </div>
                    </div>
                    <div className="content">Công ty TNHH đầu tư chuyển giao công nghệ Thành Phát tự hào là đơn vị hàng đầu trong lĩnh vực thu mua phế liệu với mức giá cực kỳ hấp dẫn</div>
                    <div className="content">Chúng tôi chuyên thu mua phế liệu sắt, đồng, nhôm, chì, hợp kim, nhựa,... tại TPHCM & các tỉnh thành miền Nam lân cận</div>
                </div>
                <div className="col-lg-4 selm">
                    <div className="title">Công ty tnhh đầu tư chuyển giao công nghê thành phát</div>
                    <div className="bxf">
                        <i className='fa fa-home'></i>
                        <div className="text">Địa chỉ: 28/43 Đường số 18, P.Bình Hưng Hoà, Q.Bình Tân, TP.HCM</div>
                    </div>
                    <div className="bxf">
                        <i className='fa fa-phone'></i>
                        <div className="text">Hotline: 0928794999</div>
                    </div>
                    <div className="bxf">
                        <i className='fa fa-phone'></i>
                        <div className="text">Hotline: 0908766386</div>
                    </div>
                    <div className="bxf">
                        <i className='fa fa-globe'></i>
                        <div className="text">Website: phelieuthanhphat.com</div>
                    </div>
                </div>
                <div className="col-lg-3 telm">
                    <div className="title">Dịch vụ thu mua phế liệu</div>
                    <div className="bxf">
                        <div className="text">Phế liệu NHÔM</div>
                        <div className="text">Phế liệu ĐỒNG</div>
                        <div className="text">Phế liệu SẮT THÉP</div>
                        <div className="text">Phế liệu INOX</div>
                        <div className="text">Phế liệu CHÌ</div>
                        <div className="text">Phế liệu NIKEN</div>
                        <div className="text">Phế liệu HỢP KIM</div>
                        <div className="text">Phế liệu THIẾC</div>
                        <div className="text">THU MUA VẢI</div>
                        <div className="text">LINH KIỆN ĐIỆN TỬ CŨ</div>
                    </div>

                </div>

            </div>
            <hr />
            <div className="section-2-kld0203">
                ©2024 All rights reserved Phế Liệu Thành Phát
            </div>
            <div className="section-2-kld0203">
            <span className='end-footer' style={{paddingBottom:0, fontSize:'0.8rem'}}><p>WEBSITE CREATED BY <a href="http://kassdev.com" style={{color:'black', textTransform:"uppercase"}} target="_blank" rel="noopener noreferrer">kassdev.com</a></p></span>
            </div>
        </div>
    );
}

export default Index;
