import React from 'react'
import "./SecondSection.css"

function SecondSection() {
    return (
        <div className='second_section_main_container'>
            <div className='second_section_container'>
                <img className='second_section_image' src='https://media.istockphoto.com/id/105555086/photo/newborn-smiling-portrait.webp?b=1&s=170667a&w=0&k=20&c=8e9_BUaZ31dp91QYXSAotTChxxi4YK19q1_pmJvcjF0=' />
                <div className='second_sec_content'>
                    <p>WELCOME TO US ----</p>
                    <p>Welcome to Family Planning Clinic</p>
                    <button className='make_appointment'>Make an Appointment</button>
                </div>
            </div>
            <div className='second_sec_right'>
                <div className='second_sec_right_odd'>
                    <div className='sec_img_container'><img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/control.png" alt="birth cotrol" /></div>
                    <h3>Birth Control</h3>
                    <p>Known as contraception and fertility control.</p>
                </div>
                <div className='second_sec_right_even'>
                    <div className='sec_img_container'><img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/testing.png" alt="img" /></div>
                    <h3>Pregnancy Testing</h3>
                    <p>There are three methods of confirming pregnancy.</p>
                </div>
                <div className='second_sec_right_odd'>
                    <div className='sec_img_container'><img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/health-care.png" alt="img" /></div>
                    <h3>Health Care</h3>
                    <p>Clinic provides high-quality care services.</p>
                </div>
                <div className='second_sec_right_even'>
                    <div className='sec_img_container'><img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/abort-service.png" alt="img" /></div>
                    <h3>Abortion Services</h3>
                    <p>Your personal abortion experience is unique.</p>
                </div>
                <div className='second_sec_right_odd'>
                    <div className='sec_img_container'><img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/gynecology.png" alt="img" /></div>
                    <h3>Gynecology Services</h3>
                    <p>We focus on high-quality gynecology care.</p>
                </div>
                <div className='second_sec_right_even'>
                    <div className='sec_img_container'><img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/planning.png" alt="img" /></div>
                    <h3>Family Planning</h3>
                    <p>Offering different family planning services.</p>
                </div>
            </div>
        </div>
    )
}

export default SecondSection