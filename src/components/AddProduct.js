import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function() {
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [category,setCategory]=useState("")
    const [company,setCompany]=useState("")
    const [error,seterror]=useState(false)
   
    const print= async()=>{
        if(!name || !price || !company || !category){
            seterror(true)
            return false
        }
console.log(name,price,category)
const userId=JSON.parse(localStorage.getItem('user'))._id
let result= await fetch("http://localhost:7000/add-product",{
    method:"post",
    body:JSON.stringify({ name,price,category,userId,company}),
    headers:{"content-Type":"application/json"}
})
result= await result.json()
console.log(result)
console.log("hii")
navigate('/productlist')
    }
  return (
    <div className='one'>
        <div ><h2 id="two">ADD PRODUCT</h2>
    <input className='inputbox' value={name} type='text' onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Product Name'></input>
    { error && !name &&<p className='err1'>Enter valid Name</p>}
    
   
    <input className='inputbox' type='text' onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter price'></input>
    { error && !price &&<p className='err1'>Enter valid value</p>}
        
<input className='inputbox' type='text'  onChange={(e)=>{setCategory(e.target.value)}} placeholder='Type category here'></input>
{ error && !category &&<p className='err1'>Enter valid value</p>}
    
<input className='inputbox' type='text'  onChange={(e)=>{setCompany(e.target.value)}} placeholder='Type company name'></input> 
{ error && !company &&<p className='err1'>Enter valid value</p>}

   
    <button type='button' onClick={print} className='btn'>Click Here</button>
    
    </div>
 

</div>
  )
  }