import React from 'react'
import { useState } from 'react'
import { Navigate, json, useNavigate, } from 'react-router-dom'
import { useEffect } from 'react'

export default function Signup() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,seterror]=useState(false)

    const navigate=useNavigate()
    // const print=()=>{
    //     console.log(name)
  
    // }
    
    useEffect(()=>{
      const auth=localStorage.getItem('user')
      if(auth){
        navigate('/login')
      }
    })
    const print=async()=>{
      if(!name || !email || !password){
        seterror(true)
        return false
    }
        console.log(name) 
        let result= await fetch('http://localhost:7000/register',{
          method:'post',
          body:JSON.stringify({ name,email,password}),
          headers:{'content-Type':'application/json'}
        })
        result= await result.json()
        console.log(result)
        localStorage.setItem("user",JSON.stringify(result))
        if (result.email){
          navigate('/login')
        }
    }
  return (
    <div className='one'><h2>Register</h2>
    <input className='inputbox' value={name} type='text' onChange={(e)=>{setName(e.target.value)}} placeholder='Enter your Name'></input>
    { error && !name &&<p className='err1'>Enter valid Name</p>}
    
    <input className='inputbox' type='text' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email Id'></input>
    { error && !name &&<p className='err1'>Enter valid Name</p>}
    
<input className='inputbox' type='password'  onChange={(e)=>{setPassword(e.target.value)}} placeholder='Type Password here'></input>
{ error && !name &&<p className='err1'>Enter valid Name</p>}
    
    <button type='button' onClick={print} className='btn'>SignUp</button>
    </div>
  )
}
