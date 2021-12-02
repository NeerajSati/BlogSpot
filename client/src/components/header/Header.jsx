import React from 'react'
import './header.css'
import bg from '../../img/bg.jpg'
function Header() {
    return (
        <div className="header">
        
        <img className="headerImg"
        src={bg} 
        alt="Background"></img>
        <div className="headerTitle">
        <span className="headerTitleBg">Blogspot</span>
        <span className="headerTitleSm">Write a blog!</span>
        </div>
        </div>

    )
}

export default Header
