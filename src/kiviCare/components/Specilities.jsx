import { Divider } from 'antd'
import React from 'react'

function Specilities() {
    return (
        <div className='specilities_container_main'>
            <div className='specilities_container'>
                <div className='spl_div'>
                    <Divider orientation="right">WELCOME TO</Divider>
                </div>
                <h1>Specialized Programs</h1>
            </div>
            <div className='specilities_items_container'>
                <div className='specilities_item'>
                    <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/fertility-clinic/icon-1.svg" alt="" />
                    <h2>Test Tube Baby</h2>
                    <p>Kivicare offers the best IUI treatment
                        and is best hospital for infertility
                        treatments.</p>
                        <span className='spl_read_more'>Read More <span>+</span></span>
                </div>
                <div className='specilities_item'>
                    <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/fertility-clinic/icon-2.svg" alt="" />
                    <h2>Infertility Treatment</h2>
                    <p>Kivicare offers the best Embryo
                        treatment and is best hospital for
                        infertility treatments.</p>
                        <span className='spl_read_more'>Read More <span>+</span></span>
                </div>
                <div className='specilities_item'>
                    <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/fertility-clinic/icon-3.svg" alt="" />
                    <h2>Fertility Preservation</h2>
                    <p>Kivicare offers the best Embryo
                        treatment and is best hospital for
                        infertility treatments.</p>
                        <span className='spl_read_more'>Read More <span>+</span></span>
                </div>
                <div className='specilities_item'>
                    <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images/fertility-clinic/icon-4.svg" alt="" />
                    <h2>Surrogacy Treatment</h2>
                    <p>Kivicare offers hope with its Oocyte
                        fertility service to those who want to
                        postpone motherhood.</p>
                        <span className='spl_read_more'>Read More <span>+</span></span>
                </div>
            </div>
        </div>
    )
}

export default Specilities