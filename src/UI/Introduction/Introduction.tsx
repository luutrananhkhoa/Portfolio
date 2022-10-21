import React from 'react'
import './Introduction.scss';

const Introduction:React.FC = () => {
  return (
    <div className="main">
        <h1>Xin chao,</h1>
        <h1>I'm <span>Luu Tran Anh Khoa</span></h1>
        <p>UIT K14 | Web Developer | Photographer</p>
        <a target="_blank" href="https://github.com/luutrananhkhoa">My resume</a>
    </div>
  )
}

export default Introduction