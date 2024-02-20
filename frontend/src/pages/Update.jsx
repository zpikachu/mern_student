import React, { useState,useEffect } from 'react'
import Updateform from '../Components/UpdateForm'
import { useParams } from 'react-router-dom'
import Axios from 'axios';
export default function Update() {

    let params = useParams();
    let UserId = params.id;
    const [selectStudent, setSelectStudent] = useState({name:'',phone:'',email:'',address:'',Class:'',division:''}); // Initialize with null instead of an empty object

    useEffect(() => {
        Axios.get(`http://localhost:7000/api/student/getSingleStudent/${UserId}`)
            .then((res) => {
                setSelectStudent(res.data.student);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [UserId]); 
  return (
    <div>
      <Updateform selectStudent={selectStudent} setSelectStudent={setSelectStudent}/>
    </div>
  );
}
