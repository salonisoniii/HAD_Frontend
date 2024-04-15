import React, { useState } from "react";
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

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    try {
      let response = await axios.get("https://summary-gnu-equally.ngrok-free.app/his/admin/viewUsers",{headers: {
        'ngrok-skip-browser-warning': 'true' 
      }});
      response = response.data;
      setData(response["response"]);
      setLoading(false); // Set loading to false after data is fetched
      console.log("-->"+ data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error); // Set error state
      setLoading(false); // Set loading to false
    }
  };
  fetchData();

  return (
    <div>
      <div className="container-fluid  min-vh-100" style={{backgroundColor:'#ECE3F0' }}>
        <div className="row">
          {toggle1 && (
            <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
              <Sidebar2 Toggle={Toggle1} />
            </div>
          )}
          {toggle1 && <div className="col-4 col-md-2"></div>}
          <div className="col">
            <Navbar2 Toggle={Toggle1} />
            {/* <h1 className="viewh">Details of Doctors</h1> */}
            {/* <thead>
              <tr>
                <th scope="col">Index</th>
                <th scope="col">First Name</th>
                <th scope="col">Email</th>
                <th scope="col">no</th>
              </tr>
            </thead> */}
            
            {loading ? (
              <p>Loading...</p> // Show loading indicator while fetching data
            ) : error ? (
              <p>Error: {error.message}</p> // Show error message if request fails
            ) : (
              <div className="item-category">
                <div className="category-details">
                {Array.isArray(data) && data.length > 0 ? (
                  data.map((item, i) => {if (props.role === item.role){ 
                    return (
                      <div className="role-card" key={i}>
                        <Roles
                          id={item.id}
                          firstName={item.firstName}
                        // image={item.image}
                        // specialization={item.specialization}
                          gender = {item.gender}
                          email={item.email}
                          phone={item.phone}
                        />
                      </div>
                    );
                  }else{
                    return null;
                  }
                 } )
                ) : (
                  <p>No data available</p>
                )}
                {/* console.log('Api response in category.js '+JSON.stringify(data)); */}
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
