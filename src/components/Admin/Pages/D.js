import React from 'react'
import DoctorDetails from '../Details/DoctorDetails'
import Navbar from '../Navbar'

const D = ({Toggle}) => {
  return (
    <>
    <Navbar Toggle={Toggle}/>
    <div>
      <DoctorDetails/>
    </div>
    </>
  )
}

export default D
