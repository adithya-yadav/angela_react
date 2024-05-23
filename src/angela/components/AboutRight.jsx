import React, { useState } from 'react'

const imgurlList = [
"https://angela.ancorathemes.com/wp-content/uploads/2017/09/3test-300x300.jpg",
"https://angela.ancorathemes.com/wp-content/uploads/2017/09/3test-300x300.jpg",
"https://angela.ancorathemes.com/wp-content/uploads/2017/09/3test-300x300.jpg",
"https://angela.ancorathemes.com/wp-content/uploads/2017/09/3test-300x300.jpg",
]

function AboutRight() {
    const [imgUrl, setImgUrl] = useState("https://angela.ancorathemes.com/wp-content/uploads/2017/09/3test-300x300.jpg")
    return (
        <div className='about_right_container'>
            <img src={imgUrl} alt="" />
            <div className='about_small_img'>
                {imgurlList.map((imgurl, ind) => <img key={ind} src={imgurl} alt={ind} />)}
            </div>
        </div>
    )
}

export default AboutRight