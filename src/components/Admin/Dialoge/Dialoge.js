import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Dialoge/Dialoge.css'

function Dialog({ user, onClose }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SECRET_KEY}/personalDetails?userId = ${user.id}`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  return (
    <div className="dialog-container">
      <div className="dialog">
        <button className="close-btn" onClick={onClose}>Close</button>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          userData && (
            <>
              <h2>User Details</h2>
              <p>ID: {userData.id}</p>
              <p>Name: {userData.firstName}</p>
              <p>Gender: {userData.gender}</p>
              <p>Email: {userData.email}</p>
              <p>Phone: {userData.phone}</p>
              {userData.avatar && (
                <img src={userData.avatar} alt="User Avatar" />
              )}
            </>
          )
        )}
      </div>
    </div>
  );
}

export default Dialog;
