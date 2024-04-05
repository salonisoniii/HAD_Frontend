import axios from 'axios';

// Fetch all_details data from backend API
const fetchAllDetails = async () => {
  try {
    const response = await axios.get('https://summary-gnu-equally.ngrok-free.app/his/admin/viewUsers'); // Replace 'YOUR_BACKEND_ENDPOINT' with your actual backend API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching all_details:', error);
    return [];
  }
};

export default fetchAllDetails;
