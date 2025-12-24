import React from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/logo.png'
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div>
        <nav className={styles.navbar}>
      
      {/* Logo */}
      <div className={styles.logo}>
        <img src={logo} alt="IFAS Logo" />
      </div>

      <ul className={styles.links}>
        <li>Home </li>
        <li>Courses</li>
        <li>About Us</li>
        <li>FAQ</li>
        <li>Contact Us</li>
      </ul>

      <div className={styles.icons}>
        <FaShoppingCart color='black' />
        <FaUser color='black'/>
        <FaSearch  color='black'/>
        
      </div>

      <button className={styles.signup}>Signup</button>
    </nav>
    </div>
  )
}

export default Navbar