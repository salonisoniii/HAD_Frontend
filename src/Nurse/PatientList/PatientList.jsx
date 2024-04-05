import React,{useState} from 'react'
import Sidebar3 from '../Sidebar3'
import Navbar3 from '../Navbar3'
import DataGridDemo from './ShowList';



export default function PatientList() {
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
              <Sidebar3 Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className="col-4 col-md-2"></div>}
          <div className="col">
            <Navbar3 Toggle={Toggle} />
            <DataGridDemo/>
</div>
</div>
</div>
</div>
    </div>
  )
}
