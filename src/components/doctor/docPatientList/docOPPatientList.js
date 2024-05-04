import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import axios from 'axios';
import { toast } from "react-toastify";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function DocOPPatientList({emer}) {
const columns = [
  // {
  //   field: 'id',
  //   headerName: 'id',
  //   width: 150,

  // },
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
    field: 'aadhaar',
    headerName: 'Aadhaar',
    width: 150,

  },
  {
    field: 'remark',
    headerName: 'Remark',
    width: 250,
  },
  // {
  //   field: 'admitId',
  //   headerName: 'AdmitId',
  //   width: 250,
  //   hide:true,
  // },
  {
    field: 'view', // Add a field for the button
    headerName: 'view', // Header name for the column
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
          // `http://localhost:8090/his/patient/viewLivePatients?role=${role}&isOP=${isOP}&userId=${userId}`,
          // `https://summary-gnu-equally.ngrok-free.app/his/patient/viewLivePatients?role=${role}&isOP=${isOP}&userId=${userId}`,
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
   
 //for emergency case 
 const [selectedRow, setSelectedRow] = React.useState(null);
 const [buttonsVisible, setButtonsVisible] = React.useState(true);

 const handleRowClick = (index) => {
   setSelectedRow(index === selectedRow ? null : index);
   setButtonsVisible(true);
 };
 const handleCancel = (index) =>{
   setButtonsVisible(false);
 }
 const handleOk = async(index,emerId) =>{
   const userId = localStorage.getItem("userId");
     const token = localStorage.getItem("token");
     const role=localStorage.getItem("role");
     
     const headers = {
       Authorization: token,
       "ngrok-skip-browser-warning": "true",
       "Content-Type": "multipart/form-data",
     };
     const response = await axios.get(
       `${process.env.REACT_APP_SECRET_KEY}/doc/handleEmergency?userId=${userId}&emerId=${emerId}`,
      {
       headers: headers
     }
   );
   window.location.reload();
 }

//ends here


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
    <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '100%', marginTop: '10px',overflowX: 'auto'}}>
    <Box sx={{ flex: '0 0 80%', width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={getRowId}
        pageSize={5}
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
    <Box sx={{ flex: '1', padding: '0 10px', position: 'relative'}}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%',height:'57px', borderTopLeftRadius:'7px',borderTopRightRadius:'7px', borderBottom: '1px solid #ccc',background:'white' ,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <p style={{  margin: 0 ,textAlign:'center'}}>Emergency</p>
      </div>
      <div style={{ marginTop: '60px' }}> {/* Adjust margin-top as needed */}
        {emer.map((user, index) => (
          <div
            key={index}
            style={{
              marginBottom: '10px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '10px',
              position: 'relative',
              cursor: 'pointer', // To indicate clickable
            
            }}
            onClick={() => handleRowClick(index)}
          >
            <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{user.emerId}</p>
            <p>{user.remark}</p>
            {selectedRow === index && buttonsVisible && ( // Render buttons only for the selected row
              <div style={{ position: 'absolute', bottom: '5px', right: '5px' }}>
                <button onClick={() => handleCancel(index)}>Cancel</button>
                <button onClick={() => handleOk(index,user.emerId)}>OK</button>
              </div>
            )}
          </div>
        ))}
        </div>
      </Box>
  </Box>
      // <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '100%' ,marginTop:'10px'}}>
      // <Box sx={{ flex: '0 0 80%', paddingRight: '20px' , width: '100' }}>
      //   <DataGrid
      //     rows={users}
      //     columns={columns}
      //     getRowId={getRowId}
      //     initialState={{
      //       pagination: {
      //         paginationModel: {
      //           pageSize: 5,
      //         },
      //       },
      //     }}
      //     pageSizeOptions={[5]}
      //     // checkboxSelection
      //     disableRowSelectionOnClick
      //   />
      // </Box>
      // <Box sx={{ flex: '1' }}>
      //     {/* Display your array content here */}
      //     {emer.map((user, index) => (
      //       <div key={index}>
      //         <p>{user.emerId}</p>
      //         <p>{user.remark}</p>
      //         </div>
      //     ))}
      //   </Box>
      // </Box>
  );
}