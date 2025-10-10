import React from 'react'
import './ContentArea.css'
import Services from '../pages/Services';
import Rooms from '../pages/Rooms';
import Bookings from '../pages/Bookings';
import Reviews from '../pages/Reviews';
import Billing from '../pages/Billing';
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

function ContentArea(props) {
    if (props.page === 'SignUp'){
        return (
            <div className='content_area'>
                <SignUp/>
            </div>
        )
    }
    if (props.page === 'Login'){
        return (
            <div className='content_area'>
                <Login/>
            </div>
        )
    }
    if (props.page === 'Hotel Services'){
        return (
            <div className='content_area'>
                <Services/>
            </div>
        )
    }
    if (props.page === 'Rooms'){
        return (
            <div className='content_area'>
                <Rooms/>
            </div>
        )
    }
    if (props.page === 'Bookings'){
        return (
            <div className='content_area'>
                <Bookings/>
            </div>
        )
    }
    if (props.page === 'Reviews'){
        return (
            <div className='content_area'>
                <Reviews/>
            </div>
        )
    }
    if (props.page === 'Billing'){
        return (
            <div className='content_area'>
                <Billing/>
            </div>
        )
    }
    else{
        return(
            <div className='content_area'>
                <Rooms/>
            </div>
        )
    }
}

export default ContentArea