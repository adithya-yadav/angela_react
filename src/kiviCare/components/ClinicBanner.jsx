import { Divider } from 'antd'
import React from 'react'

function ClinicBanner() {
    return (
        <div className="frtility-clinic-banner">
            <h1>Dreaming of Parenthood?</h1>
            <div className='frtility-clinic-container'>
                <div className='frtility-left'>
                    <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/fertility-clinic/banner-1.webp" alt="" />
                    <div className="frtility-clinic_div">
                        <Divider orientation="right">WELCOME TO</Divider>
                        <span className='frtility-clinic1'>KiviCare IVF <span className='frtility-clinic2'>Clinic</span></span>
                        <p>We are among the largest service providers in fertility treatment. Kivicare aims to make parenthood spell immeasurable amount of LOVE.</p>
                        <button className='appoint_btn'>Appointment | +</button>
                    </div>
                </div>
                <div className='frtility-right'>
                    <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/fertility-clinic/banner-2.webp" alt="" />
                    <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/fertility-clinic/banner-3.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ClinicBanner