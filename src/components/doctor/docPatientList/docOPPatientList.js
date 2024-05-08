import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Swal from 'sweetalert2';
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
    headerName: <span style={{fontWeight: 'bold'}}>FIRST NAME</span>,
    width: 150,
  },
  {
    field: 'lastName',
    headerName: <span style={{fontWeight: 'bold'}}>LAST NAME</span>,
    width: 150,
  },
  {
    field: 'aadhaar',
    headerName: <span style={{fontWeight: 'bold'}}>AADHAAR</span>,
    width: 150,
  },
  {
    field: 'remark',
    headerName: <span style={{fontWeight: 'bold'}}>REMARK</span>,
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
 const handleOk =(index,emerId) =>{
  if (!emerId) {
    console.log("Emergency ID is null, no API call will be made.");
    return; 
  }

   const userId = localStorage.getItem("userId");
     const token = localStorage.getItem("token");
     const role=localStorage.getItem("role");
     
     const headers = {
       Authorization: token,
       "ngrok-skip-browser-warning": "true",
       "Content-Type": "multipart/form-data",
     };

     const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You will handle this Emergency",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No  ",
      reverseButtons: true
    }).then(async(result) => {
      if (result.isConfirmed) {
      
     const response = await axios.get(
       `${process.env.REACT_APP_SECRET_KEY}/doc/handleEmergency?userId=${userId}&emerId=${emerId}`,
      {
       headers: headers
     }
   );
   window.location.reload();
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "Patient is not Handled :)",
      icon: "error"
    });
  }
 });
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
    <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%', marginTop: '10px',overflowX: 'auto'}}>
   <Box sx={{ flex: '0 0 80%', width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={getRowId}
        pageSize={5}
        itialState={{
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
    <Box sx={{ flex: '1', padding: '0 10px', position: 'relative', border: '1px solid #e0e0e0', borderRadius: '7px', marginLeft: '10px' }}>
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '57px', background: 'linear-gradient(to right, #ff416c, #ff4b2b)', borderBottom: '1px solid #ccc', borderTopLeftRadius: '7px', borderTopRightRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <p style={{ margin: 0, textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem', color: 'white' }}>Emergency</p>
  </div>
  <div style={{ marginTop: '60px' }}> {/* Adjust margin-top as needed */}
    {emer && emer.length > 0 && emer.map((user, index) => (
      <div
        key={index}
        style={{
          marginBottom: '10px',
          borderBottom: '1px solid #ccc',
          paddingBottom: '10px',
          position: 'relative',
          cursor: 'pointer', // To indicate clickable
          background: index % 2 === 0 ? '#f9f9f9' : 'white', // Alternate row background color
          borderRadius: '5px', // Rounded corners for each row
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Shadow effect for each row
        }}
        onClick={() => handleRowClick(index)}
      >
        <div style={{ padding: '10px', borderRadius: '5px', transition: 'background-color 0.3s',marginBottom: '25px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '5px', margin: '0', color: '#333' }}>{user.emerId}</p>
          <p style={{ margin: '0', color: '#666' }}>{user.remark}</p>
          {selectedRow === index && buttonsVisible && (
            <div style={{ position: 'absolute', bottom: 0, right: 0, display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <button style={{ marginRight: '10px', padding: '5px 10px', border: 'none', borderRadius: '5px', background: '#ff4b2b', color: 'white', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s' }} onClick={() => handleCancel(index)}>Cancel</button>
              <button style={{ padding: '5px 10px', border: 'none', borderRadius: '5px', background: '#4caf50', color: 'white', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s' }} onClick={() => handleOk(index, user.emerId)}>Confirm</button>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</Box>

    {/* <Box sx={{ flex: '1', padding: '0 10px', position: 'relative',border:'1px solid #e0e0e0',borderTopLeftRadius:'7px',borderTopRightRadius:'7px',marginLeft:'10px'}}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%',height:'57px',background: 'red', borderBottom: '1px solid #ccc', borderTopLeftRadius:'7px',borderTopRightRadius:'7px' ,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <p style={{  margin: 0 ,textAlign:'center', fontWeight: 'bold', fontSize: '1.2rem'}}>Emergency</p>
      </div>
      <div style={{ marginTop: '60px' }}> 
        {emer && emer.length > 0 && emer.map((user, index) => (
          <div
            key={index}
            style={{
              marginBottom: '10px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '10px',
              position: 'relative',
              cursor: 'pointer', 
            
            }}
            onClick={() => handleRowClick(index)}
          >
            <div style={{ marginBottom: '31px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '5px',margin:'0'}}>{user.emerId}</p>
            <p style={{margin:'0'}}>{user.remark}</p>
            
            {selectedRow === index && buttonsVisible && ( // Render buttons only for the selected row
              <div style={{ position: 'absolute', bottom: '', right: '5px', display: 'flex', marginTop:'10px' }}>
                <button style={{ marginRight: '5px' }} onClick={() => handleCancel(index)}>Cancel</button>
                <button onClick={() => handleOk(index,user.emerId)}>Confirm</button>
              </div>
            )}
            </div>
          </div>
        ))}
        </div>
      </Box> */}
      

    </div>
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