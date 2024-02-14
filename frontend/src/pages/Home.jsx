import React from 'react'
import Table from '../Components/Table'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Student Information</h1>
      <Table/>
      <Link to={'/student_form'}>
        <Button variant="contained" sx={{marginTop:"100px"}}fullWidth>
      insert
        </Button>
      </Link>
    </div>
  )
}