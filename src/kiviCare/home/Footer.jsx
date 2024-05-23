import React from 'react';
import "./Footer.css";
import { Input } from 'antd';
import { MessageOutlined ,MailOutlined,PhoneOutlined,TwitterOutlined, GoogleOutlined} from "@ant-design/icons"

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='footer_top'>
                <div className='footer1'>
                    <img src="https://templates.iqonic.design/kivicare-dist/html/index.html" alt="image" />
                    <h2>Newsletter</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Input placeholder='Enter your Email' suffix={<MessageOutlined className='footerIcon' />} />
                </div>
                <div className='footer2'>
                    <h2>Useful Links</h2>
                    <p>About us</p>
                    <p>service</p>
                    <p>Team</p>
                    <p>Contact Us</p>
                </div>
                <div className='footer3'>
                    <h2>Working Days</h2>
                    <span><p>Monday - Friday</p> <h4>6:00 - 7:00 pm</h4></span>
                    <span><p>Friday</p> <h4>8:00 - 9:00 pm</h4></span>
                    <span><p>Saturday</p> <h4>8:00 - 2:00 pm</h4></span>
                    <span><p>Sunday</p> <h4>Closed</h4></span>

                </div>
                <div className='footer4'>
                    <h2>Reach Us</h2>
                    <p><PhoneOutlined  className='footer_icon'/> +0123456789</p>
                    <p><MailOutlined  className='footer_icon'/> support@example.com</p>
                    <p>📍1234 North Avenue Luke Lane, South Bend, IN 360001</p>
                    <div className='footer_follow'>
                        <h4>Follow us :</h4>
                        <span className='footer_f'>f</span>
                        <TwitterOutlined className='footer_follow_icon'/>
                        <GoogleOutlined className='footer_follow_icon'/>
                    </div>
                </div>
            </div>
            <div className='footer_bottom'>
                <p>© 2023 KiviCare All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
