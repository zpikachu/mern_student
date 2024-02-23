import React, { useState,useEffect } from 'react'
import Updateform from '../Components/UpdateForm'
import { useParams } from 'react-router-dom'
import Axios from 'axios';
export default function Update() {

    let params = useParams();
    let UserId = params.id;
    const [selectStudent, setSelectStudent] = useState(null);

    
    const handleChange = (event)=>{
      setSelectStudent({...selectStudent,[event.target.name]:event.target.value});
    };




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
      <Updateform 
      selectStudent={selectStudent}
      handleChange={handleChange}
      />
    </div>
  );
}
