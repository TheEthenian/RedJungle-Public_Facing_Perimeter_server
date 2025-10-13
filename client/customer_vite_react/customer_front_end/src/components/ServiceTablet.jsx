import React from 'react'
import './ServiceTablet.css'
import service_pic from '../images/shot_1.png' 

function ServiceTablet() {
  return (
    <div className='main_div_service_tablet'>

        <div className='first_div_service'>
            <div className='service_name'>MOVIE THEATRE</div>
        </div>

        <div className='second_div_service'>
            <img src={service_pic} alt='service_pic'/>
        </div>
        <div className='third_div_service'>

            <div className='day_time_service_div'>
                <div className='service_day_available'> Thursday</div>
                <div className='service_time_availble'>1100hrs - 1500hrs</div>
            </div>

            <div className='day_time_service_div'>
                <div className='service_day_available'> Friday</div>
                <div className='service_time_availble'>1100hrs - 1500hrs</div>
            </div>

            <div className='day_time_service_div'>
                <div className='service_day_available'> Sunday</div>
                <div className='service_time_availble'>1100hrs - 1500hrs</div>
            </div>

        </div>
        <div className='fourth_div_service'>
            <button className='service_button'>More Info</button>
            <button className='book_service_button'>Book</button>
        </div>

    </div>
  )
}

export default ServiceTablet
