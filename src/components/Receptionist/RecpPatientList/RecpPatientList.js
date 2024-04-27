import React, { useState } from 'react'


import DataGridDemo1 from './RecpShowList';

import Sidebar4 from '../RecSidebar/Sidebar4';
import Navbar4 from '../Navbar4';
import DataGridDemo2 from './RecpShowList';



export default function RecpPatientList() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  }
  return (
    <div>
      <div>
        <div className="container-fluid  min-vh-100" style={{ backgroundColor: '#ECE3F0' }}>
          <div className="row">
            {toggle && (
              <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
                <Sidebar4 Toggle={Toggle} />
              </div>
            )}
            {toggle && <div className="col-4 col-md-2"></div>}
            <div className="col">
              <Navbar4 Toggle={Toggle} />
              <DataGridDemo2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
