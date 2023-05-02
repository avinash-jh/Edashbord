import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

export default function PrivateComponenet() {
    const auth=localStorage.getItem('user')
  return (auth?<div><Outlet /></div>:<Navigate to='/signup'></Navigate>
  )  
  
}
