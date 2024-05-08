import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);
    

    useEffect(()=>{
        axios.get('http://localhost:5555/')
        .then(res=>setData(res.data))
        .catch(err=> console.log(err))
    },[])

    const handleDelete = (id)=>{
        axios.delete('http://localhost:5555/delete/' +id)
        .then(res=>{
            window.location.reload();
        })
        .catch(err =>console.log(err))
    }
  return (
    <>
        <div className='d-flex bg-primary justify-content-center align-items-center'>
            <div className='w-100 bg-white p-3'>
                <div className='d-flex justify-content-start'>
                    <Link to='/create' className='btn btn-success'>Create</Link>
                </div>
                <table className='table'>
                    <thead> 
                        <tr>
                            <th>SrNo</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>ContactNo</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((users, index)=>{
                                return <tr key={index}>
                                    <td>{users.SrNo}</td>
                                    <td>{users.FirstName}</td>
                                    <td>{users.LastName}</td>
                                    <td>{users.Age}</td>
                                    <td>{users.Email}</td>
                                    <td>{users.ContactNo}</td>
                                    <td>
                                    {/* <Link to={`/read/${users.SrNo}`} className='btn btn-sm btn-info'>Read</Link> */}
                                    
                                    <Link to={`/edit/${users.SrNo}`}  className='btn btn-primary btn-sm mx-2'>Edit</Link>

                                    <button onClick={()=> handleDelete(users.SrNo)} className='btn btn-danger btn-sm'>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Home

