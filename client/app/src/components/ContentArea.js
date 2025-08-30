import React from 'react'
import './ContentArea.css'
import Overview from '../pages/Overview';
import Rooms from '../pages/Rooms';
import Bookings from '../pages/Bookings';
import Reviews from '../pages/Reviews';
import QuickBooking from '../pages/QuickBooking';
import Login from '../pages/Login'

function ContentArea(props) {
    if (props.page=='Login'){
        return (
            <div className='content_area'>
                <Login/>
            </div>
        )
    }
    if (props.page=='Overview'){
        return (
            <div className='content_area'>
                <Overview/>
            </div>
        )
    }
    if (props.page=='Rooms'){
        return (
            <div className='content_area'>
                <Rooms/>
            </div>
        )
    }
    if (props.page=='Bookings'){
        return (
            <div className='content_area'>
                <Bookings/>
            </div>
        )
    }
    if (props.page=='Reviews'){
        return (
            <div className='content_area'>
                <Reviews/>
            </div>
        )
    }
    if (props.page=='QuickBooking'){
        return (
            <div className='content_area'>
                <QuickBooking/>
            </div>
        )
    }
    else{
        return(
            <div className='content_area'>
                <Overview/>
            </div>
        )
    }
}

export default ContentArea