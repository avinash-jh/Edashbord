import React from 'react'
import { useState,useEffect } from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
export default function UpdateProduct() {
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [category,setCategory]=useState("")
    const [company,setCompany]=useState("")
    const [data,setData]=useState([])
    const param=useParams()
    useEffect(()=>{
        filldata()
    },[])
    async function filldata(){
        let result1= await fetch(`http://localhost:7000/products/${param.id}`)
        result1=await result1.json()
        setName(result1.name)
        setCategory(result1.category)
        setPrice(result1.price)
        setCompany(result1.company)
    }
    const print=async()=>{
console.log(name,price)
let result=await fetch(`http://localhost:7000/product/${param.id}`,{
    method: "put",
    body:JSON.stringify({name,price,category,company}),
    headers:{'Content-Type':"application/json"}

})
result=await result.json()
console.log(result)
navigate("/productlist")
    }
  return (
    <div className='one'>
        <div ><h2 id="two">Update PRODUCT</h2>
    <input className='inputbox' value={name} type='text' onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Product Name'></input>
    
    
   
    <input className='inputbox' value={price} type='text' onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter price'></input>
    
        
<input className='inputbox' type='text' value={category}  onChange={(e)=>{setCategory(e.target.value)}} placeholder='Type category here'></input>

    
<input className='inputbox' type='text' value={company}  onChange={(e)=>{setCompany(e.target.value)}} placeholder='Type company name'></input> 


   
    <button type='button' onClick={print} className='btn'>Update</button>
    
    </div>
 

</div>
  )
  }
