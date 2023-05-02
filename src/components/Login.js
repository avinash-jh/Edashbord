import React from "react";
import { useState,useEffect } from "react";
import { useNavigate,Navigate } from "react-router-dom";
export default function Login(){
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const auth=localStorage.getItem('user')
    useEffect(()=>{
        const auth=localStorage.getItem('user')
        if(auth){
          navigate('/')
        }
      })
    const print=async()=>{
        console.log(email) 
        let result= await fetch('http://localhost:7000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{'content-Type':'application/json'}
          })
          result= await result.json()
          console.log(result)
         
          if (result){
            localStorage.setItem("user",JSON.stringify(result))
            console.log("hii")
            navigate('/')
          }
          else{
            alert("hii")
          }
        }
    return(
        <div className="one">
<h1>Login</h1>
<input className='inputbox' type='text' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email Id'></input>
   
<input className='inputbox' type='password'  onChange={(e)=>{setPassword(e.target.value)}} placeholder='Type Password here'></input>

    <button type='button' onClick={print} className='btn'>Login</button>
        </div>
    )
}