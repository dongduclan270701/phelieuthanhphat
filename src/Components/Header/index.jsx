import React, { useState, useEffect, memo } from 'react'
import 'assets/scss/header.scss'
import signature from 'assets/images/logo.png'
import Zalo from 'assets/images/zalo-svgrepo-com.svg'
import Phone from 'assets/images/phone-call-svgrepo-com.svg'
const Index = () => {
    const [isMenu, setIsMenu] = useState(false)
    const scrollTo = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const [isDropdownMenu, setIsDropdownMenu] = useState(false)
    const [scrollEffect, setScrollEffect] = useState({ opacity: 1, scale: 1, height: '60px' });
    const [scrollEffect1, setScrollEffect1] = useState({ opacity: 1, scale: 1, height: '50px' });
    useEffect(() => {
        const handleScroll = () => {
            let scrollY = window.scrollY;
            let maxScroll = 150; // Từ 0px - 150px sẽ áp dụng hiệu ứng
            let opacity = Math.max(1 - scrollY / maxScroll, 0); // Giảm dần opacity
            let scale = Math.max(1 - (scrollY / maxScroll) * 0.2, 0.8); // Thu nhỏ từ 1 -> 0.8
            let height = `${Math.max(50 - (scrollY / maxScroll) * 50, 0)}px`;
            let padding = `${Math.max(10 - (scrollY / maxScroll) * 10, 0)}px`;
            setScrollEffect({ opacity, scale, height, padding });
            let height1 = `${Math.max(50 - (scrollY / maxScroll) * 30, 0)}px`;
            setScrollEffect1({ opacity, scale, height1, padding })
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const resetHeaderNav = () => {
        setIsDropdownMenu(false)
        setIsMenu(false)
    }
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const zaloLink = isIOS ? 'zalo://qr/p/1n5nuejq36yqe' : isAndroid ? 'https://zaloapp.com/qr/p/1n5nuejq36yqe' : 'zalo://conversation?phone=0975480012';
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
                        <div className="logo">
                            <i onClick={() => { setIsMenu(!isMenu) }} className='fa fa-bars'></i>
                            <img src={signature} alt="logo" />
                            <div className="name">
                                <div className="abv">Thành Phát</div>
                                <div className="content">Phế liệu & xử lý môi trường</div>
                            </div>
                        </div>
                        <ul
                            className="links"
                            style={{
                                opacity: scrollEffect.opacity,
                                transform: `scale(${scrollEffect.scale})`,
                                height: scrollEffect.height,
                                paddingTop: scrollEffect.padding,
                                paddingBottom: scrollEffect.padding,
                                marginTop: scrollEffect.padding,
                                marginBottom: scrollEffect.padding,
                                overflow: 'hidden',
                                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out, height 0.3s ease-out, padding 0.3s ease-out, margin 0.3s ease-out'
                            }}
                        >
                            <li>Thu mua phế liệu HCM & các tỉnh lân cận | Giá cao nhất</li>
                        </ul>
                        <a
                            href="tel:0928794999"
                            className="login-btn"
                            style={{
                                opacity: scrollEffect1.opacity,
                                transform: `scale(${scrollEffect1.scale})`,
                                height: scrollEffect1.height1,
                                paddingTop: scrollEffect1.padding,
                                paddingBottom: scrollEffect1.padding,
                                overflow: 'hidden',
                                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out, height 0.3s ease-out, padding 0.3s ease-out, margin 0.3s ease-out',
                                textDecoration: 'none',
                                color: 'white'
                            }}
                        >
                            <i className="fa fa-phone" style={{ color: '#ff9900' }}></i> 0928794999
                        </a>

                    </nav>
                </div>

            </div>
            {isMenu && <div className='overlay' onClick={() => setIsMenu(false)}></div>}
            <div className={isMenu ? 'section-nav-mobile-box active' : 'section-nav-mobile-box deactivate'} >
                <div className='section-nav-mobile'>
                    <div className="image">
                        <img src={signature} alt="" />
                    </div>
                </div>
                <div className='section-nav-mobile'>
                    <a href='#home' onClick={() => { scrollTo('home'); setIsMenu(!isMenu) }}>Trang chủ</a>
                </div>
                <div className='section-nav-mobile'>
                    <a href='#bao-gia' onClick={() => { scrollTo('#bao-gia'); setIsMenu(!isMenu) }}>Bảng giá</a>
                </div>
                <div className='section-nav-mobile'>
                    <a href='#ve-chung-toi' onClick={() => { scrollTo('ve-chung-toi'); setIsMenu(!isMenu) }}>Về chúng tôi</a>
                </div>
                <div className='section-nav-mobile'>
                    <a href='#ly-do' onClick={() => { scrollTo('ly-do'); setIsMenu(!isMenu) }}>Lý do chọn chúng tôi</a>
                </div>
                <div className='section-nav-mobile' onClick={() => setIsDropdownMenu(!isDropdownMenu)}>
                    <span >Loại phế liệu</span>
                    <i className={isDropdownMenu ? 'fa fa-chevron-right active-fa-chevron-right' : 'fa fa-chevron-right deactivate-fa-chevron-right'}></i>
                </div>
                <ul className={`sub-menu-kld0203 ${isDropdownMenu ? 'open' : ''}`}>
                    <li><a onClick={() => { scrollTo('kieu-loai'); resetHeaderNav() }}><div>Phế liệu nhôm</div> <span><i className='fa'></i></span></a></li>
                    <li><a onClick={() => { scrollTo('kieu-loai'); resetHeaderNav() }}><div>Phế liệu đồng</div> <span><i className='fa'></i></span></a></li>
                    <li><a onClick={() => { scrollTo('kieu-loai'); resetHeaderNav() }}><div>Phế liệu sắt thép</div> <span><i className='fa'></i></span></a></li>
                    <li><a onClick={() => { scrollTo('kieu-loai'); resetHeaderNav() }}><div>Phế liệu inox</div> <span><i className='fa'></i></span></a></li>
                    <li><a onClick={() => { scrollTo('kieu-loai'); resetHeaderNav() }}><div>Phế liệu chì</div> <span><i className='fa'></i></span></a></li>
                    <li><a onClick={() => { scrollTo('kieu-loai'); resetHeaderNav() }}><div>Phế liệu niken</div> <span><i className='fa'></i></span></a></li>
                    <li><a onClick={() => { scrollTo('kieu-loai'); resetHeaderNav() }}><div>Phế liệu hợp kim</div> <span><i className='fa'></i></span></a></li>
                    <li><a onClick={() => { scrollTo('kieu-loai'); resetHeaderNav() }}><div>Phế liệu thiếc</div> <span><i className='fa'></i></span></a></li>
                    <li><a onClick={() => { scrollTo('kieu-loai'); resetHeaderNav() }}><div>Thu mua vải</div> <span><i className='fa'></i></span></a></li>
                    <li><a onClick={() => { scrollTo('kieu-loai'); resetHeaderNav() }}><div>Linh kiện điện tử cũ</div> <span><i className='fa'></i></span></a></li>
                </ul>
                <div className='section-nav-mobile'>
                    <a href='#thac-mac' onClick={() => { scrollTo('thac-mac'); setIsMenu(!isMenu) }}>Thắc mắc</a>
                </div>
                <div className='section-nav-mobile'>
                    <a href='#loi-ich' onClick={() => { scrollTo('loi-ich'); setIsMenu(!isMenu) }}>Lợi ích</a>
                </div>
            </div >
        </>
    );
}

export default memo(Index);
