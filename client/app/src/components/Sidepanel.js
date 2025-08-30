import React from 'react'
import './Sidepanel.css'


function Sidepanel({page_change}) {
  return (
    <div className='side_panel_div'>
        <button className='side_panel_button' onClick={() => {page_change('Overview')}}>Overview</button>
        <button className='side_panel_button' onClick={() => {page_change('Rooms')}}>Rooms</button>
        <button className='side_panel_button' onClick={() => {page_change('Reviews')}}>Reviews</button>
        <button className='side_panel_button' onClick={() => {page_change('Bookings')}}>Bookings</button>
        <button className='side_panel_button' onClick={() => {page_change('QuickBooking')}}>QuickBooking</button>
    </div>
  )
}

export default Sidepanel