import React from 'react';
import './style2.css'
import { Link } from 'react-router-dom';
import p1 from '../Admin/Assets/product_1.jpg'


function Navbar2({ Toggle,handleSignOut }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          {/* Move the toggle button to the sidebar */}
          <i className="bi bi-justify-left fs-4 sidebar-toggle" onClick={Toggle}></i>
          <div className='m-3'>
            <Link to='/admin'>
              <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
              <span className='brand-name fs-4'>HIS</span>
            </Link>
          </div>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={p1} alt='profile image' className='profile-image' />
                </Link>
                <ul className="dropdown-menu " style={{marginLeft:'-65px'}} >
                  <img src={p1} alt='profile image' className='profile-image' style={{ width: '70px', height: '70px', padding: '10px', marginLeft: '70px' }} />
                 {/* <li className='dropdown-item' style={{padding:'0px',margin:'0px',marginLeft:'0px',height:'50px'}}> */} 
                    {/* <table style={{padding:'0px',lineHeight:'0'}}>
                      <tbody>
                        <tr>
                          <td>John Doe</td>
                        </tr>
                        <tr>
                          <td>john.doe@example.com</td>
                        </tr>
                        <tr>
                          <td>9126543458</td>
                        </tr>
                      </tbody>
                    </table> */}
                  {/* </li> */}
                   {/* <li>John Doe</li>
                   <li>john.doe@example.com</li>
                   <li>9126543458</li> */}
                  <li><Link className="dropdown-item" to="/profile">John Doe</Link></li>
                  <li><Link className="dropdown-item" to="/profile">john.doe@example.com</Link></li>
                  <li><Link className="dropdown-item" to="/profile">9126543458</Link></li>
                  <li><Link className="dropdown-item" to="/change-password">Change Password</Link></li>
                  <li><Link className="dropdown-item" to="/edit-profile">Edit Profile</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li className="text-center"> {/* Center the Sign Out button */}
                  <Link className="btn btn-link btn-danger" to="/" style={{ textDecoration: 'none', color:'black'}} onClick={handleSignOut}>Sign Out</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar2;
