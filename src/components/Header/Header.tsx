import React from 'react'
import "./Header.scss";

const Header:React.FC = () => {
  return (
    <div className="header">
        <div className="menu">
          <a href="#projects">Projects</a>
          <a href="">About</a>
          <a href="">Experience</a>
          <a href="">Contact</a>
        </div>
    </div>
  )
}

export default Header