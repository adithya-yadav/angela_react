import { Divider, Input, Layout, Menu } from 'antd';
import React, { useState } from 'react'
import "./Header.css"
import { GoogleOutlined, PhoneOutlined, TwitterOutlined, UnorderedListOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined, AlignRightOutlined, CloseOutlined, FacebookOutlined } from '@ant-design/icons'

function Header({ setCurrentTab }) {
    const { Header } = Layout;
    const Dummy = [
        { key: "home", label: "HOME +" }, { key: "pages", label: "PAGES +" }, { key: "specialization", label: "SPECIALIZATION +" }, { key: "blog", label: "BLOG +" }, { key: "shop", label: "SHOP +" }
    ]
    const [showSlider, setShowSlider] = useState(false)

    return (
        <>
            <div className='header_container'>
                <div className='header_top'>
                    <div className='header_t_r'>
                        <p>
                            <PhoneOutlined /> + (480) 555-0103
                        </p>
                        <p>
                            📍1234 North Avenue Luke Lane
                        </p>
                    </div>
                </div>
                <div className='footer_follow'>
                    <p>Follow us :</p>
                    <span className='footer_f'>f</span>
                    <TwitterOutlined className='footer_follow_icon' />
                    <GoogleOutlined className='footer_follow_icon' />
                </div>
            </div>
            <Header className='headers_container'>
                <img src='' alt='header logo' />
                <Menu
                    className='headers_menu'
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                    defaultOpenKeys={['home']}
                    onClick={(e) => setCurrentTab(e.key)}
                    items={Dummy.map((men) => {
                        return {
                            key: men.key,
                            label: men.label
                        }
                    })}
                />
                <SearchOutlined className='header_icon' />
                <ShoppingCartOutlined className='header_icon' />
                <UserOutlined className='header_icon' />
                <button className='appoint_btn'>Appointment | +</button>
                <AlignRightOutlined className='header_icon_right' onClick={() => setShowSlider(true)} />
                {showSlider && <div className='header_slider'>
                    <CloseOutlined className='header_sli_close' onClick={() => setShowSlider(false)} />
                    <div className='slider_header'>
                        <img src="" alt="image" />
                    </div>
                    <h2>Gallery:</h2>
                    <div className='slider_gallery'>
                        <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/gallery/blog1.jpg" alt="" />
                        <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/gallery/blog-2.jpg" alt="" />
                        <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/gallery/blog-3.jpg" alt="" />
                        <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/gallery/blog-4.jpg" alt="" />
                        <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/gallery/blog-5.jpg" alt="" />
                        <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/gallery/blog-6.jpg" alt="" />
                    </div>
                    <div className='line'></div>
                    <h2>Contact Us:</h2>
                    <p>
                        4517 Washington Ave, Manchester,
                    </p>
                    <p>
                        Kentucky .England 524163.
                    </p>
                    <p>
                        kivicare@example.com
                    </p>
                    <p>
                        Phone : (480) 555-0103
                    </p>
                    <div className='line'></div>
                    <h2>Follow Us:  </h2>
                    <div className='footer_follow'>
                        <FacebookOutlined className='footer_follow_icon' />
                        <TwitterOutlined className='footer_follow_icon' />
                        <GoogleOutlined className='footer_follow_icon' />
                    </div>
                    <div className='line'></div>
                    <p>© 2023 KiviCare All Rights Reserved.</p>
                </div>}
            </Header>
        </>
    )
}

export default Header;