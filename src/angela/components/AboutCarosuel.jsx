import React from 'react';
import { Carousel } from 'antd';


function    AboutCarosuel() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange} autoplay className='about_carosuel'>
            <div className='about_carosuel_div'>
                <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/3test-300x300.jpg" alt="img" />
                <h4>A big family is the number one priority for me and my husband. Thank you for the treatment and professional help.</h4>
                <h3>Mandy Jones</h3>
                <p>35 YEARS</p>
            </div>
            <div className='about_carosuel_div'>
                <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/3test-300x300.jpg" alt="img" />
                <h4>The clinic has this welcoming atmosphere where you feel safe. I appreciate the assistance and wish you the best.</h4>
                <h3>Emily Clarks</h3>
                <p>31 YEARS</p>
            </div>
            <div className='about_carosuel_div'>
                <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/3test-300x300.jpg" alt="img" />
                <h4>It was a wonderful experience for me and the friend who had suggested us going to the doctor. You are the best in the area!</h4>
                <h3>Janet Smith</h3>
                <p>29 YEARS</p>
            </div>
            <div className='about_carosuel_div'>
                <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/3test-300x300.jpg" alt="img" />
                <h4>A big family is the number one priority for me and my husband. Thank you for the treatment and professional help.</h4>
                <h3>Mandy Jones</h3>
                <p>35 YEARS</p>
            </div>
        </Carousel>
    )
}

export default AboutCarosuel