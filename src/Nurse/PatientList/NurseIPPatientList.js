import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { toast } from "react-toastify";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function NurseIPPatientList() {
  const columns = [
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
      field: 'gender',
      headerName: 'Gender',
      width: 150,

    },
    {
      field: 'wardNo',
      headerName: 'Ward No.',
      width: 150,

    },
    {
      field: 'remark',
      headerName: 'Remark',
      width: 250,
    },
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
  ];





  const [users, setUsers] = React.useState([]);
  const isLive = 1;
  const navigate = useNavigate();
  const handleClick = (rowData) => {
    console.log(rowData);
    navigate('/P_PInfo', { state: { admitId: rowData.admitId, aadhaar: rowData.aadhaar } })

  };

  React.useEffect(() => {
    fetchUsers();
  }, []
  );
  const fetchUsers = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      const isOP = 0;
      const role = localStorage.getItem('role');
      const headers = {
        'Authorization': token,
        'ngrok-skip-browser-warning': "true",
      }
      const response = await axios.get(
        `${process.env.REACT_APP_SECRET_KEY}/patient/viewLivePatients?role=${role}&isOP=${isOP}&userId=${userId}`,
        {
          headers: headers
        }
      );
      console.log("API response of Nurse IP patient list : " + JSON.stringify(response.data));
      setUsers(response.data.response);
    } catch (error) {
      console.log("Error", error);
      toast.error("Error from docInPatient. Please try again.");
    }
  };


  const getRowId = (row) => row.aadhaar;

  return (
    <Box sx={{ height: 400, width: '80%', marginLeft: '220px' }}>
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