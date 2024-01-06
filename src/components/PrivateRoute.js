import React from 'react'
import { getToken } from '../utils'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const token = getToken()

  if (!token) {
    return <Navigate to="/account/" />
  }
  return children
}

export default PrivateRoute