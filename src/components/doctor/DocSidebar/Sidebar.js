import React,{ useState } from 'react'
import '../doctor.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { DocSidebarData } from './DocSidebarData';
import Navbar1 from '../Navbar1';
import DocSubMenu from './DocSubMenu';

const Nav = styled.div`
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

const SidebarNav = styled.nav`
  background: #41036c;
  width: 230px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar2 }) => (sidebar2 ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;


const SidebarWrap = styled.div`
  width: 100%;
`;

// function Sidebar({ Toggle }) {
//     const [isOpen, setIsOpen] = useState(true);

//     const handleToggle = () => {
//         console.log('Before toggle:', isOpen);
//         setIsOpen(!isOpen);
//         console.log('After toggle:', !isOpen);
//         Toggle();
//     };
//     return (

//         <div className={`bg-white sidebar p-1 ${isOpen ? 'open' : ''}`}>
//             <div className='m-2 list-group-item py-1'>
                
//                 <i className="bi bi-justify-left fs-4 me-4 sidebar-toggle" onClick={Toggle}></i>
//                 <span className='brand-name fs-4'></span>
//             </div>
//             {!isOpen && (
//                 <div className="sidebar-closed-icon">
//                     <i className="bi bi-list fs-4" onClick={handleToggle}></i>
//                 </div>
//             )}
//             <hr className='text-dark' />
//             <div className='list-group list-group-flush'>
//                 <Link to='/doctor' className='list-group-item py-1'>
//                     <i className='bi bi-speedometer2 fs-5 me-4'></i>
//                     <span >DashBoard</span>
//                 </Link>
//                 <Link to='/DocPatientList' className='list-group-item py-2'>
//                     <i className='bi bi-clipboard-data-fill fs-5 me-4'></i>
//                     <span >Patient List</span>
//                 </Link>
//                 <Link to='/docschedule' className='list-group-item py-2'>
//                     <i className='bi bi-receipt fs-5 me-4'></i>
//                     <span >Doctor Schedule</span>
//                 </Link>
//                 {/* <a className='list-group-item py-2'>
//                     <i className='bi bi-gear fs-5 me-4'></i>
//                     <span >Setting</span>
//                 </a> */}
                
//             </div>

//         </div>
//     )
// }

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Navbar1 toggleSidebar={showSidebar} />
                 {/* Render the Navbar */}
                <SidebarNav sidebar2={sidebar}>
                    <SidebarWrap>
                        <NavIcon>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {DocSidebarData.map((item, index) => {
                          return  <DocSubMenu item={item} key={index} />
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;
