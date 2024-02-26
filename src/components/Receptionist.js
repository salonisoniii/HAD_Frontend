import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Receptionist = () => {
    const usenavigate=useNavigate();
  useEffect(()=>{
    let username=sessionStorage.getItem('username');
    if(username==='' || username===null){
      usenavigate('/login')
    }
  }, [])
    return ( 
        <h1>Welcome Receptionist</h1>
     );
}
 
export default Receptionist;