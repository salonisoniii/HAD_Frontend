import React,{useState} from 'react'


import Navbar1 from '../Navbar1';
import Sidebar from '../Sidebar';
import DocShowList from './DocShowList';



export default function DocIPPatientList() {
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
            <DocShowList/>
</div>
</div>
</div>
</div>
    </div>
  )
}
