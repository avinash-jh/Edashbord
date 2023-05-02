import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {BrowserRouter,Route,Routes,LinkProps,NavLink} from 'react-router-dom'
export default function () {
  
  const auth=localStorage.getItem('user')
  const navigate=useNavigate()
  function logout(){
    localStorage.clear()
    navigate('/signup')
  }
  return (
    <div>
      
      { auth?
        <ul className='nav-ul'>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" />
               <li><NavLink  to='/'>Home</NavLink></li> 
                <li><NavLink to='/add'>Add product</NavLink></li>
               
                <li><NavLink to='/productlist'>Product List</NavLink></li>
                
               
               <li></li>
               <li><NavLink to='/profile'>Profile</NavLink></li>
              <li> <NavLink onClick={logout} to='/signup'>Logout({JSON.parse(auth).name})</NavLink></li>
                </ul>
            :<ul className='nav-ul '>
                          <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" />
              <ul className='nav-ul lg2 '>
              <li > <NavLink to='/signup'>SignUp</NavLink></li> 
               <li ><NavLink to='/login'>Login</NavLink></li></ul>
               
              </ul>
      }    
       
    </div>
  )
}
