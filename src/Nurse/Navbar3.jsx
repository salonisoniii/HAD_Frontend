import * as FaIcons from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Container = styled.nav`
  background: #49a2b0;
  height: 80px;
  display: flex;
  justify-content: space-between; /* Adjusted */
  align-items: center;
  padding: 0 20px;
`;

const NavIcon = styled(Link)`
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

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 80px;
    right: 0;
    width: 150px;
  }
`;

const DropdownItem = styled.li`
  list-style-type: none;
  margin: 10px 0;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Navbar3 = ({ toggleSidebar, handleSignOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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
        setProfileImage(response.data.response.profileImage);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          setError("403 Forbidden: You don't have permission to access this resource.");
        } else {
          setError("Error fetching user data: " + error.message);
        }
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <Container>
      <NavIcon>
        <FaIcons.FaBars onClick={toggleSidebar} />
      </NavIcon>
      <div style={{ position: 'relative' }}>
        {profileImage && (
          <ProfileImage
            src={`data:image/jpeg;base64,${profileImage}`}
            alt="Profile"
            onClick={handleDropdown}
            className="profile-image"
          />
        )}
        <DropdownMenu isOpen={isOpen}>
          {user && (
            <>
              <DropdownItem><Link to="/profile">{user.firstName}</Link></DropdownItem>
              <DropdownItem><Link to="/profile">darshit.jd@gmail.com</Link></DropdownItem>
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

export default Navbar3;
