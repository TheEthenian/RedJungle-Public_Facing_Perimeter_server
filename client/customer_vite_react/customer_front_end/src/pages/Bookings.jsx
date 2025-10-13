import React from 'react'
import './Bookings.css'
import BookingTablet from '../components/BookingTablet'

function Bookings() {
  return (
    <div className='main_div_booking'>
      <BookingTablet/>
      <BookingTablet/>
      <BookingTablet/>
    </div>
  )
}

export default Bookings