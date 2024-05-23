import { Divider } from 'antd'
import React from 'react';
import { ContactsOutlined, PhoneOutlined } from "@ant-design/icons";

function About() {
    return (
        <div className='about_container'>
            <div className='about_left'>
                <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/fertility-clinic/about.webp" alt="" />
                <div className='about_left_box'>
                    <div>
                        <h1>700</h1>
                        <h1>Patients</h1>
                        <h3>Trust & Compassion</h3>
                        <div className='sml_box'>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about_right'>
                <Divider orientation="left">ABOUT KIVICARE</Divider>
                <h1>Welcome To The Most Advanced And Trusted Parenthood Clinic</h1>
                <p>Kivicare offers the best scientifically proven ways by enhancing and celebrating your parenthood journey.</p>
                <div className='about_tick'>
                    <p className='about_tick_r'><span >✔</span> Treats minor illnesses</p>
                    <p className='about_tick_r'><span >✔</span> Conducts health checkups</p>
                    <p className='about_tick_r'><span >✔</span> Answers health questions</p>
                    <p className='about_tick_r'><span >✔</span> Specialty physicians</p>
                </div>
                <div className='about_sign'>
                    <button className='appoint_btn'>Read More | + </button>
                    <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/general/signature.png" alt="" />
                </div>
                <div className='about_location'>
                    <h2>Fertility Center</h2>
                    <p><ContactsOutlined className='about_icon' /> 1234 North Avenue Luke Lane, South Bend, IN 360001</p>
                    <p>📍View Location</p>
                    <p><PhoneOutlined className='about_icon' /> +0123456789</p>
                </div>
            </div>
        </div>
    )
}

export default About