import React from 'react'
import data_product from '../Assets/data'
import Roles from '../Roles/Roles'
// import Navbar from '../Navbar'
import '../Details/DoctorDetails.css'

function DoctorDetails(){
  return (
    <>
    <div className='doctor-details'>
        <h1>Doctor Details</h1>
        <hr />
        <div className='doctor-item'>
            {data_product.map((item,i) =>{
                return <Roles key={i} id ={item.id } name = {item.name} image = {item.image}  specialization = {item.specialization} email = {item.email} no = {item.no} />
            })}
        </div>
      
    </div>
    </>
  )
}

export default DoctorDetails;
