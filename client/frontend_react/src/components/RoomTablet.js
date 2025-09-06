import React from 'react'
import './RoomTablet.css'

function FloatingTablet(props) {
  return (
        <div className='singular_tablet'>
            <div className='first_div'>
                <img className='product_img' src={props.imagesrc} alt='space_walk'/>
            </div>

            <div className='second_div'>

                <div className='tablet_info'>
                    <p className='room_name'>{props.room_name}</p>
                    <p className='tablet_description'>{props.description}</p>
                </div>
                <div className='pricing'>
                    <strong>Price</strong>
                    <p className='price_tag'>{props.price_tag}</p>
                </div>
                <div className='tablet_buttons'>
                    <button className='button_instance'>More Info</button>
                    <button className='button_instance'>Book</button>
                    <button className='button_instance'>Check reviews</button>
                </div>

            </div>
        </div>
  )
}

export default FloatingTablet