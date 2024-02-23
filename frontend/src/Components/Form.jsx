import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link }from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate =useNavigate();
  const [studentInfo,setStudentInfo]=useState('');
  const [studentProfile,setStudentProfilePic]=useState(null);
  const handleChange = (e)=>{
    setStudentInfo({...studentInfo,[e.target.name]:e.target.value})
  };

  const handleFileChange=(e)=>{
    setStudentProfilePic(e.target.files[0]);
  }
  console.log(studentInfo)
  console.log(studentProfile)
  const handleSubmit = () => {
    const formData =new FormData();
    formData.append("fname",studentInfo.fname);
    formData.append("fphone",studentInfo.fphone);
    formData.append("femail",studentInfo.femail);
    formData.append("faddress",studentInfo.faddress);
    formData.append("fprofile",studentProfile);
    formData.append("fclass",studentInfo.fclass);
    formData.append("fdivision",studentInfo.fdivision);
    Axios.post('http://localhost:7000/api/student/insertStudent',formData)
    .then(async(response)=>{
      console.log(response);
      await navigate("/");
    })
    .catch((error)=>{
      console.log(error);
    });
  };

 

  return (

        <ThemeProvider theme={defaultTheme}> 
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Insert new Student
          </Typography>
          <Box  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="fname"
                  required
                  fullWidth
                  label="Name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="phone"
                  name="fphone"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="femail"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="faddress"
                  label="Address"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                type='file'
                  fullWidth
                  name="fprofile"
                  label="Profile pic"
                  onChange={handleFileChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="fclass"
                  label="Class"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="fdivision"
                  label="Division"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3,}}
              onClick={handleSubmit}
            >
              insert
            </Button>
            <Link to={'/'}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              view Product
            </Button>
            </Link>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>


  );
}