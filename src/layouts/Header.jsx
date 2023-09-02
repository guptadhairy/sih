import React from 'react'
import "../layouts/header.css"
import logo from "../assets/images/logo.jpg"
import { Link } from 'react-router-dom'
import {FcSearch} from 'react-icons/fc'

const Header = () => {
  return (
    <div className='header'>
      <div className='left'>
        <img src={logo} alt='logo' />
      </div>
      <nav className='navbar'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/add'}>Add Book</Link>
        <Link to={'/review'}>Review</Link>
      </nav>
      <div className='search'>
        <button><FcSearch /></button>
        <input type='text' placeholder='Search' />
      </div>
    </div>
  )
}

export default Header
