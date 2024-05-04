import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { toast } from "react-toastify";
import Navbar3 from '../Navbar3';
import Sidebar3 from '../NurseSidebar/Sidebar3';



export default function OnShiftNurse() {
  const [toggle, setToggle] = React.useState(true);
 

  const Toggle = () => {
    setToggle(!toggle);
  };
const columns = [
    {
        field: 'id',
        headerName: 'Id',
        width: 150,
    
      },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,

  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,

  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 150,

  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 150,

  },
  {
    field: 'blood',
    headerName: 'Blood Group',
    width: 150,

  },
  {
    field: 'experience',
    headerName: 'Experience',
    width: 250,
  },
];





  const [users,setUsers] = React.useState([]);
  

  React.useEffect(()=>
  {
    fetchUsers();
  },[]
);
  const fetchUsers = async() =>{
    try{
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      
      
      const headers = {
        'Authorization': token,
        'ngrok-skip-browser-warning': "true",
      }
      const response = await axios.get(
        `${process.env.REACT_APP_SECRET_KEY}/nurse/onShiftNurse?userId=${userId}`,
          {
          headers: headers
        }
        );
            console.log("API response of Nurse IP patient list : "+JSON.stringify(response.data));
            const userWithIds = response.data.response.map((user,index)=>({
              ...user,
              id: index+1
            }))
            setUsers(userWithIds);
    }catch (error) {
      console.log("Error", error);
      toast.error("Error from OnShiftNurse. Please try again.");
    } 
  };
   

// const getRowId = (row) => row.aadhaar;

  return (
    <div className="container-fluid  min-vh-100" style={{backgroundColor:'#ECE3F0' }}>
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar3 Toggle={Toggle}/>
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          <Navbar3 Toggle={Toggle} />
    <Box sx={{ height: 400, width: '100',marginLeft:'220px' }}>
      <DataGrid
        rows={users}
        columns={columns}
        // getRowId={getRowId}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>
    </div>
    </div>
  );
}