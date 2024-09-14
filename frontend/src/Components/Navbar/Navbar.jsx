import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState("shop")

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {/* <li onClick={() => {
            setMenu("test")
        }}>{menu === "test" ? <Link style={
          { textDecoration: 'none', padding: '0 20px', borderRadius: '15px', background: 'red', color: 'white'
          }} 
          to='/test'>Test</Link> : <>Test</>} </li> */}
        <li onClick={() => {
            setMenu("shop")
        }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Shop</Link> {menu === "shop" ? <hr/> : <></>}</li>
        <li onClick={() => {
            setMenu("men")
        }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/men'>Men</Link> {menu === "men" ? <hr/> : <></>}</li>
        <li onClick={() => {
            setMenu("women")
        }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/women'>Women</Link> {menu === "women" ? <hr/> : <></>}</li>
        <li onClick={() => {
            setMenu("kids")
        }}><Link style={{ textDecoration: 'none', color: 'black' }} to='/kids'>Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
        <Link style={{ textDecoration: 'none' }} to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
