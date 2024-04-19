import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

export const Context = createContext(null);

const ContextProvider = (props) => {
    const [allDetails, setAllDetails] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

const headers = {
  userId: userId,
  Authorization: token,
  "ngrok-skip-browser-warning": "true",
//   "Content-Type": "multipart/form-data",
};
    const fetchData = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_SECRET_KEY}/admin/viewUsers?userId=${userId}`,
                {
                headers: headers
              }
              );
            setAllDetails(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const contextValue = { all_details: allDetails }; // Rename 'all_details' to 'allDetails'

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
