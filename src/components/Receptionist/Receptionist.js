import {React , useState,useEffect,useNavigate} from 'react'
import Sidebar4 from './RecSidebar/Sidebar4'
import Rdashboard from './Rdashboard/Rdashboard';

function Receptionist() {
    const [toggle, setToggle] = useState(true);

    const Toggle = () => {
      setToggle(!toggle);
    };
  //   const navigate = useNavigate();
  // const isLoggedIn=localStorage.getItem('isLoggedIn');
  // useEffect(()=>{
   
  //   if(isLoggedIn==='false')
  //   {
  //   navigate('/login');
  //   }
  // },[])
  return (
    <>
      <Sidebar4 />
        <div className='row'>
          
          {toggle && <div className='col-4 col-md-2'></div>}
          <div className='col'>
            {/* <Navbar4 Toggle={Toggle}  /> */}

          
          

            <Rdashboard/>

          </div>
        </div>
    </>
    
  )
}

export default Receptionist
