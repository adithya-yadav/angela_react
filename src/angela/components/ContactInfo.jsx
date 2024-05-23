import React from 'react'
import { PhoneOutlined } from "@ant-design/icons"
import "./ContactInfo.css"

function ContactInfo() {
    return (
        <div className='book_number'>
            <PhoneOutlined />
            <div>
                <p>Booking & Advice Line</p>
                <p>0 (800) 555-22-44</p>
            </div>
        </div>
    )
}

export default ContactInfo