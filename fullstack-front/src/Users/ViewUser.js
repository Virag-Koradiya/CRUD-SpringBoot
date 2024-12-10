import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ViewUser() {

    let navigate = useNavigate();

    const {id} = useParams();

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    });

    const{name,username,email} = user;

    useEffect(()=>{
        loadUser();
    },[])

    // const onSubmit=async (e)=>{
    //     e.preventDefault();
    //     // await axios.put(`http://localhost:8080/user/${id}`,user);
    //     navigate("/");
    // };

    const loadUser = async()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data);
    }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>
                View User
            </h2>
            <form 
            // onSubmit={(e)=>onSubmit(e)}
            >
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                    Name
                </label>
                <input 
                    type={"text"}
                    className="form-control"
                    placeholder='Ex. John Doe'
                    name='name' 
                    value={user.name}
                    
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='Username' className='form-label'>
                    Usename
                </label>
                <input 
                    type={"text"}
                    className="form-control"
                    placeholder='Ex. johnDoe18'
                    name='username' 
                    value={user.username}
                    
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>
                    Email
                </label>
                <input 
                    type={"text"}
                    className="form-control"
                    placeholder='Ex. john@gmail.com'
                    name='email' 
                    value={user.email}
                   
                />
            </div>
            <Link className='btn btn-outline-primary'
                    to={`/edituser/${user.id}`}    
            >
                Edit
            </Link>
            <Link to='/' className='btn btn-outline-primary'>
                Home
            </Link>
            </form>
        </div>
      </div>
    </div>
  )
}
