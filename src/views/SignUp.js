import React, { useState } from 'react'
import { BASE_URL } from '../verify'

const SignUp = () => {

    const [userData, setuserData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password1: "",
        password2: "",
        username: ""
    })

    const updateUserData = (e) => {
        if (e.target.name === "email") {
            setuserData({...userData, [e.target.name]: e.target.value, username: e.target.value})
        } else {
            setuserData({...userData, [e.target.name]: e.target.value})
        }
        
    }

    console.log(userData, "userData")

    const createUser = () => {
        const form_data = new FormData()

        Object.entries(userData).map(([key, value]) => form_data.append(key, value))
        fetch(`${BASE_URL}/api/auth/register/`, {
            method: "POST",
            body: form_data
        })
        .then((resp) => {
            console.log(resp)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='container py-5'>
        <div className="row">
            <div className="d-flex justify-content-center align-items-center">
            <form style={{width: '485px', maxWidth: '90%', border: '1px solid #ccc', borderRadius: '5px', padding: '30px 20px'}}>
                <h4 className='text-center'>Sign-Up</h4>
                <hr />
                <div class="mb-3">
                    <label for="first_name" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="first_name" name='first_name' onChange={(e) => updateUserData(e)} />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={(e) => updateUserData(e)} />
                </div>
                <div className='mb-3'>
                    <label for="password1" class="form-label">Password</label>
                    <input type="password1" class="form-control" id="password1" name='password1' onChange={(e) => updateUserData(e)} />
                </div>
                <div>
                    <label for="password2" class="form-label">Confirm Password</label>
                    <input type="password2" class="form-control" id="password2" name='password2' onChange={(e) => updateUserData(e)} />
                </div>
                <div className="text-center mt-4">
                    <a class="btn-main" onClick={() => createUser()}>Sign-Up</a>
                </div>
            </form>
            </div>  
        </div>        
        </div>
    )
}

export default SignUp