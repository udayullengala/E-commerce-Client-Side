import React, { useState } from 'react'
// import { postReq } from '../utils'
import { useNavigate } from 'react-router-dom'
import { post, setToken } from '../utils'
import { toast } from 'react-toastify';

const SignUp = () => {

    const [userData, setuserData] = useState({
        first_name: "",
        password: "",
        username: ""
    })

    const navigate = useNavigate()

    const updateUserData = (e) => {
        setuserData({...userData, [e.target.name]: e.target.value})
        
    }

    console.log(userData, "userData")

    const createUser = () => {
        const form_data = new FormData()

        Object.entries(userData).map(([key, value]) => form_data.append(key, value))
        post("/register_user/", form_data)
        .then((data) => {
            console.log(data)
            setToken(data.access)
            navigate('/')
            toast.success("Account created successfully")
            toast.success("Logged In")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='container-fluid bg-light py-5'>
            <div className="row">
                <div className="d-flex justify-content-center align-items-center">
                <form className='bg-white' style={{width: '400px', maxWidth: '90%', border: '1px solid #ccc', borderRadius: '5px', padding: '30px 20px'}}>
                    <h4 className='text-center'>Sign-Up</h4>
                    <hr />
                    <div className="mb-3">
                        <label htmlFor="first_name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="first_name" name='first_name' onChange={(e) => updateUserData(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="username" name='username' aria-describedby="emailHelp" onChange={(e) => updateUserData(e)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' onChange={(e) => updateUserData(e)} />
                    </div>
                    <div className="text-center mt-4">
                        <a className="btn-main d-block" onClick={() => createUser()}>Sign-Up</a>
                    </div>
                </form>
                </div>  
            </div>        
        </div>
    )
}

export default SignUp