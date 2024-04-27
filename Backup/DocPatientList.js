import React, { useState } from 'react'
// import Sidebar3 from '../Sidebar3'
// import Navbar3 from '../Navbar3'

import DataGridDemo1 from './DocShowList';
import Sidebar from '../DocSidebar/Sidebar';



export default function DocPatientList() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  }
  return (
    <>
    <Sidebar/>
      <div className="row">

        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          {/* <Navbar1 Toggle={Toggle} /> */}
          <DataGridDemo1 />
        </div>
      </div>
    </>
  )
}
