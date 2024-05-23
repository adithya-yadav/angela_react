import { Divider } from 'antd'
import React from 'react'

function ContactUs() {
    return (
        <div className='contact_container'>
            <div className='contact-left'>
                <Divider orientation="left">GET IN TOUCH</Divider>
                <h1>Contact Us</h1>
                <div>
                    <input className='contact_input' type="text" placeholder='Your Name' />
                    <input className='contact_input' type="text" placeholder='Last Name' />
                </div>
                <div>
                    <input className='contact_input' type="text" placeholder='Phone Number' />
                    <input className='contact_input' type="text" placeholder='Your Email' />
                </div>
                <textarea className='contact_input contact_textarea' name="" placeholder='Your Message' cols="30" rows="10"></textarea>
                <button className='appoint_btn'>Send Message | + </button>
            </div>
            <div className='contact-right'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nFqSmhaIeqigGFgrZonXGG2sCdurxk58QsTFqkWs6LxLS2lmEXvD0MttrUg8UzJ03qE&usqp=CAU" alt="" />
            </div>
        </div>
    )
}

export default ContactUs