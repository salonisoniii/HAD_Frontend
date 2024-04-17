import axios from 'axios';

// Fetch all_details data from backend API
const fetchAllDetails = async () => {
  const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

  const headers = {
    userId: userId,
    Authorization: token,
    "ngrok-skip-browser-warning": "true",
    // "Content-Type": "multipart/form-data",
  };
  try {
    const response = await axios.get(`https://present-neat-mako.ngrok-free.app/his/admin/viewUsers?userId=${userId}`,
    {
    headers: headers
  }
  ); // Replace 'YOUR_BACKEND_ENDPOINT' with your actual backend API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching all_details:', error);
    return [];
  }
};

export default fetchAllDetails;
