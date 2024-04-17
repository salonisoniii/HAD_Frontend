import {React , useState,useEffect,useNavigate} from 'react'
import Sidebar4 from './Sidebar4'
import Rdashboard from './Rdashboard/Rdashboard';
import Navbar4 from './Navbar4';
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
    <div>
      <div className='container-fluid  min-vh-100' style={{backgroundColor:'#ECE3F0' }}>
        <div className='row'>
          {toggle && (
            <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
              <Sidebar4 Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className='col-4 col-md-2'></div>}
          <div className='col'>
            <Navbar4 Toggle={Toggle}  />

          
          

            <Rdashboard/>

          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Receptionist
