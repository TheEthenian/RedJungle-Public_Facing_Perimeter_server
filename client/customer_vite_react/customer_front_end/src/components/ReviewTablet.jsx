import React from 'react'
import './ReviewTablet.css'
import profile_pic from '../images/shot_1.png'

function ReviewTablet() {
  return (
    <div className='main_div_review_tablet'>
        <div className='star_and_button'>
            <div className='star_rating'>3.9/5.0</div>
            <button className='picture_button'>Pics</button>
        </div>
        <div className='review_message_container'>
            <div className='review_message'>
                He looked around, surrounded by his friend as they enjoyed the view.
                Today was a good day, he could feel it. The day he’d been waiting for, 
                pushing for. He’d just have to wiggle a bit more and it would be his turn,
                his turn to explore the beautiful world that had laid before him since he was born.
            </div>
        </div>
        <div className='detailed_data'>
            <div className='profile_picture'>
                <img src={profile_pic} alt='profile_pic'/>
            </div>
            <div className='user_and_date'>
                <div className='user_name'>Patric Star</div>
                <div className='date'>12thMonthYear</div>
            </div>
        </div>
    </div>
  )
}

export default ReviewTablet