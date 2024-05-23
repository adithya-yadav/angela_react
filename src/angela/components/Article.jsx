import React from 'react';
import { Divider } from 'antd';
import Abortion from './Abortion';


function Article() {
    return (
        <div className='article_container'>
            <div className='article_headers'>
                <Divider orientation="center">READ LATEST ARTICLES</Divider>
                <h1>Latest News & Events</h1>
            </div>
            <div className='article_img_container'>
                <div className='article_img'>
                    <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/08/post-3-624x426.jpg" alt="" />
                    <h5> 3 COMMENTS </h5>
                    <h4>
                        Advice for Parents when Choosing Childcare
                    </h4>
                </div>
                <div className='article_img'>
                    <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/08/post-3-624x426.jpg" alt="" />
                    <h5> 0 COMMENTS </h5>
                    <h4>
                        15 Differences Between the First and the Second Child
                    </h4>
                </div>
                <div className='article_img'>
                    <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/08/post-3-624x426.jpg" alt="" />
                    <h5> 0 COMMENTS </h5>
                    <h4>
                        How Women React to Their Pregnancy Tests
                    </h4>
                </div>
            </div>
            <Abortion hd1="PRENATAL CARE SERVICES" hd2='Taking Care Of You &
Your Baby' hd3=' ' btn='Learn More' />
        </div>
    )
}

export default Article