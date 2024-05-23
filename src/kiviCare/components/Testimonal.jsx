import { Divider } from 'antd'
import React from 'react'

function Testimonal() {
  return (
    <div className='textimonal-container'>
      <div className='textimonal-left'>
        <Divider orientation="left">KIVICARE TESTIMONIAL</Divider>
        <h1>What Our Patients Say
          About Our Treatment
        </h1>
      </div>
      <div className='textimonal-right'>
        <p>“Still very professional but a much more relaxed atmosphere. This makes for a more comfortable experience which is helpful in dealing with medical issues.”</p>
        <div className='text_r_footer'>
          <img src="https://templates.iqonic.design/kivicare-dist/html/assets/images//testimonial/user-3.webp" alt="" />
          <div>
            <h2>Jack Leo</h2>
            <span>Coo Company</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonal