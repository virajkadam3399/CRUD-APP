import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Read = () => {

    const {id} = useParams();
    const [user, setUser]= useState([])

    useEffect(()=>{
        axios.get("http://localhost:5555/read/" +id)
        .then(res => {
            console.log(res)
            setUser(res.data[0]);
        })
        .catch(err => console.log(err))
    },[])

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <div className='p-2'>
            <h2>User Detail</h2>
            <h4>Sr No : {user.SrNo}</h4>
            <h4>First Name : {user.FirstName}</h4>
            <h4>Last Name : {user.LastName}</h4>
            <h4>Age : {user.Age}</h4>
            <h4>Email : {user.Email}</h4>
            <h4>Contact No : {user.ContactNo}</h4>
            </div>

            <Link to="/" className="btn btn-primary m-2">Back</Link>
            <Link to={`/edit/${user.SrNo}`} className='btn btn-info'>Edit</Link>
        </div>
    </div>
  )
}

export default Read