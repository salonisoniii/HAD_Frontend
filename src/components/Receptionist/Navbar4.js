import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom';
import p1 from '../Admin/Assets/product_1.jpg'
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import axios from 'axios';
import './style4.css'

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
// function Navbar4({ Toggle,handleSignOut }) {

//   return (
//     <>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-transparent" >
//         <div className="container-fluid" >
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
//                 <Link className="nav-link dropdown-toggle" href="#" role="button"
//                   data-bs-toggle="dropdown" aria-expanded="false">
//                   <img src={p2} alt='profile image' className='profile-image' />
//                 </Link>
//                 <ul className="dropdown-menu " style={{marginLeft:'-75px'}}>
//                   <img src={p2} alt='profile image' className='profile-image' style={{ width: '70px', height: '70px', padding: '10px', marginLeft: '70px' }} />
                  
//                   <li><Link className="dropdown-item" to="/profile">John Doe</Link></li>
//                   <li><Link className="dropdown-item" to="/profile">john.doe@example.com</Link></li>
//                   <li><Link className="dropdown-item" to="/profile">9126543458</Link></li>
//                   <li><Link className="dropdown-item" to="/change-password">Change Password</Link></li>
//                   <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
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
//   )
// }

const Navbar4 = ({ toggleSidebar, handleSignOut }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [profileImage,setImageData] = useState(null);

  const handleDropdown = async () => {
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
        setImageData(response.data.response.profileImage);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          setError("403 Forbidden: You don't have permission to access this resource.");
        } else {
          setError("Error fetching user data: " + error.message);
        }
      }
    }
  };
  const handleProfileClick = () => {
    setIsOpen(prevState => !prevState);
  };
  useEffect(() => {
    handleDropdown();
  }, []);
  

  return (
    <Container>
      <NavIcon to='#'>
        <FaIcons.FaBars onClick={toggleSidebar} />
      </NavIcon>
      <div style={{ position: 'relative' }}>
      {profileImage && (
          <ProfileImage
            src={`data:image/jpeg;base64,${profileImage}`}
            alt="Profile"
            onClick={handleProfileClick}
            className="profile-image"
          />
        )} 
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
      </div>
    </Container>
  );
};
export default Navbar4;
