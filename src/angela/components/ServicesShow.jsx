import React, { useState } from 'react';
import { Carousel } from 'antd';
import { DoubleRightOutlined } from "@ant-design/icons";


const ShowServices = () => {
    const [currentSlide, setCurrnctSlide] = useState(0)
    const onChange = (currentSlide) => {
        setCurrnctSlide(currentSlide);
    };
    return (
        <Carousel afterChange={onChange} autoplay className='service_carousel'>
            <div className='show_services_container'>
                <div className='show_services'>
                    <img src='https://media.istockphoto.com/id/1440786631/photo/newborn-in-mothers-arms.webp?b=1&s=170667a&w=0&k=20&c=uf-RMQXZSqDw_cxAYv5SsGmz4du22xkTq-oo6onqbjc=' />
                    <h3>Men’s Health Care</h3>
                    <p>Please, checkups when you have a reproductive or sexual health problem.</p>
                    <DoubleRightOutlined className='show_services_icon' />
                </div>
                <div className='show_services'>
                    <img src='https://media.istockphoto.com/id/1438282265/photo/loving-mom-snuggling-sleeping-newborn-baby.webp?b=1&s=170667a&w=0&k=20&c=hLZJHBhdmjHdX9dBQNuBdUO0uCshWS-7_i_aaLG2z5I=' />
                    <h3>Child Health Care</h3>
                    <p>Supports your child’s health and development from birth until school age.</p>
                    <DoubleRightOutlined className='show_services_icon' />
                </div>
                <div className='show_services'>
                    <img src='https://media.istockphoto.com/id/1439349585/photo/newborn-baby-one-month-old-holding-fingers-mothers-hand.webp?b=1&s=170667a&w=0&k=20&c=L2iEOdNzMxopz1AqJyfyRVpGTXcmrR2UJ2KLIdEDxsE=' />
                    <h3>Contraception Advice</h3>
                    <p>We provide quality healthcare services that meet the unique needs of women.</p>
                    <DoubleRightOutlined className='show_services_icon' />
                </div>
            </div>
            <div className='show_services_container'>
                <div className='show_services'>
                    <img src='https://media.istockphoto.com/id/1438282265/photo/loving-mom-snuggling-sleeping-newborn-baby.webp?b=1&s=170667a&w=0&k=20&c=hLZJHBhdmjHdX9dBQNuBdUO0uCshWS-7_i_aaLG2z5I=' />
                    <h3>Child Health Care</h3>
                    <p>Supports your child’s health and development from birth until school age.</p>
                    <DoubleRightOutlined className='show_services_icon' />
                </div>
                <div className='show_services'>
                    <img src='https://media.istockphoto.com/id/1439349585/photo/newborn-baby-one-month-old-holding-fingers-mothers-hand.webp?b=1&s=170667a&w=0&k=20&c=L2iEOdNzMxopz1AqJyfyRVpGTXcmrR2UJ2KLIdEDxsE=' />
                    <h3>Contraception Advice</h3>
                    <p>We provide quality healthcare services that meet the unique needs of women.</p>
                    <DoubleRightOutlined className='show_services_icon' />
                </div>
                <div className='show_services'>
                    <img src='https://media.istockphoto.com/id/105555086/photo/newborn-smiling-portrait.webp?b=1&s=170667a&w=0&k=20&c=8e9_BUaZ31dp91QYXSAotTChxxi4YK19q1_pmJvcjF0=' />
                    <h3>Woman Health Care</h3>
                    <p>We provide quality healthcare services that meet the unique needs of women.</p>
                    <DoubleRightOutlined className='show_services_icon' />
                </div>
            </div>
            <div className='show_services_container'>
                <div className='show_services'>
                    <img src='https://media.istockphoto.com/id/1439349585/photo/newborn-baby-one-month-old-holding-fingers-mothers-hand.webp?b=1&s=170667a&w=0&k=20&c=L2iEOdNzMxopz1AqJyfyRVpGTXcmrR2UJ2KLIdEDxsE=' />
                    <h3>Contraception Advice</h3>
                    <p>We provide quality healthcare services that meet the unique needs of women.</p>
                    <DoubleRightOutlined className='show_services_icon' />
                </div>
                <div className='show_services'>
                    <img src='https://media.istockphoto.com/id/105555086/photo/newborn-smiling-portrait.webp?b=1&s=170667a&w=0&k=20&c=8e9_BUaZ31dp91QYXSAotTChxxi4YK19q1_pmJvcjF0=' />
                    <h3>Woman Health Care</h3>
                    <p>We provide quality healthcare services that meet the unique needs of women.</p>
                    <DoubleRightOutlined className='show_services_icon' />
                </div>
                <div className='show_services'>
                    <img src='https://media.istockphoto.com/id/105555086/photo/newborn-smiling-portrait.webp?b=1&s=170667a&w=0&k=20&c=8e9_BUaZ31dp91QYXSAotTChxxi4YK19q1_pmJvcjF0=' />
                    <h3>Woman Health Care</h3>
                    <p>We provide quality healthcare services that meet the unique needs of women.</p>
                    <DoubleRightOutlined className='show_services_icon' />
                </div>
            </div>
            <div className='show_services_container'>
                <div className='show_services'>
                    <img src='https://media.istockphoto.com/id/105555086/photo/newborn-smiling-portrait.webp?b=1&s=170667a&w=0&k=20&c=8e9_BUaZ31dp91QYXSAotTChxxi4YK19q1_pmJvcjF0=' />
                    <h3>Woman Health Care</h3>
                    <p>We provide quality healthcare services that meet the unique needs of women.</p>
                    <DoubleRightOutlined className='show_services_icon' />
                </div>
                <div className='show_services'>
                    <img src='https://media.istockphoto.com/id/105555086/photo/newborn-smiling-portrait.webp?b=1&s=170667a&w=0&k=20&c=8e9_BUaZ31dp91QYXSAotTChxxi4YK19q1_pmJvcjF0=' />
                    <h3>Woman Health Care</h3>
                    <p>We provide quality healthcare services that meet the unique needs of women.</p>
                    <DoubleRightOutlined className='show_services_icon' />
                </div>
                <div className='show_services'>
                    <img src='https://media.istockphoto.com/id/105555086/photo/newborn-smiling-portrait.webp?b=1&s=170667a&w=0&k=20&c=8e9_BUaZ31dp91QYXSAotTChxxi4YK19q1_pmJvcjF0=' />
                    <h3>Woman Health Care</h3>
                    <p>We provide quality healthcare services that meet the unique needs of women.</p>
                    <DoubleRightOutlined className='show_services_icon' />
                </div>
            </div>
        </Carousel>

    )
};
export default ShowServices;