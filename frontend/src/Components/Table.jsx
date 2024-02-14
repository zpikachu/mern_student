import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState,useEffect } from 'react';
import Axios from 'axios'
import { Paper } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
const [student,setStudent]=useState([]);
useEffect(()=>{
  Axios.get('http://localhost:7000/api/student/getAllStudents')
  .then((response)=>{
    setStudent(response.data.students);
  })
  .catch((error)=>{
    console.log(error)
  });
},[]);


  return (

    <TableContainer component={Paper}>
      <Table sx={{minWidth:700}} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>SL NO</StyledTableCell>
            <StyledTableCell align="right">Student Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Class-Division</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
           student.map((row,index)=>(
          <StyledTableRow key={index+1}>
          <StyledTableCell component="th" scope='row'>{index+1}</StyledTableCell>
          <StyledTableCell align="right">{row.name}</StyledTableCell>
          <StyledTableCell align="right">{row.email}</StyledTableCell>
          <StyledTableCell align="right">{row.phone}</StyledTableCell>
          <StyledTableCell align="right">{row.address}</StyledTableCell>
          <StyledTableCell align="right">{row.class}-{row.division}</StyledTableCell>
        </StyledTableRow>
        ))
        }
        </TableBody>
      </Table>
    </TableContainer>

  );
}