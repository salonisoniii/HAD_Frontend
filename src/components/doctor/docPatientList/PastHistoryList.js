import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import axios from 'axios';
import { toast } from "react-toastify";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function PastHistoryList({users,forceUpdate}) {
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
    field: 'gender',
    headerName: 'Gender',
    width: 150,

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





  

  const isLive = 0;
  const navigate = useNavigate();
  
const handleClick = (rowData) => {
 console.log(rowData);
navigate('/PInfo',{state:{admitId:rowData.admitId,aadhaar:rowData.aadhaar,isLive:isLive}})

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