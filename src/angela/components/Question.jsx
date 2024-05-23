import { Divider } from 'antd'
import React from 'react'

function Question() {
    return (
        <>
            <Divider />
            <div className='question_container'>
                <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/send-a-message.png" alt="img" />
                <h2>Do You Have Any Questions?</h2>
                <p>Lorem ipsum dolor sit amet, no nam gube pertinacia . Probo persecuti te FAQ.</p>
                <button className='make_appointment'>Make an Appointment</button>
            </div>
        </>
    )
}

export default Question