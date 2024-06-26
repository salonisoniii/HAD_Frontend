import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import axios from 'axios';
import { toast } from "react-toastify";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function DataGridDemo2() {
const columns = [
  {
    field: 'id',
    headerName:  <span style={{fontWeight: 'bold'}}>ID</span>,
    width: 150,

  },
  {
    field: 'firstName',
    headerName:  <span style={{fontWeight: 'bold'}}>FIRST NAME</span>,
    width: 150,

  },
  {
    field: 'lastName',
    headerName:  <span style={{fontWeight: 'bold'}}>LAST NAME</span>,
    width: 150,

  },
  {
    field: 'aadhaar',
    headerName:  <span style={{fontWeight: 'bold'}}>AADHAAR</span>,
    width: 150,

  },
  {
    field: 'gender',
    headerName:  <span style={{fontWeight: 'bold'}}>GENDER</span>,
    width: 150,

  },
  // {
  //   field: 'remark',
  //   headerName: 'Remark',
  //   width: 250,
  // },
  // {
  //   field: 'admitId',
  //   headerName: 'AdmitId',
  //   width: 250,
  //   hide:true,
  // },
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
  // {
  //   field: 'gender',
  //   headerName: 'Gender',
  //   width: 150,
  //   editable: true,
  // },

  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  // },
];





  const [users,setUsers] = React.useState([]);

  const navigate = useNavigate();
const handleClick = (rowData) => {
 console.log(rowData);
navigate('/PInfo',{state:{admitId:rowData.admitId,aadhaar:rowData.aadhaar}})

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
      const isOP=1;
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

            // const ans = response.response.map((curUsers) => ({
            
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
          

       
    }catch (error) {
      console.log("Error", error);
      toast.error("Error from docInPatient. Please try again.");
    } 
  };
   



const rows = [
  
  // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 ,aadhaar:'12345',admitId:'12'},
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