import React from 'react'
import "./Navbar.css";
import logo from "../../assets/logo.png"

export const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} className='logo' alt="logo" />
        <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}
