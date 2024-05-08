import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const Update = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:5555/read/" +id)
        .then(res => {
            console.log(res)
            setValues({...values, FirstName: res.data[0].FirstName, LastName: res.data[0].LastName, Age: res.data[0].Age, Email: res.data[0].Email, ContactNo: res.data[0].ContactNo})
        })
        .catch(err => console.log(err))
    },[])

    const [values, setValues]=useState({
        FirstName : "",
        LastName : "",
        Age : "",
        Email : "",
        ContactNo : ""
    })

    const handleUpdate = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:5555/update/' +id, values)
        .then(res =>{
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));
    }


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form action="" onSubmit={handleUpdate}>
            <h1>Update User</h1>
            <div className='mb-2'>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Enter First Name' value={values.FirstName} className='form-control' onChange={e =>setValues({...values, FirstName: e.target.value})}/>
                </div>

              <div className='mb-2'>
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Enter Last Name' value={values.LastName} className='form-control' onChange={e =>setValues({...values, LastName: e.target.value})}/>
              </div>

              <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder='Enter Your Age' value={values.Age} className='form-control' onChange={e =>setValues({...values, Age: e.target.value})}/>
              </div>

              <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Enter Your Email' value={values.Email} className='form-control' onChange={e =>setValues({...values, Email: e.target.value})}/>
              </div>
      
              <div className='mb-2'>
                    <label htmlFor="">Contact No</label>
                    <input type="text" placeholder='Enter Your Contact No' className='form-control' value={values.ContactNo} onChange={e =>setValues({...values, ContactNo: e.target.value})}/>
              </div>

              <button className='btn btn-success'>Update</button>

            </form>
        </div>
    </div>
  )
}

export default Update