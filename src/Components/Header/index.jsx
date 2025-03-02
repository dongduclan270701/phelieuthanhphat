import React, { memo } from 'react'
import 'assets/scss/header.scss'
import signature from 'assets/images/logo.png'
import Zalo from 'assets/images/zalo-svgrepo-com.svg'
import Phone from 'assets/images/phone-call-svgrepo-com.svg'
const Index = () => {
    const formatter = new Intl.NumberFormat('en-US')

    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const zaloLink = isIOS ? 'zalo://qr/p/oy7hpunuybc0' : isAndroid ? 'https://zaloapp.com/qr/p/oy7hpunuybc0' : 'zalo://conversation?phone=0928794999';
    return (
        <>
            <div className={isIOS ? 'hotline-icon-one-ios' : isAndroid ? 'hotline-icon-one-android' : 'hotline-icon-one-pc'}>
                <a href={zaloLink}>
                    <img src={Zalo} className='hotline-icon-svg' alt="Logo" />
                </a>
            </div>
            <div className='hotline-icon-two'>
                <a href="tel:0928794999"><img src={Phone} className='hotline-icon-svg' alt="Logo" /></a>
            </div>
            <div className=''>
                <style>
                    {`
          @import url("https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap");

          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: "Play", sans-serif;
          }
          
          body {
              font-size: 16px;
              margin: auto;
              color: black;
          }
          
          .play-regular {
              font-family: "Play", sans-serif;
              font-weight: 400;
              font-style: normal;
          }
          
          .play-bold {
              font-family: "Play", sans-serif;
              font-weight: 700;
              font-style: normal;
              letter-spacing: 1px;
          }
           
        `}
                </style>
                <div className='header-sell-website'>
                    <nav className="navbar-sell-website play-bold">
                        <a href='/' className="logo">
                            <img src={signature} alt="logo" />
                            <div className="name">
                                <div className="abv">Thành Phát</div>
                                <div className="content">Phế liệu & xử lý môi trường</div>
                            </div>
                        </a>
                        <a href='/' className="logo-res">
                            <img src={signature} alt="logo" />
                        </a>
                        <ul className='links'>
                            <li >Thu mua phế liệu hcm & các tỉnh lân cân | giá cao nhất</li>
                        </ul>
                        <a href="tel:0928794999" className="login-btn" style={{ textDecoration: 'none', color: 'white' }}><i className='fa fa-phone' style={{ color: '#ff9900' }}></i> 0928794999</a>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default memo(Index);
