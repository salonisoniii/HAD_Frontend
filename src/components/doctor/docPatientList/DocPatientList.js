import React,{useState} from 'react'
// import Sidebar3 from '../Sidebar3'
// import Navbar3 from '../Navbar3'

import DataGridDemo1 from './DocShowList';
import Navbar1 from '../Navbar1';
import Sidebar from '../Sidebar';



export default function DocPatientList() {
    const [toggle,setToggle] = useState(true);
    const Toggle = () =>{
        setToggle(!toggle);
    }
  return (
    <div>
      <div>
      <div className="container-fluid bg-secondary min-vh-100">
        <div className="row">
          {toggle && (
            <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
              <Sidebar Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className="col-4 col-md-2"></div>}
          <div className="col">
            <Navbar1 Toggle={Toggle} />
            <DataGridDemo1/>
</div>
</div>
</div>
</div>
    </div>
  )
}
