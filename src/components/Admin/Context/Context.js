import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

export const Context = createContext(null);

const ContextProvider = (props) => {
    const [allDetails, setAllDetails] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://summary-gnu-equally.ngrok-free.app/his/admin/viewUsers'); // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint
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
