import React,{useState} from 'react'
import Sidebar3 from '../Sidebar3'
import Navbar3 from '../Navbar3'
import DataGridDemo from './ShowList';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function PatientList() {
    const [toggle,setToggle] = useState(true);
    const Toggle = () =>{
        setToggle(!toggle);
    }
    // const navigate = useNavigate();
    // const isLoggedIn=localStorage.getItem('isLoggedIn');
    // useEffect(()=>{
     
    //   if(isLoggedIn==='false')
    //   {
    //   navigate('/login');
    //   }
    // },[])
  return (
    <div>
      <div>
      <div className="container-fluid  min-vh-100" style={{backgroundColor:'#ECE3F0' }}>
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
