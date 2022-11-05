import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import logo from './logo.png'
import './Navbar.css'

export default function Navbar() {

  return (
    <div className='navbar' style={{display:'flex',background:'#067B97',position:'sticky'}}>
      <img src={logo} className='nav-logo'/>
      <NavLink className='nav-content' style={{margin:'15px',marginLeft:'5px',cursor:'pointer',textDecoration:'none',color:'black'}} to='/'><strong>Homepage</strong></NavLink>
      <NavLink className='nav-content' style={{margin:'15px',cursor:'pointer',textDecoration:'none',color:'black'}} to='/posts'><strong>Post</strong></NavLink>
      <NavLink className='nav-content' style={{margin:'15px',cursor:'pointer',textDecoration:'none',color:'black'}} to='/about'><strong>About</strong></NavLink>
    </div>
  )
}
