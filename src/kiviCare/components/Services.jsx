import React from 'react'
import { Divider } from 'antd'
import ServicesAdd from './ServicesAdd'
import { GoogleOutlined ,TwitterOutlined} from "@ant-design/icons"


function Services() {
    return (
        <>
            <div className='services_container'>
                <div className='services_left'>
                    <Divider orientation="right">ABOUT KIVICARE</Divider>
                    <h1>Fertility Services & Treatments.</h1>
                    <p>We at Kivicare IVF offer world-class solutions in fertility
                        treatments with the help of advanced tools and the experience
                        of pioneer gynecologists team</p>
                </div>
                <div className='services_right'>
                    <div className='services_item'>
                        <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/fertility-clinic/service-1.webp" alt="" />
                        <h2>Fertility Counseling</h2>
                        <p>To make this journey smooth, all Kivicare centres have qualified and dedicated counsellors on board.</p>
                    </div>
                    <div className='services_item'>
                        <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/fertility-clinic/service-3.webp" alt="" />
                        <h2>IUI Treatment</h2>
                        <p>To make this journey smooth, all Kivicare centres have qualified and dedicated counsellors on board.</p>
                    </div>
                    <div className='services_item'>
                        <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/fertility-clinic/service-2.webp" alt="" />
                        <h2>Embryoscope</h2>
                        <p>To make this journey smooth, all Kivicare centres have qualified and dedicated counsellors on board.</p>
                    </div>
                    <div className='services_item'>
                        <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/fertility-clinic/service-4.webp" alt="" />
                        <h2>Sperm Retrieval</h2>
                        <p>To make this journey smooth, all Kivicare centres have qualified and dedicated counsellors on board.</p>
                    </div>
                </div>
            </div>
            <ServicesAdd />
            <div className='ser_spl_container'>
                <div className='spl_div'>
                    <Divider orientation="right">EXPERTS</Divider>
                </div>
                <h1>Our Fertility Specialists</h1>
            </div>
            <div className='doctors_container'>
                <div className='doctors_cart'>
                    <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images//team/team-3.webp" alt="" />
                    <div className='doctors_btn'>
                        <div className='doctors_button'>
                            <span>f</span>
                        </div>
                        <div className='doctors_button'>
                            <TwitterOutlined />
                        </div>
                        <div className='doctors_button'>
                            <GoogleOutlined />
                        </div>
                    </div>
                </div>
                <div className='doctors_cart'>
                    <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images//team/team-4.webp" alt="" />
                    <div className='doctors_btn'>
                        <div className='doctors_button'>
                            <span>f</span>
                        </div>
                        <div className='doctors_button'>
                            <TwitterOutlined />
                        </div>
                        <div className='doctors_button'>
                            <GoogleOutlined />
                        </div>
                    </div>
                </div>
                <div className='doctors_cart'>
                    <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images//team/team-5.webp" alt="" />
                    <div className='doctors_btn'>
                        <div className='doctors_button'>
                            <span>f</span>
                        </div>
                        <div className='doctors_button'>
                            <TwitterOutlined />
                        </div>
                        <div className='doctors_button'>
                            <GoogleOutlined />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services