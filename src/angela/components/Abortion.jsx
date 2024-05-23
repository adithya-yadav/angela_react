import React from 'react'

function Abortion({hd1="ABORTION SERVICES",hd2="With You at Every Step.",hd3="We offer a wide range of abortion services at ANGELA Family Planning Clinic.",btn="Make an Appointment"}) {
  return (
    <div className='abortion_container' >
        <img className='abortion_container_img' src="https://media.istockphoto.com/id/1439349585/photo/newborn-baby-one-month-old-holding-fingers-mothers-hand.webp?b=1&s=170667a&w=0&k=20&c=L2iEOdNzMxopz1AqJyfyRVpGTXcmrR2UJ2KLIdEDxsE=" alt="img" />
      <p className='service_line_header'> &nbsp; &nbsp; {hd1} &nbsp; &nbsp;</p>
      <h1>{hd2}</h1>
      <p className='abortion_para'>{hd3}</p> 
      <button className='make_appointment'>{btn}</button>
    </div>
  )
}

export default Abortion