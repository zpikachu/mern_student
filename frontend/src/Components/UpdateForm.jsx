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
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp({selectStudent,setSelectStudent}) {

  const navigate =useNavigate();

    const handleChange = (event)=>{
        setSelectStudent({...selectStudent,[event.target.name]:event.target.value});
      };


  const handleSubmit = () => {
    Axios.put(`http://localhost:7000/api/student/updateStudent/${selectStudent?._id}`,selectStudent)
    .then(async(response)=>{
        await navigate("/");
    })
    .catch((error)=>{
        console.log(error)
    })
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
          Update Student
          </Typography>
          <Box  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  label="Name"
                  onChange={handleChange}
                  value={selectStudent?.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Phone"
                  name="phone"
                  onChange={handleChange}
                  value={selectStudent?.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  value={selectStudent?.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  onChange={handleChange}
                  value={selectStudent?.address}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Class"
                  label="Class"
                  onChange={handleChange}
                  value={selectStudent?.Class}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="division"
                  label="Division"
                  onChange={handleChange}
                  value={selectStudent?.division}
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
              Update
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