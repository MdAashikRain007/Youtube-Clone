import React from 'react'
import './Navbar.css'
import menu from '../../assets/Menu.png'
import logo from '../../assets/Youtube-logo.png'
import Searchs from '../../assets/Search-icon.png'
import Notifiction from '../../assets/Notification.png'
import Profile from '../../assets/Profile.jpg'
import plush from '../../assets/plush-icon.png'
import { Link } from 'react-router-dom'

function Navbar({setsidebar}) {
  return (
   <nav className='flex-div'>
    <div className="nav-left flex-div" >
        <img className='menu-icon'  src={menu} alt="Menu" />
       <Link to="/"> <img  className='logo' src={logo} alt="Logo" /></Link>
    </div>
    <div className="nav-middle flex-div">
        <input type="text" placeholder='Search'/>
        <img className='Search' src={Searchs} alt="Search-icon" />
    </div>
    <div className="nav-right flex-div">
        <button className='nav-btn'><img src={plush} alt="plush" />Create</button>
        <img  className='Noti' src={Notifiction} alt="Notification" />
        <img className='User-icon' src={Profile}alt="profile" />
    </div>

   </nav>
  )
}

export default Navbar
