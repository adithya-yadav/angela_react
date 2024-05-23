import { Divider } from 'antd';
import React from 'react';
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";

function Blog() {
    return (
        <div className='blog_container_main'>
            <div className='blog_container'>
                <div className='spl_div'>
                    <Divider orientation="right">BLOG</Divider>
                </div>
                <h1>Our Latest News & Advices</h1>
            </div>
            <div className='blog_bottom'>
                <div className='blog_left'>
                    <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/blog/blog-1.webp" alt="" />
                    <div className='blog_left_container'>
                        <div className='blog_btn'>Health Care</div>
                        <p><CalendarOutlined /> SEPTEMBER 23, 2022 <UserOutlined /> GOLDENMACE</p>
                        <h2>OPD Cover Gaining Popularity Among Indian Consumers</h2>
                        <span className='spl_read_more'>Read More +</span>
                    </div>
                </div>
                <div className='blog_right'>
                    <div className='blog_right_container'>
                        <div className='blog_left_container'>
                            <div className='blog_btn'>Health Care</div>
                            <p><CalendarOutlined /> SEPTEMBER 23, 2022 <UserOutlined /> GOLDENMACE</p>
                            <h2>OPD Cover Gaining Popularity Among Indian Consumers</h2>
                            <span className='spl_read_more'>Read More +</span>
                        </div>
                        <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/blog/blog-2.webp" alt="" />
                    </div>
                    <div className='blog_right_container'>
                        <div className='blog_left_container'>
                            <div className='blog_btn'>Health Care</div>
                            <p><CalendarOutlined /> SEPTEMBER 23, 2022 <UserOutlined /> GOLDENMACE</p>
                            <h2>OPD Cover Gaining Popularity Among Indian Consumers</h2>
                            <span className='spl_read_more'>Read More +</span>
                        </div>
                        <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/blog/blog-3.webp" alt="" />
                    </div>
                </div>
            </div>
            <button className='appoint_btn'>View More +</button>
        </div>
    )
}

export default Blog