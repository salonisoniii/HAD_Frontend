import React,{useEffect,useState,useNavigate} from 'react'
import '../Roles/Roles.css'
const Roles = (props) => {
//     const navigate = useNavigate();
//   const isLoggedIn=localStorage.getItem('isLoggedIn');
//   useEffect(()=>{
   
//     if(isLoggedIn==='false')
//     {
//     navigate('/login');
//     }
//   },[])
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
