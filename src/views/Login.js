import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { post, setToken } from '../utils'
import { toast } from 'react-toastify';

const Login = () => {

  const [data, setData] = useState({
    username: "test@test.com",
    password: "123"
  })

  const navigate = useNavigate()

  const updateData = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    const form_data = new FormData()
    Object.entries(data).map(([key, value]) => form_data.append(key, value))
    post("/api/token/", form_data)
    .then((resp) => {
      console.log(resp)
      setToken(resp?.data?.access)
      navigate('/product_detail/')
      toast.success("Logged In Successfully")
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
            <h4 className='text-center'>Login</h4>
            <hr />
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='username' value={data?.username} onChange={(e) => updateData(e)} />
            </div>
            <div>
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"  name='password' value={data?.password} onChange={(e) => updateData(e)} />
            </div>
            <div className="my-4">
              <a className="btn-main text-center d-block" onClick={() => handleSubmit()}>Submit</a>
            </div>
            <p>Don't have an account? <Link to="/account/sign-up/">Create</Link></p>
          </form>
        </div>
      </div>        
    </div>
  )
}

export default Login