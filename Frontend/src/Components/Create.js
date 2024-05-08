import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [values, setValues] = useState({
        FirstName :'',
        LastName : '',
        Age : '',
        Email : '',
        ContactNo : ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:5555/user', values)
        .then(res=>{
            console.log(res);
            navigate('/');
        })
        .catch(err =>console.log(err))
    }


  return (
    <>
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form action="" onSubmit={handleSubmit}>
                    <h1>Add User</h1>
                    <div className='mb-2'>
                        <label htmlFor="">Firstname</label>
                        <input type="text" placeholder='Enter your firstname'  className='form-control' onChange={e => setValues({...values, FirstName: e.target.value})}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Lastname</label>
                        <input type="text" placeholder='Enter your lastname'  className='form-control' onChange={e => setValues({...values, LastName : e.target.value})}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter your age'  className='form-control' onChange={e=> setValues({...values, Age:e.target.value})}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter your email'  className='form-control' onChange={e=>setValues({...values,Email:e.target.value})}/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Contact No</label>
                        <input type="text" placeholder='Enter your contact no'  className='form-control' onChange={e=> setValues({...values,ContactNo:e.target.value})}/>
                    </div>

                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Create