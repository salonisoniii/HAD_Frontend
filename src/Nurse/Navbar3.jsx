import * as FaIcons from 'react-icons/fa';

// export default Navbar;

import React ,{useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import p1 from '../components/Admin/Assets/product_1.jpg';
import './style3.css';
import axios from 'axios';

const Container = styled.nav`
  background: #49a2b0;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left : 1180px
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 70px;
  right: 20px;
  background: #49a2b0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const DropdownItem = styled.li`
  list-style-type: none;
  margin: 5px 0;
  a {
    text-decoration: none;
    color: black;
  }
`;
// function Navbar2({ Toggle,handleSignOut }) {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
//         <div className="container-fluid">
//           {/* Move the toggle button to the sidebar */}
//           <i className="bi bi-justify-left fs-4 sidebar-toggle" onClick={Toggle}></i>
//           <div className='m-3'>
//             <Link to='/admin'>
//               <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
//               <span className='brand-name fs-4'>HIS</span>
//             </Link>
//           </div>


//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item dropdown">
//                 <Link className="nav-link dropdown-toggle" role="button"
//                   data-bs-toggle="dropdown" aria-expanded="false">
//                   <img src={p1} alt='profile image' className='profile-image' />
//                 </Link>
//                 <ul className="dropdown-menu " style={{marginLeft:'-65px'}} >
//                   <img src={p1} alt='profile image' className='profile-image' style={{ width: '70px', height: '70px', padding: '10px', marginLeft: '70px' }} />
//                  {/* <li className='dropdown-item' style={{padding:'0px',margin:'0px',marginLeft:'0px',height:'50px'}}> */} 
//                     {/* <table style={{padding:'0px',lineHeight:'0'}}>
//                       <tbody>
//                         <tr>
//                           <td>John Doe</td>
//                         </tr>
//                         <tr>
//                           <td>john.doe@example.com</td>
//                         </tr>
//                         <tr>
//                           <td>9126543458</td>
//                         </tr>
//                       </tbody>
//                     </table> */}
//                   {/* </li> */}
//                    {/* <li>John Doe</li>
//                    <li>john.doe@example.com</li>
//                    <li>9126543458</li> */}
//                   <li><Link className="dropdown-item" to="/profile">John Doe</Link></li>
//                   <li><Link className="dropdown-item" to="/profile">john.doe@example.com</Link></li>
//                   <li><Link className="dropdown-item" to="/profile">9126543458</Link></li>
//                   <li><Link className="dropdown-item" to="/change-password">Change Password</Link></li>
//                   <li><Link className="dropdown-item" to="/edit-profile">Edit Profile</Link></li>
//                   <li><hr className="dropdown-divider" /></li>
//                   <li className="text-center"> {/* Center the Sign Out button */}
//                   <Link className="btn btn-link btn-danger" to="/" style={{ textDecoration: 'none', color:'black'}} onClick={handleSignOut}>Sign Out</Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
const Navbar3 = ({ toggleSidebar, handleSignOut }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);
  

  const handleDropdown = async () => {
    setIsOpen(!isOpen);
    if (!user) {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const role = localStorage.getItem('role');
        const headers = {
          Authorization: token,
          "ngrok-skip-browser-warning": "true",
        };
        const response = await axios.get(`${process.env.REACT_APP_SECRET_KEY}/personalDetails?id=${userId}&role=${role}`, { headers });
        setUser(response.data.response);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          setError("403 Forbidden: You don't have permission to access this resource.");
        } else {
          setError("Error fetching user data: " + error.message);
        }
      }
    }
  };
  // if (!user) {
  //   return null; // Render nothing or a loading indicator
  // }

  return (
    <Container>
      <NavIcon to='#'>
        <FaIcons.FaBars onClick={toggleSidebar} />
      </NavIcon>
      <div style={{ position: 'relative' }}>
        <a href="#" onClick={handleDropdown}>
          <ProfileImage src={p1} alt='profile image' className='profile-image' />
        </a>
        {isOpen && (
          <DropdownMenu isOpen={isOpen}>
            {user && (
              <>
                <DropdownItem><Link to="/profile">{user.firstName}</Link></DropdownItem>
                <DropdownItem><Link to="/profile">a@gmail.com</Link></DropdownItem>
                <DropdownItem><Link to="/profile">{user.phone}</Link></DropdownItem>
                <DropdownItem><Link to="/change-password">Change Password</Link></DropdownItem>
                <DropdownItem><Link to="/edit-profile">Edit Profile</Link></DropdownItem>
                <DropdownItem><Link to="/" onClick={handleSignOut}>Sign Out</Link></DropdownItem>
              </>
            )}
            {error && (
              <DropdownItem>{error}</DropdownItem>
            )}
          </DropdownMenu>
        )}
      </div>
    </Container>
  );
};

export default Navbar3;
