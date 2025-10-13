import './BookingTablet.css'

import React from 'react'

function BookingTablet() {
  return (
    <div className='individual_div_booking'>
        <div className='first_div_booking'>

            <div className='name_and_data'>
                <div className='column_name_booking'>Guest ID:</div>
                <div className='guest_id'>JFSFGSFG5475</div>
            </div>
            <button className='cancel_button'>Cancel & Refund</button>

        </div>
        <div className='second_div_booking'>
            <div className='name_and_data'>
                <div className='column_name_booking'>Transaction ID:</div>
                <div className='transaction_id'>548sgss85sfgs</div>
            </div>
            <div className='name_and_data'>
                <div className='column_name_booking'>Hotel name:</div>
                <div className='booked_hotel_name'>Somehotel</div>
            </div>
            <div className='name_and_data'>
                <div className='column_name_booking'>Room Number:</div>
                <div className='room_no'>58</div>
            </div>

        </div>
        <div className='third_div_booking'>

            <div className='name_and_data'>
                <div className='column_name_booking'>Start Date:</div>
                 <div className='start_date'>75thMonth7585</div>
            </div>
            <div className='name_and_data'>
                <div className='column_name_booking'>End Date:</div>
                 <div className='end_date'>25thMonth5985</div>
            </div>

        </div>
        <div className='fourth_div_booking'>

            <div className='name_and_data'>
                <div className='column_name_booking'>Price:$</div>
                <div className='room_price'>586</div>
            </div>
            <div className='name_and_data'>
                <div className='column_name_booking'>Status:</div>
                <div className='room_status'>Paid</div>
            </div>

        </div>

    </div>
  )
}

export default BookingTablet
