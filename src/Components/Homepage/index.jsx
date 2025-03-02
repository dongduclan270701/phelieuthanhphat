import React, { useState, useEffect } from "react";
import 'assets/scss/homepage.scss'
import 'lenis/dist/lenis.css'
import Lenis from 'lenis'
const Index = () => {
    useEffect(() => {
            const elements = document.querySelectorAll(".animate-kassdev");
    
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("animate");
                        }
                    });
                },
                { threshold: 0.2 }
            );
    
            elements.forEach((el) => observer.observe(el));
    
            return () => elements.forEach((el) => observer.unobserve(el));
    }, []);
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);
    const [priceData, setPriceData] = useState([
        {
            category: "Giá sắt phế liệu",
            items: [
                { name: "Sắt đặc", price: "9.500 - 15.000" },
                { name: "Sắt vụn", price: "9.500 - 15.000" },
                { name: "Sắt rỉ sét", price: "11.000 - 15.000" },
                { name: "Sắt ba zơ", price: "6.000 - 10.000" },
                { name: "Sắt dây", price: "9.500 - 15.000" },
                { name: "Sắt công trình", price: "8.500 - 15.000" },
                { name: "Máy móc sắt", price: "10.000 - 15.000" },
            ],
        },
        {
            category: "Giá đồng phế liệu",
            items: [
                { name: "Đồng cáp", price: "215.000 - 369.000" },
                { name: "Đồng đỏ", price: "195.000 - 290.000" },
                { name: "Đồng vàng", price: "130.000 - 190.000" },
                { name: "Mạt đồng", price: "105.000 - 170.000" },
                { name: "Đồng cháy", price: "125.000 - 200.000" },
            ],
        },
        {
            category: "Giá nhôm phế liệu",
            items: [
                { name: "Nhôm loại 1 (nhôm đặc, nhôm thanh)", price: "50.000 - 89.000" },
                { name: "Nhôm loại 2 (hợp kim nhôm, nhôm trắng)", price: "45.000 - 55.000" },
                { name: "Nhôm loại 3 (nhôm định hình, Xingfa)", price: "24.000 - 35.500" },
                { name: "Bột nhôm", price: "3.500 - 5.000" },
                { name: "Nhôm dẻo", price: "35.000 - 39.500" },
            ],
        },
        {
            category: "Giá chì phế liệu",
            items: [
                { name: "Chì thỏi, chì nguyên khối", price: "293.000 - 550.000" },
                { name: "Chì cuộn, chì dẻo", price: "290.000 - 645.000" },
                { name: "Chì thiếc, chì lưới", price: "290.000 - 575.000" },
            ],
        },
        {
            category: "Giá PHẾ LIỆU CÔNG TRÌNH",
            items: [{ name: "Những phế liệu từ công trình", price: "LIÊN HỆ HOTLINE" }],
        },
        {
            category: "Giá phế liệu kẽm",
            items: [{ name: "Kẽm IN các loại", price: "35.000 - 65.500" }],
        },
        {
            category: "Giá inox phế liệu",
            items: [
                { name: "Inox 304", price: "22.000 - 63.000" },
                { name: "Inox 316", price: "34.000 - 80.500" },
                { name: "Inox 201", price: "18.000 - 54.000" },
                { name: "Inox 430", price: "15.000 - 49.000" },
                { name: "Inox 410, Inox 420", price: "21.500 - 60.000" },
                { name: "Inox 504, Inox 604", price: "23.000 - 49.000" },
                { name: "Bazơ inox", price: "30.000 - 65.000" },
            ],
        },
        {
            category: "Giá hợp kim phế liệu",
            items: [
                { name: "Mũi khoan, dao phay, carbay", price: "280.000 - 610.000" },
                { name: "Hợp kim thiếc", price: "180.000 - 680.000" },
            ],
        },
        {
            category: "Giá Pallet phế liệu",
            items: [{ name: "Nhựa Pallet", price: "98.500 - 195.500" }],
        },
        {
            category: "Phế liệu công trình",
            items: [{ name: "Các công trình đang phá dỡ", price: "Liên hệ: 0928794999" }],
        },
        {
            category: "Giá Pallet phế liệu",
            items: [{ name: "Nhựa Pallet", price: "98.500 - 195.500" }],
        },
        {
            category: "Phế liệu công trình",
            items: [{ name: "Các công trình đang phá dỡ", price: "Liên hệ: 0928794999" }],
        },
    ]);
    return (
        <div className='homepage-kld0203'>
            <div className="section-1-kld0203" >
                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1740910636/02-20210304081801_qussdo.gif" ></img>
                <div className='introduce'>
                    <div className="bx-introduce">
                        <div className='title animate-kassdev delay-1s'>Phế liệu <span style={{ color: '#ff9900' }}>Thành Phát</span></div>
                        <div className="sub-title animate-kassdev delay-2s">Chúng tôi cung cấp các dịch vụ</div>
                        <div className="bx-srv">
                            <div className="col-lg-4 bxf animate-kassdev delay-3s">
                                <div className='pd'>
                                    <i className='fa fa-user'></i>
                                    <div className="bx">
                                        <div className="abv">Thu mua tận nơi</div>
                                        <div className="blw">Có đội xe tự bốc xếp, vận chuyển. Vệ sinh sạch sẽ nơi thu gom phế liệu</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 bxf animate-kassdev delay-4s">
                                <div className='pd'>
                                    <i className='fa-solid fa-chart-line'></i>
                                    <div className="bx">
                                        <div className="abv">Thu mua giá cao</div>
                                        <div className="blw">Thu mua phế liệu tất cả các ngày trong tuần, kể cả ngày nghỉ lễ Tết, giá luôn cao hơn thị trường.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 bxf animate-kassdev delay-5s">
                                <div className='pd'>
                                    <i className='fa-solid fa-money-bill'></i>
                                    <div className="bx">
                                        <div className="abv ">Thanh toán một lần</div>
                                        <div className="blw">Thanh toán tiền mặt hoặc chuyển khoản ngay khi các phế liệu được chất lên xe.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-intro animate-kassdev delay-6s">
                            <a href='tel:0928794999' className="btn-ele"><i className='fa fa-phone'></i> 0928794999</a>
                            <a href='tel:0908766386' className="btn-ele"><i className='fa fa-phone'></i> 0908766386</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-2-kld0203">
                <div className="title animate-kassdev delay-1s">Bảng <span style={{ color: "#ff9900" }}>giá thu mua</span> phế liệu cập nhật gần đây</div>
                <div className="price-table-container">
                    <table className="price-table">
                        <thead>
                            <tr>
                                <th className="animate-kassdev delay-1s">CHỦNG LOẠI</th>
                                <th className='animate-kassdev delay-1s'>LOẠI PHẾ LIỆU THU MUA</th>
                                <th className='animate-kassdev delay-1s'>ĐƠN GIÁ (VNĐ/KG)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {priceData.map((category, index) => (
                                <React.Fragment key={index}>
                                    <tr className="category-row animate-kassdev delay-1s">
                                        <td rowSpan={category.items.length + 1} className="category-cell">
                                            {category.category}
                                        </td>
                                    </tr>
                                    {category.items.map((item, idx) => (
                                        <tr key={idx} className="animate-kassdev delay-1s">
                                            <td>{item.name}</td>
                                            <td className="price">{item.price}</td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="btn-intro animate-kassdev delay-1s">
                    <a href='tel:0928794999' className="btn-ele"><i className='fa fa-phone'></i> 0928794999</a>
                    <a href='tel:0908766386' className="btn-ele"><i className='fa fa-phone'></i> 0908766386</a>
                </div>
            </div>
            <div className="section-3-kld0203">
                <div className="col-lg-6 left animate-kassdev delay-1s">
                    <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1740910667/thumuaphelieu-20220905043621_zhgmqa.jpg" alt="" />
                </div>
                <div className="col-lg-6 right">
                    <div className="bx">
                        <div className="sub-title animate-kassdev delay-1s">Về chúng tôi</div>
                        <div className="title animate-kassdev delay-1s">PHẾ LIỆU Thành Phát - LUÔN THU MUA GIÁ CAO</div>
                        <div className="content animate-kassdev delay-1s">Với 10 năm kinh nghiệm trong ngành thu mua phế liệu, công ty TNHH Đầu Tư Chuyển Giao Công Nghệ Thành Phát luôn đem lại sự hài lòng của khách hàng. Chúng tôi cam kết cung cập dịch vụ thu mua chuyên nghiệp với mức giá cao nhất thị trường. Nhân viên tư vẫn và hỗ trợ tận nơi, xe chuyên chở nhanh gọn, chuyên nghiệp.</div>
                        <div className="content animate-kassdev delay-1s">Bảng giá của chúng tôi luôn được cập nhật thường xuyên tương ứng với nền kinh tế thị trường. Nói không với tình trạng ép giá, thanh toán chậm, không đúng hẹn. Đa dạng phương thức thanh toán, chiết khấu cao.</div>
                        <div className="content animate-kassdev delay-1s">Với những tiêu chí cố gắng cải thiện và phát triển chính mình để dịch vụ có thể đáp ứng: nhanh gọn, giá cả tốt nhất, dọn dẹp sạch đẹp, đảm bảo Quý khách sẽ hài lòng. Phế Liệu Thành Phát cam kết mua bán các loại phế liệu với giá cao & tốt nhất thị trường, không xảy ra tình trạng ép giá.</div>
                    </div>
                </div>
            </div>
            <div className="section-4-kld0203">
                <div className="bx">
                    <div className="title animate-kassdev delay-1s">4 <span style={{ color: "#ff9900" }}>lý do</span> bạn <span style={{ color: "#ff9900" }}>nên</span> chọn phế liệu <span style={{ color: "#ff9900" }}>Thành Phát</span></div>
                    <div className="bxw">
                        <div className="col-lg-3 bxc animate-kassdev delay-1s">
                            <div className="pd">
                                <div className="title-bx">BÁO GIÁ NHANH</div>
                                <div className="content">Chúng tôi là công ty thu mua phế liệu lớn nhất toàn quốc, đơn vị trực tiếp thu mua không qua trung gian nên báo giá ngay khi nhận thông tin</div>
                            </div>
                        </div>
                        <div className="col-lg-3 bxc animate-kassdev delay-2s">
                            <div className="pd">
                                <div className="title-bx">MUA HÀNG NHANH</div>
                                <div className="content">Chúng tôi sẽ thu mua phế liệu tận nơi, mua hàng ngay khi đạt được thỏa thuận bằng bất cứ hình thức vận chuyển nào mà quý khách yêu cầu</div>
                            </div>
                        </div>
                        <div className="col-lg-3 bxc animate-kassdev delay-3s">
                            <div className="pd">
                                <div className="title-bx">THANH TOÁN NGAY</div>
                                <div className="content">Chúng tôi thanh toán tiền mặt hoặc chuyển khoản nhanh chóng ngay khi các phế liệu được chúng tôi thu mua chất hết lên xe trước khi rời đi.</div>
                            </div>
                        </div>
                        <div className="col-lg-3 bxc animate-kassdev delay-4s">
                            <div className="pd">
                                <div className="title-bx">CÂN ĐO CHUẨN</div>
                                <div className="content">Quy trình thu mua, cân đo chúng tôi luôn tuân thủ theo quy định của khách hàng, mọi thứ được làm theo chỉ đạo của khách để làm yên tâm nhất.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-5-kld0203">
                <div className="bx">
                    <div className="title animate-kassdev delay-1s">PHẾ LIỆU  <span style={{ color: "#ff9900" }}>Thành Phát</span>  - THU MUA <span style={{ color: "#ff9900" }}>GIÁ CAO</span> - THU MUA <span style={{ color: "#ff9900" }}>NHANH CHÓNG </span></div>
                    <div className="bxw">
                        <div className="col-lg-4 bxc animate-kassdev delay-1s">
                            <div className="pd">
                                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1740910814/dong-phe-lieu-20220905044626_z9zxes.jpg" alt="" />
                                <div className="title-bx">THU MUA PHẾ LIỆU ĐỒNG</div>
                                <div className="content">Thu mua phế liệu đồng giá cao, cung cấp giá đồng đỏ, đồng dây điện, đồng vàng phế liệu mới nhất Thu mua Phế liệu đồng giá cao tận nơi…</div>
                            </div>
                        </div>
                        <div className="col-lg-4 bxc animate-kassdev delay-2s">
                            <div className="pd">
                                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1740910815/nhom-phe-lieu-20220905045435_evt2ma.jpg" alt="" />
                                <div className="title-bx">THU MUA PHẾ LIỆU NHÔM</div>
                                <div className="content">Thu mua phế liệu nhôm giá cao , thu mua nhôm đà , nhôm thanh , nhôm kính cũ .. Thu mua phế liệu nhôm giá cao tận nơi…</div>
                            </div>
                        </div>
                        <div className="col-lg-4 bxc animate-kassdev delay-3s">
                            <div className="pd">
                                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1740910814/sat-phe-lieu-20220905045508_ftppxa.jpg" alt="" />
                                <div className="title-bx">THU MUA PHẾ LIỆU SẮT THÉP</div>
                                <div className="content">Thu mua sắt thép phế liệu giá cao trong ngày tận nơi. Cung cấp giá sắt phế liệu hôm nay Thu mua phế liệu sắt thép là dịch…</div>
                            </div>
                        </div>
                        <div className="col-lg-4 bxc animate-kassdev delay-1s">
                            <div className="pd">
                                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1740910815/dong-phe-lieu-copy-20220905045625_hypojv.jpg" alt="" />
                                <div className="title-bx">THU MUA PHẾ LIỆU CHÌ</div>
                                <div className="content">1KG CHÌ PHẾ LIỆU GIÁ BAO NHIÊU? THU MUA CHÌ PHẾ LIỆU Mọi vấn đề liên quan thu mua phế liệu chì, 1kg chì giá bao nhiêu? giá…</div>
                            </div>
                        </div>
                        <div className="col-lg-4 bxc animate-kassdev delay-2s">
                            <div className="pd">
                                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1740910814/inox-phe-lieu-20220905045657_ru4day.jpg" alt="" />
                                <div className="title-bx">THU MUA PHẾ LIỆU INOX</div>
                                <div className="content">Thu mua Inox phế liệu giá cao, báo giá phế liệu Inox hôm nay Thu mua phế liệu inox tận nơi là dịch vụ của nhiều vựa, cơ sở,…</div>
                            </div>
                        </div>
                        <div className="col-lg-4 bxc animate-kassdev delay-3s">
                            <div className="pd">
                                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1740910814/niken-phe-lieu-20220905045714_stggel.jpg" alt="" />
                                <div className="title-bx">THU MUA PHẾ LIỆU NIKEN</div>
                                <div className="content">Thu mua phế liệu Niken giá cao cả nước, trả lời câu hỏi Niken giá bao nhiêu? Thu mua Niken phế liệu tận nơi, cung cấp giá Niken…</div>
                            </div>
                        </div>
                        <div className="col-lg-4 bxc animate-kassdev delay-1s">
                            <div className="pd">
                                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1740910816/hopkim-20220905045816_su9urx.jpg" alt="" />
                                <div className="title-bx">THU MUA PHẾ LIỆU HỢP KIM</div>
                                <div className="content">Thu mua phế liệu Hợp Kim giá cao nhất Cơ sở thu mua phế liệu hợp kim: mũi khoan, dao phay cũ, bánh cán, thép gió, Carbide…Báo giá hợp…</div>
                            </div>
                        </div>
                        <div className="col-lg-4 bxc animate-kassdev delay-2s">
                            <div className="pd">
                                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1740910816/thiec-20220905045843_vjdvsd.jpg" alt="" />
                                <div className="title-bx">THU MUA PHẾ LIỆU THIẾC</div>
                                <div className="content">Thu mua phế liệu thiếc, bạc phế liệu, xi mạ bạc, xi mạ vàng giá cao Phế liệu Thiếc là gì? phế liệu Bạc là gì Thu mua…</div>
                            </div>
                        </div>
                        <div className="col-lg-4 bxc animate-kassdev delay-3s">
                            <div className="pd">
                                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1740910815/linhkien-20220905045915_bdsdtm.jpg" alt="" />
                                <div className="title-bx">PHẾ LIỆU LINH KIỆN ĐIỆN TỬ</div>
                                <div className="content">Thu mua linh kiện điện tử cũ, mua bán phế liệu điện tử, bo mạch điện tử cũ giá cao Bắc Ninh Cơ sở chúng tôi chuyên nghiệp</div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-intro animate-kassdev delay-1s">
                        <a href='tel:0928794999' className="btn-ele"><i className='fa fa-phone'></i> 0928794999</a>
                        <a href='tel:0908766386' className="btn-ele"><i className='fa fa-phone'></i> 0908766386</a>
                    </div>
                </div>
            </div>
            <div className="section-6-kld0203">
                <div className="bx">
                    <div className="title animate-kassdev delay-1s">Một số câu hỏi  <span style={{ color: "#ff9900" }}>thường gặp</span></div>
                    <div className="sub-title animate-kassdev delay-1s">Khi mua bán phế liệu tại Thành Phát</div>
                    <div className="bx-srv">
                        <div className="col-lg-6 bxf animate-kassdev delay-1s">
                            <div className='pd'>
                                <i className='fa fa-question'></i>
                                <div className="bx">
                                    <div className="abv">Thành Phát có phải là công ty thu mua phế liệu uy tín Toàn Quốc không? </div>
                                    <div className="blw">Thành Phát đã hoạt động trong lĩnh vực thu mua phế liệu hơn 10 năm. Chúng tôi tự tin mình là một trong những công ty thu mua phế liệu uy tín, giá cao nhất trên thị trường hiện nay.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 bxf animate-kassdev delay-2s">
                            <div className='pd'>
                                <i className='fa fa-question'></i>
                                <div className="bx">
                                    <div className="abv">Giá phế liệu tại Thành Phát có ổn định & luôn cao không?</div>
                                    <div className="blw">Giá thu mua phế liệu phụ thuộc rất nhiều vào biến động thị trường trong nước và quốc tế. Thành Phát luôn cố gắng mang đến cho quý khách một mức giá thu mua tốt nhất, cao nhất, ổn định nhất ở mọi thời điểm.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 bxf animate-kassdev delay-1s">
                            <div className='pd'>
                                <i className='fa fa-question'></i>
                                <div className="bx">
                                    <div className="abv">Hoa hồng dành cho người giới thiệu mua bán phế liệu là bao nhiêu? </div>
                                    <div className="blw">Thành Phát luôn có mức chiết khấu hấp dẫn cho người giới thiệu. Hoa hồng tùy thuộc vào số lượng phế liệu mà doanh nghiệp quý khách thanh lý.</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 bxf animate-kassdev delay-2s">
                            <div className='pd'>
                                <i className='fa fa-question'></i>
                                <div className="bx">
                                    <div className="abv">Làm sao để Thành Phát báo giá phế liệu nhanh chóng nhất? </div>
                                    <div className="blw">Quý khách hãy gọi trực tiếp hoặc thêm bạn qua Zalo 0928.794.999 hoặc 0908.766.386. Sau đó gửi hình ảnh phế liệu của doanh nghiệp bạn cho chúng tôi. Chúng tôi sẽ thẩm định và báo giá ngay lập tức cho bạn. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-intro animate-kassdev delay-1s">
                        <a href='tel:0928794999' className="btn-ele"><i className='fa fa-phone'></i> 0928794999</a>
                        <a href='tel:0908766386' className="btn-ele"><i className='fa fa-phone'></i> 0908766386</a>
                    </div>
                </div>
            </div>
            <div className="section-7-kld0203">
                <div className="bx">
                    <div className="title animate-kassdev delay-1s"><span style={{ color: "#ff9900" }}>lợi ích</span> khách hàng khi <span style={{ color: "#ff9900" }}>làm việc</span> cùng phế liệu <span style={{ color: "#ff9900" }}>Thành Phát</span></div>
                    <div className="bxw">
                        <div className="col-lg-3 bxc animate-kassdev delay-1s">
                            <div className="pd">
                                <i className='fa fa-truck-fast'></i>
                                <div className="title-bx">VẬN CHUYỂN LINH HOẠT</div>
                                <div className="content">Ngay sau khi thống nhất chúng tôi tiến hành bốc hàng và vận chuyển tận nơi, thực hiênh nhanh chóng và linh hoạt thời gian khách hàng</div>
                            </div>
                        </div>
                        <div className="col-lg-3 bxc animate-kassdev delay-2s">
                            <div className="pd">
                                <i className='fa fa-clock-rotate-left'></i>
                                <div className="title-bx">THỰC HIỆN NHANH</div>
                                <div className="content">Chúng tôi hệ thống thu mua phế liệu toàn quốc, triển khai khảo sát, báo giá tư vấn khách hàng nhanh chóng. Sau 30 phút liên hệ.</div>
                            </div>
                        </div>
                        <div className="col-lg-3 bxc animate-kassdev delay-3s">
                            <div className="pd">
                                <i className='fa fa-money-bill'></i>
                                <div className="title-bx">THANH TOÁN ĐA DẠNG</div>
                                <div className="content">Hình thức thanh toán linh hoạt và đa dạng theo yêu cầu của khách hàng. Thanh toán tiền mặt hoặc chuyển khoản ngân hàng hay qua ví điện tử</div>
                            </div>
                        </div>
                        <div className="col-lg-3 bxc animate-kassdev delay-4s">
                            <div className="pd">
                                <i className='fa-solid fa-tags'></i>
                                <div className="title-bx">HOA HỒNG CAO</div>
                                <div className="content">Chính sách ưu đãi đặc biệt của chúng tôi đối với khách hàng đó là hoa hồng cực cao cho người giới thiệu, mong muốn làm việc và hợp tác lâu dài.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
