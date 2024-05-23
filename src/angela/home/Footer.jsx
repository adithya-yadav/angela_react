import React from 'react';
import "./Footer.css";
import { FacebookOutlined, TwitterOutlined , LinkedinOutlined } from '@ant-design/icons';

function Footer() {
    return (
        <div className='footer_container'>
            <div className='footer_top_img'>
                <img src='https://angela.ancorathemes.com/wp-content/uploads/2017/11/logo.png' alt='header logo' />
                <div className='footer_icon_container'>
                    <p className='footer_img_icon'>f</p>
                    <TwitterOutlined className='footer_img_icon' />
                    <p className='footer_img_icon'>in</p>
                </div>
            </div>
            <div className='footer_top'>
                <div className='footer_left'>
                    <h4>About Our Clinic</h4>
                    <div className='footer_content'>
                        <div >
                            <p>About</p>
                            <p>Careers</p>
                            <p>Mission, Vision &</p>
                            <p>Values</p>
                            <p>Employees</p>
                            <p>Consulting</p>
                            <p>Events</p>
                        </div>
                        <div>
                            <p>Our Clinic</p>
                            <p>AboutAdministration</p>
                            <p>Health Foundation</p>
                            <p>News & Media</p>
                            <p>Foundation</p>
                            <p>Medical Records</p>
                            <p>Help</p>
                        </div>
                    </div>
                </div>
                <div className='footer_middle'>
                    <h4>Useful Links</h4>
                    <div className='footer_content'>
                        <div>
                            <p>Media Policy</p>
                            <p>Website Policies</p>
                            <p>Privacy</p>
                            <p>Take Action</p>
                            <p>Contacts</p>
                        </div>
                        <div>
                            <p>No FEAR Act</p>
                            <p>Accessibility</p>
                            <p>Policies</p>
                            <p>Shop</p>
                            <p>Terms</p>
                        </div>
                    </div>
                </div>
                <div className='footer_right'>
                    <h3>Latest Posts</h3>
                    <div className='footer_right_img_container'>
                        <div className='footer_right_img'>
                            <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/08/post-3-370x370.jpg" alt="img" />
                            <div className='footer_right_text'>
                                <p>Advice for Parents</p>
                                <p>when Choosing</p>
                                <p>Childcare</p>
                                <p className='footer_comments'>3 COMMENTS</p>
                            </div>
                        </div>
                        <div className='footer_right_img'>
                            <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/post-9-370x370.jpg" alt="img" />
                            <div className='footer_right_text'>
                                <p>Because We See People,</p>
                                <p>Not Just Patients</p>
                                <p className='footer_comments'>0 COMMENTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_bottom'>
                <span>AncoraThemes </span> <span>© 2023. All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer