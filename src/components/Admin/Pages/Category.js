import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Pages/CSS/Category.css";

import Roles from "../Roles/Roles";
import Navbar2 from "../Navbar2";
import Sidebar2 from "../Sidebar2";

function Category({ Toggle = false, ...props }) {
  const [toggle1, setToggle1] = useState(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  const Toggle1 = () => {
    setToggle1(!toggle1);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const headers = {
    userId: userId,
    Authorization: token,
    "ngrok-skip-browser-warning": "true",
    // "Content-Type": "multipart/form-data",
  };
  const fetchData = async () => {
    try {
      let response = await axios.get(
        `https://present-neat-mako.ngrok-free.app/his/admin/viewUsers?userId=${userId}`,
        {
          headers: headers,
        }
      );
      console.log("API Response: " + JSON.stringify(response.data));
      response = response.data;
      setData(response);
      setLoading(false); // Set loading to false after data is fetched
      console.log("-->" + data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error); // Set error state
      setLoading(false); // Set loading to false
    }
  };
  // const navigate = useNavigate();
  // const isLoggedIn=localStorage.getItem('isLoggedIn');
  // useEffect(()=>{

  //   if(isLoggedIn===null)
  //   {
  //   navigate('/login');
  //   }
  // },[])

  return (
    <div>
      <div
        className="container-fluid  min-vh-100"
        style={{ backgroundColor: "#ECE3F0" }}
      >
        <div className="row">
          {toggle1 && (
            <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
              <Sidebar2 Toggle={Toggle1} />
            </div>
          )}
          {toggle1 && <div className="col-4 col-md-2"></div>}
          <div className="col">
            <Navbar2 Toggle={Toggle1} />
           
            {/* console.log('Api response in category.js '+JSON.stringify(data)); */}
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : (
              <div className="item-category">
                <div className="category-details">
                  {Array.isArray(data[props.role.toLowerCase()]) &&
                  data[props.role.toLowerCase()].length > 0 ? (
                    data[props.role.toLowerCase()].map((item, i) => (
                      <div className="role-card" key={i}>
                        <Roles
                          id={item.id}
                          firstName={item.firstName}
                          gender={item.gender}
                          email={item.email}
                          phone={item.phone}
                        />
                      </div>
                    ))
                  ) : (
                    <p>No data available</p>
                    
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
