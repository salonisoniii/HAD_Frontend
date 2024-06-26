import React, { useState } from 'react'
import Sidebar from '../DocSidebar/Sidebar';
import DocShowList from './DocShowList';



export default function DocIPPatientList() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  }
  return (
    <div>

      <Sidebar />
      <div className="row">

        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          {/* <Navbar1 Toggle={Toggle} /> */}
          <DocShowList />
        </div>
      </div>
    </div>
  )
}
