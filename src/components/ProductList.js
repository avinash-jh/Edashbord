import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function ProductList() {
    const [result,setResult]=useState([])
    
    useEffect(()=>{
print()
    },[])
    async function print(){
        let result1= await fetch('http://localhost:7000/products' )
         result1=await result1.json()
         if(result1.error!="nodata")
            setResult(result1)
         else
         setResult([])
         console.log(result1)
        
    }
    console.log(result) 
    const deleteproduct= async(id)=>{
        let result1= await fetch(`http://localhost:7000/products/${id}`,{ 
        method:"Delete"
    
     } )
     result1=result1.json()
     if(result1){
        alert("record deleted")
     }
}
const searchHandler=async(e)=>{
    let key=e.target.value
    let result2=await fetch(`http://localhost:7000/search/${key}`)
    result2=await result2.json()
    if(result2){
        setResult(result2)

    }
    
}

  return (
    <div className='product-list'>
       
<h2>Product Lis</h2>
<input className='three'  onChange={searchHandler} placeholder="enter text to search" ></input>
<ul >
    <li>S.No.</li>
    <li>Name</li>
    <li>Price</li>
    <li>category</li>
    <li>company</li>
    <li>operation</li>

</ul>
{
    result.map((item,index)=>
        <ul >
    <li>{index+1}</li>
    <li>{item.name}</li>
    <li>{item.price}</li>
    <li>{item.category}</li>
    <li>{item.company}</li>
    <li><button onClick={()=>{deleteproduct(item._id)}}>Delete</button>
<Link to={"/update/"+item._id}>Update</Link>
</li>
</ul>
    )
    

}
    </div>
  )
}
