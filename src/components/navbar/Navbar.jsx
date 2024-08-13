import React from 'react'
import "./navbar.css"
import Logo from './Logo1.png'
import Logosss from "../Home/carlogosss.gif"


export default function Navbar() {
  return (
    <>
   <div id='nav_rentals'>
    <h2 className="logo_nav"><a href='/'><img src={Logo} /></a></h2>
    <div className="navigations">
        <a href="/home">HOME</a>
        <a href="/detailing">OUR CARS</a>
       
        <a href="/listing">LISTING</a>
        <a href="/aboutus">ABOUT US</a>
        <a href="/contact-us">CONTACT</a>
    </div>
        <a href='/login'><button className="bthLogin-popups">Login</button></a>
        </div>

    </>
  )
}
