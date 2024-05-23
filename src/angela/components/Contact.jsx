import React from 'react'

function Contact() {
  return (
    <div className='contact_main_container'>
      <p className='service_line_header'> &nbsp; &nbsp; CONTACT OUR CLINIC &nbsp; &nbsp;</p>
      <h1>Contact Us Now</h1>
      <div className='contact_container'>
        <div className='contact_inner_container'>
          <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/phone.png" alt="" />
          <h2>Call Us Now:</h2>
          <h3>0 800 123 45 67,</h3>
          <h3>0 800 123 45 90</h3>
        </div>
        <div className='contact_inner_container'>
          <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/visit.png" alt="" />
          <h2>Visit Our Clinic:</h2>
          <p>10 Generic Str., South </p>
          <p>Chicago, IL 60606</p>
        </div>
        <div className='contact_inner_container'>
          <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/send-a-message.png" alt="" />
          <h2>Send A Message</h2>
          <p>info@ninesoftech.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact