import React from 'react'
import './Header.css'

function Header({page_change}) {
  return (
        <div className='main_header'>
                <div className='username'>
                    <h4>Username</h4>
                </div>
                <div className='hotel_name'>
                    <h2>RedJungle</h2>
                </div>
                <div className='profile'>
                    <button className='authorization_button' onClick={() => {page_change('Login')}}>Login</button>
                    <button className='authorization_button' onClick={() => {page_change('Login')}}>Signup</button>
                </div>
        </div>
  )
}

export default Header