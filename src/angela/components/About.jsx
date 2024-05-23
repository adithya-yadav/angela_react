import React from 'react';
import "./About.css";
import {DoubleRightOutlined} from "@ant-design/icons";

function About() {
    return (
        <div className='about_container'>
            <p className='service_line_header'> &nbsp; &nbsp; ABOUT ANGELA CLINIC &nbsp; &nbsp;</p>
            <h1>What You Need To Know About Clinic</h1>
            <div className='about_video'>
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                <div className='about_cart'>
                    <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/hands.png" alt="img" />
                    <h2>Because We See People, Not Just Patients</h2>
                    <p>We offer confidential, non-judgmental sexual and reproductive health care with people of any gender, age & nationality.</p>
                    <DoubleRightOutlined className='show_services_icon' />
                </div>
            </div>            
        </div>
    )
}

export default About