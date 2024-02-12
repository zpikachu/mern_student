import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
  return (
    <>
    <h1 style={{textAlign:"center"}}>Student Info</h1>
    <TableContainer>
      <Table >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">name</StyledTableCell>
            <StyledTableCell align="center">model</StyledTableCell>
            <StyledTableCell align="center">price</StyledTableCell>
            <StyledTableCell align="center">quantity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow >
              <StyledTableCell align="center">q</StyledTableCell>
              <StyledTableCell align="center">q</StyledTableCell>
              <StyledTableCell align="center">q</StyledTableCell>
              <StyledTableCell align="center">q</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Link to={'/insert'}><Button variant="contained" sx={{marginTop:"100px"}}fullWidth>
      Edit
      </Button></Link>
    </>
  );
}