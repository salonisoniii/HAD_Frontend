import React from 'react'
import '../Roles/Roles.css'
const Roles = (props) => {
    return (
        <>
        <div className='item'>
            <img src={props.image}   alt='' />
            <p> {props.name} </p>
            <div className='item-specialization'>
                {props.specialization}
            </div>
            <div className='item-email'>
                {props.email}
            </div>
            <div className='item-number'>
                {props.no}
            </div>    
        </div>
        </>
    )
}

export default Roles;
