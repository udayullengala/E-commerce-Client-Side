import React from 'react'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <div className='container py-5'>
      <div className="row">
        <div className="d-flex justify-content-center align-items-center">
          <form style={{width: '485px', maxWidth: '90%', border: '1px solid #ccc', borderRadius: '5px', padding: '30px 20px'}}>
            <h4 className='text-center'>Login</h4>
            <hr />
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div>
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div className="text-center mt-4">
              <a class="btn-main">Submit</a>
              <p className='pt-2'>Don't have an account? <Link to="/account/sign-up/">Create</Link></p>
            </div>
          </form>
        </div>  
      </div>        
    </div>
  )
}

export default Account