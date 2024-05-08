import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import axios from 'axios';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';



export default function DataGridDemo1() {

const columns = [
  
  {
    field: 'firstName',
    headerName: <span style={{fontWeight: 'bold'}}>FIRST NAME</span>,
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: <span style={{fontWeight: 'bold'}}>LAST NAME</span>,
    width: 150,
    editable: true,
  },
  {
    field: 'aadhaar',
    headerName: <span style={{fontWeight: 'bold'}}>AADHAAR</span>,
    width: 150,
    editable: true,
  },
  {
    field: 'gender',
    headerName: <span style={{fontWeight: 'bold'}}>GENDER</span>,
    width: 150,
    editable: true,
  },
  {
    field: 'wardNo',
    headerName: <span style={{fontWeight: 'bold'}}>WARD NO.</span>,
    width: 150,
    editable: true,
  },
  
  {
    field: 'view', // Add a field for the button
    headerName: <span style={{fontWeight: 'bold'}}>VIEW</span>, // Header name for the column
    width: 150,
    renderCell: (params) => (
      <Button onClick={() => handleClick(params.row)} variant="contained" color="primary">
        View
      </Button>
    ),
  },
  
];





  const [users,setUsers] = React.useState([]);
  const isLive = 1;
    const navigate = useNavigate();
    const handleClick = (rowData) => {
      console.log(rowData);
     navigate('/PInfo',{state:{admitId:rowData.admitId,aadhaar:rowData.aadhaar,isLive:isLive}})
     
     };

  React.useEffect(()=>
  {
    fetchUsers();
  },[]
);
  const fetchUsers = async() =>{
    try{
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      const isOP=0;
      const role=localStorage.getItem('role');
      const headers = {
        // 'userId': userId,
        'Authorization': token,
        'ngrok-skip-browser-warning': "true",
        // 'Content-Type': 'multipart/form-data'
      }
      const response = await axios.get(
          `${process.env.REACT_APP_SECRET_KEY}/patient/viewLivePatients?role=${role}&isOP=${isOP}&userId=${userId}`,
          {
          headers: headers
        }
        );
       
      
        
            console.log("API response of patient list : "+JSON.stringify(response.data))
            // const ans = resp.response.map((curUsers) => ({
            
              // id:curUsers.id,
              // firstName:curUsers.firstName,
              // lastName:curUsers.lastName,
              // gender: curUsers.gender,
              // DOB: curUsers.birthDate
                          //  setUsers(resp.response);
            // }));
            //console.log(ans);
            setUsers(response.data.response);
            // setUsers(ans);
        

       
    }catch(e){
        console.error(e); 
    }
  };
   



const rows = [
  
  // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const getRowId = (row) => row.aadhaar;
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={getRowId}
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
  );
}