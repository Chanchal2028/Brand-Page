import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
        <div className="logo">
          <img src="../images/brand_logo.png" alt="" />
        </div>
        <ul>
          <li href="#">MENU</li>
          <li href="/location">LOCATION</li>
          <li href="/about">ABOUT</li>
          <li href="/contact">CONTACT</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navbar