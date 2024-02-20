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
import {Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Link} from 'react-router-dom'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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

const DIS = {
  "&:hover": {
    color: 'red',
    transform:"scale(1.3)",
    transition:"0.5s"
  },
};
const EIS = {
  marginRight:"25px",
  "&:hover": {
    color: 'lime',
    transform:"scale(1.3)",
    transition:"0.5s"
  },
};






export default function CustomizedTables() {

const [student,setStudent]=useState([]);
const [selectStudent,setSelectStudent]=useState(null);
const [count,setCount]=useState(true);

const [open, setOpen] = React.useState(false);
const handleOpen = (student) => {
  setOpen(true);
  setSelectStudent(student);
}
const handleClose = () => setOpen(false);

useEffect(()=>{
  Axios.get('http://localhost:7000/api/student/getAllStudents')
  .then((response)=>{
    setStudent(response.data.students);
    handleClose();
    
  })
  .catch((error)=>{
    console.log(error)
  });
},[count]);

const handleDelete= async()=>{
  Axios.delete(`http://localhost:7000/api/student/deleteStudent/${selectStudent._id}`)
  .then((res)=>{
    console.log(res.data)
    setCount(!count);
  })
  .catch((err)=>{
    console.log(err)
  })
  console.log(selectStudent);
};

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{minWidth:700}} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>SL NO</StyledTableCell>
            <StyledTableCell align="left">Student Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Phone</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">Class-Division</StyledTableCell>
            <StyledTableCell align="left">Operation</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
           student.map((row,index)=>(
          <StyledTableRow key={index+1}>
          <StyledTableCell component="th" scope='row'>{index+1}</StyledTableCell>
          <StyledTableCell align="left">{row.name}</StyledTableCell>
          <StyledTableCell align="left">{row.email}</StyledTableCell>
          <StyledTableCell align="left">{row.phone}</StyledTableCell>
          <StyledTableCell align="left">{row.address}</StyledTableCell>
          <StyledTableCell align="left">{row.Class}-{row.division}</StyledTableCell>
          <StyledTableCell align="left">
          <Link to={`/update/${row._id}`}>
          <EditIcon sx={EIS} />
          </Link>
          <DeleteIcon sx={DIS} onClick={()=>handleOpen(row)}/>
          </StyledTableCell>
        </StyledTableRow>
        ))
        }
        </TableBody>
      </Table>
    </TableContainer>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Attemting to delete
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2,textAlign:"center",marginBottom:"20px"}}>
            Are you sure,want to Delete?
          </Typography>
          <Box sx={{display:"flex",justifyContent:"space-between",}}>
            <Button variant='contained' color="error" onClick={handleClose}>cancel</Button>
            <Button variant='contained' color="success" onClick={handleDelete}>yes,delete</Button>
          </Box>
        </Box>
      </Modal>
    </div>
</>
  );
}