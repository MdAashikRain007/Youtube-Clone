import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import Automation from '../../assets/Automobile.png'
import Blog from '../../assets/Blog-icon.png'
import Entertainment from '../../assets/Entertainment.png'
import Game from '../../assets/Game-icon.png'
import Music from '../../assets/Music-icon.png'
import Sport from '../../assets/Sports-icon.png'
import News from '../../assets/News-icon.png'
import Tech from '../../assets/Technology.png'
import Tseriese from '../../assets/T.png'
import Carry from '../../assets/Carry-logo.jpg'
import Apna from '../../assets/Apna-college-logo.jpg'
import sony from '../../assets/sony-logo.png'
import Sheryians from '../../assets/Sheryians-logo.jpeg'

function Sidebar({sidebar,category,setCategory}) {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="sortcut-links">
            <div className={`side-link  ${category===0?"active":""}`} onClick={()=>setCategory(0)} >
                <img src={home} alt="home" /><p>Home</p>
            </div>
            <div className={`side-link  ${category===20?"active":""}`} onClick={()=>setCategory(20)}  >
                <img src={Game} alt="Game" /><p>Gaming</p>
            </div>
            <div className={`side-link  ${category===2?"active":""}`} onClick={()=>setCategory(2)}  >
                <img src={Automation} alt="Automation" /><p>Automobile</p>
            </div>
            <div className={`side-link  ${category===17?"active":""}`} onClick={()=>setCategory(17)}  >
                <img src={Sport} alt="Sport" /><p>Sports</p>
            </div>
            <div className={`side-link  ${category===24?"active":""}`}onClick={()=>setCategory(24)}  >
                <img src={Entertainment} alt="Entertainment" /><p>Entertainment</p>
            </div>
            <div className={`side-link  ${category===28?"active":""}`}onClick={()=>setCategory(28)}  >
                <img src={Tech} alt="Technology" /><p>Technology</p>
            </div>
            <div className={`side-link  ${category===10?"active":""}`}onClick={()=>setCategory(10)}  >
                <img src={Music} alt="Music" /><p>Music</p>
            </div>
            <div className={`side-link  ${category===22?"active":""}`}onClick={()=>setCategory(22)}  >
                <img src={Blog} alt="Blogs" /><p>Blogs</p>
            </div>
            <div className={`side-link  ${category===25?"active":""}`} onClick={()=>setCategory(25)}  >
                <img src={News} alt="News" /><p>News</p>
            </div>
        </div>
        <hr />
        <div className="subscriber-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={Apna} alt="Apna College" /><p>Apna College</p>
            </div>
            <div className="side-link">
                <img src={Sheryians} alt="Sheryians" /><p>Sheryians Cosing School</p>
            </div>
            <div className="side-link">
                <img src={Carry} alt="Carry" /><p>Carry Minaty</p>
            </div>
            <div className="side-link">
                <img src={Tseriese} alt="Tseriese" /><p>T seriese</p>
            </div>
            <div className="side-link">
                <img src={sony} alt="sony" /><p>Sony TV</p>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
