import React from 'react'
import './ContentArea.css'
import Rooms from '../pages/Rooms';
import Hotel from '../pages/Hotel';
import Tenant from '../pages/Tenant'
import Billing from '../pages/Billing'
import Reviews from '../pages/Reviews'
import Services from '../pages/Services'
import Users from '../pages/Users'
import Guests from '../pages/Guests'
import Analytics from '../pages/Analytics'
import AuditLogs from '../pages/AuditLogs'
import CreateTenant from '../pages/CreateTenant'
import Login from '../pages/Login'



function ContentArea(props) {
    if (props.page === 'Rooms'){
        return (
            <div className='content_area'>
                <Rooms/>
            </div>
        )
    }
    if (props.page === 'Hotel'){
        return (
            <div className='content_area'>
                <Hotel/>
            </div>
        )
    }
    if (props.page === 'Tenant'){
        return (
            <div className='content_area'>
                <Tenant/>
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
    if (props.page === 'Reviews'){
        return (
            <div className='content_area'>
                <Reviews/>
            </div>
        )
    }
    if (props.page === 'Services'){
        return (
            <div className='content_area'>
                <Services/>
            </div>
        )
    }
    if (props.page === 'Users'){
        return (
            <div className='content_area'>
                <Users/>
            </div>
        )
    }
    if (props.page === 'Guests'){
        return (
            <div className='content_area'>
                <Guests/>
            </div>
        )
    }
    if (props.page === 'Analytics'){
        return (
            <div className='content_area'>
                <Analytics/>
            </div>
        )
    }
    if (props.page === 'AuditLogs'){
        return (
            <div className='content_area'>
                <AuditLogs/>
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
    if (props.page === 'CreateTenant'){
        return (
            <div className='content_area'>
                <CreateTenant/>
            </div>
        )
    }

    else{
        return(
            <div className='content_area'>
                <Login/>
            </div>
        )
    }
}

export default ContentArea