import React from 'react'
import '../Roles/Roles.css'
const Roles = (props) => {
    return (
        <>
        <div className='item'>
            {/* <img src={props.image}   alt='' /> */}
            <p> {props.firstName} </p>
            {/* <div className='item-specialization'>
                {props.specialization}
            </div> */}
            <div className='item-gender'>
                {props.gender}
            </div>
            <div className='item-email'>
                {props.email}
            </div>
            <div className='item-number'>
                {props.phone}
            </div>    
        </div>
        </>
    )
}

export default Roles;
